import React from 'react';

import { fonts } from '../constants';

import './fonts.css';

export default function BlockSteps({
  pretitle,
  title,
  desc,
  data,
  wide = false,
}) {
  return (
    <div className={`block-steps ${wide ? 'block-steps-wide' : ''}`}>
      {pretitle && <div className="block-steps__pretitle">{pretitle}</div>}
      {title && <div className="block-steps__title">{title}</div>}
      {desc && <div className="block-steps__desc">{desc}</div>}
      <div className="block-steps__steps">
        {data.map(({ title, text }, index) => (
          <div key={index} className="block-steps__step">
            {title && <div className="block-steps__step-title">{title}</div>}
            {text && <div className="block-steps__step-text">{text}</div>}
          </div>
        ))}
      </div>
      <style jsx>{`
        .block-steps {
          max-width: 80rem;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .block-steps__title {
          font-family: ${fonts.halyardDisplay};
          font-size: 48px;
          font-weight: 600;
          line-height: 1.15;
          margin: 80px 0 24px;
        }

        .block-steps__desc {
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .block-steps__step {
          max-width: 25rem;
          margin-top: 0.5rem;
          text-align: left;
          margin: 0 auto 2rem;
        }

        .block-steps__step-title {
          font-family: ${fonts.halyardText};
          font-size: 16px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .block-steps__step-text {
          font-family: ${fonts.halyardDisplay};
          font-weight: 400;
          margin-top: 1rem;
          font-size: 18px;
        }

        .block-steps.block-steps-wide .block-steps__steps {
          display: flex;
          flex-wrap: wrap;
          max-width: 68%;
          margin: 0 auto;
        }
      `}</style>
      <style jsx global>{``}</style>
    </div>
  );
}
