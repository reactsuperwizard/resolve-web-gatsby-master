import React from 'react';

import Header from './Header';

export default function BlockHeaderNav() {
  return (
    <Header
      style={{
        paddingTop: 200,
        paddingLeft: 20,
      }}
      links={[]}
      canRenderLogInButton={false}
      canRenderNavigationDrawer={false}
      primaryButtonText="Get A Demo"
    />
  );
}
