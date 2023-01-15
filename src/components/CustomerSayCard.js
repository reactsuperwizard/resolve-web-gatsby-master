import React from 'react';

import { FiveStars, screen } from '../constants';
import { navigate } from 'gatsby';

export default function CustomerSayCard({
  logo,
  siteName,
  review,
  name,
  role,
  link,
}) {
  return (
    <div className="customer-card">
      <div className="customer-card__head">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="customer-card__body">
        <div className="star-rating">
          <img className="five-stars" src={FiveStars} alt='five stars' />
          <p className="rating-text">(5-star rating average)</p>
        </div>
        <p className="review-text">{review}</p>
        <p className="customer-info">
          <span className="customer-name">{name}</span>
          <br />
          <span className="customer-role">{role}</span>
        </p>
      </div>
      <div className="customer-card__bottom">
        <button className="request-button" onClick={() => navigate(link)}>
          {`Read more ${siteName} reviews`}
        </button>
      </div>
      <style jsx>{`
        .customer-card {
          width: calc(50% - 20px);
          padding: 40px;
          margin: 0 20px;
          display: flex;
          box-sizing: border-box;
          box-shadow: 0px 0px 4px rgba(251, 131, 94, 0.3), 0px 12px 12px rgba(251, 131, 94, 0.4);
          border-radius: 16px;
          flex-direction: column;
          text-align: center;
        }
        .customer-card:first-child {
          margin-left: 0;
        }
        .customer-card:last-child {
          margin-right: 0;
        }
        .customer-card__head {
          margin-bottom: 40px;
        }
        .star-rating {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rating-text {
          margin-left: 14px;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #9AA0AD;
        }
        .review-text {
          margin-bottom: 32px;
          font-weight: 300;
          font-size: 22px;
          line-height: 32px;
          color: #1F325D;
        }
        .customer-name {
          font-weight: 400;
          font-size: 17px;
          line-height: 24px;
          color: #1F325D;
        }
        .customer-role {
          font-weight: 300;
          font-size: 17px;
          line-height: 24px;
          color: #1F325D;
        }
        .customer-card__bottom {
          margin-top: 40px;
        }
        .customer-card__bottom .request-button {
          width: 272px;
          padding: 10px 0 14px;
          border-radius: 60px;
          text-align: center;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .customer-card {
            padding: 40px 20px;
          }
          .customer-card__head .logo {
            width: 106px;
            height: 40px;
          }
          .star-rating {
            flex-direction: column;
          }
          .five-stars {
            width: 100px;
            height: 20px;
          }
          .rating-text {
            margin: 8px 0 0;
          }
          .review-text {
            font-size: 20px;
            line-height: 28px;
          }
          .customer-name {
            font-size: 15px;
            line-height: 16px;
          }
          .customer-role {
            font-size: 14px;
            line-height: 16px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .customer-card {
            padding: 24px;
            margin: 0 0 40px;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
