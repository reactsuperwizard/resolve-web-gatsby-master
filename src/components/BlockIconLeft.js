import React from 'react';
import { navigate } from 'gatsby';

import { screen, fonts } from '../constants';
import Button from './Button';
import Container from './Container';

export default function BlockIconLeft({
  pretitle,
  title,
  description,
  quote,
  author,
  grayBackground,
  icon,
  backgroundImage,
  ctaText,
  ctaButtonTo,
}) {
  function handleCtaButtonTo() {
    navigate(ctaButtonTo);
  }
  return (
    <div className="block-icon-left">
      <Container>
        <div className="block-icon-left__wrap">
          <div className="app__icon-group">
            <div className="app__icon block-icon-left__image">{icon}</div>
          </div>
          <div className="block-icon-left__text">
            {pretitle && <div className="app__pretitle">{pretitle}</div>}
            <h2 className="app__title">{title}</h2>
            <div className="block-icon-left_desc">{description}</div>
            {quote && <hr className="block-icon-left__separator" />}
            {quote && (
              <p className="app__desc block-icon-left_quote">{quote}</p>
            )}
            {author && <div className="block-icon-left_author">{author}</div>}
            {ctaButtonTo && (
              <div className="block-button-cta">
                <Button onClick={handleCtaButtonTo} primary large hasArrow>
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-icon-left {
          ${grayBackground ? 'background-color: #f8f9fa;' : ''}
        }

        .block-icon-left__wrap {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 64px;
          padding-top: 64px;
          padding-bottom: 64px;
        }

        .block-icon-left_desc {
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.9px;
          margin-bottom: 45px;
        }

        .block-icon-left__text {
          max-width: 560px;
          margin-left: 70px;
        }

        .block-icon-left__text .app__title {
          font-size: 32px;
          font-weight: 400;
          line-height: 42px;
          font-family: ${fonts.halyardDisplay};
        }

        .block-icon-left__separator {
          color: #8f99ae;
          margin-bottom: 45px;
        }

        .block-icon-left_quote {
          max-width: 500px;
          font-size: 30px;
          line-height: 1.29;
          letter-spacing: 0;
          margin-bottom: 45px;
        }

        .block-icon-left_author {
          font-size: 22px;
          line-height: 36px;
          letter-spacing: 0.8px;
        }

        .block-icon-left__image {
          width: 420px;
          display: flex;
          justify-content: center;
          background: url('${backgroundImage}') no-repeat center;
          background-size: contain;
        }
        .block-icon-left__subimage {
          max-width: 244px;
          left: auto;
          right: -50px;
        }

        .block-button-cta {
          margin-bottom: 20px;
        }

        @media (max-width: 1320px) {
          .block-icon-left__image {
            width: 480px;
          }
          .block-icon-left__subimage {
            max-width: 190px;
          }
          .block-icon-left_quote {
            max-width: 450px;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-icon-left,
          .block-icon-left__wrap {
            flex-direction: column;
            margin-bottom: 20px;
            padding-bottom: 20px;
            padding-top: 20px;
            margin-top: 0;
          }
          .block-icon-left__image {
            width: 520px;
          }
          .block-icon-left .app__icon-group {
            top: 0;
            right: 0;
          }
          .block-icon-left_quote {
            max-width: initial;
          }
          .block-icon-left__text {
            margin-left: 0;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .block-icon-left__image {
            width: 240px;
          }
          .block-icon-left {
            padding-bottom: 20px;
          }
          .block-icon-left .app__icon-group {
            margin-bottom: 20px;
          }
          .block-icon-left_quote.app__desc {
            font-size: 28px;
            line-height: 1.29;
            letter-spacing: 0;
          }
        }
      `}</style>
    </div>
  );
}
