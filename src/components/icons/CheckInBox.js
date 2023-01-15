import React from 'react';

export default function CheckInBox({ width = 33, height = 33 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.375 15.125L16.5 19.25L30.25 5.5"
        stroke="#0F2454"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.875 16.5V26.125C28.875 26.8543 28.5853 27.5538 28.0695 28.0695C27.5538 28.5853 26.8543 28.875 26.125 28.875H6.875C6.14565 28.875 5.44618 28.5853 4.93046 28.0695C4.41473 27.5538 4.125 26.8543 4.125 26.125V6.875C4.125 6.14565 4.41473 5.44618 4.93046 4.93046C5.44618 4.41473 6.14565 4.125 6.875 4.125H22"
        stroke="#0F2454"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
