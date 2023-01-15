import React from 'react';

export default function Play({ width = 91, height = 91 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 91 91"
      width={width}
      height={height}
    >
      <circle opacity="0.8" cx="45.5001" cy="45.1502" r="45.15" fill="white" />
      <path
        d="M64.9249 41.3722C67.0249 42.5846 67.0249 45.6157 64.9249 46.8281L36.5749 63.196C34.4749 64.4084 31.8499 62.8929 31.8499 60.468L31.8499 27.7323C31.8499 25.3074 34.4749 23.7918 36.5749 25.0043L64.9249 41.3722Z"
        fill="#0F2454"
      />
    </svg>
  );
}
