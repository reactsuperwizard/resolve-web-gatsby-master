import React, { useState } from 'react';
import { navigate } from "gatsby";
import Container from '../Container';
import { ScaleAR, ScaleARMobile, ScaleARTablet, screen } from '../../constants';

export default function BlockScaleAR() {
  const scale_list = [
    {
      title: "Automate your net terms program",
      content: "Shift your focus and gain back time. Streamline the management of your B2B accounts receivables from one digital platform.",
    },
    {
      title: "Save time with automated invoice management",
      content: "Automate all your AR reminders, collections, and communications from net terms to due upon receipt invoices.",
    },
    {
      title: "Decrease DSO, speed up payments",
      content: "Decrease your AR balance. Get your invoices paid within 1 business day with Advance Pay.",
    },
    {
      title: "Improve your customer's payment experience",
      content: "Our white-label payments portal provides more ways to pay with ACH, wire transfer, credit card, or check. Outsource your payment processing and free up your time for more valuable tasks.",
    },
  ];
  const [tab, setTab] = useState(0);
  return (
    <section className="block-scale-ar">
      <Container>
        <h2 className="block__title">How do we scale Accounts Receivable?</h2>
        <div className="block-scale-ar__inner">
          <div className="scale-ar-img__container">
            <img className="scale-ar__img" src={ScaleAR} alt="scale ar" />
            <img className="scale-ar__img-tablet" src={ScaleARTablet} alt="scale ar" />
            <img className="scale-ar__img-mobile" src={ScaleARMobile} alt="scale ar" />
          </div>
          <ul className="scale-ar__list">
            {
              scale_list.map((item, idx) => <li className={`scale-ar__list-item ${tab === idx ? "active" : ""}`} key={idx}>
                <h4 className="scale-ar__list-title" onClick={() => setTab(idx)} onKeyDown={() => setTab(idx)} role="presentation">{item.title}</h4>
                {tab === idx && <p className="scale-ar__list-content">{item.content}</p>}
              </li>)
            }
            <li className="scale-ar__list-item" style={{ paddingTop: '0', paddingBottom: '0' }}>
              <button className="request-button" onClick={() => navigate('/contact-sales/')}>Request demo</button>
            </li>
          </ul>
        </div>
      </Container>
      <style jsx>{`
        .block-scale-ar {
          padding-bottom: 230px;
        }
        .block__title {
          margin-bottom: 60px;
          text-align: center;
        }
        .block-scale-ar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .scale-ar-img__container {
          position: relative;
          width: 50%;
        }
        .scale-ar__img-tablet, .scale-ar__img-mobile {
          display: none;
        }
        .scale-ar__list {
          list-style: none;
          padding-left: 0;
          margin: 0;
          width: 50%;
        }
        .scale-ar__list-item {
          max-width: 545px;
          padding: 16px 32px;
          margin-bottom: 16px;
          box-sizing: border-box;
          cursor: pointer;
        }
        .scale-ar__list-item.active {
          padding: 32px;
          background: #FFFFFF;
          box-shadow: 0px 2px 32px rgba(128, 128, 128, 0.1), 0px 24px 24px rgba(216, 216, 216, 0.1);
          border-radius: 8px;
          transition: all ease-in .2s;
        }
        .scale-ar__list-item.active .scale-ar__list-title {
          color: #FB835E;
        }
        .scale-ar__list-item:last-child {
          margin: 0;
        }
        .scale-ar__list-title {
          margin: 0;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          color: #1F325D;
        }
        .scale-ar__list-content {
          margin-top: 12px;
          font-weight: 300;
          font-size: 17px;
          line-height: 24px;
          color: #5E6677;
        }
        .request-button {
          margin-top: 34px;
          padding: 10px 32.5px 14px;
        }
        @media (max-width: 1220px) {
          .scale-ar__img {
            width: 100%;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .scale-ar__list-item {
            padding: 8px 24px;
          }
          .scale-ar__list-item.active {
            padding: 16px 24px;
          }
          .scale-ar__list-title {
            font-size: 18px;
            line-height: 24px;
          }
          .scale-ar__list-content {
            margin-top: 8px;
            font-size: 16px;
            line-height: 22px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .scale-ar__list-item {
            max-width: 352px;
          }
          .scale-ar__img {
            display: none;
          }
          .scale-ar__img-tablet {
            display: block;
          }
        }
        @media (max-width: 695px) {
          .block-scale-ar {
            padding-bottom: 100px;
          }
          .scale-ar__img-tablet {
            display: none;
          }
          .scale-ar__img-mobile {
            display: block;
            margin: 0 auto;
          }
          .block-scale-ar__inner {
            flex-wrap: wrap;
          }
          .scale-ar-img__container {
            margin-bottom: 40px;
            text-align: center;
          }
          .scale-ar-img__container, .scale-ar__list {
            width: 100%;
          }
          .scale-ar__list-item {
            padding: 14px 24px;
            max-width: 100%;
          }
          .scale-ar__list-item.active {
            padding: 20px 24px;
          }
        }
      `}</style>
    </section>
  );
}
