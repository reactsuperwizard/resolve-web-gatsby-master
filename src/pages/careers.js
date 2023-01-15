import React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Container from "../components/Container";
import BlockResolveValues from "../components/careers/BlockResolveValues";
import BlockResolveOffer from "../components/careers/BlockResolveOffer";
import { screen } from "../constants";

export const pageQuery = graphql`
  {
    buildWithUs: file(
      relativePath: { eq: "careers/build-with-us.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default function CareersPage({ data }) {
  return (
    <Layout>
      <GatsbySeo
        title="Careers"
        description="Here at Resolve we’re shaping the future of B2B commerce - we hope you’ll join us. Check out our open roles, and keep reading to learn a bit more about our culture"
      />
      <Container>
        <div className="block-careers-hero">
          <div className="hero-box">
            <h1 className="hero__title">Build something new with us</h1>
            <p className="hero__content">Here at Resolve we’re shaping the future of B2B commerce - we hope you’ll join us. Check out our open roles, and keep reading to learn a bit more about our culture</p>
            <button className="request-button" onClick={() => navigate("https://jobs.ashbyhq.com/resolvepay")}>Apply now</button>
          </div>
          <GatsbyImage className="hero__image" image={getImage(data.buildWithUs)} alt="Build something new with us" />
        </div>
      </Container>
      <BlockResolveValues />
      <BlockResolveOffer />
      <Footer />
      <style jsx>{`
        .block-careers-hero {
          margin: 130px 0 60px;
          display: flex;
          align-items: center;
        }
        .hero-box {
          max-width: 528px;
          margin: 0 auto;
        }
        .hero__title {
          margin: 0 0 24px;
          font-weight: 400;
          font-size: 64px;
          line-height: 72px;
          color: #1F325D;
        }
        .hero__content {
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #5E6677;
        }
        .request-button {
          margin-top: 40px;
          padding: 10px 47px 14px;
        }
        @media (max-width: ${screen.laptop}px) {
          .hero-box {
            max-width: 283px;
          }
          .hero__title {
            margin-bottom: 16px;
            font-size: 36px;
            line-height: 44px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-careers-hero {
            flex-wrap: wrap;
            flex-direction: column-reverse;
          }
          .hero-box {
            max-width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        .hero__image {
          width: 50%;
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .hero__image {
            width: 100vw;
            margin-bottom: 32px;
            margin-left: -16px;
          }
        }
      `}</style>
    </Layout>
  );
}
