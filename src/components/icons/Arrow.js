import React from 'react';

export default function ArrowIcon({ width = 34, height = 34, color = "#1F325D" }) {
  return (
    <svg width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6289 23.3569L23.3498 10.6361" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" />
      <path d="M23.3494 10.636V19.8142" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
      <path d="M23.3496 10.6357L14.1714 10.6357" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square" />
    </svg>
  );
}
