import React from 'react';
import { Link } from 'gatsby';

export default function CardWithImage({ data
}) {
  return (
    <article className="card">
      <img className="card__image" src={data.image} alt={data.title} />
      <Link to={data.to}>
        <h4 className="card__title">{data.title}</h4>
      </Link>
      {data.content && <p className="card__content">{data.content}</p>}
      <style jsx>{`
        .card {
          max-width: 371px;
        }
        .card__image {
          width: 100%;
        }
        .card__title {
          margin-top: 20px;
          margin-bottom: 0;
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: #1F325D;
        }
        .card__content {
          margin-top: 20px;
          font-weight: 300;
          font-size: 17px;
          line-height: 24px;
          color: #5E6677;
        }
        @media (max-width: 768px) {
          .card {
            max-width: 304px;
          }
          .card__title {
            margin-top: 16px;
            font-size: 18px;
            line-height: 24px;
          }
          .card__content {
            margin-top: 10px;
            font-size: 17px;
            line-height: 24px;
          }
        }
      `}</style>
    </article>
  );
}
