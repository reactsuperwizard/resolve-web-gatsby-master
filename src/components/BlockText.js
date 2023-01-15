import React from 'react';
import { navigate } from 'gatsby';

import Button from './Button';

import { screen } from '../constants';

export default function BlockText({
  pretitle = '',
  title = '',
  desc = '',
  primaryButtonTo = '/',
  primaryButtonText = '',
  secondaryButtonTo = '/',
  secondaryButtonText = '',
  textAlign = 'center',

  maxWidth = '700',
  grayLayout = false,
}) {
  function handlePrimaryButtonClick() {
    navigate(primaryButtonTo);
  }

  function handleSecondaryButtonTextClick() {
    navigate(secondaryButtonTo);
  }

  return (
    <section className={`block-text ${grayLayout ? 'block-text-gray' : ''}`}>
      <div className="block-text__wrap">
        <div>
          {pretitle && <div className="app__pretitle">{pretitle}</div>}
          {title && (
            <h2 className="app__title">
              <div className="title-text">{title}</div>
            </h2>
          )}
          <div className="app__desc block-text__desc">{desc}</div>
          <div className="app__actions">
            {primaryButtonText && (
              <Button onClick={handlePrimaryButtonClick} primary large hasArrow>
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && (
              <Button large onClick={handleSecondaryButtonTextClick}>
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .block-text__wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          text-align: ${textAlign};
          max-width: ${maxWidth}px;
          width: 100%;
          margin: 0 auto;
        }
        .block-text__wrap > div {
          flex: 1;
        }
        .block-text__wrap .app__pretitle,
        .block-text__wrap .app__title,
        .block-text__wrap .app__desc {
          max-width: ${maxWidth}px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1rem;
        }

        .block-text__wrap .app__desc {
          font-size: 1.25rem;
          line-height: 1.6em;
          margin-bottom: 1rem;
          margin-block-end: 1rem;
        }

        .block-text__wrap .title-text {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 50px;
        }

        .block-text__wrap .app__desc p {
          margin-bottom: 1rem;
          margin-block-start: 1rem;
          margin-block-end: 1rem;
        }

        .app__actions {
          text-align: center;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-text__wrap {
            align-items: center;
          }
          .block-text__wrap > div {
            flex: initial;
            margin: 0;
          }
          .block-text__wrap {
            flex-direction: column-reverse;
          }
          .app__title {
            line-height: 56px;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-text__wrap .app__desc p {
          margin-bottom: 1rem;
        }
        .block-text-gray .app__title {
          font-size: 24px;
          line-height: 48px;
          background-color: rgba(31, 50, 93, 0.03);
        }
      `}</style>
    </section>
  );
}
