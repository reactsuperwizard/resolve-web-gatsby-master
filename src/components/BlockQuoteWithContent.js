import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { colors, fonts, screen } from '../constants';

export default function BlockQuoteWithContent({
  quote,
  authorImg,
  authorInfo,
}) {
  return (
    <section className="block-quote-with-content">
      <div className="block-quote-with-content__container">
        <div className="block-quote-with-content__quote">{quote}</div>
        <div className="block-quote-with-content__author">
          {authorImg && (
            <GatsbyImage
              image={authorImg}
              imgStyle={{ objectFit: 'contain' }}
              alt="author"
              className="block-quote-author__image"
            />
          )}
          {authorInfo}
        </div>
      </div>

      <style jsx global>{`
        .block-quote-with-content__container {
          margin-left: 10.5%;
          padding-right: 5px;
        }

        .block-quote-with-content {
          padding: 50px 52px;
          margin: 0 -120px;
          background: linear-gradient(
            313.71deg,
            rgb(243, 244, 246, 0.7) 47.34%,
            rgba(243, 244, 246, 0) 114.63%
          );
        }

        .block-quote-with-content__quote {
          font-size: 32px;
          font-weight: normal;
          line-height: 160%;
          letter-spacing: 1px;
          color: ${colors.cello};
          max-width: 780px;
          margin-bottom: 95px;
          margin-top: 63px;
        }

        .block-quote-author__image {
          max-width: 95px;
          flex: 1 1 auto;
          margin-right: 40px;
        }

        .block-quote-with-content__author {
          width: 100%;
          font-family: ${fonts.halyardDisplay};
          font-size: 24px;
          line-height: 140%;
          letter-spacing: 0.045px;
          color: ${colors.cello};
          display: flex;
          align-items: center;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-quote-with-content__quote {
            font-size: 22px;
            line-height: 130%;
            letter-spacing: 0.73px;
            margin: 22px 0 46px;
          }

          .block-quote-with-content__author {
            font-size: 18px;
            line-height: 140%;
          }

          .block-quote-author__image {
            max-width: 70px;
            margin-right: 20px;
          }

          .block-quote-with-content {
            margin: 0 -40px;
          }

          .block-quote-with-content__container {
            margin-left: 0;
          }
        }
      `}</style>
      <style jsx>{``}</style>
    </section>
  );
}
