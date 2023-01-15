import React from 'react';
import { screen } from "../../constants";
import Container from '../Container';

export default function BlockARDriveResults() {
  const drive_results = [
    {
      result: <p className="drive-results__list-result">2x</p>,
      desc: "increase in buyer purchasing power"
    },
    {
      result: <p className="drive-results__list-result">30-90</p>,
      desc: "days faster payment"
    },
    {
      result: <p className="drive-results__list-result">50%</p>,
      desc: "less time managing receivables"
    },
    {
      result: <p className="drive-results__list-result">9x</p>,
      desc: "faster credit checks"
    },
  ];
  return (
    <section className="block-drive-results">
      <Container>
        <div className="block-drive-results__inner">
          <h3 className="section__title">Drive results with our automated B2B accounts receivable platform</h3>
          <ul className="drive-results__list">
            {
              drive_results.map((item, idx) => <li className="drive-results__list-item" key={idx}>
                {item.result}
                <p className="drive-results__list-desc">{item.desc}</p>
              </li>)
            }
          </ul>
        </div>
      </Container>
      <style jsx>{`
        .block-drive-results {
          padding: 100px 0;
          background: linear-gradient(180deg, #1F325D 0%, #13203F 100%);
        }
        .block-drive-results__inner {
          display: flex;
          justify-content: space-between;
        }
        .section__title {
          margin: 0;
          max-width: 439px;
          font-weight: 400;
          font-size: 40px;
          line-height: 48px;
          color: #FFFFFF;
        }
        .drive-results__list {
          padding: 0;
          margin: 0;
          list-style: none;
          width: 60%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .drive-results__list-item {
          padding: 40px;
          margin: 20px 0;
          border-left: 1px solid #FB835E;
          width: 290px;
        }
        .drive-results__list-desc {
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;
          color: #FFFFFF;
          opacity: 0.7;
        }
        @media (max-width: 1337px) {
          .drive-results__list {
            width: 70%;
          }
          .drive-results__list-item {
            width: 190px;
          }
          .drive-results__list-result {
            margin-bottom: 8px;
            font-size: 32px;
            line-height: 40px;
          }
          .drive-results__list-desc {
            font-size: 17px;
            line-height: 20px;
          }
        }
        @media (max-width: 1081px) {
          .section__title {
            font-size: 24px;
            line-height: 32px;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-drive-results {
            padding: 65px 0;
          }
          .section__title {
            max-width: 171px;
          }
          .drive-results__list-item {
            padding: 24px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .drive-results__list {
            width: 80%;
          }
        }
        @media (max-width: 680px) {
          .block-drive-results {
            padding: 40px 0;
          }
          .section__title {
            max-width: 240px;
            margin-bottom: 64px;
          }
          .block-drive-results__inner {
            flex-wrap: wrap;
          }
          .drive-results__list {
            width: 100%;
            justify-content: flex-start;
          }
          .drive-results__list-item {
            padding: 8px 16px;
            width: 135px;
          }
          .drive-results__list-result {
            margin-bottom: 2px;
            font-size: 32px;
            line-height: 32px;
          }
          .drive-results__list-desc {
            font-size: 16px;
          }
        }
      `}</style>
      <style jsx global>{`
        .drive-results__list-result {
          margin-bottom: 12px;
          font-weight: 400;
          font-size: 48px;
          line-height: 48px;
          color: #FFFFFF;
        }
        @media (max-width: 1337px) {
          .drive-results__list-result {
            margin-bottom: 8px;
            font-size: 32px;
            line-height: 40px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .dollar {
            display: none;
          }
        }
        @media (max-width: 680px) {
          .drive-results__list-result {
            margin-bottom: 2px;
            font-size: 32px;
            line-height: 32px;
          }
        }
      `}</style>
    </section>
  );
}
