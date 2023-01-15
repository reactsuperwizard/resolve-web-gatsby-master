import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Container from '../components/Container';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Video from '../components/Video';
import SocialValidationCard from '../components/SocialValidationCard';

import { fonts, colors, screen } from '../constants';

export default function DemoVideoPage() {
  return (
    <Layout>
      <GatsbySeo
        title="Watch the Resolve demo video"
        description="We’ll walk you through the Resolve product basics, including how to run a credit check and get a customer approved for our risk-free net terms."
      />
      <Container>
        <div className="demo_video__container">
          <div>
            <h1 className="demo_video__title">
              Thanks! Here's our demo video...
            </h1>
            <p className="demo_video__subtitle">
              We&#39;ll walk through the Resolve product basics, including how
              to get a customer approved for our risk-free net terms.
            </p>
            <Video
              title="Resolve demo video"
              src="https://player.vimeo.com/video/514420526?autoplay=1"
              thumbnail="https://i.vimeocdn.com/video/1065109921.webp?mw=1300&mh=732&q=70"
              width="100%"
              ratio={640 / 360}
            />
          </div>
          <div>
            <SocialValidationCard />
          </div>
        </div>
      </Container>
      <Footer />
      <style jsx>{`
        .demo_video__container {
          margin: 140px auto;
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 128px;
        }
        @media (max-width: ${screen.navigationFirstPoint}px) {
          .demo_video__container {
            gap: 96px;
          }
        }
        @media (max-width: ${screen.tabletMax}px) {
          .demo_video__container {
            grid-template-columns: none;
            gap: 64px;
            margin-top: 100px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .demo_video__container {
            margin-top: 80px;
          }
        }
        .demo_video__container,
        .demo_video__container * {
          box-sizing: border-box;
        }
        .demo_video__title {
          font-family: ${fonts.gilroy};
          font-size: 30px;
          font-weight: 600;
          letter-spacing: 0;
          margin-bottom: 16px;
          line-height: 1.4;
        }
        .demo_video__subtitle {
          font-size: 22px;
          color: ${colors.primary};
          font-family: ${fonts.halyardDisplay};
          font-weight: 300;
          margin-bottom: 16px;
        }
      `}</style>
    </Layout>
  );
}
