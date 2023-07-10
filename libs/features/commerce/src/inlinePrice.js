import {
  computePromoStatus,
  price,
  pricePromo,
  priceOptical,
  priceStrikethrough,
} from './deps.js';
import Log from './log.js';
import HTMLPlaceholderMixin from './placeholder.js';
import service from './service.js';
import { toBoolean } from './utils.js';

class HTMLInlinePriceElement extends HTMLSpanElement {
  static get observedAttributes() {
    return [
      'data-wcs-osi',
      'data-template',
      'data-display-recurrence',
      'data-display-per-unit',
      'data-display-tax',
      'data-promotion-code',
      'data-display-price',
      'data-perpetual',
      'data-tax-exclusive',
    ];
  }

  constructor() {
    super();
    this.log = Log.commerce.module('inlinePrice');
    this.placeholder.init();
  }

  /**
   * Returns strongly typed `this`.
   * @type {Commerce.HTMLInlinePriceElement}
   */
  get placeholder() {
    // @ts-ignore
    return this;
  }

  /**
   * Resolves associated osi via Wcs and renders price offer.
   * @param {Record<string, any>} overrides
   */
  async render(overrides = {}) {
    if (!this.isConnected) return;

    const { wcsOsi, perpetual, promotionCode, taxExclusive } = this.dataset;
    if (!wcsOsi) {
      return;
    }
    const version = this.placeholder.togglePending();
    this.innerHTML = '';
    const osis = wcsOsi.split(',');

    try {
      const promises = service.wcs.resolveOfferSelectors({
        perpetual: toBoolean(perpetual),
        multiple: osis.length > 1,
        offerSelectorIds: osis,
        promotionCode: computePromoStatus(promotionCode, null).effectivePromoCode,
        taxExclusive: toBoolean(taxExclusive),
      });
      const offers = await Promise.all(promises);
      this.renderOffers(offers.flat(), overrides, version);
    } catch (error) {
      this.innerHTML = '';
      this.placeholder.toggleFailed(version, error);
    }
  }

  // TODO: can be extended to accept array of offers and compute subtotal price
  /**
   * Renders price offer info into this component.
   * @param {Array<Commerce.Wcs.Offer>} offers
   * @param {Record<string, any>} overrides
   */
  renderOffers(offers, overrides = {}, version = undefined) {
    // If called from `render` method that
    // gets version of this component before making async Wcs call,
    // ensures that no another pending operaion was initiated since
    // and that version has not changed.
    // eslint-disable-next-line no-param-reassign
    version ??= this.placeholder.togglePending();
    if (!this.placeholder.toggleResolved(offers, version)) return;
    this.innerHTML = '';
    // Collect settings/dataset and construct price options object.
    const { country, language } = service.settings;
    const {
      promotionCode,
      template,
      displayRecurrence,
      displayPerUnit,
      displayTax,
      displayOldPrice,
    } = this.dataset;
    const options = {
      country,
      language,
      displayRecurrence,
      displayPerUnit,
      displayTax,
      displayOldPrice,
      literals: { ...service.literals.price },
      ...overrides,
    };
    // Call price option providers to extend base options object.
    service.providers.price.forEach((provider) => provider(this.placeholder, options));
    // Select price rendering method.
    let method;
    if (promotionCode) {
      method = pricePromo;
    } else if (template === 'strikethrough') {
      method = priceStrikethrough;
    } else if (template === 'optical') {
      method = priceOptical;
    } else {
      method = price;
    }

    if (offers.length > 1) {
      const offer = offers.reduce((prev, currentOffer) => {
        if (prev === null) return currentOffer;
        return {
          ...currentOffer,
          priceDetails:
          {
            ...prev.priceDetails,
            price: prev.priceDetails.price + currentOffer.priceDetails.price,
          },
        };
      }, null);
      this.innerHTML = method(options, { ...offer, ...offer.priceDetails });
    } else {
      this.innerHTML = method(options, { ...offers[0], ...offers[0].priceDetails });
    }
  }
}

/** @type {Commerce.HTMLInlinePriceElement} */
export default HTMLPlaceholderMixin('span', 'inline-price', HTMLInlinePriceElement);
