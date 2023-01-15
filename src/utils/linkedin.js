export function trackLinkedIn(name, traits) {
  const url =
    'https://px.ads.linkedin.com/collect/?pid=2846602&conversionId=4323604&fmt=gif';

  // It creates an element without actually adding it to the page DOM.
  // The call is already made to the LinkedIn servers and will be registered.
  const element = document.createElement('img');
  element.alt = '';
  element.height = 1;
  element.width = 1;
  element.src = url;

  return element;
}
