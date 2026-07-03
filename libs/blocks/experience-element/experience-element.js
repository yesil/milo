import 'https://yesil.github.io/experience-elements/dist/swc.js';

import { loadScript } from '../../utils/utils.js';

const LANA_OPTIONS = {
  tags: 'experience-element',
  errorType: 'i',
  severity: 'error',
};

const RUNTIME_PATH = '/api/user/library.js';
const RUNTIME_ORIGIN = 'https://d17rmhdnq5yt28.cloudfront.net';
const EXPERIENCE_ELEMENTS_ORIGIN = window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : 'https://yesil.github.io/experience-elements';

const runtimeElement = import(`${EXPERIENCE_ELEMENTS_ORIGIN}/src/runtime/experience-element.js`);

const EXPERIENCE_ELEMENTS_IMPORTS = [
  '/src/custom-elements/ee-media/ee-media.js',
  '/src/custom-elements/core/ee-reference.js',
  '/src/custom-elements/core/ee-content.js',
  '/src/custom-elements/core/spectrum-toggle.js',
  '/src/custom-elements/core/ee-list/ee-list.js',
  '/src/custom-elements/core/ee-list/ee-list-item.js',
  '/src/custom-elements/acom/acom-aside.js',
  '/src/custom-elements/upw/paywall-container.js',
  '/src/custom-elements/commerce/checkout-button.js',
  '/src/custom-elements/merch-card/merch-mnemonic.js',
];

let experienceElementsImportsPromise;

function loadExperienceElementsImports() {
  experienceElementsImportsPromise ??= runtimeElement.then(Promise.all(
    EXPERIENCE_ELEMENTS_IMPORTS.map((path) => import(`${EXPERIENCE_ELEMENTS_ORIGIN}${path}`)),
  ));
  return experienceElementsImportsPromise;
}

function runtimeUrl() {
  return window.location.hostname === 'localhost'
    ? `http://localhost:3001${RUNTIME_PATH}`
    : `${RUNTIME_ORIGIN}${RUNTIME_PATH}`;
}

export default async function init(el) {
  await loadExperienceElementsImports();
  loadScript(runtimeUrl(), 'module');
  const { href } = el;
  try {
    const res = await fetch(href);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    el.parentElement.outerHTML = await res.text();
  } catch (e) {
    window.lana?.log(`Failed to load experience element ${href}: ${e.message}`, LANA_OPTIONS);
  }
}
