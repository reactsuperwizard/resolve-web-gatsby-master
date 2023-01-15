import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import { colors, fonts } from '../constants';
import './fonts.css';
import RightArrowSalmon from './icons/RightArrowSalmon';

export default function CaseStudySlideCard({
  title,
  description,
  image,
  link,
}) {
  return (
    <div role="button" tabIndex={0} className="case-study-slide-card">
      {image && (
        <GatsbyImage
          image={image}
          imgStyle={{ objectFit: 'cover' }}
          alt={title}
          className="case-study-slide-card__image" />
      )}
      <div className="case-study-slide-card__title">{title}</div>
      <div className="case-study-slide-card__description">{description}</div>

      <div className="case-study-slide-card__link">
        <Link to={link}>
          Read their story <RightArrowSalmon />
        </Link>
      </div>
      <style jsx>{`
        .case-study-slide-card {
          cursor: pointer;
          transition-duration: 300ms;
          color: ${colors.cello};
          display: flex;
          flex-direction: column;
        }

        .case-study-slide-card__title {
          font-family: ${fonts.halyardDisplay};
          font-weight: 600;
          font-size: 28px;
          line-height: 36px;
          letter-spacing: 0.028px;
          margin: 38px 0 15px;
        }

        .case-study-slide-card__description {
          font-family: ${fonts.halyardDisplay};
          font-size: 22px;
          line-height: 36px;
          letter-spacing: 0.78px;
          padding-bottom: 20px;
        }

        .case-study-slide-card__link {
          margin-top: auto;
        }
      `}</style>
      <style jsx global>{`
        .case-study-slide-card__image {
          width: 100%;
          max-width: 407px;
          height: 270px;
        }

        .case-study-slide-card__link a {
          font-family: ${fonts.halyardDisplay};
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: -0.1px;
          color: ${colors.salmon};
        }
      `}</style>
    </div>
  );
}
