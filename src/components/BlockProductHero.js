import React from 'react';
import { navigate } from "gatsby";
import { screen } from "../constants";
import Container from "./Container";

export default function BlockProductHero({ title, desc, image, cta_url }) {

  return (
    <section className="block-product-hero">
      <Container>
        <div className="block-product-hero__inner">
          <h1 className="block__title">{title}</h1>
          <p className="block__content">{desc}</p>
          <button className="request-button" onClick={() => navigate(cta_url)}>Request demo</button>
        </div>
        <img className="block-product-hero__img" src={image} alt="ar hero" />
      </Container>
      <style jsx>{`
        .block-product-hero {
          padding: 200px 0 0;
          background: linear-gradient(-8.7deg,#fff 33.3%,#F4F5F8 33.4%);
          text-align: center;
        }
        .block__content {
          font-weight: 300;
          font-size: 20px;
          line-height: 32px;
          color: #5E6677;
        }
        .block-product-hero__inner {
          max-width: 858px;
          margin: 0 auto;
        }
        .block-product-hero__img {
          margin-top: 74px;
        }
        .request-button {
          margin-top: 40px;
          padding: 10px 32.5px 14px;
        }
        @media (max-width: ${screen.laptop}px) {
          .block-product-hero__img {
            width: 100%;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block__title {
            font-size: 40px;
            line-height: 44px;
          }
          .block__content {
            font-size: 18px;
            line-height: 24px;
          }
          .block-product-hero__inner {
            max-width: 590px;
          }
          .block-product-hero__img {
            margin-top: 119px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-product-hero {
            padding: 150px 0 0;
            background: linear-gradient(-8.7deg,#fff 26.3%,#F4F5F8 26.4%);
          }
          .block__title {
            margin: 0 auto;
            margin-bottom: 16px;
            max-width: 278px;
            font-size: 36px;
            line-height: 44px;
          }
          .block__content {
            max-width: 310px;
            margin: 0 auto;
          }
          .block-product-hero__img {
            margin-top: 94px;
          }
        }
      `}</style>
    </section >
  );
}
