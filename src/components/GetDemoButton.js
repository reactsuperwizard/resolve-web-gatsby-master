import React from 'react';
import { navigate } from 'gatsby';

import Button from './Button';

export default function GetDemoButton({ text = 'Get a Demo', to }) {
  function handleGetDemoClick() {
    navigate(to || '/contact-sales/');
  }

  return (
    <Button onClick={handleGetDemoClick} primary large hasArrow>
      {text}
    </Button>
  );
}
