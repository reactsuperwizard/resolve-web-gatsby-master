import qs from 'qs';
import Cookies from 'js-cookie';

export const utmFields = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
];

export function setCampaign(location) {
  const cookies = Cookies.get();

  if (!cookies['first_landing_page']) {
    Cookies.set('first_referrer', document.referrer);
  }

  if (!cookies['first_landing_page']) {
    Cookies.set('first_landing_page', location.href);
  }
}

export function getCampaign() {
  const cookies = Cookies.get();
  const landingPage = cookies['first_landing_page'];
  const referrer = cookies['first_referrer'];
  const result = {
    landingPage,
    referrer,
  };

  const isReferrerB2B =
    (document.referrer &&
      document.referrer.startsWith('https://b2b.resolvepay.com')) ||
    document.referrer.startsWith('http://b2b.resolvepay.com');
  const referrerUrl = isReferrerB2B ? document.referrer : undefined;

  if (!landingPage && !referrerUrl) {
    return result;
  }

  const landingPageQuerystring = landingPage?.split('?')[1];
  const landingPageParsedQS = qs.parse(landingPageQuerystring);

  const referrerQuerystring = referrerUrl?.split('?')[1];
  const referrerParsedQS = qs.parse(referrerQuerystring);

  for (const field of utmFields) {
    if (landingPageParsedQS[field]) {
      result[field] = landingPageParsedQS[field];
    } else if (referrerParsedQS[field]) {
      result[field] = referrerParsedQS[field];
    }
  }

  return result;
}
