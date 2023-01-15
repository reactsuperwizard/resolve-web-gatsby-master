import React from 'react';
import { screen } from "../../constants";

export default function GreenCheckIcon() {
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 6.33333L6.54167 11.6583L16.625 1" stroke="#31D673" strokeWidth="1.5" />
      <style jsx>{`
        flex-shrink: 0;
        @media (max-width: ${screen.mobileMax}px) {
          width: 14px;
          height: 11px;
        }
      `}</style>
    </svg>
  );
}
