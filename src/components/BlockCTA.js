import React from 'react';
import { navigate } from 'gatsby';

import Button from './Button';

import { screen } from '../constants';
import Container from './Container';

export default function BlockCTA({
  pretitle = '',
  title = '',
  primaryButtonTo = '/contact-sales/',
  primaryButtonText = '',
  secondaryButtonTo = '/',
  secondaryButtonText = '',
  align = 'left',
  hasBackground = false,
  background = '',
  maxWidth = '800px',
}) {
  function handlePrimaryButtonClick() {
    navigate(primaryButtonTo);
  }
  function handleSecondaryButtonClick() {
    navigate(secondaryButtonTo);
  }

  return (
    <section className="block-cta">
      <Container>
        <div className="block-cta__wrap">
          <div>
            {pretitle && <div className="app__pretitle">{pretitle}</div>}
            {title && <h2 className="app__title">{title}</h2>}
            <div className="app__actions">
              {primaryButtonText && (
                <Button
                  onClick={handlePrimaryButtonClick}
                  primary
                  large
                  hasArrow
                >
                  {primaryButtonText}
                </Button>
              )}
              {secondaryButtonText && (
                <Button large onClick={handleSecondaryButtonClick}>
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-cta {
          ${hasBackground
            ? `background-image: url('${background}'); padding-top: 160px; padding-bottom: 160px;`
            : ''}
          background-repeat: no-repeat;
          background-position-x: center;
          background-position-y: top;
        }

        .block-cta__wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          text-align: ${align};
        }

        .block-cta__wrap > div {
          flex: 1;
        }
        .block-cta__wrap .app__desc,
        .block-cta__wrap .app__title {
          max-width: ${maxWidth};
          ${align === 'center' ? 'margin: 0 auto;' : ''}
        }
        @media (max-width: ${screen.tabletMax}px) {
          .block-cta__wrap {
            margin: 0 50px;
          }
          .app__title {
            line-height: 1.35;
          }
        }
      `}</style>
    </section>
  );
}
