import React from 'react';
import { Link } from 'gatsby';

import Container from '../Container';
import { colors, fonts, screen } from "../../constants";

function BlockContentWithIcon({
  title,
  items,
}) {
  return (
    <section className="block-content-with-icon">
      <Container>
        <h2 className="section__title">{title}</h2>
        <div className="block-part__items">
          {items.map(item => (
            <div key={item.title} className={`block-part__item app__row ${item.withButton ? 'with-button' : ''}`}>
              <div className="block-part__item-icon">
                {item.icon}
              </div>
              <div>
                <h3 className="block-part__item-title">{item.title}</h3>
                <p className="block-part__item-content">
                  {item.content}
                </p>
                {item.withButton && (
                  <Link to={item.withButton.linkTo} className='request-button'>
                    {item.withButton.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <style jsx>{`
        .block-content-with-icon {
          background: linear-gradient( -8.7deg,#F7F8FA 28.3%,#FFF 28.4% );
          padding-bottom: 500px;
        }
        .section__title {
          font-weight: 400;
          font-size: 48px;
          line-height: 56px;
          color: ${colors.indigo};
          margin-top: 0;
          margin-bottom: 56px;
        }
        .block-part__items {
          margin-top: 80px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .block-part__item {
          max-width: 577px;
          margin-bottom: 80px;
        }
        .block-part__item.with-button {
          margin: 0 auto;
        }
        .block-part__item-icon {
          flex-shrink: 0;
          margin-right: 40px;
        }
        .block-part__item-title {
          font-family: ${fonts.halyardDisplay};
          font-size: 24px;
          font-weight: 400;
          line-height: 32px;
          color: ${colors.indigo};
          margin-top: 0;
          margin-bottom: 16px;
        }
        .block-part__item-content {
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 0.5px;
          color: ${colors.lightIndigo};
        }
        @media (max-width: ${screen.mobileMax}px) {
          .section__title {
            font-size: 28px;
            line-height: 36px;
            margin-bottom: 32px;
          }
          .block-part__items {
            align-items: center;
          }
          .block-part__item {
            flex-direction: row;
            margin-bottom: 40px;
            max-width: 327px;
          }
          .block-part__item-icon {
            margin-right: 24px;
          }
    
          .block-part__item:last-child {
            margin-bottom: 0;
          }
          .block-part__item-title {
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 8px;
          }
          .block-part__item-content {
            font-size: 17px;
            line-height: 24px;
          }
        }
      `}</style>
      <style jsx global>{`
        .request-button {
          margin-top: 20px;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .customer-icon {
            width: 40px;
            height: 40px;
          }
        }
        `}</style>
    </section>
  );
}

export default BlockContentWithIcon;
