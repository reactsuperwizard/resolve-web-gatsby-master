export function identifySegment(...args) {
  try {
    if (typeof window !== 'undefined') {
      window.analytics && window.analytics.identify(...args);
    }
  } catch (err) {
    console.error('identifySegment error', err);
  }
}

export function trackSegment(name, traits) {
  try {
    if (typeof window !== 'undefined') {
      window.analytics && window.analytics.track(name, traits);
    }
  } catch (err) {
    console.error('trackSegment error', err);
  }
}
