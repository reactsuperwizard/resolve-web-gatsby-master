import React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Container from "../components/Container";
import BlockScaleAR from "../components/accounts-receivable/BlockScaleAR";
import BlockARDriveResults from "../components/accounts-receivable/BlockARDriveResults";
import BlockARTasks from "../components/accounts-receivable/BlockARTasks";
import BlockQuote from "../components/BlockQuote";
import BlockARCases from "../components/accounts-receivable/BlockARCases";
import BlockTitleWithList from "../components/BlockTitleWithLIst";

import { ARHero, screen } from "../constants";

export const pageQuery = graphql`
  {
    newDocshopPro: file(
      name: { eq: "new-docshop-pro" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default function AccountsReceivablePage({ data }) {
  return (
    <Layout>
      <GatsbySeo
        title="AR accounts receivable automation for net terms credit"
        description="Resolve automates all aspects of accounts receivable or AR: Credit checks & reports, credit decisions, payment processing, and collections."
      />
      <section className="block-ar-hero">
        <Container>
          <div className="block-ar-hero__inner">
            <h1 className="block__title">AR Automation and B2B Credit Management</h1>
            <p className="block__content">Scale your accounts receivable operations. Automate and outsource your AR, credit checking, invoice management, payments processing, reminders, collections, and more.</p>
            <button className="request-button" onClick={() => navigate('/contact-sales/')}>Request demo</button>
          </div>
          <img className="block-ar-hero__img" src={ARHero} alt="ar hero" />
        </Container>
      </section>
      <BlockScaleAR />
      <BlockARDriveResults />
      <BlockARTasks />
      <BlockQuote image={data.newDocshopPro.childImageSharp.gatsbyImageData
      }>Resolve allowed us to expand & enter new markets. We could now take larger orders on with net terms, which we previously had to turn down.</BlockQuote>
      <BlockARCases />
      <BlockTitleWithList title="Simplify and scale your accounts receivable management" list={[
        {
          name: "Credit assessment",
          desc: "Fast quiet business credit checks. Credit line approvals and management."
        },
        {
          name: "Automated invoice management",
          desc: "Online platform for all invoices (net terms, COD, due upon receipt)."
        },
        {
          name: "Automated AR collections",
          desc: "Professional payment reminders, late fee, and collections management."
        },
        {
          name: "AR Dashboard",
          desc: "B2B credit and AR management from one platform."
        },
        {
          name: "Payment portal",
          desc: "A white-label payment portal that gives your customers more ways to pay."
        },
        {
          name: "Automated payment reconciliation",
          desc: "Payment processing and reconciliation with your accounting & ERP systems."
        },
      ]} />
      <BlockTitleWithList title="Integrate with your accounting system" list={[
        {
          name: "Credit line management",
          desc: "View all customer credit lines from one platform. Resolve manages all credit lines while approving increases as needed."
        },
        {
          name: "Invoice workflows",
          desc: "Integrate our AR dashboard with your ERP while automating all invoice workflows, reminders, and payments."
        },
        {
          name: "Automated bookkeeping",
          desc: "Save time reconciling invoices and payments. Integrate records to your accounting system with automated invoice matching."
        },
      ]} />
      <Footer />
      <style jsx>{`
        .block-ar-hero {
          padding: 200px 0 170px;
          background: linear-gradient(-8.7deg,#fff 33.3%,#F4F5F8 33.4%);
          text-align: center;
        }
        .block-ar-hero__inner {
          max-width: 858px;
          margin: 0 auto;
        }
        .block__content {
          font-weight: 300;
          font-size: 20px;
          line-height: 32px;
          color: #5E6677;
        }
        .request-button {
          margin-top: 40px;
          padding: 10px 32.5px 14px;
        }
        .block-ar-hero__img {
          margin-top: 74px;
        }
        .block-ar-hero__img-tablet {
          display: nonoe;
        }
        .block-2part {
          margin-top: -100px;
        }

        @media (max-width: ${screen.laptop}px) {
          .block-ar-hero__img {
            width: 100%;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-ar-hero__inner {
            max-width: 590px;
          }
          .block__title {
            font-size: 40px;
            line-height: 44px;
          }
          .block__content {
            font-size: 18px;
            line-height: 24px;
          }
          .block-ar-hero__img {
            margin-top: 119px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-ar-hero {
            padding: 150px 0 100px;
            background: linear-gradient(-8.7deg,#fff 26.3%,#F4F5F8 26.4%);
          }
          .block__title {
            margin: 0 auto;
            margin-bottom: 16px;
            max-width: 278px;
            font-size: 36px;
            line-height: 44px;
          }
          .block__content {
            max-width: 310px;
            margin: 0 auto;
          }
          .block-ar-hero__img {
            margin-top: 94px;
          }
        }
      `}</style>
    </Layout>
  );
}
