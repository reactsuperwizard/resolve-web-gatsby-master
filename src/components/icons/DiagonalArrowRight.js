import React from 'react';

export default function DiagonalArrowRight({
  width = 11,
  height = 11,
  color = '#FF8D92',
  ...props
}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 11"
    >
      <path
        fill={color}
        fillRule="nonzero"
        d="M9.125 3.112L1.619 10.62.38 9.38l7.507-7.506H3V.125h7.875V8h-1.75V3.112z"
      />
    </svg>
  );
}
