import React from 'react';

export default function Cancel({ width = 33, height = 33 }) {
  return (
    <svg
      width={width}
      height={height}
      // viewBox={`0 0 ${width} ${height}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 30.2501C24.0939 30.2501 30.25 24.094 30.25 16.5001C30.25 8.90621 24.0939 2.75012 16.5 2.75012C8.90608 2.75012 2.75 8.90621 2.75 16.5001C2.75 24.094 8.90608 30.2501 16.5 30.2501Z"
        stroke="#0F2454"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.77869 6.77893L26.2212 26.2214"
        stroke="#0F2454"
        strokeWidth="3.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
