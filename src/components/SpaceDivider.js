import React from 'react';

export default function SpaceDivider({ height }) {
  return (
    <div className="space-divider">
      <style jsx>{`
        .space-divider {
          content: ' ';
          height: ${height}px;
        }
      `}</style>
    </div>
  );
}
