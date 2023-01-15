import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import BlockTimeline from '../components/BlockTimeline';
import BlockPricingPlans from '../components/BlockPricingPlans';

import Container from '../components/Container';
import GreenCheckIcon from '../components/icons/GreenCheck';
import RedCrossIcon from '../components/icons/RedCross';
import {
  PaidInvoices,
  PricingBg1,
  PricingBg2,
  PricingBg4,
  screen,
} from '../constants';

export const pageQuery = graphql`
  {
    images: allFile(filter: { relativeDirectory: { eq: "pricing" } }) {
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

export default function PricingPage({ data }) {
  return (
    <Layout>
      <GatsbySeo title="Pricing" />
      <section className="block-pricing-hero">
        <Container>
          <h1 className="block__title">
            Scale your credit & AR processes with your growth
          </h1>
        </Container>
        <img className="block__bg1" src={PricingBg1} alt="pricing bg" />
        <img className="block__bg2" src={PricingBg2} alt="pricing bg" />
      </section>
      <BlockPricingPlans
        items={[
          {
            title: 'Standard',
            content:
              'Our introduction to Resolve. Discover streamlined net terms, credit, and AR processes. Increase your sales.',
            ctaText: 'Free trial',
            ctaTo: 'https://b2b.resolvepay.com/free-trial',
            planName: 'standard',
            subscriptionPrice: '499',
            subscriptionPricePrefix: '',
            maxCreditLinePerCustomer: '$50,000',
            featuresBasic: (
              <ul className="block-pricing-plans__item-specific-feature-list">
                <li>
                  <span className="icon">
                    <GreenCheckIcon />
                  </span>
                  <span className="text">E-commerce integrations</span>
                </li>
                <li>
                  <span className="icon">
                    <GreenCheckIcon />
                  </span>
                  <span className="text">Net terms checkout extension</span>
                </li>
                <li>
                  <span className="icon">
                    <GreenCheckIcon />
                  </span>
                  <span className="text">Accounting integrations</span>
                </li>
                <li>
                  <span className="icon">
                    <RedCrossIcon />
                  </span>
                  <span className="text">Scoping & implementation</span>
                </li>
                <li>
                  <span className="icon">
                    <RedCrossIcon />
                  </span>
                  <span className="text">API access</span>
                </li>
              </ul>
            ),
            featuresExtend: [],
            resolveFee: [
              { type: 'Net 30', value: 'Risk-Based' },
              { type: 'Net 60', value: 'Risk-Based' },
              { type: 'Net 90', value: 'Risk-Based' },
            ],
          },
          {
            title: 'Custom',
            content:
              'Workflows designed for your business and your buyers. Bring our ‘embedded credit’ resources to your financial tech stack.',
            ctaText: 'Free trial',
            ctaTo: 'https://b2b.resolvepay.com/free-trial',
            planName: 'enterprise',
            subscriptionPrice: '',
            subscriptionPricePrefix: 'Custom plan',
            maxCreditLinePerCustomer: 'Customized',
            featuresBasic: (
              <ul className="block-pricing-plans__item-specific-feature-list">
                <li>
                  <span className="icon">
                    <GreenCheckIcon />
                  </span>
                  <span className="text">E-commerce integrations</span>
                </li>
                <li>
                  <span className="icon">
                    <GreenCheckIcon />
                  </span>
                  <span className="text">Net terms checkout extension</span>
                </li>
                <li>
                  <span className="icon">
                    <GreenCheckIcon />
                  </span>
                  <span className="text">Accounting integrations</span>
                </li>
                <li>
                  <span className="icon">
                    <GreenCheckIcon />
                  </span>
                  <span className="text">Scoping & implementation</span>
                </li>
                <li>
                  <span className="icon">
                    <GreenCheckIcon />
                  </span>
                  <span className="text">API access</span>
                </li>
              </ul>
            ),
            featuresExtend: [],
            resolveFee: [
              { type: 'Net 30', value: 'Risk-Based' },
              { type: 'Net 60', value: 'Risk-Based' },
              { type: 'Net 90', value: 'Risk-Based' },
            ],
          },
        ]}
        plans={[
          'Fast credit checking',
          'Credit line recommendations',
          'Standard invoicing workflow',
          'Net terms invoicing workflow',
          'Invoice advance payments',
          'Credit & AR insights dashboard',
          'Automated AR workflow (invoice reminders)',
          'Payment chaser workflow (fees, collections)',
          'ACH & Wire transfers all included',
          'Buyer payment portal (ACH, wire, credit card, check)',
        ]}
        notes={[
          '• Max. buyer credit line sizes are not guaranteed, all decisions are at discretion of Resolve and subject to buyer verification.',
          '• Credit card fees are passed on to your buyer (via online payment portal).',
          '• Invoice advance payment rate/percentage: Typically 90%, 75%, 50% (100% of invoice dependant on credit risk & history).',
        ]}
      />
      <section className="paid-invoices">
        <Container>
          <div className="block-image-left__wrap">
            <div className="app__image-container">
              <img
                src={PaidInvoices}
                alt="What do Resolve's fees look like for a $1,000 invoice?"
              />
            </div>
            <div className="block-image-left__text">
              <h2 className="app__title">
                What do Resolve's fees look like for a $1,000 invoice?
              </h2>
              <p className="app__desc">
                Resolve’s Advance Pay gives you flexibility in de-risking net
                terms invoicing. This example shows you can choose 50% vs. 90%
                advances to suit your needs.
              </p>
            </div>
          </div>
        </Container>
        <img className="block__bg4" src={PricingBg4} alt="pricing bg" />
      </section>
      <BlockTimeline
        title={
          <>
            How does a 90% advanced
            <br />
            $1,000 invoice get paid?
          </>
        }
        items={[
          {
            title: 'Send invoice',
            content: (
              <div>
                Your approved customer's invoice is sent from Resolve with 30
                day net terms.
              </div>
            ),
          },
          {
            pretitle: '$873.90',
            title: '2 days later',
            content: (
              <div>
                Resolve pays 90% of the invoice (risk-free) to your bank
                account, minus advance fee.
              </div>
            ),
          },
          {
            title: '30 days later',
            content: (
              <div>
                Then your customer pays the full invoice amount to Resolve,
                $1,000.
              </div>
            ),
          },
          {
            pretitle: '$100.00',
            title: '1 day later',
            content: (
              <div>
                Resolve pays the final 10% of the invoice into your bank
                account.
              </div>
            ),
          },
        ]}
      />
      <Footer />
      <style jsx>{`
        .block-pricing-hero {
          position: relative;
          padding: 170px 0 125px;
        }
        .block__bg1,
        .block__bg2,
        .block__bg4 {
          position: absolute;
        }
        .block__bg1 {
          top: 150px;
          left: 0;
        }
        .block__bg2 {
          top: 300px;
          right: 0;
        }
        .block__bg4 {
          right: 0;
          bottom: 0;
        }
        .block__title {
          max-width: 802px;
          margin: 0 auto;
          text-align: center;
        }
        .block-pricing-plans__item-specific-content .unit-text {
          vertical-align: middle;
          font-size: 24.5851px;
          line-height: 34px;
        }
        .block-pricing-plans__item-specific-feature-list {
          padding-left: 0;
          list-style: none;
          margin: 0 0 40px;
        }
        .block-pricing-plans__item-specific-feature-list li {
          display: flex;
          align-items: baseline;
          margin-bottom: 8px;
          font-weight: 300;
          font-size: 17px;
          line-height: 24px;
        }
        .block-pricing-plans__item-specific-feature-list li .icon,
        .block-pricing-plans__item-specific-feature-list li .text {
          vertical-align: middle;
        }
        .block-pricing-plans__item-specific-feature-list li .italic {
          font-style: italic;
        }
        .block-pricing-plans__item-specific-feature-list li .icon {
          width: 20px;
          height: 20px;
          padding-top: 3px;
          margin-right: 8px;
        }
        .block-image-left__wrap {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .block-image-left__text {
          max-width: 454px;
          margin-left: 24px;
        }
        .app__title {
          margin: 0 0 24px;
          font-size: 44px;
          line-height: 52px;
          color: #1f325d;
        }
        .app__desc {
          margin: 0;
          font-weight: 300;
          font-size: 17px;
          line-height: 24px;
          color: #5e6677;
        }
        .paid-invoices {
          position: relative;
          padding: 350px 0 150px;
          background: linear-gradient(-8deg, #fff 76.2%, #f7f8fa 76.3%);
        }
        @media (max-width: ${screen.laptop}px) {
          .block__title {
            max-width: 562px;
            font-size: 44px;
            line-height: 52px;
          }
          .block__bg1,
          .block__bg2,
          .block__bg4 {
            display: none;
          }
          .app__image-container,
          .block-image-left__text {
            width: 50%;
          }
          .app__image-container img {
            width: 100%;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-image-left__wrap {
            flex-wrap: wrap;
            max-width: 522px;
            margin: 0 auto;
          }
          .app__image-container,
          .block-image-left__text {
            width: auto;
          }
          .block-pricing-plans__item-specific-feature-list li .icon {
            width: 16px;
            height: 16px;
          }
          .block-image-left__text {
            margin: 32px 0 0;
            max-width: 522px;
          }
          .block-image-left__text .app__title {
            margin-bottom: 12px;
            font-size: 32px;
            line-height: 40px;
          }
          .block-image-left__text .app__desc {
            font-size: 17px;
            line-height: 24px;
          }
          .app__image-container img {
            width: 100%;
          }
          .block-pricing-hero {
            padding: 155px 0 80px;
          }
          .block-pricing-plans__item-specific-feature-list {
            margin-bottom: 24px;
          }
          .block-pricing-plans__item-specific-feature-list li {
            margin-bottom: 4px;
            font-size: 15px;
            line-height: 20px;
          }
          .paid-invoices {
            padding-top: 200px;
            background: linear-gradient(-8deg, #fff 84.2%, #f7f8fa 84.3%);
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block__title {
            font-size: 36px;
            line-height: 44px;
          }
          .paid-invoices {
            padding-top: 150px;
            background: linear-gradient(-8deg, #fff 88.2%, #f7f8fa 88.3%);
          }
          .block-image-left__text .app__title {
            font-size: 24px;
            line-height: 32px;
          }
          .block-image-left__text .app__desc {
            font-size: 16px;
            line-height: 22px;
          }
          .block-pricing-plans__item-specific-feature-list li {
            font-size: 16px;
            line-height: 22px;
          }
        }
      `}</style>
      <style jsx global>{`
        .paid-invoices .block-image-right {
          padding: 105px 0 0;
        }

        @media (max-width: 1020px) {
          .fake-br {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
}
