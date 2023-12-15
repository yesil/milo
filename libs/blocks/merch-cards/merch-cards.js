import '../../deps/merch-cards.js';
import '../../deps/merch-card.js';
import '../../deps/commerce.js';
import '../merch/merch.js';
import '../merch-card/merch-card.js';
import { createTag, decorateLinks, getConfig, loadBlock, loadStyle } from '../../utils/utils.js';
import { replaceText } from '../../features/placeholders.js';

const { log } = window.lana;
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

/**
 * Removes merch cards from the DOM if they are not meant to be displayed in this merch cards block.
 * @param {*} merchCards merch-cards element
 */
export function filterMerchCards(merchCards) {
  if (!merchCards.filtered) return;
  [...merchCards.children].filter((child) => child.tagName === 'MERCH-CARD')
    .forEach((card) => {
      if (!Object.prototype.hasOwnProperty.call(card.filters, merchCards.filtered)) {
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

// eslint-disable-next-line consistent-return
export default async function main(el) {
  const startTime = new Date().getTime();
  console.log('step 1', new Date().getTime() - startTime);
  const fail = (err = '') => {
    log(`Failed to initialize merch cards: ${err}`);
    el.innerHTML = '';
    return el;
  };

  if (el.classList.length < 2) {
    return fail('Missing collection type');
  }

  const config = getConfig();
  if (!config.queryIndexCardPath) {
    return fail('Missing queryIndexCardPath config');
  }

  const { miloLibs } = getConfig();
  loadStyle(`${miloLibs}/blocks/merch/merch.css`);
  loadStyle(`${miloLibs}/blocks/merch-card/merch-card.css`);

  const attributes = { filter: 'all' };
  const settingsEl = el.firstElementChild?.firstElementChild;

  const filtered = settingsEl?.firstElementChild?.tagName === 'STRONG';

  if (!filtered) {
    console.log('step 2', new Date().getTime() - startTime);
    await Promise.all([
      import(`${miloLibs}/features/spectrum-web-components/dist/theme.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/button.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/search.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/overlay.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/menu.js`),
      import(`${miloLibs}/features/spectrum-web-components/dist/popover.js`),
    ]);
    console.log('step 3', new Date().getTime() - startTime);
  }

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

  const merchCards = createTag('merch-cards', attributes);

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

  let cardsData;
  let err;

  console.log('step 4', new Date().getTime() - startTime);
  const type = el.classList[1];
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
    return fail(err);
  }

  console.log('step 5', new Date().getTime() - startTime);

  // TODO add aditional parameters.
  const cards = cardsData.data.map(({ cardContent }) => cardContent).join('\n');
  // Replace placeholders
  merchCards.innerHTML = await replaceText(cards, config);
  const autoBlocks = await decorateLinks(merchCards).map(loadBlock);
  await Promise.all(autoBlocks);
  const blocks = [...merchCards.querySelectorAll(':scope > div')].map(loadBlock);
  await Promise.all(blocks);
  filterMerchCards(merchCards);
  merchCards.append(...literalSlots);
  console.log('step 6', new Date().getTime() - startTime);
  // re-order cards, update card filters
  [...merchCards.children].filter((card) => card.tagName === 'MERCH-CARD').forEach((merchCard) => {
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
  console.log('step 7', new Date().getTime() - startTime);
  const appContainer = el.closest('main > div.section')?.firstElementChild;
  if (appContainer?.classList.contains('app')) {
    merchCards.classList.add('four-merch-cards', type);
    appContainer.appendChild(merchCards);
    el.remove();
  } else {
    if (!el.closest('main > .section[class*="-merch-card"]')) {
      el.closest('main > .section').classList.add('four-merch-cards', type);
    }
    el.replaceWith(merchCards);
  }
  return merchCards;
}
