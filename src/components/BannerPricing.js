import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { screen, colors } from '../constants';

export default function BannerPricing({ className = '', long = false }) {
  const data = useStaticQuery(graphql`
    {
      bgHeader: file(relativePath: { eq: "common/bg-header-pricing.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <div className={`banner ${className}`}>
      <style jsx>{`
        .banner {
          width: 100%;
          height: 1786px;

          background-image: url('${data.bgHeader.publicURL}');
          background-repeat: ${long ? 'repeat-y' : 'no-repeat'};
          background-position-x: center;
          background-position-y: initial;

          display: flex;
          justify-content: center;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: -1;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .banner {
            background-position-x: left;
            overflow: hidden;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .banner {
            background-position-x: left;
            background-position-y: 100px;
            background-size: 750px;
            overflow: hidden;
          }
        }
      `}</style>
      <style jsx global>{`
        .banner__image {
          width: 100%;
          height: auto;
          opacity: 0.9;
          border-radius: 5.8px;
          box-shadow: 2px 18px 47px 0 rgba(0, 0, 0, 0.15),
            0 7px 18px 0 rgba(0, 0, 0, 0.27);
          background-color: ${colors.bannerBackground};
          margin-bottom: 32.6px;
        }

        .banner__image:last-child {
          margin-bottom: 0;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .banner__image {
            margin-bottom: 23.4px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .banner__image {
            margin-bottom: 14.5px;
          }
        }
      `}</style>
    </div>
  );
}
