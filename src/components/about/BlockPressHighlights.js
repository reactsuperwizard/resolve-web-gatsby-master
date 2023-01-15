import React, { useState } from 'react';
import { chunk } from 'lodash';
import Container from '../Container';
import { screen } from "../../constants";
import ArrowIcon from '../icons/Arrow';

export default function BlockPressHighlights({ items }) {
  const [hover, setHover] = useState('')
  return (
    <section className="block-press-highlights">
      <Container style={{ maxWidth: '1190px' }}>
        <h2 className="block__title">Press highlights</h2>
        <div className="desktop">
          <div className="block__row">
            {chunk(items.slice(0), 3).map((row, index) => (
              <div key={index} className="row-3-cols">
                {row.map((column, idx) => (
                  <div
                    key={idx}
                    className="press-highlight-box"
                    onMouseEnter={() => setHover(column.icon)}
                    onMouseLeave={() => setHover("")}
                    role="presentation"
                  >
                    <a href={column.link} target="_blank" rel="noreferrer">
                      <div className="box__header">
                        {column.icon}
                      </div>
                      <div className="box__content">
                        {column.name}
                      </div>
                      <div className="box__footer">
                        <p>June 14, 2021</p>
                        <div className="arrow-icon">
                          <ArrowIcon color={hover === column.icon ? '#FFFFFF' : '#1F325D'} />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="tablet">
          {
            items.map((item, idx) =>
              <div
                key={idx}
                className="press-highlight-box"
                onMouseEnter={() => setHover(item.icon)}
                onMouseLeave={() => setHover("")}
                role="presentation"
              >
                <a href={item.link} target="_blank" rel="noreferrer" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div className="box__header">
                    {item.icon}
                  </div>
                  <div className="box__content">
                    {item.name}
                  </div>
                  <div className="box__footer">
                    <p>June 14, 2021</p>
                    <div className="arrow-icon">
                      <ArrowIcon color={hover === item.icon ? '#FFFFFF' : '#1F325D'} />
                    </div>
                  </div>
                </a>
              </div>
            )
          }
        </div>
      </Container>

      <style jsx>{`
        .block-press-highlights {
          padding: 250px 0 0;
          background: linear-gradient(-8deg, #F7F8FA 85%, #fff 85.1%);
        }
        .block__title {
          margin-bottom: 64px;
          font-weight: 400;
          font-size: 44px;
          line-height: 52px;
          text-align: center;
        }
        .block__row {
          display: grid;
          grid-template-columns: auto auto auto; 
          column-gap: 40px;
        }
        .press-highlight-box {
          max-width: 370px;
          margin-bottom: 40px;
          padding: 24px;
          box-sizing: border-box;
          background: #FFFFFF;
          box-shadow: 0px 0px 4px rgba(251, 131, 94, 0.3), 0px 12px 12px rgba(251, 131, 94, 0.4);
          border-radius: 8px;
          flex-shrink: 0;
        }
        .press-highlight-box:hover .arrow-icon {
          background: #1F325D;
          border-color: #1F325D;
          transition: all .2s ease-in-out;
        }
        .box__content {
          margin: 24px 0 60px;
          font-weight: 400;
          font-size: 22px;
          line-height: 28px;
          color: #1F325D;
        }
        .box__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .box__footer p {
          font-weight: 300;
          font-size: 17px;
          line-height: 24px;
          color: #1F325D;
          opacity: 0.7;
        }
        .arrow-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1.5px solid #eeeeee;
        }
        @media (min-width: ${screen.mobileMax}px) {
          .tablet {
            display: none !important;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .desktop {
            display: none;
          }
          .tablet {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .block-press-highlights {
            padding: 120px 0;
            background: linear-gradient(-8deg, #F7F8FA 93%, #fff 93.1%);
          }
          .block__row {
            grid-template-columns: auto; 
          }
          .row-3-cols {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .press-highlight-box {
            width: 327px;
            margin-bottom: 24px;
          }
          .box__content {
            margin-bottom: 44px;
          }
          .box__footer {
            margin-top: auto;
          }
          .box__footer p {
            font-size: 17px;
            line-height: 24px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-press-highlights {
            background: linear-gradient(-8deg,#F7F8FA 96%,#fff 96.1%);
          }
          .block__title {
            margin-bottom: 40px;
            font-size: 24px;
            line-height: 32px;
          }
          .block-row {
            flex-wrap: wrap;
          }
          .block-row > p {
            margin: 0 0 24px;
          }
          .box__content {
            font-size: 18px;
            line-height: 24px;
          }
          .arrow-icon {
            margin-left: auto;
            width: 32px;
            height: 32px;
          }
          .press-highlight-box {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
