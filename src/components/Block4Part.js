import React, { useCallback } from 'react';

import { screen, fonts, colors } from '../constants';
import { navigate } from 'gatsby';

import { GatsbyImage } from 'gatsby-plugin-image';
import Container from './Container';
import Button from './Button';

export default function Block4Part({
  pretitle,
  title,
  desc,
  items,
  titleClass,
  grayBackground,
  primaryButtonTo = '/contact-sales/',
  primaryButtonText = '',
}) {
  const handlePrimaryButtonClick = useCallback(() => {
    navigate(primaryButtonTo);
  }, [primaryButtonTo]);

  return (
    <div className="block-4-part">
      <Container>
        <div className="block-4-part__wrap">
          {pretitle && (
            <div className="block-4-part__pretitle app__pretitle">
              {pretitle}
            </div>
          )}
          {title && (
            <h2 className={`block-4-part__title app__title ${titleClass}`}>
              {title}
            </h2>
          )}
          {desc && <div className="block-4-part__desc app__desc">{desc}</div>}

          <div className="block-4-part__items app__row">
            {items.map((item, i) => (
              <div key={`${item.title}-${i}`} className="block-4-part__item">
                {item.image && (
                  <GatsbyImage
                    image={item.image}
                    imgStyle={{ objectFit: 'contain' }}
                    alt={item.title}
                    className="app__image block-4-part__image"
                  />
                )}
                {item.icon}
                {item.pretitle && (
                  <div className="block-4-part__item-pretitle">
                    {item.pretitle}
                  </div>
                )}
                <h3 className="block-4-part__item-title">{item.title}</h3>
                <div className="block-4-part__item-content">{item.content}</div>
                <div className="block-4-part__item-sub-content">
                  {item.subContent}
                </div>
              </div>
            ))}
          </div>
          <div className="app__actions">
            {primaryButtonText && (
              <Button onClick={handlePrimaryButtonClick} primary large hasArrow>
                {primaryButtonText}
              </Button>
            )}
          </div>

          <style jsx>{`
            .block-4-part__wrap {
              justify-content: center;
              text-align: center;
            }

            .block-4-part__title {
              max-width: 800px;
              margin-right: auto;
              margin-left: auto;
            }

            .block-4-part__title_custom {
              font-size: 40px;
              line-height: 40px;
              ${grayBackground ? 'margin-top: 0' : ''}
            }

            .block-4-part__desc {
              max-width: 800px;
              margin-right: auto;
              margin-left: auto;
              margin-bottom: 50px;
            }

            .block-4-part__item {
              text-align: left;
              max-width: 300px;
              margin-right: 69px;
            }

            .block-4-part__item:last-child {
              margin-right: 0;
            }

            .block-4-part__items {
              margin-top: 46px;
              justify-content: center;
            }

            .block-4-part__item-title {
              font-family: ${fonts.halyardDisplay};
              font-size: 24px;
              font-weight: 600;
              line-height: 34;
              letter-spacing: 0;
            }
            .block-4-part__item-content {
              font-size: 20px;
              line-height: 34px;
              letter-spacing: 0.5px;
              color: ${colors.darkSlateBlue};
            }
            .block-4-part__item-sub-content {
              font-size: 14px;
              line-height: 17px;
              color: ${colors.darkSlateBlue};
            }

            @media (max-width: ${screen.tabletMax}px) {
              .block-4-part__title {
                max-width: 400px;
                margin-left: auto;
                margin-right: auto;
              }
              .block-4-part__items {
                align-items: center;
              }
              .block-4-part__item {
                text-align: center;
                max-width: 400px;
                margin: 0 0 69px 0;
              }

              .block-4-part__item:last-child {
                margin-bottom: 0;
              }
            }
          `}</style>
          <style jsx global>{`
            .block-4-part__item-pretitle {
              font-family: ${fonts.halyardDisplay};
              font-size: 40px;
              font-weight: 400;
              line-height: 48px;
              letter-spacing: 0;
              color: ${colors.darkSlateBlue};
            }

            .block-4-part {
              ${grayBackground ? 'background-color: #f8f9fa;' : ''}
            }

            .block-4-part__item-pretitle span {
              font-size: 38.5px;
              font-weight: 500;
            }

            .block-4-part__image {
              max-width: 150px;
              margin: 0 auto;
            }
          `}</style>
        </div>
      </Container>
    </div>
  );
}
