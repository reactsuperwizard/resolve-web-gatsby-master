import React, { useLayoutEffect, useState } from 'react';
import { navigate } from 'gatsby';

import { screen, fonts, colors, PricingBg3 } from '../constants';
import { trackSegment } from '../utils/segment';
import { getCampaign } from '../utils/utm';

import Container from './Container';
import GreenCheckIcon from "./icons/GreenCheck";

export default function BlockPricingPlans({
  items,
  plans,
  notes,
}) {
  const [planContentHeight, setPlanContentHeight] = useState('auto');

  useLayoutEffect(() => {
    function updateSize() {
      const planContentContainers = document.querySelectorAll(
        '.block-pricing-plans__item-content-wrap'
      );
      let maxPlanHeight = 0;
      planContentContainers.forEach(item => {
        if (item.clientHeight > maxPlanHeight) {
          maxPlanHeight = item.clientHeight;
        }
      });
      setPlanContentHeight(`${maxPlanHeight}px`);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  function handleButtonTo(to, planName) {
    trackSegment('Pricing page CTA clicked', {
      planName,
      context: {
        campaign: getCampaign(),
      },
    });
    navigate(to);
  }

  return (
    <section className="block-pricing-plans">
      <img className="block__bg3" src={PricingBg3} alt="pricing bg" />
      <Container>
        <div className="block-pricing-plans__wrap">
          <div className="block-pricing-plans__items">
            {items.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="block-pricing-plans__item"
              >
                <div className="block-pricing-plans__item-inner">
                  <div className="block-pricing-plans__item-general">
                    <h3 className="block-pricing-plans__item-title">
                      {item.title}
                    </h3>
                    <p
                      className="block-pricing-plans__item-content block-pricing-plans__item-content-wrap"
                      style={{ height: planContentHeight }}
                    >
                      {item.content}
                    </p>
                    <p className="block-pricing-plans__item-specific-content">
                      {item.subscriptionPricePrefix ? (
                        <span className="pretext">
                          {item.subscriptionPricePrefix}
                        </span>
                      ) : (
                        ''
                      )}
                      {item.subscriptionPrice ? (
                        <>
                          <span className="unit">$</span>
                          <span className="number">{item.subscriptionPrice}</span>
                          <span className="per">/mo</span>
                        </>
                      ) : (
                        ''
                      )}
                    </p>
                    <p className="block-pricing-plans__item-specific-billed-type">
                      billed annually
                    </p>
                    <div className="block-pricing-plans__item-action">
                      {item.ctaText && (
                        <button
                          className="request-button"
                          onClick={() =>
                            handleButtonTo(item.ctaTo, item.planName)
                          }
                        >
                          {item.ctaText}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="block-pricing-plans__item-specific">
                    <p className="block-pricing-plans__item-specific-features">Unified online and offline net terms</p>
                    {item.featuresBasic}
                  </div>
                  <div className="block-pricing-plans__item-max-buyer">
                    <p className="label">Max. buyer credit line</p>
                    <p className="price">{item.maxCreditLinePerCustomer}</p>
                  </div>
                  <div className="block-pricing-plans__item-specific">
                    <p className="block-pricing-plans__item-specific-title">
                      Advanced invoice fees
                    </p>
                    <ul className="block-pricing-plans__item-specific-fee-list">
                      {item.resolveFee.map((fee, i) => (
                        <li key={`${fee.type}-${i}`}>
                          <span className="type">
                            {fee.type}
                          </span>
                          <span className="value">
                            {fee.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="block-pricing-plans__all">
            <div className="block-pricing-plans__all-inner">
              <h2 className="block-pricing-plans__all-title">Included in all plans</h2>
              <p className="block-pricing-plans__all-label">Net terms invoicing & AR automation</p>
              <ul className="block-pricing-plans__all-list">
                {plans.map((plan, i) => (
                  <li key={i}>
                    <span className="icon"><GreenCheckIcon /></span>
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="block-pricing-plans__notes-list">
            {notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      </Container>
      <style jsx>{`
      .block-pricing-plans {
        position: relative;
        background: linear-gradient(-8deg,#F7F8FA 85%,#fff 85.1%);
      }
      .block__bg3 {
        position: absolute;
        left: 0;
        bottom: 220px;
      }
      .block-pricing-plans__wrap {
        max-width: 1193px;
        margin: 0 auto;
      }
      .block-pricing-plans__items {
        padding: 16px 0;
        display: flex;
      }
      .block-pricing-plans__item:last-child {
        margin-right: 0;
      }
      .block-pricing-plans__item {
        width: 50%;
        margin-right: 16px;
        padding: 8px;
        background: #FFFFFF;
        box-shadow: 0px 7px 40px rgba(0, 0, 0, 0.05);
        box-sizing: border-box;
        border-radius: 16px;
        overflow: hidden;
      }
      .block-pricing-plans__item-inner {
        padding: 56px 32px 32px;
        border: 1px solid #DCDCDC;
        border-radius: 8px;
      }
      .block-pricing-plans__item-title {
        margin: 0 0 16px;
        font-weight: 400;
        font-size: 44px;
        line-height: 52px;
        text-align: center;
        color: #1F325D;
      }
      .block-pricing-plans__item-content {
        font-weight: 300;
        font-size: 17px;
        line-height: 24px;
        text-align: center;
        color: #5E6677;
        margin-bottom: 8px;
      }
      .block-pricing-plans__item-action {
        margin-top: 40px;
      }
      .request-button {
        width: 100%;
        margin-bottom: 40px;
      }
      .mt-gap {
        margin-top: 40px;
      }
      .block-pricing-plans__item-specific-title {
        margin: 18px 0 12px;
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
        color: #1F325D;
      }
      .block-pricing-plans__item-specific-billed-type {
        margin-top: 4px;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #9AA0AD;
      }
      .block-pricing-plans__item-specific-content {
        white-space: nowrap;
        font-weight: 400;
        color: #FB835E;
        text-align: center;
      }
      .block-pricing-plans__item-specific-content .pretext {
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
      }
      .block-pricing-plans__item-specific-content .number {
        font-size: 48px;
        line-height: 48px;
        font-feature-settings: 'tnum' on, 'lnum' on;
      }
      .block-pricing-plans__item-specific-content .unit {
        vertical-align: top;
        font-size: 20px;
        line-height: 28px;
      }
      .block-pricing-plans__item-specific-content .per {
        vertical-align: bottom;
        font-size: 20px;
        line-height: 28px;
      }
      .block-pricing-plans__item-specific-content .number-text {
        font-size: 34.2631px;
        line-height: 47px;
        font-feature-settings: 'tnum' on, 'lnum' on;
        color: ${colors.darkSlateBlue};
        vertical-align: middle;
      }
      .block-pricing-plans__item-specific-features {
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #1F325D;
      }
      .block-pricing-plans__item-max-buyer {
        padding: 18px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #EEEEEE;
        border-bottom: 1px solid #EEEEEE;
        color: #1F325D;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 1px;
      }
      .block-pricing-plans__item-max-buyer .label {
        text-transform: uppercase;
      }
      .block-pricing-plans__item-specific-fee-list {
        padding-left: 0;
        margin: 0;
        list-style: none;
      }
      .block-pricing-plans__item-specific-fee-list li {
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
      }
      .block-pricing-plans__item-specific-fee-list li .type {
        color: #A5AAB6;
      }
      .block-pricing-plans__item-specific-fee-list li .value {
        letter-spacing: 1px;
        color: #1F325D;
      }
      .block-pricing-plans__all {
        margin: 0 0 24px;
        padding: 8px;
        background: #FFFFFF;
        box-shadow: 0px 7px 40px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
      }
      .block-pricing-plans__all-inner {
        padding: 40px 32px;
        border: 1px solid #DCDCDC;
        border-radius: 8px;
      }
      .block-pricing-plans__all-title {
        margin-top: 0;
        margin-bottom: 24px;
        font-weight: 400;
        font-size: 44px;
        line-height: 52px;
        text-align: center;
        color: #1F325D;
      }
      .block-pricing-plans__all-label {
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #1F325D;
      }
      .block-pricing-plans__all-list {
        margin: 0;
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
      }
      .block-pricing-plans__all-list li {
        width: 33.33%;
        margin-bottom: 8px;
        display: flex;
        font-weight: 300;
        font-size: 17px;
        line-height: 24px;
        color: #1F325D;
      }
      .block-pricing-plans__all-list li:last-child {
        margin-bottom: 0;
      }
      .block-pricing-plans__all-list li .icon {
        margin-right: 12px;
      }
      .block-pricing-plans__notes-list {
        padding-left: 0;
        list-style: none;
        font-size: 20px;
        line-height: 150%;
        font-weight: normal;
        letter-spacing: 0.0045em;
        color: ${colors.coolGrey};
        margin-top: 33px;
        margin-bottom: 0;
      }
      .block-pricing-plans__notes-list li {
        margin-bottom: 4px;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #5E6677;
      }
      .block-pricing-plans__notes-list li:last-child {
        margin-bottom: 0;
      }
      .block-pricing-plans__notes-list li::before {
        content: '';
      }
      @media (max-width: 1409px) {
        .block__bg3 {
          display: none;
        }
      }
      @media (min-width: ${screen.navigationFirstPoint}px) {
        .mt-gap {
          margin-top: auto;
        }
      }
     
      @media (max-width: ${screen.laptop}px) {
        .block-pricing-plans__title {
          font-size: 40px;
          line-height: 48px;
          letter-spacing: 0.5px;
          margin: 0 0 47px 0;
        }
        .block-pricing-plans__item {
          margin-right: 8px;
          padding: 6px;
          border-radius: 8px;
        }
        .block-pricing-plans__item-inner {
          padding: 32px 12px 12px;
        }
        .block-pricing-plans__item-title {
          margin: 0 0 16px;
          font-size: 32px;
          line-height: 32px;
        }
        .block-pricing-plans__item-content {
          font-size: 14px;
          line-height: 20px;
        }
        .block-pricing-plans__item-action {
          margin-top: 16px;
        }
        .request-button {
          margin-bottom: 24px;
        }
        .block-pricing-plans__item-specific-billed-type {
          font-size: 11px;
          line-height: 20px;
          letter-spacing: 1px;
        }
        .block-pricing-plans__item-specific-content .pretext {
          font-size: 32px;
          line-height: 40px;
        }
        .block-pricing-plans__item-specific-content .number {
          font-size: 40px;
          line-height: 40px;
        }
        .block-pricing-plans__item-specific-content .unit {
          font-size: 18px;
          line-height: 28px;
        }
        .block-pricing-plans__item-specific-content .per {
          font-size: 18px;
          line-height: 20px;
        }
        .block-pricing-plans__item-specific-content .number-text {
          font-size: 30px;
          line-height: 41px;
        }
        .block-pricing-plans__item-specific-content .unit-text {
          font-size: 20.2223px;
          line-height: 28px;
        }
        .block-pricing-plans__item-max-buyer {
          flex-direction: column;
          align-items: flex-start;
          padding: 16px 0;
          font-size: 13px;
          line-height: 16px;
        }
        .block-pricing-plans__item-max-buyer .label {
          margin-bottom: 4px;
        }
        .block-pricing-plans__item-specific-title {
          font-size: 14px;
          line-height: 18px;
        }
        .block-pricing-plans__item-specific-fee-list li {
          margin-bottom: 8px;
          font-size: 14px;
          line-height: 16px;
        }
        .block-pricing-plans__item-specific-fee-list li:last-child {
          margin-bottom: 0;
        }
        .block-pricing-plans__all {
          padding: 6px;
          border-radius: 8px;
        }
        .block-pricing-plans__all-title {
          margin-bottom: 16px;
          font-size: 32px;
          line-height: 32px;
        }
        .block-pricing-plans__all-label {
          font-size: 16px;
          line-height: 20px;
        }
        .block-pricing-plans__all-list li {
          margin-bottom: 4px;
          width: 48%;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
        }
        .block-pricing-plans__notes-list li {
          font-size: 13px;
          line-height: 18px;
        }
      }
      @media (max-width: ${screen.mobileMax}px) {
        .block-pricing-plans__item-content {
          margin-bottom: 8px;
        }
      }
      @media (max-width: 670px) {
        .block-pricing-plans__item-specific-feature-list {
          display: flex;
          flex-direction: column;
          margin: 0;
          height: 680px;
        }
        .block-pricing-plans__items {
          flex-direction: column;
        }
        .block-pricing-plans__item {
          margin: 0 0 16px 0;
          width: 100%;
        }
        .block-pricing-plans__item:last-child {
          margin-bottom: 0;
        }
        
        .block-pricing-plans__item-content {
          height: auto;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 25px;
        }
        .block-pricing-plans__item-specific-billed-type {
          font-size: 12px;
        }
        .block-pricing-plans__item-max-buyer {
          flex-direction: row;
          align-items: center;
        }
        .block-pricing-plans__all-list li {
          width: 100%;
          font-size: 16px;
          line-height: 22px;
        }
      }
    `}</style>
      <style jsx global>{`
      .block-pricing-plans__item-pretitle {
        font-family: ${fonts.halyardDisplay};
        font-size: 40px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0;
        color: ${colors.darkSlateBlue};
      }

      .block-pricing-plans__item-pretitle span {
        font-size: 38.5px;
        font-weight: 500;
      }
    `}</style>
    </section>
  );
}
