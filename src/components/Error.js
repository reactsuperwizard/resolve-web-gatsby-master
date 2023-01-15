import React from 'react';

import { colors } from '../constants';

export default function Error({ error, id }) {
  return (
    <div className="error" id={id}>
      {error}
      <style jsx>{`
        .error {
          ${errorStyles()}
        }
      `}</style>
    </div>
  );
}

export function errorStyles() {
  return `
    color: ${colors.error};
    font-size: 12px;
    font-weight: 400;
  `;
}
