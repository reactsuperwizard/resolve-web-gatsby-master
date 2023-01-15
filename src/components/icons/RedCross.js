import React from 'react';
import { screen } from "../../constants";

export default function RedCrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6673 1.33331L1.33398 14.6666" stroke="#EE1111" strokeWidth="1.5" />
      <path d="M14.6673 14.6666L1.33398 1.33331" stroke="#EE1111" strokeWidth="1.5" />
      <style jsx>{`
        @media (max-width: ${screen.mobileMax}px) {
          width: 12px;
          height: 12px;
        }
      `}</style>
    </svg>
  );
}
