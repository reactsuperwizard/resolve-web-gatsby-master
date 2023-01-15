import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { colors, screen } from '../constants';

export default function Block4PartCompanies({
  title = '',
  items = [],
  mainItem,
}) {
  return (
    <div>
      <h3 className="block-4-part-companies__title app__pretitle">{title}</h3>
      <div className="app__row block-4-part-companies">
        <div>
          {items.map(item => (
            <div key={item.review} className="block-4-part-companies__item">
              <GatsbyImage image={item.image} alt={item.imageDesc} />
              <div className="block-4-part-companies__review">
                {item.review}
              </div>
            </div>
          ))}
        </div>
        <div className="block-4-part-companies__main-item">
          <div className="block-4-part-companies__main-review">
            {mainItem.review}
          </div>
          <GatsbyImage image={mainItem.image} alt={mainItem.imageDesc} />
        </div>
      </div>
      <style jsx>{`
        .block-4-part-companies {
          margin-top: 20px;
          justify-content: center;
        }

        .block-4-part-companies__title {
          text-transform: uppercase;
          text-align: center;
        }

        .block-4-part-companies__item:first-child {
          margin-bottom: 42px;
        }

        .block-4-part-companies__item img {
          max-height: 40px;
        }

        .block-4-part-companies__review {
          margin-top: 10px;
          max-width: 250px;

          font-size: 20px;
          line-height: 1.5;
          letter-spacing: 0.8px;

          color: ${colors.optionLabel};
        }

        .block-4-part-companies__main-item {
          margin-top: 40px;
          text-align: center;
          margin-left: 79px;
        }

        .block-4-part-companies__main-review {
          font-size: 24px;
          line-height: 1.25;
          letter-spacing: 0;
          text-align: center;
          margin-bottom: 23px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-4-part-companies {
            align-items: center;
          }
          .block-4-part-companies__item {
            text-align: center;
          }
          .block-4-part-companies__main-item {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
