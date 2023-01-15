import React from 'react';

import { colors } from '../../constants';

export default function Hamburger({ expanded, onClick }) {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fill={colors.primary}
        d="M.826 1.5h20V4h-20z"
        style={{
          transformOrigin: `5% 25%`,
          transform: `rotate(${expanded ? 45 : 0}deg)`,
        }}
        className="origin"
      />
      <path
        fill={colors.primary}
        d="M.826 8h20v2.5h-20z"
        style={{ opacity: expanded ? 0 : 1 }}
        className="origin"
      />
      <path
        fill={colors.primary}
        d="M.826 14.5h20V17h-20z"
        style={{
          transformOrigin: `15% 82%`,
          transform: `rotate(${expanded ? -45 : 0}deg)`,
        }}
        className="origin"
      />
      <style jsx>{`
        .origin {
          transition: 0.33s;
        }
      `}</style>
    </svg>
  );
}
