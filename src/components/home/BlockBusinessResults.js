import React from 'react';
import { screen } from '../../constants';
import Container from '../Container';

const results = [
  {
    value: '9x',
    key: 'faster credit checks',
  },
  {
    value: '3x',
    key: 'faster new sales cycle',
  },
  {
    value: '30-90',
    key: 'days faster payment',
  },
  {
    value: '5%',
    key: 'increased margins',
  },
  {
    value: '50%',
    key: 'decreased back-office time',
  },
];
export default function BlockBusniessResults() {
  return (
    <section className="block-business-results">
      <Container>
        <p className="kicker-text">
          Resolve drives real results in your business
        </p>
        <div className="result-items">
          {results.map((item, idx) => (
            <div className="result-item" key={idx}>
              <p className="result-item__value">{item.value}</p>
              <p className="result-item__key">{item.key}</p>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .block-business-results {
          margin-top: -150px;
          padding: 300px 0 150px;
          background: linear-gradient(-12deg, #f7f8fa 63%, #fff 63.1%);
        }
        .result-items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
        .result-item {
          width: 210px;
          margin: 0 10px;
          margin-bottom: 32px;
        }
        .kicker-text {
          margin-top: 100px;
          margin-bottom: 40px;
          font-size: 16px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-align: center;
          color: #1f325d;
        }
        .result-item__value {
          margin-bottom: 12px;
          font-size: 56px;
          font-weight: 400;
          line-height: 56px;
          text-align: center;
          color: #fb835e;
        }
        .result-item__key {
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
          text-align: center;
          color: #5e6677;
        }
        @media (max-width: ${screen.laptop}px) {
          .block-business-results {
            padding-bottom: 100px;
            background: linear-gradient(-12deg, #f7f8fa 67%, #fff 67.1%);
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-business-results {
            background: linear-gradient(-12deg, #f7f8fa 70%, #fff 70.1%);
          }
          .kicker-text {
            max-width: 242px;
            margin: 0 auto;
            margin-bottom: 24px;
            font-size: 13px;
            line-height: 20px;
            text-align: center;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-business-results {
            padding-top: 200px;
            padding-bottom: 70px;
            background: linear-gradient(-12deg, #f7f8fa 81%, #fff 81.1%);
          }
          .result-item {
            width: 160px;
            margin-left: 0;
            margin-right: 0;
          }
          .result-item__value {
            margin-bottom: 8px;
            font-size: 48px;
            line-height: 48px;
          }
          .result-item__key {
            font-size: 15px;
            line-height: 24px;
            color: #1f325d;
          }
        }
      `}</style>
    </section>
  );
}
