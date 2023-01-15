import React from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Container from '../Container';
import { screen } from '../../constants';

export default function BlockPartnersHero() {
  const data = useStaticQuery(graphql`
    query PartnersQuery {
      heroImage: file(relativePath: { eq: "partner/partners-hero.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      heroMobImage: file(
        relativePath: { eq: "partner/partners-hero-mob.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <section className="block-partners-hero">
      <Container>
        <div style={{ position: 'relative' }}>
          <div className="block-partners-hero__inner">
            <div>
              <h1 className="hero__title">
                Become a Resolve
                <br />
                partner today
              </h1>
              <button
                className="request-button"
                onClick={() =>
                  navigate('https://b2b.resolvepay.com/partnerships-form')
                }
              >
                Apply now
              </button>
            </div>
            <p className="hero__content">
              Resolve partnerships means driving growth for yourself and your
              clients. Earn commissions or revenue shares on clients you refer.
              Help your clients unlock growth, enter new markets, and modernize
              their credit and payments workflows with Resolve’s powerful B2B
              payments features.
            </p>
            <button
              className="request-button mobile"
              onClick={() =>
                navigate('https://b2b.resolvepay.com/partnerships-form')
              }
            >
              Apply now
            </button>
          </div>
          <GatsbyImage
            className="partners-hero__image"
            image={getImage(data.heroImage)}
            alt="hero img"
          />
          <GatsbyImage
            className="partners-hero-mob__image"
            image={getImage(data.heroMobImage)}
            alt="hero img"
          />
        </div>
      </Container>
      <style jsx>{`
        .block-partners-hero {
          padding: 225px 0 300px;
          margin-bottom: 400px;
          background: linear-gradient(-8deg, #fff 24.2%, #f7f8fa 24.3%);
        }
        .block-partners-hero__inner {
          display: flex;
          justify-content: space-around;
        }
        .hero__title {
          max-width: 650px;
          margin-top: 0;
          margin-bottom: 40px;
          font-weight: 400;
          font-size: 64px;
          line-height: 72px;
          color: #1f325d;
        }
        .hero__content {
          max-width: 443px;
          margin-top: 145px;
          font-weight: 300;
          font-size: 20px;
          line-height: 28px;
          color: #1f325d;
        }
        .request-button {
          padding: 10px 47px 14px;
        }
        .request-button.mobile {
          display: none;
        }
        @media (max-width: 1250px) {
          .block-partners-hero {
            margin-bottom: 300px;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-partners-hero {
            margin-bottom: 250px;
          }
        }
        @media (max-width: ${screen.tabletMax}px) {
          .hero__title {
            margin-bottom: 16px;
            font-size: 36px;
            line-height: 44px;
          }
          .hero__content {
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 40px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-partners-hero {
            padding: 150px 0 200px;
            margin-bottom: 200px;
            background: linear-gradient(-8deg, #fff 18.2%, #f7f8fa 18.3%);
          }
          .block-partners-hero__inner {
            justify-content: start;
            flex-wrap: wrap;
          }
          .hero__content {
            margin-top: 0;
            max-width: 100%;
          }
          .request-button {
            display: none;
          }
          .request-button.mobile {
            display: block;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-partners-hero {
            margin-bottom: 100px;
          }
          .hero-content {
            color: #5e6677;
          }
        }
      `}</style>
      <style jsx global>{`
        .partners-hero__image {
          position: absolute;
          margin-top: 182px;
          border-radius: 8px;
        }
        .partners-hero-mob__image {
          display: none;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .partners-hero__image {
            margin-top: 100px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .partners-hero__image {
            display: none;
          }
          .partners-hero-mob__image {
            display: block;
            position: absolute;
            margin-top: 100px;
            border-radius: 4px;
          }
        }
      `}</style>
    </section>
  );
}
