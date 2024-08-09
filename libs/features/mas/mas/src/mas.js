import { init } from '@adobe/mas-commerce';

const { origin, pathname, searchParams } = new URL(import.meta.url);
const basePath = pathname.substring(0, pathname.lastIndexOf('/'));

const locale = searchParams.get('locale') ?? 'US_en';
const lang = searchParams.get('lang') ?? 'en';
const isStage = searchParams.get('env') === 'stage';
const features = searchParams.get('features');

const envName = isStage ? 'stage' : 'prod';
const commerceEnv = isStage ? 'STAGE' : 'PROD';

const config = () => ({
    env: { name: envName },
    commerce: { 'commerce.env': commerceEnv },
    locale: { prefix: locale },
});

let promise = init(config);

if (features?.includes('merch-card')) {
    promise = promise.then(() =>
        Promise.all([
          import(`${origin}${basePath}/merch-card.js`),
          import(`${origin}${basePath}/merch-icon.js`),
          import(`${origin}${basePath}/merch-datasource.js`),
        ]),
    );
}

export default promise;
