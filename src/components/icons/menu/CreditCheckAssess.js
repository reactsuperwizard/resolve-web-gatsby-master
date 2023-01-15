import React from 'react';
import { screen } from "../../../constants";

export default function CreditCheckAssessIcon({ color = "#1F325D" }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.786 18.6399L3.66602 25.7199V4.2666H19.786V18.6399Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M20.7998 27.9992C25.4095 27.9992 29.1465 24.2623 29.1465 19.6526C29.1465 15.0428 25.4095 11.3059 20.7998 11.3059C16.1901 11.3059 12.4531 15.0428 12.4531 19.6526C12.4531 24.2623 16.1901 27.9992 20.7998 27.9992Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <style jsx>{`
        @media (max-width: ${screen.mobileExtraSmall}px) {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </svg>
  );
}
