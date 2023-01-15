import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Card from './Card';

import { screen, fonts, colors } from '../constants';

export default function SocialValidationCard() {
  const data = useStaticQuery(graphql`
    {
      affirm: file(relativePath: { eq: "third-party-logos/affirm.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      paypal: file(relativePath: { eq: "third-party-logos/paypal.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <>
      <Card
        title={
          <span className="social-validation-card__card-title">
            Put your net terms in good hands
          </span>
        }
        className="social-validation-card"
        hideLearnMore
      >
        <div className="social-validation-card__card-content">
          <span className="social-validation-card__card-content-description">
            Resolve is an Affirm spinout, built and backed by PayPal's founding
            team.
          </span>
          <div className="social-validation-card__card-image-container">
            <GatsbyImage
              image={data.paypal.childImageSharp.gatsbyImageData}
              alt="PayPal"
              className="social-validation-card__card-image paypal"
              imgStyle={{ objectFit: 'contain' }}
            />
            <GatsbyImage
              image={data.affirm.childImageSharp.gatsbyImageData}
              alt="Affirm"
              className="social-validation-card__card-image affirm"
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </Card>
      <style jsx global>{`
        .social-validation-card {
          max-height: 384px;
          box-shadow: 0 55.7784px 111.557px -55.7784px rgba(0, 0, 0, 0.2),
            0 0 11.5123px rgba(0, 0, 0, 0.05);
          padding: 60px;
          min-height: unset;
        }

        .social-validation-card:hover {
          cursor: default;
          box-shadow: 0 55.7784px 111.557px -55.7784px rgba(0, 0, 0, 0.2),
            0 0 11.5123px rgba(0, 0, 0, 0.05);
        }

        .social-validation-card__card-title {
          font-family: ${fonts.halyardDisplay};
          font-weight: 400;
          font-size: 32px;
          line-height: 40px;
          color: ${colors.darkSlateBlue};
        }

        .social-validation-card .card__title {
          max-width: 260px;
        }

        .social-validation-card__card-content {
          margin-top: 2px;
        }

        .social-validation-card__card-content-description {
          font-family: ${fonts.halyardDisplay};
          font-size: 20px;
          font-weight: 300;
          line-height: 32px;
          letter-spacing: 0.5px;
          color: ${colors.darkSlateBlue};
        }

        .social-validation-card__card-image-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          width: 100%;
          margin-top: 45px;
        }

        .social-validation-card__card-image {
          flex: 1 1 auto;
        }

        .social-validation-card__card-image.paypal {
          max-width: 192px;
          margin: 15px 15px 0 0;
        }

        .social-validation-card__card-image.affirm {
          max-width: 146px;
        }

        @media (max-width: ${screen.mobileMax}px) {
          .social-validation-card {
            padding: 24px;
          }

          .social-validation-card__card-image-container {
            margin-top: 25px;
          }

          .social-validation-card .card__title {
            max-width: unset;
          }

          .social-validation-card__card-image.paypal {
            max-width: 137px;
          }

          .social-validation-card__card-image.affirm {
            max-width: 98px;
          }
        }
      `}</style>
    </>
  );
}
