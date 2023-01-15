import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Container from "../components/Container";
import BlockLogos from '../components/BlockLogos';
import BlockQuote from '../components/BlockQuote';
import SpaceDivider from '../components/SpaceDivider';
import BlockImageLeft from '../components/BlockImageLeft';
import BlockImageRight from '../components/BlockImageRight';
import BlockProductHero from "../components/BlockProductHero";
import BlockProductTasks from "../components/BlockProductTasks";
import BlockPaymentBothSides from "../components/payments/BlockPaymentsBothSides";

import InvoicingManagementIcon from "../components/icons/InvoicingManagement";
import PaymentProcessingIcon from "../components/icons/PaymentProcessing";
import RemindersCollectionsIcon from "../components/icons/RemindersCollections";
import WhiteCheckIcon from "../components/icons/WhiteCheck";

import { PayFinalizeBuyerCredit, PaymentsHero, PaySupplierABC, screen } from '../constants';
import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  query B2BPaymentsPageQuery {
    companies: allContentfulCompany {
      edges {
        node {
          name
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    b2bPayments: allFile(
      filter: { relativeDirectory: { eq: "b2b-payments" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
    }
    conEquipLogo: file(
      name: { eq: "con-equip-logo" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default function B2BPaymentsPage({ data }) {
  const companies = edgesByName(
    data.companies,
    node => node.image.gatsbyImageData
  );
  const b2bPayments = edgesByName(data.b2bPayments);
  const features = [
    {
      name: "B2B Payment Portal",
      desc: "Improve your customer's experience by giving them more ways to pay with a professional, company-branded, billing experience."
    },
    {
      name: "AR & Credit Dashboard",
      desc: "Understand and reduce risk by proactively managing AR and maximize your customer’s credit lines."
    },
    {
      name: "QuickBooks Auto-Bookkeeping",
      desc: "Save time on manual reconciliations. Resolve automatically records and syncs all transactions to QuickBooks."
    },
    {
      name: "Advance Pay",
      desc: "Don't lose the sale. Access fast and reliable financial assessments of your customer's credit within hours."
    },
    {
      name: "Smart Credit Engine",
      desc: "A white-label payment portal that gives your customers more ways to pay."
    },
    {
      name: "Ecommerce Checkout Extension",
      desc: "Give online customers the option to apply for net terms at checkout. Approvals are granted within hours."
    },
  ]

  return (
    <Layout>
      <GatsbySeo
        title="There's a better way to do B2B payments"
        description="Discover modern B2B payments, learn how Resolve makes life better for your customers and your business."
      />
      <BlockProductHero title="Modernize your customers’ B2B payments experience" desc="Streamline your B2B payments and net terms invoicing. Grow your sales and improve your customer's experience with a modern B2B payments platform." image={PaymentsHero} cta_url="/contact-sales/" />
      <div style={{ marginTop: "100px" }}></div>
      <BlockLogos
        title="We improve B2B payments for 1,000+ businesses"
        data={[
          {
            image: companies['Linus Bike'],
            name: 'Linus Bike',
            offsetTop: 15,
          },
          {
            image: companies['ConEquip'],
            name: 'ConEquip',
            offsetTop: 10,
          },
          {
            image: companies['SDi Fire'],
            name: 'SDi Fire',
            offsetTop: -10,
          },
          {
            image: companies['Trenchless Supply'],
            name: 'Trenchless Supply',
            offsetTop: 0,
          },
          {
            image: companies['Archipelago Lighting'],
            name: 'Archipelago Lighting',
            offsetTop: 10,
          },
          {
            image: companies['Go Materials'],
            name: 'Go Materials',
            offsetTop: -10,
          },
        ]}
      />
      <BlockProductTasks tasks={[
        {
          title: "Improve cash flow",
          content: "Unlock cash flow for growth. Receive an advance cash payment on approved invoices of up to 90%.",
          icon: <InvoicingManagementIcon />
        },
        {
          title: "Offer B2B payment terms",
          content: "Our risk-free net terms give your customers more time to pay, while you get paid upfront.",
          icon: <RemindersCollectionsIcon />
        },
        {
          title: "Offer different payment options",
          content: "Our payments portal gives customers more payment options: credit card, ACH, wire transfers, and checks.",
          icon: <PaymentProcessingIcon />
        },
      ]} />

      <BlockPaymentBothSides
        title="Resolve streamlines B2B payments on both sides"
        withBorders
        items={[
          {
            title: (
              <>
                <span style={{ fontWeight: 400 }}>For your customers</span>
                <br />
                Company-branded payment portal
              </>
            ),
            className: 'blue-block',
            content: (
              <div>
                <div className="inner-content">
                  Offer your own branded and professional payments & billing experience to improve your customer’s experience.
                  <ul>
                    <li>Secure online login and access.</li>
                    <li>One dashboard to view all invoices, credit lines, and history.</li>
                    <li>Easy online payment options: ACH, transfer or credit card.</li>
                  </ul>
                </div>
                <div className="inner-image">
                  <img src={PaySupplierABC} alt="supplier ABC" />
                </div>
              </div>
            ),
          },
          {
            title: (
              <>
                <span style={{ fontWeight: 400 }}>For your business</span>
                <br />
                Account receivables dashboard
              </>
            ),
            content: (
              <div>
                <div className="inner-content">
                  Strategically unlock cash flow and make smarter business decisions. Utilize larger credit lines, export payment summaries, manage credit & AR processes.
                  <ul>
                    <li>Easily view all outstanding AR.</li>
                    <li>Access credit line summaries & advance rates for all customers.</li>
                    <li>Export and sync payment history.</li>
                  </ul>
                </div>
                <div className="inner-image">
                  <img src={PayFinalizeBuyerCredit} alt="supplier ABC" />
                </div>
              </div>
            ),
          },
        ]}
        textAlign="left"
      />

      <SpaceDivider height="75" />

      <BlockQuote image={data.conEquipLogo.childImageSharp.gatsbyImageData}>
        Our business customers used to go through a lengthy multi-week credit approval process & cumbersome payments experience. Resolve means we can now deliver a frictionless, customer-first approach.
      </BlockQuote>

      <section className="block-features-list">
        <Container>
          <h2 className="block__title">Resolve’s B2B payments features</h2>
          <ul className="block-list">
            {
              features.map((item, idx) => <li key={idx} className="block-list__item">
                <p className="block-list__item-name">
                  <WhiteCheckIcon />
                  <span>{item.name}</span>
                </p>
                <p className="block-list__item-desc">{item.desc}</p>
              </li>)
            }
          </ul>
        </Container>
      </section>

      <SpaceDivider />
      <BlockImageRight
        image={b2bPayments['calendar']}
        title={<span>Offer net terms without impacting cash flow</span>}
        description="Resolve helps you manage every aspect of offering net terms to your customers, from credit checks to payment processing. Take on larger customers, orders, and markets by offering a 30, 60, or 90 day net terms payment option. Use your cash flow for growth, we’ll pay your net terms invoices within 1 day."
      />
      <BlockImageLeft
        image={b2bPayments['paidInoivce']}
        title={<span>Quickbooks Online &amp; automated bookkeeping</span>}
        description={
          <div>
            Keep your accounting software instantly up to date as soon as you
            get paid by Resolve. We automatically record your transactions so
            you don’t have to. Auto-bookkeeping pushes your transaction records
            to QuickBooks, linked to the original invoice.
            <ul className="automated-bookkeeping-list">
              <li>Save time and energy reconciling your books.</li>
              <li>
                Better traceability between invoices, payments and payouts.
              </li>
              <li>Keep your financials up to date with less effort.</li>
            </ul>
          </div>
        }
      />

      <SpaceDivider />

      <SpaceDivider height="100" />
      <BlockImageRight
        image={b2bPayments['checkout']}
        title={<span>Net terms at ecommerce checkout </span>}
        description="Give your customers get the option to apply for net terms (or use pre-approved net terms) at checkout. Application is via a simple Resolve-powered form. Your customers hear back within a day and usually within hours. Once approved they can complete their ecommerce purchase from your checkout with net terms. "
      />
      <Footer />
      <style jsx>{`
        .block-3part {
          margin-top: -300px;
        }
        .inner-content {
          font-weight: 350;
          font-size: 17px;
          line-height: 28px;
        }
        .inner-content ul {
          margin: 0 0 40px;
        }
        .inner-image {
          text-align: center;
        }
        .money-repeat-icon-section {
          margin-bottom: -13px;
        }
        .card-icon-section {
          margin: 22px 0 0 8px;
        }
        .calendar-icon-section {
          margin-left: 10px;
        }
        .block__title {
          font-size: 44px;
          line-height: 52px;
          text-align: center;
          margin-bottom: 50px;
        }
        .block-list {
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          list-style: none;
        }
        .block-list__item {
          max-width: 320px;
          margin: 0 0 40px 80px;
        }
        .block-list__item-name {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #1F325D;
        }
        .block-list__item-name span {
          margin-left: 10px;
        }
        .block-list__item-desc {
          font-weight: 300;
          font-size: 16px;
          line-height: 24px;
          color: #5E6677;
        }
        @media (max-width: 1315px) {
          .inner-image img {
            width: 100%;
          }
        }
        @media (max-width: 1159px) {
          .block-list {
            width: 100%;
            justify-content: space-between;
          }
          .block-list__item {
            margin-left: 0;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block__title {
            font-size: 24px;
            line-height: 32px;
          }
          .block-list__item {
            max-width: 296px;
            margin-bottom: 24px;
          }         
          .block-list__item-name {
            margin-bottom: 8px;
            font-size: 18px;
            line-height: 24px;
          }
          .block-list__item-name span {
            margin-left: 8px;
          }
          .block-list__item-desc {
            font-size: 16px;
            line-height: 22px;
          }  
        }
        @media (max-width: ${screen.tabletMax}px) {
          .inner-image img {
            width: auto;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .inner-image img {
            width: 100%;
          }
          .block-list__item {
            max-width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-2-part__item.blue-block {
          background: linear-gradient(180deg, #1F325D 0%, #13203F 80.27%);
          mix-blend-mode: normal;
          color: #FFFFFF;
        }

        .integration-logo.api svg {
          margin: -115px 0 -145px -25px;
        }

        .integration-logo.quickbooks picture img,
        .integration-logo.magento2 picture img {
          margin-left: -7px;
        }
        .author-title {
          font-weight: normal;
          font-size: 20px;
          line-height: 24px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-2-part__borders .block-2-part__item-title .union-icon svg {
            width: 46px;
            margin: 0 0 -10px 0;
          }

          .block-2-part__borders .block-2-part__item-title .case-icon svg {
            width: 34px;
            margin: 0 0 -13px 0;
          }
          .inner-content ul {
            text-align: left;
            padding-top: 20px;
          }

          .automated-bookkeeping-list {
            text-align: left;
          }
        }
      `}</style>
    </Layout>
  );
}
