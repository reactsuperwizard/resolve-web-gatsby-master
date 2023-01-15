import React from 'react';
import { screen } from "../../../constants";

export default function PaymentsIcon({ color = "#1F325D" }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5319 6.33325H9.47852L13.6252 16.3333L9.47852 26.3466H23.5319L29.3185 16.3333L23.5319 6.33325Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M16.8382 16.3333H2.77148L8.54482 26.3466H22.6115L16.8382 16.3333Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <style jsx>{`
        @media (max-width: ${screen.mobileExtraSmall}px) {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </svg>
  );
}
