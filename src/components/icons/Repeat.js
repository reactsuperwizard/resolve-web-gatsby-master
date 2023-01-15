import React from 'react';

export default function RepeatIcon() {
  return (
    <span className="repeat-icon">
      <svg
        enableBackground="new 0 0 38 24"
        height="28px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 41 34"
        width="28px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.949,16C33.429,7.08,26.051,0,17,0C7.611,0,0,7.611,0,17s7.611,17,17,17v-6c-6.075,0-11-4.925-11-11  S10.925,6,17,6c5.737,0,10.443,4.394,10.949,10h-6.849L31,25.899L40.899,16H33.949z"
          fill="#0F2454"
        />
      </svg>
      <style jsx>{`
        .repeat-icon {
          transform: scale(-1, 1);
          display: inline-block;
        }
      `}</style>
    </span>
  );
}
