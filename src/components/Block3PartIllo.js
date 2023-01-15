import React from 'react';

import { screen } from '../constants';

export default function Block3PartIllo({
  pretitle = '',
  title = '',
  rows = [],
  backgroundImage = '',
}) {
  return (
    <section className="block-3-part-illo">
      {pretitle && (
        <div className="block-3-part-illo__pretitle app__pretitle">
          {pretitle}
        </div>
      )}
      {title && (
        <h1 className="block-3-part-illo__title app__title">{title}</h1>
      )}
      {rows.map((row, rowIdx) => {
        return (
          <div key={rowIdx} className="block-3-part-illo__row app__row">
            {row.map((column, columnIdx) => (
              <div key={`k-${rowIdx}-${columnIdx}`} className="app__column">
                {column && column.icon}
                {column && <h3 className="app__block_title">{column.title}</h3>}
                {column && (
                  <div className="block-3-part-illo__row-desc app__block_desc">
                    {column.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })}
      <style jsx>{`
          .block-3-part-illo {
            background-image: url('${backgroundImage}');
            background-repeat: no-repeat;
            background-position-x: right;
          }

          .block-3-part-illo__row {
            margin-top: 40px;
          }

          .block-3-part-illo__row-desc {
            line-height: 1.42;
          }

          @media (max-width: ${screen.tabletMax}px) {
            .block-3-part-illo {
              background: none;
            }

            .block-3-part-illo__row {
              margin-top: 0;
            }

            .block-3-part-illo__row .app__column {
              margin-bottom: 0;
            }

            .block-3-part-illo__row .app__column:first-child {
              margin-bottom: 60px;
            }
          }
        `}</style>
    </section>
  );
}
