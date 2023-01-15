import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

import { screen, fonts } from '../constants';
import Button from './Button';
import Container from './Container';

export default function BlockImageLeft({
  pretitle,
  title,
  description,
  quote,
  author,
  image,
  image_alt,
  image_width = 413,
  image_width_desktop = 480,
  sub_image,
  sub_image_alt,
  sub_image_width = 303,
  ctaText,
  ctaButtonTo,
  isFixed = false,
  image_horizontal_align = 'auto',
  grayBackground = false,
  hasArrow = true,
  opacity = 1,
  boxShadow = '',
  borderRadius = '',
  image_align = 'left',
}) {
  function handleCtaButtonTo() {
    navigate(ctaButtonTo);
  }
  return (
    <div className="block-image-left">
      <Container>
        <div className="block-image-left__wrap">
          <div className="app__image-container">
            <div className="app__image-group">
              <div className="app__image block-image-left__image">
                {!isFixed && <GatsbyImage image={image} alt={image_alt} />}
                {isFixed && <GatsbyImage image={image} alt={image_alt} />}
              </div>
              {sub_image && (
                <div className="app__subimage block-image-left__subimage">
                  {!isFixed && (
                    <GatsbyImage image={sub_image} alt={sub_image_alt} />
                  )}
                  {isFixed && (
                    <GatsbyImage image={sub_image} alt={sub_image_alt} />
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="block-image-left__text">
            {pretitle && <div className="app__pretitle">{pretitle}</div>}
            <h2 className="app__title">{title}</h2>
            <div className="block-image-left_desc">{description}</div>
            {quote && <hr className="block-image-left__separator" />}
            {quote && (
              <p className="app__desc block-image-left_quote">{quote}</p>
            )}
            {author && <div className="block-image-left_author">{author}</div>}
            {ctaButtonTo && (
              <Button
                onClick={handleCtaButtonTo}
                primary
                large
                hasArrow={hasArrow}
              >
                {ctaText}
              </Button>
            )}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-image-left {
          ${grayBackground ? 'background-color: #f8f9fa;' : ''}
        }

        .block-image-left__text .app__title {
          margin-top: 0;
        }

        .block-image-left__wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 64px;
        }

        .block-image-left_desc {
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.9px;
          margin-bottom: 45px;
        }

        .block-image-left__text {
          max-width: 600px;
          margin-left: 70px;
        }

        .block-image-left__text .app__title {
          font-size: 32px;
          font-weight: 400;
          line-height: 42px;
          font-family: ${fonts.halyardDisplay};
        }

        .block-image-left__separator {
          color: #8f99ae;
          margin-bottom: 45px;
        }

        .block-image-left_quote {
          max-width: 500px;
          font-size: 30px;
          line-height: 1.29;
          letter-spacing: 0;
          margin-bottom: 45px;
        }

        .block-image-left_author {
          font-size: 22px;
          line-height: 36px;
          letter-spacing: 0.8px;
        }

        .block-image-left__wrap .app__image-container {
          width: 619px;
          text-align: ${image_align};
          align-self: ${image_horizontal_align}
        }
        .block-image-left__wrap .app__image-group {
          display: inline-block;
        }

        .block-image-left__image {
          width: ${image_width}px;
          ${image_align === 'center' ? 'margin: 0 auto;' : ''}
          opacity: ${opacity};
        }
        .block-image-left__subimage {
          width: ${sub_image_width}px;
          left: auto;
          right: -50px;
          opacity: ${opacity};
        }

        @media (max-width: 1320px) and (min-width: ${screen.tabletMax + 1}px) {
          .block-image-left__image {
            width: ${image_width_desktop}px;
          }
          .block-image-left__subimage {
            width: 190px;
          }
          .block-image-left_quote {
            max-width: 450px;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-image-left__wrap {
            flex-direction: column;
            margin-bottom: 0;
            margin-top: 0;
            padding-bottom: 60px;
          }
          .block-image-left__image {
            width: 400px;
          }
          .block-image-left__wrap .app__image-container {
            width: 100%;
            text-align: center;
          }
          .block-image-left__wrap .app__image-group {
            top: 0;
            margin-top: 0;
            right: 0;
          }
          .block-image-left_quote {
            max-width: initial;
          }
          .block-image-left__text {
            margin-left: 0;
            text-align: center;
            padding-top: 50px;
            padding-bottom: 50px;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .block-image-left__wrap {
            padding-bottom: 0;
          }
          .block-image-left__wrap .app__image-group {
            margin-bottom: 0;
          }
          .block-image-left_quote.app__desc {
            font-size: 28px;
            line-height: 1.29;
            letter-spacing: 0;
          }
          .block-image-left__image {
            width: 250px;
          }
        }
      `}</style>
    </div>
  );
}
