import React from 'react';

export default function BlockAboutDescription({ desc }) {
  return (
    <section className="block-about-description">
      <div className="app__row">
        <div className="block-about-description__left">{desc}</div>
      </div>
      <style jsx global>
        {`
          .block-about-description .app__desc {
            font-size: 1.3rem;
            line-height: 1.6em;
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0;
            margin-inline-end: 0;
          }
          .block-about-description .title {
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 500;
            line-height: 40px;
            letter-spacing: 1.32px;
            margin-bottom: 0;
          }
          .block-about-description .links-list {
            padding: 0;
            margin: 0;
            list-style: none;
          }
        `}
      </style>
    </section>
  );
}
