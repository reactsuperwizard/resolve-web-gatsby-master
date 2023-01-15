import React, { useState } from 'react';
import { chunk } from 'lodash';

import ParallelCard from "./ParallelCard";
import { screen } from "../constants";
import './fonts.css';

export default function CaseStudyCards({ items = [] }) {
  const [isMore, setMore] = useState(false)
  return (
    <section className="case-studies__grid">
      <div className="desktop">
        {chunk(items.slice(0), 3).map((row, index) => (
          <div key={index} className="cards-wrapper">
            {
              row.map(column => <ParallelCard key={column.desc} data={column} />)
            }
          </div>
        ))}
      </div>
      <div className="cards-wrapper tablet">
        {
          isMore ?
            items.map(data => <ParallelCard key={data.desc} data={data} />)
            :
            items.slice(0, 6).map(data => <ParallelCard key={data.desc} data={data} />)
        }
      </div>
      <button className="request-button" onClick={() => setMore(!isMore)}>{isMore ? "Less more" : "Load more"}</button>

      <style jsx global>{`
        .case-studies__grid .row-3-cols {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .case-studies__grid .cards-wrapper .parallel-card .card-inner {
          padding: 11px 0;
        }
        .case-studies__grid .cards-wrapper .parallel-card .card-inner .card__title {
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          color: #8B92A3;
          text-transform: unset;
          text-decoration-line: underline;
        }
        .case-studies__grid .cards-wrapper .parallel-card .card-inner .card__title::before {
          display: none;
        }
        .case-studies__grid .request-button {
          display: none;
          margin: 0 auto;
          margin-top: 60px;
          padding: 10px 46.5px 14px;
        }
        @media (min-width: ${screen.laptop}px) {
          .tablet {
            display: none !important;
          }
        }
        @media (max-width: 1335px) {
          .desktop .cards-wrapper {
            justify-content: space-around !important;
          }
        }
        @media (max-width: 1150px) {
          .desktop .cards-wrapper {
            justify-content: space-between !important;
          }
        }
        @media (max-width: 991px) {
          .case-studies__grid .row-3-cols {
            margin-bottom: 0;
          }
        }
        @media (max-width: 1070px) {
          .desktop {
            display: none;
          }
          .tablet {
            display: flex !important;
            justify-content: space-around !important;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .case-studies__grid .cards-wrapper .parallel-card .card-inner .card__title {
            font-size: 14px;
            line-height: 16px;
          }
          .tablet {
            justify-content: space-between !important;
          }
          .case-studies__grid .request-button {
            display: block;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .tablet {
            justify-content: center !important;
          }
        }

      `}</style>
    </section>
  );
}
