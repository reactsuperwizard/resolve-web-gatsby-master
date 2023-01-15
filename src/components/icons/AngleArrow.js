import React from 'react';

export default function AngleArrow() {
  return (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          stroke="currentColor"
          strokeWidth="2"
          d="M10.514 3.223l3.939-1.695 1.547 4"
        />
        <path
          stroke="currentColor"
          strokeLinecap="square"
          strokeWidth="2"
          d="M14 2.528c-2.791 8-7.124 12-13 12"
        />
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M0 20v-2h3v2H0zm6 0v-2h3v2H6zm6 0v-2h3v2h-3zm8 0h-2v-2h2v2zm0-5h-2v-3h2v3zm0-6h-2V6h2v3zm0-6h-2V0h2v3z"
        />
      </g>
    </svg>
  );
}
