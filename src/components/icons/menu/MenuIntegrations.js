import React from 'react';
import { screen } from "../../../constants";

export default function MenuIntegrationsIcon({ color = "#1F325D" }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0384 5.19995H2.70508L6.07841 12.3733L2.70508 19.5333H18.0384L21.4117 12.3733L18.0384 5.19995Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M25.6247 12.3733H10.3047L13.678 19.5333L10.3047 26.7066H25.6247L29.0114 19.5333L25.6247 12.3733Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <style jsx>{`
        @media (max-width: ${screen.mobileExtraSmall}px) {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </svg>
  );
}
