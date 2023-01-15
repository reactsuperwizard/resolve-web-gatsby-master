import React from 'react';

export default function ShieldIcon({ width = 48, height = 48 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <path
        d="M24 7.42L9.466 11.093v12.842c0 8.95 5.965 16.772 14.534 19.174a19.914 19.914 0 0 0 14.534-19.174V11.093L24 7.42z"
        stroke="#0F2454"
        strokeWidth="5"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
