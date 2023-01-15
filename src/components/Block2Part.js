import React from 'react';

import { screen, fonts, colors } from '../constants';
import { GatsbyImage } from 'gatsby-plugin-image';
import Container from './Container';

export default function Block2Part({
  pretitle,
  title,
  grayBackground,
  desc,
  items,
  isFixed = false,
  textAlign = 'left',
  withBorders = false,
}) {
  return (
    <div className="block-2-part">
      <Container>
        <div className="block-2-part__wrap">
          {pretitle && (
            <div className="block-2-part__pretitle app__pretitle">
              {pretitle}
            </div>
          )}
          {title && (
            <div className="block-2-part__title-container">
              <h2 className="block-2-part__title app__title">{title}</h2>
            </div>
          )}
          {desc && <div className="block-2-part__desc app__desc">{desc}</div>}

          <div
            className={`block-2-part__items app__row ${
              withBorders ? 'block-2-part__borders' : ''
            }`}
          >
            {items.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className={`${
                  item.className ? item.className : ''
                } block-2-part__item`}
              >
                {item.image && !isFixed && (
                  <GatsbyImage
                    image={item.image}
                    imgStyle={{ objectFit: 'contain' }}
                    alt={item.title}
                    className="app__image block-2-part__image"
                  />
                )}
                {item.image && isFixed && (
                  <GatsbyImage
                    image={item.image}
                    imgStyle={{ objectFit: 'contain' }}
                    alt={item.title}
                    className="app__image block-2-part__image"
                  />
                )}
                {item.icon}
                {item.pretitle && (
                  <div className="block-2-part__item-pretitle">
                    {item.pretitle}
                  </div>
                )}
                <h3 className="block-2-part__item-title">{item.title}</h3>
                <div className="block-2-part__item-content">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-2-part {
          ${grayBackground ? 'background-color: #f8f9fa;' : ''}
        }

        .block-2-part__wrap {
          justify-content: space-between;
          text-align: ${textAlign};
          position: relative;
          padding: 100px 0;
        }

        .block-2-part__title-container {
          text-align: ${textAlign};
        }
        .block-2-part__title {
          max-width: 800px;
          display: inline-block;
          padding: 20px 0;
        }

        .block-2-part__desc {
          max-width: 800px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
        }

        .block-2-part__item {
          max-width: 580px;
          margin-right: 69px;
        }

        .block-2-part__item:last-child {
          margin-right: 0;
        }

        .block-2-part__items {
          justify-content: space-between;
        }

        .block-2-part__item-title,
        .block-2-part__item-content .block-2-part__item-title {
          font-family: ${fonts.halyardDisplay};
          font-size: 30px;
          font-weight: 400;
          line-height: 1.33;
          letter-spacing: 0;
        }
        .block-2-part__item-content {
          font-size: 20px;
          line-height: 1.4;
          letter-spacing: 0.7px;
        }

        .block-2-part__item-content .integration-logo .icon,
        .block-2-part__item-content .integration-logo .icon-title {
          vertical-align: middle;
          display: inline-block;
        }

        .block-2-part__borders .block-2-part__item {
          border: 1px solid ${colors.brightGray};
          box-sizing: border-box;
          border-radius: 10px;
          padding: 40px 40px 65px;
          margin: 0;
          flex: 1 1 50%;
          max-width: 49%;
        }

        .block-2-part__borders .block-2-part__item-title {
          font-size: 40px;
          line-height: 48px;
          margin: 0 0 20px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-2-part__title {
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          .block-2-part__items {
            align-items: center;
          }
          .block-2-part__item {
            text-align: center;
            max-width: 400px;
            margin: 0 0 69px 0;
          }

          .block-2-part__item:last-child {
            margin-bottom: 0;
          }
          .block-2-part__borders .block-2-part__item {
            max-width: 100%;
            padding: 10px 30px 30px;
          }
          .block-2-part__borders .block-2-part__item:first-child {
            margin-bottom: 20px;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-2-part__item-pretitle {
          font-family: ${fonts.halyardDisplay};
          font-size: 55px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0;
        }

        .block-2-part__item-pretitle span {
          font-size: 38.5px;
          font-weight: 500;
        }

        .block-2-part__image {
          max-width: 150px;
          margin: 0 auto;
        }

        .block-2-part__item-pretitle .gatsby-image-wrapper {
          height: 400px;
          text-align: center;
        }
        .block-2-part__item-pretitle .gatsby-image-wrapper > div {
          display: none;
        }
        .block-2-part__item-pretitle .gatsby-image-wrapper picture img {
          width: auto !important;
          position: static !important;
          max-width: 100%;
          max-height: 100%;
        }

        .block-2-part__borders .block-2-part__item-title svg {
          margin: 0 12px -10px 0;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-2-part__item-pretitle .gatsby-image-wrapper {
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
