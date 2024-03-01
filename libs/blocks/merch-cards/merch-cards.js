import { createTag, decorateLinks, getConfig, loadBlock, loadStyle } from '../../utils/utils.js';
import { replaceText } from '../../features/placeholders.js';

const DIGITS_ONLY = /^\d+$/;

const LITERAL_SLOTS = [
  'searchText',
  'filtersText',
  'sortText',
  'popularityText',
  'alphabeticallyText',
  'noResultText',
  'resultText',
  'resultsText',
  'searchResultText',
  'searchResultsText',
  'searchResultMobileText',
  'searchResultsMobileText',
  'noSearchResultsText',
  'noSearchResultsMobileText',
  'showMoreText',
];

// allows improve TBT by returning control to the main thread.
// eslint-disable-next-line no-promise-executor-return
const makePause = async (timeout = 0) => new Promise((resolve) => setTimeout(resolve, timeout));

const fail = (el, err = '') => {
  window.lana?.log(`Failed to initialize merch cards: ${err}`);
  el.innerHTML = '';
  return el;
};

/**
 * Removes merch cards from the DOM if they are not meant to be displayed in this merch cards block.
 * @param {*} merchCards merch-cards element
 */
export function filterMerchCards(merchCards, filtered) {
  [...merchCards.children].filter((child) => child.tagName === 'MERCH-CARD')
    .forEach((card) => {
      if (!Object.prototype.hasOwnProperty.call(card.filters, filtered)) {
        card.remove();
      }
    });
}

/** parse card preferences for each category filter */
export function parsePreferences(elements) {
  return [...elements].map((el) => {
    let size;
    if (el?.firstElementChild?.tagName === 'STRONG') {
      size = 'wide';
      if (el.firstElementChild.firstElementChild?.tagName === 'U') {
        size = 'super-wide';
      }
    }
    return [el.textContent?.trim(), size];
  });
}

/** Retrieve cards from query-index  */
async function fetchCardsData(config, type, el) {
  let cardsData;
  let err;
  try {
    const res = await fetch(`${config?.locale?.prefix ?? ''}${config.queryIndexCardPath}.json?sheet=${type}`);
    if (res.ok) {
      cardsData = await res.json();
    } else {
      err = res.statusText || res.status;
    }
  } catch (error) {
    err = error.message;
  }
  if (!cardsData) {
    fail(el, err);
  }
  return cardsData;
}

/** Parse andd prepare cards */
async function getCardsRoot(config, cardsData) {
  const cards = `<div>${cardsData.data.map(({ cardContent }) => cardContent).join('\n')}</div>`;
  const fragment = document.createRange().createContextualFragment(
    await replaceText(cards, config),
  );
  const cardsRoot = fragment.firstElementChild;
  await makePause();
  performance.mark('merch-cards:initCards:start');
  const allBlockEls = [...cardsRoot.querySelectorAll(':scope > div')];
  const batchSize = 2;
  for (let i = 0; i < allBlockEls.length; i += batchSize) {
    const blockEls = allBlockEls.slice(i, i + batchSize);
    await Promise.all(blockEls.map((cardEl) => Promise.all(
      decorateLinks(cardEl).map(loadBlock),
    ).then(() => loadBlock(cardEl))));
    await makePause();
  }
  performance.mark('merch-cards:initCards:end');
  performance.measure('merch-cards:initCards', 'merch-cards:initCards:start', 'merch-cards:initCards:end');
  return cardsRoot;
}

async function initMerchCards(filtered, preferences, cardsRoot) {
  if (filtered) {
    filterMerchCards(cardsRoot, filtered);
  }
  // re-order cards, update card filters
  [...cardsRoot.children].filter((card) => card.tagName === 'MERCH-CARD').forEach((merchCard) => {
    merchCard.style.display = 'none';
    const filters = { ...merchCard.filters };
    Object.keys(filters).forEach((key) => {
      const preference = preferences[key];
      if (!preference) return;
      preference
        .forEach(([cardTitle, cardSize], index) => {
          if (merchCard.title === cardTitle) {
            filters[key] = { order: index, size: cardSize };
          }
        });
    });
    merchCard.filters = filters;
  });
  return cardsRoot;
}

