import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import BlockAboutHero from "../components/about/BlockAboutHero";
import BlockAboutResolve from "../components/about/BlockAboutResolve";
import SpaceDivider from '../components/SpaceDivider';
import BlockPressHighlights from "../components/about/BlockPressHighlights";

import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
    images: allFile(filter: { relativeDirectory: { eq: "about" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default function AboutPage({ data }) {
  const images = edgesByName(
    data.images,
    node => node.childImageSharp.gatsbyImageData
  );
  return (
    <Layout>
      <GatsbySeo
        title="About"
        description="Learn about our company Resolve. Discover why Resolve is the best way to accept B2B payments."
      />
      <BlockAboutHero />
      <BlockAboutResolve />
      <SpaceDivider height="75" />
      <BlockPressHighlights
        title="Press highlights"
        col="3"
        items={[
          {
            key: 'pulse20',
            icon: (
              <GatsbyImage
                image={images['pulse20']}
                alt="Pulse 2.0"
              />
            ),
            name: "Affirm Spinout And Credit Billing Solutions Company Resolve Raises $60 Million",
            link: "https://pulse2.com/affirm-spinout-and-credit-billing-solutions-company-resolve-raises-60-million/",
          },
          {
            key: 'finextragr',
            icon: (
              <GatsbyImage
                image={images['finextragr']}
                alt="Finextra"
              />
            ),
            name: "Affirm B2B BNPL spinoff Resolve lands $60 million in funding",
            link: "https://www.finextra.com/newsarticle/38120/affirm-b2b-bnpl-spinoff-resolve-lands-60-million-in-funding?utm_medium=rssfinextra&utm_source=finextrafeed/",
          },
          {
            key: 'pymntscom',
            icon: (
              <GatsbyImage
                image={images['pymntscom']}
                alt="Pymnts.com"
              />
            ),
            name: "Resolve CEO: BNPL Fixes The Net Terms Problem For Small Suppliers",
            link: "https://www.pymnts.com/news/payment-methods/2021/resolve-ceo-bnpl-fixes-the-net-terms-problem-for-small-suppliers/"
          },
          {
            key: 'finledger',
            icon: (
              <GatsbyImage
                image={images['finledger']}
                alt="finLedger"
              />
            ),
            name: "Resolve, a spinout from BNPL giant Affirm, nabs $60M in funding",
            link: "https://finledger.com/2021/05/25/resolve-a-spinout-from-bnpl-giant-affirm-nabs-60-million-in-funding-round/"
          },
          {
            key: 'saasind',
            icon: (
              <GatsbyImage
                image={images['saasind']}
                alt="SaaS industry"
              />
            ),
            name: "Resolve raises $60 million in a funding round led by Initialized Capital",
            link: "https://saasindustry.com/news/resolve-raises-60-million-in-a-funding-round-led-by-initialized-capital/"
          },
          {
            key: 'vcnews',
            icon: (
              <GatsbyImage
                image={images['vcnews']}
                alt="News Daily"
              />
            ),
            name: "Resolve Scoops Up $60M",
            link: "https://vcnewsdaily.com/resolve/venture-capital-funding/ssghgwygwf/"
          },
          {
            key: 'americanbanker',
            icon: (
              <GatsbyImage
                image={images['americanbanker']}
                alt="American Banker"
              />
            ),
            name: "Resolve raises $60 million to boost business financing",
            link: "https://www.americanbanker.com/payments/news/resolve-raises-60-million-to-boost-business-financing/"
          },
          {
            key: 'yahoofinance',
            icon: (
              <GatsbyImage
                image={images['yahoofinance']}
                alt="Yahoo! Finance"
              />
            ),
            name: "Affirm spinout Resolve raises $60M for its B2B 'buy now, pay later' platform",
            link: "https://au.finance.yahoo.com/news/affirm-spinout-resolve-raises-60m-110007183.html/"
          },
          {
            key: 'finsmes',
            icon: (
              <GatsbyImage
                image={images['finsmes']}
                alt="FINSMES"
              />
            ),
            name: "Resolve Raises $60M in Funding",
            link: "https://www.finsmes.com/2021/05/resolve-raises-60m-in-funding.html/"
          },
        ]}
      />
      <Footer graySkin />
      <style jsx global>{`
        p {
          font-size: 1.3rem;
          line-height: 1.6em;
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0;
          margin-inline-end: 0;
        }

        .our-core-values .block-3-part__items {
          margin-top: 20px;
        }

        .our-core-values .block-3-part__item-title {
          margin: 5px 0 17px 0;
          min-height: auto;
          font-size: 24px;
        }
      `}</style>
    </Layout>
  );
}
