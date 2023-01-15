import React from 'react';

import { screen, fonts, colors } from '../constants';
import { GatsbyImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';
import Button from './Button';
import Container from './Container';

export default function Block3Part({
  pretitle,
  title,
  desc,
  items,
  grayBackground,
  isPrimaryButton = true,
  primaryButtonPosition = 'center',
  primaryButtonStyle = '',
  primaryButtonTo = '/contact-sales/',
  primaryButtonText = '',
  large = false,
  titleTextAlign = 'center',
  wrapPadding = '100px 0',
}) {
  const handlePrimaryButtonClick = () => {
    navigate(primaryButtonTo);
  };

  return (
    <div className={`block-3-part ${large ? 'block-3-part-large' : ''}`}>
      <Container>
        <div className="block-3-part__wrap">
          {pretitle && (
            <div className="block-3-part__pretitle app__pretitle">
              {pretitle}
            </div>
          )}
          {title && <h2 className="block-3-part__title app__title">{title}</h2>}
          {desc && <div className="block-3-part__desc app__desc">{desc}</div>}

          <div className="block-3-part__items app__row">
            {items.map(item => (
              <div key={item.key || item.title} className="block-3-part__item">
                {item.image && (
                  <GatsbyImage
                    image={item.image}
                    imgStyle={{ objectFit: 'contain' }}
                    alt={item.title}
                    className="app__image block-3-part__image"
                  />
                )}
                {item.icon}
                {item.pretitle && (
                  <div className="block-3-part__item-pretitle">
                    {item.pretitle}
                  </div>
                )}
                {item.title && (
                  <h3 className="block-3-part__item-title">{item.title}</h3>
                )}
                {item.content && (
                  <div className="block-3-part__item-content">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={`app__actions ${primaryButtonPosition}`}>
            {primaryButtonText && (
              <Button
                onClick={handlePrimaryButtonClick}
                primary={isPrimaryButton}
                large
                hasArrow
                buttonStyle={primaryButtonStyle}
              >
                {primaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-3-part {
          ${grayBackground ? 'background-color: #f8f9fa;' : ''}
        }

        .block-3-part__wrap {
          justify-content: space-between;
          text-align: left;
          position: relative;
          padding: ${wrapPadding};
        }

        .block-3-part__title {
          max-width: 800px;
          text-align: ${titleTextAlign};
          margin-right: auto;
          ${titleTextAlign !== 'left' && 'margin-left: auto'};
        }

        .block-3-part__desc {
          max-width: 800px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
        }

        .block-3-part__item {
          max-width: 360px;
          margin-right: 69px;
        }

        .block-3-part__item:last-child {
          margin-right: 0;
        }

        .block-3-part__items {
          margin-top: 80px;
          justify-content: space-between;
        }

        .block-3-part__item-title {
          font-family: ${fonts.halyardDisplay};
          font-size: 24px;
          font-weight: 400;
          line-height: 40px;
          letter-spacing: 0.0533333px;
          color: ${colors.darkSlateBlue};
          margin: 1em 0;
        }
        .block-3-part__item-content {
          font-size: 20px;
          line-height: 1.6;
          letter-spacing: 0.5px;
        }

        .app__actions {
          text-align: center;
        }

        .app__actions.left {
          text-align: left;
        }

        .app__actions.right {
          text-align: right;
        }

        .block-3-part-large .block-3-part__item-title {
          font-size: 32px;
          line-height: 40px;
          min-height: 80px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-3-part__title {
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          .block-3-part__items {
            align-items: center;
          }
          .block-3-part__item {
            text-align: left;
            max-width: 400px;
            margin: 0 0 69px 0;
          }

          .block-3-part__item:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-3-part__item-pretitle {
          font-family: ${fonts.halyardDisplay};
          font-size: 55px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
        }
        .block-3-part__item svg,
        .block-3-part__item-pretitle svg {
          margin-left: -9px;
        }

        .block-3-part__item-pretitle span {
          font-size: 38.5px;
          font-weight: 500;
        }

        .block-3-part__image {
          max-width: 150px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
