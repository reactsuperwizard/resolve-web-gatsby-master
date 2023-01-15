import React from 'react';

import { screen, fonts } from '../constants';
import Container from './Container';

export default function BlockKeyFeature({
  pretitle,
  title,
  grayBackground,
  desc,
  items,
  fullWidthSeparator = false,
  col = 2,
  titleAlign = 'left',
}) {
  return (
    <div className={`block-key-feature ${`col-${col}-template`}`}>
      <Container>
        <div className="block-key-feature__wrap">
          {pretitle && (
            <div className="block-key-feature__pretitle app__pretitle">
              {pretitle}
            </div>
          )}
          {title && (
            <h4 className="block-key-feature__title app__title">{title}</h4>
          )}
          {desc && (
            <div className="block-key-feature__desc app__desc">{desc}</div>
          )}

          <div className="block-key-feature__items app__row">
            {items.map(item => (
              <div
                key={item.title || item.key}
                className={`block-key-feature__item col-${col}`}
              >
                <div className="block-key-feature__item_header">
                  {item.icon}
                  {item.pretitle && (
                    <h1 className="block-key-feature__item-pretitle">
                      {item.pretitle}
                    </h1>
                  )}
                  <h4 className="block-key-feature__item-title">
                    {item.title}
                  </h4>
                </div>
                <div className="block-key-feature__item-content">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-key-feature {
          ${grayBackground ? 'background-color: #f8f9fa;' : ''}
        }

        .block-key-feature__wrap {
          text-align: left;
          position: relative;
          padding: 40px 0;
        }

        .block-key-feature__title {
          text-align: ${titleAlign};
        }

        .block-key-feature__desc {
          max-width: 800px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
        }

        .block-key-feature__item {
          max-width: 550px;
          min-height: 240px;
          background: #ffffff;
          box-shadow: 0 48.4511px 96.9023px -48.4511px rgba(0, 0, 0, 0.2),
            0 0 10px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          margin-bottom: 30px;

          ${fullWidthSeparator ? 'padding: 10px 30px 30px;' : 'padding: 30px;'}
        }

        .block-key-feature__item.col-3 {
          max-width: 356px;
          margin-bottom: 16px;
          width: 100%;
        }

        .block-key-feature__item_header {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid #dadada;
          padding-bottom: 10px;

          ${fullWidthSeparator
            ? 'margin:0 -30px; padding: 0 0 0 25px; min-height: 100px;'
            : ''}
        }

        .block-key-feature__item:last-child {
          margin-right: 0;
        }

        .block-key-feature__items {
          margin-top: 40px;
          display: flex;
          align-items: normal;
          justify-content: space-between;
          flex-flow: row wrap;
          align-content: center;
        }

        .block-key-feature__item-title {
          font-family: ${fonts.halyardDisplay};
          font-size: 24px;
          font-weight: 400;
          line-height: 40px;
          letter-spacing: 0.0533333px;

          ${fullWidthSeparator
            ? 'margin: 0 20px 5px 20px;'
            : 'margin: 20px 20px;'}
        }
        .block-key-feature__item-content {
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.5px;
          padding-top: 20px;
        }

        .block-key-feature__item.col-3 {
          margin-right: 16px;
        }

        .col-3-template .block-key-feature__items {
          justify-content: center;
        }

        @media (min-width: 1380px) {
          .block-key-feature__item.col-3:nth-child(3n) {
            margin-right: 0;
          }

          .col-3-template .block-key-feature__items {
            justify-content: space-between;
          }
        }

        @media (max-width: 1380px) {
          .col-3-template .block-key-feature__title {
            text-align: center;
          }
        }

        @media (max-width: 1024px) {
          .gray-background {
            height: 1600px;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-key-feature__title {
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          .block-key-feature__items {
            align-items: center;
            justify-content: center;
          }
          .block-key-feature__item {
            text-align: left;
            max-width: 400px;
          }

          .block-key-feature__item:last-child {
            margin-bottom: 0;
          }
          .gray-background {
            height: 1600px;
          }

          .block-key-feature__item.col-3:nth-child(2n) {
            margin-right: 0;
          }
        }

        @media (max-width: 930px) {
          .block-key-feature__item.col-3 {
            margin-right: 0;
            margin-left: 16px;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-key-feature__item-pretitle {
          font-family: ${fonts.halyardDisplay};
          font-size: 55px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
        }

        .block-key-feature__item-pretitle span {
          font-size: 38.5px;
          font-weight: 500;
        }

        .block-key-feature__image {
          max-width: 150px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
