import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { AboutBack, screen } from "../../constants";

import Container from '../Container';
import SpaceDivider from "../SpaceDivider";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlockAboutResolve() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      aboutUs: file(
        relativePath: { eq: "about/about-us.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  console.log(data)
  return (
    <section className="block-about-resolve">
      <Container>
        <div className="block__wrapper">
          <h3 className="block__desc">Embedded payments means unified checkout and invoicing for your business buyers. B2B payments are becoming more consumerized every day, on both sides of the transaction.</h3>
          <div className="business-row">
            <p className="business-type">
              <strong>Business buyers</strong> expect the simplicity of an ecommerce checkout married with the sophistication of net terms payments and invoicing controls.</p>
            <p className="business-type"><strong>Business sellers</strong> expect to embed B2B payments and net terms wherever their buyers purchase, to unlock revenue and fuel business growth.</p>
          </div>
          <SpaceDivider height={60} />
          <h2 className="block__title">About Resolve</h2>
          <p className="block__content">
            {`The digitization and consumerization of B2B payments comes with a caveat. B2B transactions will always have nuanced business-to-human relationships at their core. We see the future of B2B payments as enhancing relationships while streamlining complex workflows. This is why Resolve’s guiding product vision is simple, relational, and embedded.

We combine the previously disparate resources needed to facilitate B2B commerce into a single platform: Embedded credit expertise, embedded invoice financing, and embedded payments. Resolve is the the ‘nerve center’ for every B2B transaction type, ecommerce, marketplace, traditional sales, or hybrid. We're the B2B payments platform that does it all.`}
          </p>
          <SpaceDivider height={80} />
          <GatsbyImage image={getImage(data.aboutUs)} alt='about us' style={{ margin: '40px 0' }} />
          <h2 className="block__title">Our beginnings</h2>
          <div className="block-row">
            <p className="block__content">Resolve’s co-founders, Chris Tsai and Brian Nguyen, are veteran fintech leaders and entrepreneurs. As former co-founders of a successful payments platform that was acquired by Indiegogo, they have developed a deep understanding of B2B businesses and how emerging fintech innovations can support their growth and scale. Post acquisition, Chris and Brian started working as Entrepreneurs In Residence at HVF, a startup studio led by Max Levchin, co-founder and CTO of PayPal.</p>
            <p className="block__content">While working on Affirm, Max's consumer-focused BNPL platform, the pair saw an opportunity in the ‘buy now, pay later’ space for B2B businesses. With a passion for helping B2B businesses solve payments and operational challenges, Chris and Brian spun off the B2B version of Affirm in 2018. Chris and Brian are both Y Combinator alumni, Wharton business school classmates, and hold technical degrees from MIT and Stanford University. Resolve unlocks net terms for thousands of businesses and the global team continues to rapidly expand.</p>
          </div>
        </div>
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
        .block__wrapper {
          max-width: 946px;
          margin: 0 auto;
        }
        .block__desc {
          margin: 0 0 48px;
          font-weight: 400;
          font-size: 36px;
          line-height: 44px;
          color: #1F325D;
        }
        .block__title {
          margin: 24px 0;
          font-weight: 400;
          font-size: 44px;
          line-height: 52px;
          color: #1F325D;
        }
        .block__content {
          margin: 0;
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #5E6677;
          white-space: pre-wrap;
        }
        .block-row, .business-row {
          display: flex;
          justify-content: space-between;
        }
        .block-row > p {
          margin: 0 20px;
          max-width: 453px;
        }
        .block-row p:first-child, .business-row p:first-child {
          margin-left: 0;
        }
        .block-row p:last-child, .business-row p:last-child {
          margin-right: 0;
        }
        .business-type {
          margin: 0;
          padding: 5px 0 5px 24px;
          border-left: 1px solid #FB835E;
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
          color: #5E6677;
        }
        .business-type strong {
          font-weight: 500;
        }
        @media (max-width: ${screen.desktop}px) {
          .block-about-hero {
            padding: 240px 0;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block__wrapper {
            max-width: 522px;
          }
          .block__desc {
            margin-top: 24px;
            margin-bottom: 36px;
            font-size: 22px;
            line-height: 28px;
          }
          .business-type {
            padding: 0 0 0 24px;
            margin: 0 12px;
            font-size: 16px;
            line-height: 22px;
          }
          .block__title {
            margin: 64px 0 16px;
            font-size: 24px;
            line-height: 32px; 
          }
          .block__content {
            font-size: 16px;
            line-height: 22px;
          }
          .block-row {
            flex-wrap: wrap;
          }
          .block-row > p {
            margin: 0 0 24px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .business-row {
            flex-wrap: wrap;
          }
          .business-row > p {
            margin: 0 0 24px;
          }
          .block__title {
            margin-top: 48px;
          }
        }
      `}</style>
    </section>
  );
}
