import React from 'react';

export default function RightArrowIcon({
  color = '#fff',
  width = 24,
  height = 24,
  style = {},
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0012 17.59L13.4112 19L20.4112 12L13.4112 5L12.0012 6.41L16.5911 10.9999L4 10.9999L4 12.9999L16.5913 12.9999L12.0012 17.59Z"
        fill={color}
      />
    </svg>
  );
}
