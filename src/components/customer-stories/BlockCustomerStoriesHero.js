import React from 'react';

import { screen, CustomerHero1, CustomerHero2, CustomerHeroMob, CustomerHeroTablet } from '../../constants';

export default function BlockCustomerStoriesHero({ title, desc }) {

  return (
    <section className="block-customer-stories">
      <img className="customer-hero__img1" src={CustomerHero1} alt='Customer Stories Hero Img' />
      <div className="content-wrapper">
        <span className="case-study__label">
          Case studies
        </span>
        <h1 className="app-hero__title">{title}</h1>
        <p className="app-hero__desc">{desc}</p>
      </div>
      <img className="customer-hero__img2" src={CustomerHero2} alt='Customer Stories Hero Img' />
      <img className="customer-hero__tablet" src={CustomerHeroTablet} alt='Customer Stories Hero Img' />
      <img className="customer-hero__mob" src={CustomerHeroMob} alt='Customer Stories Hero Img' />
      <style jsx>{`
        .block-customer-stories {
          padding: 260px 0;
          position: relative;
          background: linear-gradient( -8deg,#fff 25.2%,#F7F8FA 25.3% );
        }
        .customer-hero__img1 {
          top: 182px;
          left: 0;
        }
        .customer-hero__img2 {
          top: 70px;
          right: 0;
        }
        .customer-hero__tablet, .customer-hero__mob {
          display: none;
        }
        .customer-hero__img1, .customer-hero__img2 {
          position: absolute;
        }
        .content-wrapper {
          max-width: 566px;
          margin: 0 auto;
          text-align: center;
        }
        .case-study__label {
          padding: 8px;
          margin-bottom: 8px;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          text-align: center;
          color: #FB835E;
          border: 1px solid #FB835E;
          border-radius: 4px;
        }
        .app-hero__title {
          font-weight: 400;
          font-size: 64px;
          line-height: 72px;
          color: #1F325D;
        }
        .app-hero__desc {
          font-weight: 300;
          font-size: 20px;
          line-height: 28px;
          color: #5E6677;
        }
        @media (max-width: 1325px) {
          .customer-hero__img1 {
            width: 330px;
          }
          .customer-hero__img2 {
            width: 350px;
          }
        }
        @media (max-width: ${screen.navigationFirstPoint}px) {
          .content-wrapper {
            max-width: 450px;
          }
          .app-hero__title {
            margin-top: 8px;
            margin-bottom: 16px;
            font-size: 36px;
            line-height: 44px;
          }
          .app-hero__desc {
            font-size: 18px;
            line-height: 24px;
          } 
        }
        @media (max-width: ${screen.laptop}px) {
          .content-wrapper {
            max-width: 345px;
          }
          .customer-hero__img1 {
            width: 270px;
          }
          .customer-hero__img2 {
            width: 290px;
          }
        }
        @media (max-width: ${screen.tabletMax}px) {
          .block-customer-stories {
            padding: 160px 0 50px;
          }
          .customer-hero__img1, .customer-hero__img2 {
            display: none;
          }
          .customer-hero__tablet {
            display: block;
            margin: 0 auto;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .case-study__label {
            font-size: 14px;
            line-height: 16px;
          }
          .content-wrapper {
            max-width: 465px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .customer-hero__tablet {
            display: none;
          }
          .customer-hero__mob {
            display: block;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
