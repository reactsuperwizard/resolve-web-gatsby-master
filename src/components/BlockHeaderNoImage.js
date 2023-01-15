import React from 'react';
import { navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Button from './Button';
import { screen } from '../constants';

export default function BlockHeaderNoImage({
  title = '',
  desc = '',
  pretitle = '',
  pretitleImage = null,
  pretitleImageAltText = '',
  secondaryButtonText = '',
  secondaryButtonTo = '/',
  primaryButtonText = '',
  primaryButtonTo = '/contact-sales/',
  maxWidth = '800',
  isCustomers,
  descTextAlign, removeMargin
}) {
  function handlePrimaryButtonClick() {
    navigate(primaryButtonTo);
  }

  function handleSecondaryButtonClick() {
    navigate(secondaryButtonTo);
  }

  return (
    <section className="block-header-no-image">
      <div className="block-header-no-image__content">
        {pretitleImage && (
          <GatsbyImage
            image={pretitleImage}
            alt={pretitleImageAltText}
            className="app__image block-header-pretitle_image"
          />
        )}
        <div className="block-header-no-image__pretitle app__pretitle">
          {pretitle}
        </div>
        <h1 className="app-hero__title">{title}</h1>
        <div className="app-hero__desc">{desc}</div>
        {(primaryButtonText || secondaryButtonText) && (
          <div className="app__actions">
            {primaryButtonText && (
              <Button onClick={handlePrimaryButtonClick} primary large hasArrow>
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && (
              <Button onClick={handleSecondaryButtonClick} large>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        )}
      </div>
      <style jsx>{`
        .block-header-no-image__content {
          text-align: center;
          padding-top: 104px;
          padding-bottom: 50px;
        }
        .block-header-no-image__content .app-hero__desc,
        .block-header-no-image__content .app-hero__title {
          max-width: ${maxWidth}px;
          margin-right: auto;
          margin-left: ${isCustomers ? 'inherit' : 'auto'};
        }
        .app-hero__title,
        .app-hero__desc {
          text-align: ${isCustomers || descTextAlign === 'left' ? 'left' : 'center'};
        }
        .app-hero__title {
        }
        .app-hero__desc {
          margin-bottom: ${(isCustomers || removeMargin) && '0'}px;
        }
        @media (max-width: ${screen.tabletMax}px) {
          .block-header-no-image__content {
            flex-direction: column-reverse;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-header-pretitle_image {
          max-width: 120px;
          margin: 0 auto 20px;
        }
      `}</style>
    </section>
  );
}
