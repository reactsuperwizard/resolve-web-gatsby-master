import React from 'react';
import { screen } from "../../../constants";

export default function InvoicingWorkflowsIcon({ color = "#1F325D" }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.2401 20.1866V8.77332L14.3468 3.06665L4.4668 8.77332V20.1866L14.3468 25.8933L24.2401 20.1866Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M27.467 24.7069V15.9602L19.8936 11.5869L12.3203 15.9602V24.7069L19.8936 29.0669L27.467 24.7069Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <style jsx>{`
        @media (max-width: ${screen.mobileExtraSmall}px) {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </svg>
  );
}
