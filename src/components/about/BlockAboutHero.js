import React from 'react';
import { AboutBack, AboutBackMob, AboutBackTablet, screen } from "../../constants";

import Container from '../Container';

export default function BlockAboutHero() {
  return (
    <section className="block-about-hero">
      <Container>
        <h1 className="hero__title">Embedded payments are the future of B2B commerce</h1>
      </Container>

      <style jsx>{`
        .block-about-hero {
          position: relative;
          padding: 300px 0;
          background-image: url(${AboutBack});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: top center;
        }
        .hero__title {
          max-width: 740px; 
          margin: 0 auto;
          font-weight: 400;
          font-size: 64px;
          line-height: 72px;
          text-align: center;
          color: #1F325D;
        }
        .hero__img {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
        }
        @media (max-width: ${screen.desktop}px) {
          .block-about-hero {
            padding: 240px 0;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-about-hero {
            padding: 165px 0 200px;
          }
          .hero__title {
            max-width: 450px;
            font-size: 36px;
            line-height: 44px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
           .block-about-hero {
            padding: 235px 0;
            background-image: url(${AboutBackTablet});
            background-size: 100% 100%;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-about-hero {
            padding: 200px 0;
          }
        }
        @media (max-width: 425px) {
          .block-about-hero {
            padding: 170px 0;
          }
        }
        @media (max-width: 375px) {
          .block-about-hero {
            padding: 195px 0;
            background-image: url(${AboutBackMob});
            background-size: contain;
          }
        }
      `}</style>
    </section>
  );
}
