import React from 'react';
import { screen } from "../../constants";

export default function WhiteCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" fill="#31D673" stroke="#31D673" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 12L9.5 15L15.5 8" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
      <style jsx>{`
        @media (max-width: ${screen.mobileMax}px) {
          width: 17px;
          height: 17px;
        }
      `}</style>
    </svg>
  );
}
