import React from 'react';

import Container from '../Container';
import { screen } from '../../constants';

export default function BlockPaymentBothSides({
  title,
  items,
  textAlign = 'left',
  withBorders = false,
}) {
  return (
    <div className="block-2-part">
      <Container>
        <div className="block-2-part__wrap">
          <h2 className="block-2-part__title block__title">{title}</h2>
          <div
            className={`block-2-part__items app__row ${withBorders ? 'block-2-part__borders' : ''
              }`}
          >
            {items.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className={`${item.className ? item.className : ''
                  } block-2-part__item`}
              >
                <h3 className="block-2-part__item-title">{item.title}</h3>
                <div className="block-2-part__item-content">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-2-part__wrap {
          justify-content: space-between;
          text-align: ${textAlign};
          position: relative;
          padding: 100px 0;
        }
        .block-2-part__title {
          font-size: 44px;
          line-height: 52px;
          margin-bottom: 52px;
          text-align: center;
        }
        .block-2-part__item:last-child {
          margin-right: 0;
        }

        .block-2-part__items {
          justify-content: space-between;
        }

        .block-2-part__item-title {
          font-weight: 350;
          font-size: 24px;
          line-height: 32px;
          margin: 0 0 16px;
        }
        .block-2-part__item-content {
          font-size: 20px;
          line-height: 1.4;
          letter-spacing: 0.7px;
        }

        .block-2-part__item-content .integration-logo .icon,
        .block-2-part__item-content .integration-logo .icon-title {
          vertical-align: middle;
          display: inline-block;
        }

        .block-2-part__borders .block-2-part__item {
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 12px rgba(128, 128, 128, 0.1), 0px 24px 24px rgba(216, 216, 216, 0.1);
          border-radius: 16px;
          padding: 40px;
          margin: 0;
          flex: 1 1 50%;
          max-width: 49%;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-2-part__title {
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          .block-2-part__items {
            align-items: center;
          }
          .block-2-part__item {
            text-align: center;
            max-width: 400px;
            margin: 0 0 69px 0;
          }

          .block-2-part__item:last-child {
            margin-bottom: 0;
          }
          .block-2-part__borders .block-2-part__item {
            max-width: 100%;
            padding: 10px 30px 30px;
          }
          .block-2-part__borders .block-2-part__item:first-child {
            margin-bottom: 20px;
          }
        }
      `}</style>
      <style jsx global>{`
        

      `}</style>
    </div>
  );
}
