import React from 'react';

import Container from '../Container';
import { screen } from '../../constants';

export default function BlockWhyPartner({ title, items }) {

  return (
    <section className="block-why-partner">
      <Container>
        <div className="block__inner">
          <h2 className="block__title">{title}</h2>
          <div className="list-items">
            {
              items.map((item, idx) =>
                <div className="list-item" key={idx}>
                  <div className="item__icon">
                    <img src={item.icon} alt='icon' />
                  </div>
                  <div>
                    <h4 className="item__title">{item.title}</h4>
                    <p className="item__content">{item.content}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-why-partner {
          padding: 150px 0 0;
        }
        .block__inner {
          display: flex;
          justify-content: space-around;
        }
        .block__title {
          max-width: 308px;
          margin-top: 0;
          font-weight: 400;
          font-size: 44px;
          line-height: 52px;
          color: #1F325D;
        }
        .list-items {
          max-width: 700px;
        }
        .list-item {
          display: flex;
          margin-bottom: 64px;
        }
        .item__icon {
          width: 80px;
          height: 80px;
          margin-right: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          background: #FFFFFF;
          box-shadow: 0px 4px 12px rgba(128, 128, 128, 0.1), 0px 24px 24px rgba(216, 216, 216, 0.1);
          border-radius: 6px;
        }
        .item__title {
          margin-top: 0;
          margin-bottom: 16px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          color: #1F325D;
        }
        .item__content {
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #5E6677;
        }
        @media (max-width: ${screen.laptop}px) {
          .list-items {
            max-width: 500px;
          }
          .list-item {
            margin-bottom: 40px;
          }
          .item__icon {
            width: 56px;
            height: 56px;
            margin-right: 24px;
          }
          .item__title {
            margin-bottom: 8px;
            font-size: 20px;
            line-height: 24px;
          }
          .item__content {
            font-size: 16px;
            line-height: 22px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-why-partner {
            padding: 80px 0 0;
          }
          .block__inner {
            flex-wrap: wrap;
            justify-content: start;
          }
          .block__title {
            max-width: 100%;
            margin-bottom: 32px;
            font-size: 24px;
            line-height: 32px;
          }
          .list-items {
            max-width: 100%;
          }
          .list-item {
            margin-bottom: 40px;
          }
        }
      `}</style>
    </section>
  );
}
