import React from 'react';
import { navigate } from 'gatsby';

import { screen, fonts } from '../constants';
import Button from './Button';
import Container from './Container';

export default function BlockIconRight({
  pretitle,
  title,
  description,
  quote,
  author,
  icon,
  backgroundImage,
  ctaText,
  ctaButtonTo,
  grayBackground,
}) {
  function handleCtaButtonTo() {
    navigate(ctaButtonTo);
  }
  return (
    <div className="block-icon-right">
      <Container>
        <div className="block-icon-right__wrap">
          <div className="block-icon-right__text">
            {pretitle && <div className="app__pretitle">{pretitle}</div>}
            <h2 className="app__title">{title}</h2>
            <div className="block-icon-right_desc">{description}</div>
            {quote && <hr className="block-icon-right__separator" />}
            {quote && (
              <p className="app__desc block-icon-right_quote">{quote}</p>
            )}
            {author && <div className="block-icon-right_author">{author}</div>}
            {ctaButtonTo && (
              <Button onClick={handleCtaButtonTo} primary large hasArrow>
                {ctaText}
              </Button>
            )}
          </div>
          <div className="app__icon-group">
            <div className="app__icon block-icon-right_image">{icon}</div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-icon-right {
          ${grayBackground ? 'background-color: #f8f9fa;' : ''}
        }

        .block-icon-right__wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 64px;
        }

        .block-icon-right_desc {
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.9px;
          margin-bottom: 45px;
        }

        .block-icon-right__text {
          max-width: 620px;
        }

        .block-icon-right__text .app__title {
          font-size: 32px;
          font-weight: 400;
          line-height: 42px;
          font-family: ${fonts.halyardDisplay};
        }

        .block-icon-right__separator {
          color: #8f99ae;
          margin-bottom: 45px;
        }

        .block-icon-right_quote {
          max-width: 500px;
          font-size: 31px;
          line-height: 1.29;
          letter-spacing: 0;
          margin-bottom: 45px;
        }

        .block-icon-right_author {
          font-size: 22px;
          line-height: 36px;
          letter-spacing: 0.8px;
        }

        .block-icon-right_image {
          width: 420px;
          background: url('${backgroundImage}') no-repeat center;
          background-size: contain;
          text-align: center;
          padding: 20px;
        }
        .block-icon-right_subimage {
          max-width: 244px;
        }

        @media (max-width: 1140px) {
          .block-icon-right_image {
            width: 340px;
          }
          .block-icon-right_subimage {
            max-width: 190px;
          }
          .block-icon-right_desc {
            max-width: 450px;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-icon-right,
          .block-icon-right__wrap {
            flex-direction: column-reverse;
            margin-top: 0;
            padding-bottom: 10px;
          }
          .block-icon-right_image {
            width: 480px;
            height: 420px;
            overflow: hidden;
          }
          .block-icon-right .app__icon-group {
          }
          .block-icon-right_desc {
            max-width: initial;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .block-icon-right_desc.app__desc {
            font-size: 28px;
            line-height: 1.29;
            letter-spacing: 0;
          }
          .block-icon-right_image {
            width: 220px;
            height: 235px;
          }
          .block-icon-right .app__icon-group {
          }
          .block-icon-right {
          }
        }
      `}</style>
    </div>
  );
}
