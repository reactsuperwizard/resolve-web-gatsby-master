import React from 'react';

import Container from './Container';
import { screen } from '../constants';
import WhiteCheckIcon from "./icons/WhiteCheck";

export default function BlockTitleWithList({ title, list }) {
  return (
    <section className="block-title-list">
      <Container>
        <div className="block__inner">
          <h2 className="block__title">{title}</h2>
          <ul className="block-list">
            {
              list.map((item, idx) => <li key={idx} className="block-list__item">
                <p className="block-list__item-name">
                  <WhiteCheckIcon />
                  <span>{item.name}</span>
                </p>
                <p className="block-list__item-desc">{item.desc}</p>
              </li>)
            }
          </ul>
        </div>
      </Container>
      <style jsx>{`
        .block-title-list {
          padding-top: 140px;
        }
        .block__inner {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
        .block__title {
          width: 359px;
          font-size: 40px;
          line-height: 48px;
          flex-shrink: 0;
        }
        .block-list {
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          list-style: none;
        }
        .block-list__item {
          max-width: 320px;
          margin: 0 0 40px 80px;
        }
        .block-list__item-name {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #1F325D;
        }
        .block-list__item-name span {
          margin-left: 10px;
        }
        .block-list__item-desc {
          font-weight: 300;
          font-size: 16px;
          line-height: 24px;
          color: #5E6677;
        }
        @media (max-width: 1274px) {
          .block-list__item {
            margin-left: 30px;
          }
        }
        @media (max-width: 1159px) {
          .block__inner {
            flex-wrap: wrap;
          }
          .block__title {
            margin-bottom: 32px;
            width: 100%;
          }
          .block-list {
            width: 100%;
            justify-content: space-between;
          }
          .block-list__item {
            margin-left: 0;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-title-list {
            padding-top: 88px;
          }
          .block__title {
            font-size: 24px;
            line-height: 32px;
          }
          .block-list__item {
            max-width: 296px;
            margin-bottom: 24px;
          }         
          .block-list__item-name {
            margin-bottom: 8px;
            font-size: 18px;
            line-height: 24px;
          }
          .block-list__item-name span {
            margin-left: 8px;
          }
          .block-list__item-desc {
            font-size: 16px;
            line-height: 22px;
          }  
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-title-list {
            padding-top: 80px;
          }
          .block__title {
            max-width: 288px;
          }
          .block-list__item {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
