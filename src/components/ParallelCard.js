import React from 'react';
import { Link } from "gatsby";
import { colors, screen } from "../constants";

export default function ParallelCard({ data }) {
  return (
    <article className="parallel-card">
      <Link to={data.to}>
        {<img src={data.img} alt={data.title} style={{ width: '100%' }} />}
        <div className="card-inner">
          <h4 className="card__title">{data.title}</h4>
          <p className="card__desc">{data.desc}</p>
        </div>
      </Link>
      <style jsx>{`
        .card-inner {
          padding: 11px 17px;
        }
        .parallel-card {
          max-width: 372px;
          margin: 0 20px;
        }
        .parallel-card:hover .card-inner .card__desc {
          text-decoration-line: underline;
        }
        .card__title {
          margin-bottom: 8px;
          margin-top: 0;
          display: inline-block;
          position: relative;
          font-size: 15px;
          line-height: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${colors.orange2};
        }
        .card__title::before {
          content: '';
          position: absolute;
          bottom: -5px;
          width: 100%;
          height: 2px;
          background: ${colors.orange2};
        }
        .card__desc {
          font-size: 24px;
          line-height: 32px;
          font-weight: 400;
          color: ${colors.indigo};
        }
        @media (max-width: 1335px) {
          .parallel-card {
            max-width: 315px;
            margin: 0;
          }
        }
        @media (max-width: 1070px) {
          .parallel-card {
            max-width: 327px;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .card__title {
            font-size: 13px;
            line-height: 24px;
          }
          .card__title::before {
            content: '';
            bottom: -2px;
          }
          .card__desc {
            font-size: 18px;
            line-height: 24px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
        }
      `}</style>
      <style jsx global>{`
        @media (max-width: 1070px) {
          .cards-wrapper .parallel-card:nth-child(odd) {
            margin-top: 50px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .cards-wrapper .parallel-card {
            margin-top: 40px !important;
          }
        }
        @media (min-width: 1070px) {
          .cards-wrapper .parallel-card:nth-child(1) {
            margin-top: 120px;
          }
          .cards-wrapper .parallel-card:nth-child(2) {
            margin-top: 60px;
          }
        }
        `}</style>
    </article>
  );
}
