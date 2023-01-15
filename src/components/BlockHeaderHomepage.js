import React from 'react';
import { navigate } from 'gatsby';

import Button from './Button';
import GetDemoButton from './GetDemoButton';
import { screen, fonts } from '../constants';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BlockHeaderHomepage({
  title = '',
  desc = '',
  image,
  secondaryButtonText = '',
  secondaryButtonTo = '/',
  primaryButtonText = '',
  primaryButtonTo = '/',
}) {
  function handleSecondaryButtonText() {
    navigate(secondaryButtonTo);
  }

  return (
    <section className="block-header-homepage">
      <div className="block-header-homepage__content">
        <h1 className="block-header-homepage__header">
          Resolve means your customers get net terms, you get paid faster.
        </h1>
        <section className="block-header-homepage__section">
          <p className="app__desc block-header-homepage__desc">{desc}</p>
          <div className="app__actions">
            {primaryButtonText && <GetDemoButton text={primaryButtonText} />}
            {secondaryButtonText && (
              <Button large onClick={handleSecondaryButtonText}>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </section>

        <section className="block-header-homepage__section__mobile">
          <p className="app__desc block-header-homepage__desc">{desc}</p>
          <div className="app__actions">
            {primaryButtonText && <GetDemoButton text={primaryButtonText} />}
            {secondaryButtonText && (
              <Button large onClick={handleSecondaryButtonText}>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </section>
        <GatsbyImage
          image={image}
          alt="block how header"
          className="app__image block-header-with-image__image"
        />
      </div>
      <style jsx>{`
        .block-header-homepage {
          position: relative;
        }
        .block-header-homepage__header {
          font-family: ${fonts.halyardDisplay};
          font-weight: 600;
          line-height: 72px;
          font-size: 56px;
          letter-spacing: 0.0533333px;
          margin: 110px 0 54px;
          max-width: 850px;
        }

        .block-header-homepage__section__mobile {
          display: none;
        }

        @media (max-width: ${screen.mobileMax}px) {
          .block-header-homepage__header {
            line-height: 45px;
            font-size: 38.556px;
            letter-spacing: 0.03213px;
            margin: 66px 0 54px;
            max-width: 650px;
          }

          .block-header-homepage__section {
            display: none;
          }

          .block-header-homepage__section__mobile {
            display: inherit;
            margin-top: 175px;
          }

          .block-header-homepage__desc {
            margin-top: 30px;
            line-height: 1.6;
          }
        }

        .block-header-homepage__desc {
          max-width: 650px;
        }
      `}</style>
      <style jsx global>{`
        .block-header-homepage__content {
          height: 1185px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-header-homepage__content {
            height: 1090px;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .block-header-homepage__content {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
