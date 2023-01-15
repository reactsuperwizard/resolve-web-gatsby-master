import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { screen } from '../constants';
import RightArrow from '../images/common/right-arrow.inline.svg';

export default function CaseStudyCard({ title, link, image, logo, alt }) {
  return (
    <div className="case-study-card">
      <Link className="case-study-card__link" to={link}>
        <GatsbyImage
          image={image}
          alt={alt}
          className="case-study-card__image"
        />
        {logo !== '' && (
          <img src={logo} alt={alt} className="case-study-card__logo" />
        )}
        <div className="case-study-card__inner">
          <h3 className="case-study-card__title">{title}</h3>
          <div className="case-study-card__bottom">
            <p className="case-study-card__readmore">
              Read more
              <RightArrow className="arrow-icon" />
            </p>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .case-study-card {
          margin: 0 2%;
          position: relative;
          display: flex;
          flex-direction: column;
          width: 30.3%;
          opacity: 0.95;
          border-radius: 12px 12px 0 0;
          transition: all 0.3s ease;
        }
        .case-study-card:hover {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transform: translateY(-3px);
        }

        .case-study-card:first-child {
          margin-left: 0;
        }
        .case-study-card:last-child {
          margin-right: 0;
        }
        .case-study-card__inner {
          box-sizing: border-box;
          padding: 25px 22px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          background: #1f325d;
          border-radius: 0 0 12px 12px;
        }
        .case-study-card__title {
          margin: 0 0 15px 0;
          font-weight: 400;
          font-size: 28px;
          line-height: 34px;
          letter-spacing: 0.5px;
          color: #ffffff;
        }
        .case-study-card__bottom {
          padding-top: 15px;
          display: flex;
          align-items: center;
          justify-content: end;
          border-top: 2px solid #ffffff;
        }
        .case-study-card__readmore {
          margin-right: 8px;
          font-size: 21px;
          line-height: 34px;
          letter-spacing: 0.5px;
          color: #ffffff;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .case-study-card {
            margin: 0 0 2rem 0;
            width: 100%;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .case-study-card__inner {
            padding: 25px 19px 15px;
          }
          .case-study-card__title {
            font-size: 24px;
            line-height: 30px;
          }
          .case-study-card__readmore {
            font-size: 18px;
            line-height: 34px;
          }
        }
      `}</style>
      <style jsx global>{`
        .case-study-card__link {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .case-study-card__image {
          height: 290px;
          width: 100%;
          border-radius: 12px 12px 0 0;
        }
        .case-study-card__logo {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1;
        }
        .red-color {
          color: #ff6959;
          font-weight: 500;
        }
        .arrow-icon {
          margin-left: 8px;
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .case-study-card__image {
            height: 135px;
          }
          .arrow-icon {
            width: 18px;
            height: 11px;
          }
        }
      `}</style>
    </div>
  );
}
