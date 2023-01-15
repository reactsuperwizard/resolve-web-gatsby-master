import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { colors, screen } from '../constants';
import Container from './Container';

export default function BlockLogos({ pretitle, title, data, image }) {
  return (
    <section className="block-logos">
      <Container>
        <div className="block-logos__wrap">
          {pretitle && (
            <div className="app__pretitle block-logos__pretitle">
              {pretitle}
            </div>
          )}
          {title && (
            <div className="app__title block-logos__title">
              <GatsbyImage image={getImage(image)} alt="Stars" />
              <span className="title-text">{title}</span>
            </div>
          )}
          <div className="block-logos__content">
            {data.map(({ image, name, offsetTop = 0 }, index) => (
              <GatsbyImage
                image={image}
                key={index}
                imgStyle={{ objectFit: 'contain' }}
                alt={name}
                className="app__image block-logos__image"
              // style={{ top: offsetTop }}
              />
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-logos {
          margin-top: -30px;
        }
        .block-logos__wrap {
          margin: 24px 0 60px;
        }
        .block-logos__content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .block-logos__title {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .block-logos__pretitle {
          text-align: center;
        }
        .title-text {
          margin-left: 8px;
          font-size: 17px;
          line-height: 32px;
          text-align: center;
          letter-spacing: 2px;
          text-transform: uppercase;
          color:${colors.indigo};
        }
        @media (max-width: ${screen.mobileMax}px) {
          .title-text {
            margin-left: 0;
            margin-top: 8px;
          }
          .block-logos__title {
            flex-direction: column;
            font-size: 12px;
            line-height: 20px;
          }
          .block-logos__content {
            flex-wrap: wrap;
          }
          .block-logos {
            margin-top: -50px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-logos {
            margin-top: 75px;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-logos__image {
          margin: 25px 20px;
          max-height: 84px;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-logos__image {
            margin: 8px;
            max-width: 90px;
            max-height: 50px;
          }
        }
      `}</style>
    </section>
  );
}
