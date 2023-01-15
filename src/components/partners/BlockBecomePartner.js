import React from 'react';
import { navigate } from "gatsby"

import Container from '../Container';
import { screen } from '../../constants';

export default function BlockBecomePartner({ title, items }) {

  return (
    <section className="block-become-partner">
      <Container>
        <h2 className="block__title">{title}</h2>
        <div className="block__wrap">
          {items.map((item, idx) => (
            <div key={idx} className="block-item">
              <div className="block-item__key">
                {idx + 1}
              </div>
              <h4 className="block-item__title">{item.title}</h4>
              <p className="block-item__content">{item.content}</p>
            </div>
          ))}
        </div>
        <button
          className="request-button"
          onClick={() => navigate('/partnerships-form')}
        >
          Apply now
        </button>
      </Container>
      <style jsx>{`
        .block-become-partner {
          padding: 350px 0 0;
          background: linear-gradient(-8deg, #F7F8FA 75%, #fff 75.1%);
          text-align: center;
        }
        .block__title {
          margin: 0 0 48px;
          font-weight: 400;
          font-size: 44px;
          line-height: 52px;
          color: #1F325D;
        }
        .block__wrap {
          margin-bottom: 64px;
          display: flex;
          justify-content: space-around;
        }
        .block-item {
          max-width: 355px;
        }
        .block-item__key {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          box-shadow: 0px 4px 12px rgba(128, 128, 128, 0.1), 0px 24px 24px rgba(216, 216, 216, 0.1);
          border-radius: 8px;
          font-weight: 300;
          font-size: 28px;
          line-height: 32px;
          color: #FB835E;
          text-shadow: 0px 1.17871px 18.8594px rgba(251, 131, 94, 0.6);
        }
        .block-item__title {
          margin-bottom: 8px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          color: #1F325D;
        }
        .block-item__content {
          font-weight: 300;
          font-size: 17px;
          line-height: 24px;
          color: #5E6677; 
        }
        .request-button {
          padding: 10px 47px 14px;
        }
        @media (max-width: ${screen.desktop}px) {
          .block-become-partner {
            padding: 300px 0 0;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-become-partner {
            padding: 200px 0 0;
            background: linear-gradient(-8deg, #F7F8FA 85%, #fff 85.1%);
          }
          .block__wrap {
            margin-bottom: 0;
            flex-wrap: wrap;
          }
          .block-item {
            margin-bottom: 40px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-become-partner {
            background: linear-gradient(-8deg, #F7F8FA 88%, #fff 88.1%);
          }
          .block__title {
            margin-bottom: 40px;
            font-size: 24px;
            line-height: 32px;
          }
          .block-item {
            max-width: 327px;
          }
          .block-item__key {
            width: 56px;
            height: 56px;
            margin-bottom: 24px;
            font-size: 24px;
            line-height: 24px;
          }
          .block-item__title {
            font-size: 20px;
            line-height: 24px;
          }
          .block-item__content {
            font-size: 16px;
            line-height: 22px;
          }
        }
      `}</style>

    </section>
  );
}
