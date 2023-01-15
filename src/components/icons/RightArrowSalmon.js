import React from 'react';

export default function RightArrowSalmon({
  color = '#ff8072',
  width = 14,
  height = 12,
  style = {},
}) {
  return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8465 6.61818H0V4.58182H10.8465L7.21261 0H9.5487L13.1826 4.58182L14 5.6L13.1826 6.61818L9.5487 11.2H7.21261L10.8465 6.61818Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