export default async function init(el) {
  if (el.classList.length < 2) {
    return fail(el, 'Missing collection type');
  }

  const config = getConfig();
  if (!config.queryIndexCardPath) {
    return fail(el, 'Missing queryIndexCardPath config');
  }

  const type = el.classList[1];
  const cardsData = await fetchCardsData(config, type, el);
  const cardsRootPromise = getCardsRoot(config, cardsData);

  const merchCardsDep = import('../../deps/merch-cards.js');
  let deps = [
    merchCardsDep,
    import('../merch-card/merch-card.js'),
    import('../../deps/merch-card.js'),
  ];

  const { miloLibs } = getConfig();
  const merchStyles = new Promise((resolve) => {
    loadStyle(`${miloLibs}/blocks/merch/merch.css`, resolve);
  });
  const merchCardStyles = new Promise((resolve) => {
    loadStyle(`${miloLibs}/blocks/merch-card/merch-card.css`, resolve);
  });

  const attributes = { filter: 'all', class: `${el.className}` };
  const settingsEl = el.firstElementChild?.firstElementChild;

  const filtered = settingsEl?.firstElementChild?.tagName === 'STRONG';

  deps = !filtered
    ? [
      ...deps,
      import(`${miloLibs}/features/spectrum-web-components/dist/theme.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/button.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/search.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/overlay.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/menu.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/popover.js`),
    ] : [];

  const preferences = {};

  if (settingsEl) {
    const [filter, limit = 24] = settingsEl
      .textContent.split(',').map((s) => s.trim());

    settingsEl.parentElement.remove();

    if (filtered) {
      attributes.filtered = filter;
      preferences[filter] = parsePreferences(el.querySelectorAll('p'));
    } else {
      if (filter) {
        attributes.filter = filter;
      }
      [...el.children].forEach((filterElement) => {
        const filterName = filterElement.firstElementChild.textContent?.trim();
        const elements = [...filterElement.lastElementChild.querySelectorAll('p')];
        preferences[filterName] = parsePreferences(elements);
      });
    }

    if (limit) {
      attributes.limit = limit;
    }
  }

  const literalsEl = el.lastElementChild?.firstElementChild;
  // parse literals
  const literalSlots = [];
  if (literalsEl && /filter/.test(literalsEl.querySelector('u')?.innerText)) {
    literalsEl.querySelectorAll('u').forEach((u) => {
      const text = u.innerText.trim();
      if (DIGITS_ONLY.test(text)) {
        u.outerHTML = '<span data-placeholder="resultCount"></span>';
      } else if (text === 'search') {
        u.outerHTML = '<span data-placeholder="searchTerm"></span>';
      } else if (text === 'filter') {
        u.outerHTML = '<span data-placeholder="filter"></span>';
      }
    });
    let index = 0;
    while (literalsEl.firstElementChild) {
      const literalEl = literalsEl.firstElementChild;
      let slot;
      if (literalEl.tagName === 'P') {
        slot = literalEl;
      } else if (literalEl.tagName === 'HR') {
        slot = createTag('div');
        while (literalEl.nextElementSibling && literalEl.nextElementSibling?.tagName !== 'HR') {
          slot.appendChild(literalEl.nextElementSibling);
        }
        literalEl.nextElementSibling?.remove?.();
      }
      literalEl.remove();
      if (slot) {
        slot.setAttribute('slot', LITERAL_SLOTS[index]);
        index += 1;
      }
      literalSlots.push(slot);
    }
  }

  await merchCardsDep;
  const merchCards = createTag('merch-cards', attributes);
  if (literalSlots.length > 0) {
    merchCards.append(...literalSlots);
  } else if (!merchCards.filtered) {
    merchCards.filtered = 'all';
  }

  const cardsRoot = await cardsRootPromise;
  await initMerchCards(attributes.filtered, preferences, cardsRoot);

  if (!el.matches('[class*="-merch-card"]') && !el.closest('main > .section[class*="-merch-card"]')) {
    el.closest('main > .section').classList.add('four-merch-cards', type);
  }

  merchCards.append(...cardsRoot.children);
  merchCards.displayResult = true;
  await Promise.all([merchStyles, merchCardStyles, ...deps]);
  performance.mark('merch-cards-render:start');
  el.replaceWith(merchCards);
  await merchCards.updateComplete;
  performance.mark('merch-cards-render:end');
  performance.measure('merch-cards-render', 'merch-cards-render:start', 'merch-cards-render:end');
  return merchCards;
}
