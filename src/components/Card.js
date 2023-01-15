import React from 'react';
import { Link } from 'gatsby';

import { fonts } from '../constants';
import RightArrowIcon from './icons/RightArrow';

export default function Card({
  href,
  title,
  growth,
  hideLearnMore,
  className,
  children,
}) {
  const inner = (
    <>
      <div className="card__title">{title}</div>
      <div className="card__content">{children}</div>
      {!hideLearnMore && (
        <div className="card__cta">
          Learn more{' '}
          <RightArrowIcon
            width="23"
            height="23"
            color="#ff8072"
            backgroundColor="#ff8072"
          />
        </div>
      )}
    </>
  );

  let content;
  if (href) {
    if (href.startsWith('/')) {
      content = (
        <Link
          to={href}
          className={`${className} card ${growth ? 'card_growth' : ''}`}
        >
          {inner}
        </Link>
      );
    } else {
      content = (
        <a
          href={href}
          className={`${className} card ${growth ? 'card_growth' : ''}`}
        >
          {inner}
        </a>
      );
    }
  } else {
    content = (
      <div className={`${className} card ${growth ? 'card_growth' : ''}`}>
        {inner}
      </div>
    );
  }

  return (
    <>
      {content}
      <style jsx global>{`
        .card {
          background: #fff;
          min-height: 272px;

          display: flex;
          flex-direction: column;

          padding: 24px;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);

          border-radius: 8px;

          transition: box-shadow 0.33s;
        }

        .card_growth {
          min-height: 472px;
        }

        .card:hover {
          cursor: pointer;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25),
            0 5px 10px 4px rgba(90, 122, 190, 0.12);
        }

        .card__title {
          font-family: ${fonts.halyardDisplay};
          font-size: 22px;
          font-weight: bold;
          line-height: 1.45;
          letter-spacing: 0;

          color: #0F2454;
        }

        .card__content {
          flex: 1;
          margin-top: 5px;

          font-family: ${fonts.halyardDisplay};
          font-weight: normal;
          font-size: 18px;
          line-height: 1.33;
          letter-spacing: 0.6px;

          color: #0F2454;
        }

        .card__cta {
          display: flex;
          align-items: center;

          font-family: ${fonts.halyardDisplay};
          font-size: 16px;
          font-weight: normal;
          letter-spacing: 0.6px;

          color: #ff8072;
        }
      `}</style>
    </>
  );
}
