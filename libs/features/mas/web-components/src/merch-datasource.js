import { AEM } from './aem.js';
import { createTag } from './utils.js';

const ATTR_AEM_BUCKET = 'aem-bucket';

const cardContent = {
    catalog: {
        name: 'catalog',
        title: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        prices: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        description: {
            tag: 'div',
            slot: 'body-xs',
        },
        ctas: { size: 'l' },
    },
    ah: {
        name: 'ah',
        title: {
            tag: 'h3',
            slot: 'heading-xxs',
        },
        prices: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        description: {
            tag: 'div',
            slot: 'body-xxs',
        },
        ctas: { size: 's' },
    },
    'ccd-action': {
        name: 'ccd-action',
        title: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        prices: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        description: {
            tag: 'div',
            slot: 'body-xs',
        },
        ctas: { size: 'l' },
    },
};

async function parseMerchCard(fragementData, appendFn, merchCard) {
    const item = fragementData.fields.reduce(
        (acc, { name, multiple, values }) => {
            acc[name] = multiple ? values : values[0];
            return acc;
        },
        { id: fragementData.id },
    );
    item.path = item.path;
    item.model = item.model;

    const { variant = 'ccd-action' } = item;
    merchCard.setAttribute('variant', variant);
    const cardMapping = cardContent[variant];
    item.icon?.forEach((icon) => {
        const merchIcon = createTag('merch-icon', {
            slot: 'icons',
            src: icon,
            alt: '',
            href: '',
            size: 'l',
        });
        appendFn(merchIcon);
    });

    if (item.title) {
        appendFn(
            createTag(
                cardMapping.title.tag,
                { slot: cardMapping.title.slot },
                item.title,
            ),
        );
    }

    if (item.prices) {
        const prices = item.prices;
        const headingM = createTag(
            cardMapping.prices.tag,
            { slot: cardMapping.prices.slot },
            prices,
        );
        appendFn(headingM);
    }

    if (item.description) {
        const body = createTag(
            cardMapping.description.tag,
            { slot: cardMapping.description.slot },
            item.description,
        );
        appendFn(body);
    }

    if (item.ctas) {
        let ctas = item.ctas;
        const footer = createTag('div', { slot: 'footer' }, ctas);
        [...footer.querySelectorAll('[is="checkout-link"]')].forEach((cta) => {
            const spectrumCta = createTag('sp-button', {}, cta);
            spectrumCta.addEventListener('click', (e) => {
                e.stopPropagation();
                cta.click();
            });
            footer.appendChild(spectrumCta);
        });
        appendFn(footer);
    }
}

class FragmentCache {
    #fragmentCache = new Map();
    clear() {
        this.#fragmentCache.clear();
    }
    add(...items) {
        items.forEach((item) => {
            const { path } = item;
            if (path) {
                this.#fragmentCache.set(path, item);
            }
        });
    }
    has(path) {
        return this.#fragmentCache.has(path);
    }
    get(path) {
        return this.#fragmentCache.get(path);
    }
    remove(path) {
        this.#fragmentCache.delete(path);
    }
}
const cache = new FragmentCache();

/**
 * Custom element representing a MerchDataSource.
 *
 * @attr {string} path - fragment path
 */
export class MerchDataSource extends HTMLElement {
    /**
     * @type {import('@adobe/mas-web-components').AEM}
     */
    #aem;
    cache = cache;

    /**
     * @type {HtmlElement[]}
     */
    refs = [];

    /**
     * @type {string} fragment path
     */
    path;

    static get observedAttributes() {
        return ['source', 'path'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }

    connectedCallback() {
        const bucket =
            this.getAttribute(ATTR_AEM_BUCKET) ??
            document.querySelector('mas-studio')?.getAttribute(ATTR_AEM_BUCKET);
        this.#aem = new AEM(bucket);
        this.fetchData();
    }

    refresh(flushCache = true) {
        this.refs.forEach((ref) => ref.remove());
        this.refs = [];
        if (flushCache) {
            this.cache.remove(this.path);
        }
        this.fetchData();
    }

    async fetchData() {
        let item = cache.get(this.path);
        if (!item) {
            item = await this.#aem.sites.cf.fragments.getCfByPath(this.path);
        }
        if (item) {
            const appendFn = (element) => {
                this.parentElement.appendChild(element);
                this.refs.push(element);
            };
            parseMerchCard(item, appendFn, this.parentElement);
            return;
        }
    }
}

customElements.define('merch-datasource', MerchDataSource);
