import React from 'react';

import CaseStudySlideCard from './CaseStudySlideCard';

import { colors, fonts } from '../constants';
import './fonts.css';

export default function caseStudySlider({ title, items = [], showCTA = true }) {
  return (
    <div className="case-studies__slider-container">
      {title && <h4 className="case-studies-slider__title">{title}</h4>}
      {items.length > 0 && (
        <div className="case-studies-slider__grid">
          {items.map((item, index) => (
            <CaseStudySlideCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              image={item.image}
            ></CaseStudySlideCard>
          ))}
        </div>
      )}
      <style jsx global>{`
        .case-studies-slider__title {
          font-family: ${fonts.halyardDisplay};
          margin: 80px 0 70px;
          font-weight: 600;
          font-size: 54px;
          line-height: 64px;
          text-align: center;
          letter-spacing: 0.045px;
          color: ${colors.cello};
        }

        .case-studies-slider__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          grid-gap: 2rem 30px;
          margin: 0 auto 30px;
          padding: 0 50px;
        }
      `}</style>
    </div>
  );
}
