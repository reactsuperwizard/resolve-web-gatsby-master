import React from 'react';

export default function DropIcon({ width = 48, height = 48 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <path
        d="M24 7.736l-9.83 9.83a13.902 13.902 0 0 0-4.072 9.83C10.098 35.076 16.322 41.3 24 41.3c3.687 0 7.223-1.465 9.83-4.072 5.43-5.429 5.43-14.231 0-19.66L24 7.737z"
        stroke="#0F2454"
        strokeWidth="5"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
