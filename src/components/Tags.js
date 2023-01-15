import { Link } from 'gatsby';
import React from 'react';

import { fonts, colors } from '../constants';

import './fonts.css';

export default function Tags({ title, items = [] }) {
  return (
    <div className="tags-container">
      {title && <div className="tags-title">{title}</div>}

      <div className="tags">
        {items.map((item, key) => (
          <div className="tag" key={key}>
            {item.to ? (
              <Link to={item.to} className="tag-link">
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </div>
        ))}
        <style jsx>{``}</style>
        <style jsx global>{`
          .tags-container .tags-title {
            font-family: ${fonts.halyardDisplay};
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 32px;
            letter-spacing: 0.022px;
            color: ${colors.cello};
            margin-bottom: 22px;
          }

          .tags-container .tags {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: flex-start;
          }

          .tags-container .tags .tag {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 7px 20px;
            background: rgba(141, 141, 141, 0.08);
            border-radius: 30px;
            color: ${colors.cello};
            opacity: 0.9;
            margin: 0 15px 14px 0;
          }

          .tags-container .tags .tag a {
            color: ${colors.cello};
          }
        `}</style>
      </div>
    </div>
  );
}
