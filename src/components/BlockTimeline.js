import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Container from './Container';
import { screen, colors, PricingBg5 } from '../constants';

import 'react-vertical-timeline-component/style.min.css';

export default function BlockTimeline({
  title,
  items,
}) {
  return (
    <section className="block-timeline">
      <Container>
        <div className="block-timeline__wrap">
          <h1 className="block-timeline__title app__title">
            {title}
          </h1>
          <div className="block-timeline__items app__row">
            {items.map((item, i) => (
              <div key={`${item.title}-${i}`} className="block-timeline__item">
                <div className="block-timeline__item-container">
                  <div className="block-timeline__item-wrap">
                    <div className="block-timeline__item-point"></div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {item.pretitle && (
                        <div className="block-timeline__item-pretitle">
                          {item.pretitle}
                        </div>
                      )}
                      <h3 className="block-timeline__item-title">{item.title}</h3>
                    </div>
                    <div className="block-timeline__item-content">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <VerticalTimeline>
            {items.map((item, i) =>
              <VerticalTimelineElement key={i} icon={<p className="vertical-timeline-element-icon__inner"></p>}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.pretitle && (
                    <div className="block-timeline__item-pretitle">
                      {item.pretitle}
                    </div>
                  )}
                  <h3 className="block-timeline__item-title">{item.title}</h3>
                </div>
                <div className="block-timeline__item-content">
                  {item.content}
                </div>
              </VerticalTimelineElement>
            )}
          </VerticalTimeline>
        </div>
      </Container>
      <img className="block__bg5" src={PricingBg5} alt="pricing bg" />
      <style jsx>{`
        .block-timeline {
          position: relative;
        }
        .block__bg5 {
          position: absolute;
          left: 0;
          bottom: -250px;
        }
        .block-timeline__wrap {
          justify-content: center;
        }

        .block-timeline__title {
          max-width: 543px;
          margin: 0 auto;
          font-weight: 400;
          font-size: 36px;
          line-height: 42px;
          text-align: center;
          color: #1F325D;
        }

        .block-timeline__desc {
          max-width: 800px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 50px;
        }

        @media (min-width: ${screen.laptop}px) {
          .block-timeline__items {
            justify-content: center;
            padding: 320px 0;
            position: relative;
          }
          .block-timeline__item {
            text-align: left;
            position: relative;
            padding-left: 24px;
            border-top: 1px dashed #1F325D;
            width: 25%;
          }
          .block-timeline__item:nth-child(4) {
            width: 400px;
            padding-left: 0;
          }
          .block-timeline__item:last-child {
            position: relative;
          }
          .block-timeline__item:last-child::before {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            width: 10px;
            height: 10px;
            transform-origin: 50% 50%;
            transform: translate(0, -5px) rotate(45deg);
            box-shadow: inset -0.1em 0.1em 0 0 #1F325D;
            border-radius: 0 0.15em 0 0;
          }
          .block-timeline__item * {
            box-sizing: border-box;
          }
          .block-timeline__item-container {
            position: relative;
          }
          .block-timeline__item-wrap {
            position: absolute;
            width: 319px;
            padding: 24px;
            background: #FFFFFF;
            box-shadow: 0px 2px 32px rgba(128, 128, 128, 0.1), 0px 24px 24px rgba(216, 216, 216, 0.1);
            border-radius: 6px;
            z-index: 2;
          }
          .block-timeline__item:nth-child(2) .block-timeline__item-wrap {
            left: -84%;
          }
          .block-timeline__item:nth-child(3) .block-timeline__item-wrap {
            right: -245px;
          }
          .block-timeline__item:nth-child(2n + 1) .block-timeline__item-point {
            bottom: -111px;
            left: 13px;
          }
          .block-timeline__item:nth-child(2n) .block-timeline__item-point {
            top: -111px;
            left: 13px;
          }
          .block-timeline__item .block-timeline__item-wrap::before {
            content: '';
            width: 1px;
            height: 100px;
            position: absolute;
            background: #D9D9D9;
          }
          .block-timeline__item:nth-child(2n + 1) .block-timeline__item-wrap {
            bottom: 100px;
          }
          .block-timeline__item:nth-child(2n + 1) .block-timeline__item-wrap::before {
            top: 100%;
          }
          .block-timeline__item:nth-child(2n) .block-timeline__item-wrap {
            top: 100px;
          }
          .block-timeline__item:nth-child(2n) .block-timeline__item-wrap::before {
            top: -100px;
          }
        }
        .block-timeline__item-point {
          width: 22px;
          height: 22px;
          position: absolute;
          background: #FFFFFF;
          border: 1px solid #DCDCDC;
          border-radius: 50%;
        }
        .block-timeline__item-point::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 12px;
          transform: translate(-50%, -50%);
          background: linear-gradient(180deg, #FB835E 0%, #EC6238 100%);
          border-radius: 50%;
        }

        .block-timeline__item-title {
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          background: linear-gradient(180deg, #FB835E 0%, #EC6238 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          margin: 0;
        }
        .block-timeline__item-content {
          margin-top: 20px;
          font-weight: 300;
          font-size: 16px;
          line-height: 22px;
          color: #5E6677;
        }
        .block-timeline__item-sub-content {
          font-size: 14px;
          line-height: 17px;
          color: ${colors.darkSlateBlue};
        }
        @media (max-width: ${screen.laptop}px) {
          .block-timeline__items, .block__bg5 {
            display: none;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-timeline__title {
            max-width: 393px;
            font-size: 28px;
            line-height: 36px;
          }
          .block-timeline__item-pretitle {
            padding: 2px 6px;
            font-size: 14px;
            line-height: 16px;
          }
          .block-timeline__item-title {
            font-size: 17px;
            line-height: 20px;
          }
          .block-timeline__item-content {
            margin-top: 10px;
            font-size: 15px;
            line-height: 20px;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-timeline__item-pretitle {
          padding: 4px 8px;
          background: #1F325D;
          border-radius: 4px;
          margin-right: 12px;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          color: #FFFFFF;
        }
        .vertical-timeline {
          display: none;
          margin-top: 32px;
        }
        .vertical-timeline-element-content {
          background: #FFFFFF;
          padding: 16px;
          box-shadow: 0px 2px 16px rgba(128, 128, 128, 0.1), 0px 24px 12px rgba(216, 216, 216, 0.1);
          border-radius: 6px;
          max-width: 291px;
        }
        .vertical-timeline-element-content-arrow {
          display: none !important;
        }
        .vertical-timeline-element-date {
          display: none !important;
        }
        .vertical-timeline:before {
          left: 50%;
          margin-left: -2px;
          width: 1px;
          border-right: 1px dashed #1F325D;
        }
        .vertical-timeline-element-icon {
          width: 22px !important;
          height: 22px !important; 
          margin-top: 16px;
          box-shadow: none;
          background: #FFFFFF;
          border: 1px solid #DCDCDC;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vertical-timeline-element-icon__inner {
          background: linear-gradient(180deg, #FB835E 0%, #EC6238 100%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .vertical-timeline:after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          width: 10px;
          height: 10px;
          transform-origin: 50% 50%;
          transform: translate(0, -5px) rotate(90deg);
          box-shadow: inset -0.1em 0.1em 0 0 #1F325D;
          border-radius: 0 0.15em 0 0;
        }
        @media (min-width: ${screen.mobileExtraSmall}px) {
          .vertical-timeline.vertical-timeline--two-columns {
            width: 100%;
            max-width: 636px;
          }
          .vertical-timeline-element-icon {
            left: 50%;
            transform: translateX(-50%);
          }
          .vertical-timeline-element {
            margin-bottom: 32px;
          }
          .vertical-timeline-element-content {
            margin-left: auto;
          }
          .vertical-timeline--two-columns .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content {
            float: left;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .vertical-timeline {
            display: block;
          }
          .vertical-timeline:after {
            content: "";
            display: block;
            position: absolute;
            right: 50%;
            bottom: -10px;
            height: 10px;
            transform-origin: 50% 50%;
            transform: translate(50%, -5px) rotate(135deg);
            box-shadow: inset -0.1em 0.1em 0 0 #1F325D;
            border-radius: 0 0.15em 0 0;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .vertical-timeline:before {
            left: 11px;
          }
          .vertical-timeline-element-content {
            margin-left: 32px;
          }
          .vertical-timeline:after {
            left: 5px;
            transform: translate(0, -5px) rotate(135deg);
          }
        }
      `}</style>
    </section>
  );
}
