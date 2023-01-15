import React from 'react';

export default function ChevronArrow({
  width = 9,
  height = 7,
  color = '#0F2454',
  ...props
}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 9 7"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M4.24 3.86L7.243.857 8.48 2.095 4.243 6.337 0 2.095 1.237.857z"
      />
    </svg>
  );
}
