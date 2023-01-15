import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import SpaceDivider from '../../components/SpaceDivider';

import BlockCTA from '../../components/BlockCTA';
import BlockHeaderNoImage from '../../components/BlockHeaderNoImage';
import BlockQuote from '../../components/BlockQuote';
import BlockSteps from '../../components/BlockSteps';

import { colors } from '../../constants';

export const pageQuery = graphql`
  {
    hyperikonLedTubes: contentfulAsset(title: { eq: "hyperikon-led-tubes" }) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
    viceGolfLogo: contentfulAsset(title: { eq: "vice-golf-logo" }) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
    viceGolfMagazine: contentfulAsset(title: { eq: "vice-golf-magazine" }) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
    viceGolfBrandImage: contentfulAsset(
      title: { eq: "vice-golf-brand-image" }
    ) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`;

export default function CaseStudyViceGolf({ data }) {
  return (
    <Layout>
      <GatsbySeo title="Vice Golf Case Study" description="XXX" />
      <Container className="customers-page">
        <BlockHeaderNoImage
          pretitle={
            <>
              <Link className="customers-page-link" to="/case-studies/">
                CASE STUDIES
              </Link>
              <span> / VICE GOLF</span>
            </>
          }
          pretitleImage={data.viceGolfLogo.gatsbyImageData}
          title="How Vice Golf stormed the B2B US market"
          desc={
            <span>
              Vice Golf was founded in Germany in 2012 by Ingo Duellmann and
              Rainer Stoeckl. The company started selling its highest-quality
              golf balls at affordable prices first in Germany, expanded into
              other parts of Europe, and entered the U.S. market in 2015.
            </span>
          }
        />

        <GatsbyImage
          image={data.viceGolfMagazine.gatsbyImageData}
          imgStyle={{ objectFit: 'cover' }}
          alt="wide"
          className="app__wide-image"
        />

        <BlockSteps
          wide={true}
          title="The brief"
          desc="Vice Golf wanted to expand their B2B sales by targeting golf speciality stores and pro shop businesses. These retail shops expected to pay with net terms, which was a departure from Vice Golf's direct-to-consumer business where consumers paid before receiving their orders."
          data={[
            {
              text: 'Unlock trapped working capital from their invoices and reinvest those funds back into the business.',
            },
            {
              text: 'Because they were a lean team, they desired an all-in-one platform that could help them underwrite, establish credit lines, and collect payment from their B2B customers.',
            },
            {
              text: 'Vice Golf wanted a partner who would make it easy for their customers to pay however they want (check, credit card, wire transfer, ACH, etc).',
            },
            {
              text: 'Wanted a partner who could continue scaling with them.',
            },
          ]}
        />

        <GatsbyImage
          image={data.viceGolfBrandImage.gatsbyImageData}
          imgStyle={{ objectFit: 'cover' }}
          alt="wide"
          className="app__wide-image"
        />

        <BlockSteps
          wide={true}
          title="The solution"
          desc="Despite partnering during COVID, we got off to a great start. We were able to quickly educate their salesforce on how to offer net terms to their sales leads."
          data={[
            {
              title: 'Advance Pay',
              text: `In just about a few quarters, the company's wholesale business had rocketed from a small base of buyers to countless business customers and glowing wholesale customer feedback.`,
            },
            {
              title: 'Credit assessments',
              text: `In just about a few quarters, the company's wholesale business had rocketed from a small base of buyers to countless business customers and glowing wholesale customer feedback.`,
            },
            {
              title: 'Payment Portal',
              text: `In just about a few quarters, the company's wholesale business had rocketed from a small base of buyers to countless business customers and glowing wholesale customer feedback.`,
            },
            {
              title: 'API to scale',
              text: `In just about a few quarters, the company's wholesale business had rocketed from a small base of buyers to countless business customers and glowing wholesale customer feedback.`,
            },
          ]}
        />

        <BlockQuote
          title="B2B Sales Manager at Vice Golf"
          author="Alex Wicklein"
        >
          "Resolve has been like a spring... allowing us to grow and scale your
          B2B business more quickly than any other company. It's been a catalyst
          to faster and better growth for us."
        </BlockQuote>

        <SpaceDivider height={100} />

        <BlockCTA
          pretitle="Ready to get started?"
          title={<span>Make growth your story with Resolve</span>}
          primaryButtonText="Get started"
          primaryButtonTo="/contact-sales/"
          align="center"
        />
      </Container>
      <Footer />
      <style jsx global>{`
        .container.customers-page {
          padding: 0;
          max-width: 100%;
        }

        .customers-page-link {
          color: ${colors.darkSlateBlue};
        }

        .app__wide-image {
          max-width: 1000px;
          max-height: 400px;
          background: black;
          margin: 0 auto;
        }

        .block-cta .app__title {
          font-size: 42px;
          line-height: 3.5rem;
        }

        .block-cta .app__actions {
          margin-top: 20px;
        }
      `}</style>
    </Layout>
  );
}
