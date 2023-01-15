import React from 'react';
import { screen } from "../../../constants";

export default function ARCollectionsIcon({ color = "#1F325D" }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.3722 20.8133L6.79883 13.8266V3.06665L25.3722 10.0666V20.8133Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M6.79883 28.8534L25.3722 21.8667V11.1067L6.79883 18.1067V28.8534Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <style jsx>{`
        @media (max-width: ${screen.mobileExtraSmall}px) {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </svg>
  );
}
