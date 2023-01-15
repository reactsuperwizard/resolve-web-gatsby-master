import { setCampaign } from './src/utils/utm';
import _JSXStyle from 'styled-jsx/style';

// Fixes ReferenceError: _JSXStyle is not defined
if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle });
}

export function onRouteUpdate({ location }) {
  setCampaign(location);
}
