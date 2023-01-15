import React from 'react';

export default function CheckIcon({ width = 16, height = 16 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.69243L1.56131 6.78948L5.42834 11.507L14.2524 0.742188L15.8137 2.64514L5.42834 15.3129L0 8.69243Z"
        fill="#33CC88"
      />
    </svg>
  );
}
