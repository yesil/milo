import { loadScript } from '../../utils/utils.js';

const LANA_OPTIONS = {
  tags: 'experience-element',
  errorType: 'i',
  severity: 'error',
};

const RUNTIME_PATH = '/api/user/library.js';
const RUNTIME_ORIGIN = 'https://d17rmhdnq5yt28.cloudfront.net';

function runtimeUrl() {
  return window.location.hostname === 'localhost'
    ? `http://localhost:3001${RUNTIME_PATH}`
    : `${RUNTIME_ORIGIN}${RUNTIME_PATH}`;
}

export default async function init(el) {
  // loadScript dedupes by src, so this runs once per page across multiple elements.
  loadScript(runtimeUrl(), 'module');
  const { href } = el;
  try {
    const res = await fetch(href);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    el.outerHTML = await res.text();
  } catch (e) {
    window.lana?.log(`Failed to load experience element ${href}: ${e.message}`, LANA_OPTIONS);
  }
}
