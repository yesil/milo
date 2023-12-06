import ctaTextOption from './ctaTextOption.js';
import {
  getConfig,
  getLocale,
  getMetadata,
  loadScript,
  loadStyle,
} from '../../utils/utils.js';

export const AOS_API_KEY = 'wcms-commerce-ims-user-prod';
export const CHECKOUT_CLIENT_ID = 'creative';
export const DEFAULT_CTA_TEXT = 'buy-now';
const IMS_COMMERCE_CLIENT_ID = 'aos_milo_commerce';
const IMS_SCOPE = 'AdobeID,openid';
const IMS_ENV = 'prod';
const IMS_PROD_URL = 'https://auth.services.adobe.com/imslib/imslib.min.js';
const OST_VERSION = '1.14.2-preview';
const OST_BASE = `https://www.stage.adobe.com/special/tacocat/ost/lib/${OST_VERSION}`;
const OST_SCRIPT_URL = `${OST_BASE}/index.js`;
const OST_STYLE_URL = `${OST_BASE}/index.css`;
/** @see https://git.corp.adobe.com/PandoraUI/core/blob/master/packages/react-env-provider/src/component.tsx#L49 */
export const WCS_ENV = 'PROD';
export const WCS_API_KEY = 'wcms-commerce-ims-ro-user-cc';

/**
 * Maps Franklin page metadata to OST properties.
 * Only values present in this object will be provided to OST.
 * Each key of the object is metadata key.
 * Each value is OST property name.
 */
const METADATA_MAPPINGS = { 'checkout-workflow': 'workflow' };

document.body.classList.add('tool', 'tool-ost');

/**
 * @param {Commerce.Defaults} defaults
 */
export const createLinkMarkupFactory = (defaults) => (
  offerSelectorId,
  type,
  offer,
  options,
  promo,
) => {
  const isCta = !!type?.startsWith('checkout');

  const params = new URLSearchParams([
    ['osi', offerSelectorId],
    ['type', type],
  ]);
  if (promo) params.set('promo', promo);
  if (offer.commitment === 'PERPETUAL') params.set('perp', true);

  if (isCta) {
    const { workflow, workflowStep } = options;
    params.set('text', options.ctaText ?? DEFAULT_CTA_TEXT);
    if (workflow && workflow !== defaults.checkoutWorkflow) {
      params.set('workflow', workflow);
    }
    if (workflowStep && workflowStep !== defaults.checkoutWorkflowStep) {
      params.set('workflowStep', workflowStep);
    }
  } else {
    const {
      displayRecurrence,
      displayPerUnit,
      displayTax,
      forceTaxExclusive,
    } = options;
    params.set('term', displayRecurrence);
    params.set('seat', displayPerUnit);
    params.set('tax', displayTax);
    params.set('exclusive', forceTaxExclusive);
  }
  const href = `https://milo.adobe.com/tools/ost?${params.toString()}`;

  const link = document.createElement('a');
  link.textContent = isCta
    ? `CTA {{${options.ctaText ?? DEFAULT_CTA_TEXT}}}`
    : `PRICE - ${offer.planType} - ${offer.name}`;
  link.href = href;
  return link;
};

const onSelectHandler = (createLinkMarkup) => (
  offerSelectorId,
  type,
  offer,
  options,
  promoOverride,
) => {
  const link = createLinkMarkup(
    offerSelectorId,
    type,
    offer,
    options,
    promoOverride,
  );
  if (!link) {
    console.log('no link created, probably test context');
    return;
  }
  console.log(`Use Link: ${link.outerHTML}`);
  const blob = new Blob([link.outerHTML], { type: 'text/html' });
  // eslint-disable-next-line no-undef
  const data = [new ClipboardItem({ [blob.type]: blob })];
  navigator.clipboard.write(data, console.log, console.error);
};

export async function loadOstEnv(Log, getLocaleSettings) {
  const searchParameters = new URLSearchParams(window.location.search);
  let aosAccessToken = searchParameters.get('token');
  if (aosAccessToken) {
    sessionStorage.setItem('AOS_ACCESS_TOKEN', aosAccessToken);
    searchParameters.delete('token');
  } else {
    aosAccessToken = sessionStorage.getItem('AOS_ACCESS_TOKEN');
  }
  const osi = searchParameters.get('osi');
  if (osi) {
    searchParameters.delete('osi');
  }

  const newUrl = `${window.location.pathname}${window.location.hash}`;
  window.history.pushState(null, '', newUrl);

  const environment = searchParameters.get('env') ?? WCS_ENV;
  const owner = searchParameters.get('owner');
  const referrer = searchParameters.get('referrer');
  const repo = searchParameters.get('repo');

  let { country, language } = getLocaleSettings();
  const { locales } = getConfig();
  const log = Log.module('ost');
  const metadata = {};
  let url;

  if (owner && referrer && repo) {
    try {
      const res = await fetch(
        `//admin.hlx.page/status/${owner}/${repo}/main?editUrl=${referrer}`,
      );
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const json = await res.json();
      url = new URL(json.preview.url);
      const locale = getLocale(locales, url.pathname);
      ({ country, language } = getLocaleSettings({ locale }));
    } catch (error) {
      log.error('Unable to fetch page status:', error);
    }

    if (url) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const parser = new DOMParser();
        const doc = parser.parseFromString(await res.text(), 'text/html');
        Object.entries(METADATA_MAPPINGS).forEach(([key, value]) => {
          const content = getMetadata(key, doc);
          if (content) metadata[value] = content;
        });
      } catch (error) {
        log.error('Unable to fetch page metadata:', error);
      }
    }
  }

  return {
    ...metadata,
    aosAccessToken,
    aosApiKey: AOS_API_KEY,
    checkoutClientId: CHECKOUT_CLIENT_ID,
    country,
    environment,
    language,
    searchParameters,
    wcsApiKey: WCS_API_KEY,
    ctaTextOption,
  };
}

export default async function init(el) {
  el.innerHTML = '<div />';

  loadStyle(OST_STYLE_URL);
  loadStyle('https://use.typekit.net/pps7abe.css');

  /* c8 ignore next */
  const { Log, Defaults, getLocaleSettings } = await import(
    '../../deps/commerce.js'
  );

  const [ostEnv] = await Promise.all([
    loadOstEnv(Log, getLocaleSettings),
    loadScript(OST_SCRIPT_URL),
  ]);

  const createLinkMarkup = createLinkMarkupFactory(Defaults);

  function openOst() {
    window.ost.openOfferSelectorTool({
      ...ostEnv,
      rootElement: el.firstElementChild,
      onSelectHandler: onSelectHandler(createLinkMarkup),
    });
  }

  if (ostEnv.aosAccessToken) {
    openOst();
  } else {
    window.adobeid = {
      client_id: IMS_COMMERCE_CLIENT_ID,
      environment: IMS_ENV,
      optimizations: { fastEvents: true },
      autoValidateToken: true,
      scope: IMS_SCOPE,
      onAccessToken: ({ token }) => {
        ostEnv.aosAccessToken = token;
        openOst();
      },
      onReady: () => {
        if (!window.adobeIMS.isSignedInUser()) {
          window.adobeIMS.signIn();
        }
      },
    };

    await loadScript(IMS_PROD_URL);
  }
}
