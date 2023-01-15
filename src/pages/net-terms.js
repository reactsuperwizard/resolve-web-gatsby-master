import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import BlockHeaderWithImage from '../components/BlockHeaderWithImage';
import Block3Part from '../components/Block3Part';
import Block4Part from '../components/Block4Part';
import BlockKeyFeatures from '../components/BlockKeyFeatures';
import BlockText from '../components/BlockText';
import BlockCTA from '../components/BlockCTA';
import SpaceDivider from '../components/SpaceDivider';
import BlockImageRight from '../components/BlockImageRight';
import BlockImageLeft from '../components/BlockImageLeft';
import BlockIconRight from '../components/BlockIconRight';
import Footer from '../components/Footer';

import AccountReceivableIcon from '../components/icons/AccountReceivable';
import AdvancePayIcon from '../components/icons/AdvancePay';
import CreditTeamIcon from '../components/icons/CreditTeam';
import NetTermsCalendarIcon from '../components/icons/NetTermsCalendar';
import PaymentChaserIcon from '../components/icons/PaymentChaser';
import PaymentPortalIcon from '../components/icons/PaymentPortal';
import SmartCheckIcon from '../components/icons/SmartCheck';
import ReduceFinancialRiskIcon from '../components/icons/ReduceFinancialRisk';

export const pageQuery = graphql`
  {
    sendInvoiceImage: file(
      relativePath: { eq: "net-terms/send-invoice-2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 482, layout: CONSTRAINED)
      }
    }
    reduceFinancialRiskImage: file(name: { eq: "reduce-financial-risk" }) {
      childImageSharp {
        gatsbyImageData(width: 133, layout: FIXED)
      }
    }
    paidInvoiceImage: file(name: { eq: "paid-invoice" }) {
      childImageSharp {
        gatsbyImageData(width: 482, layout: CONSTRAINED)
      }
    }
    finalizeBuyerCreditImage: file(name: { eq: "finalize-buyer-credit" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    reviewBanner: file(relativePath: { eq: "banners/review-banner.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    bgIcon: file(relativePath: { eq: "common/bg-icon.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default function NetTermsPage({ data }) {
  return (
    <Layout>
      <GatsbySeo
        title="We're a net terms & credit management solution"
        description="Resolve helps manage every aspect of net terms, credit checking, and payment processing. We'll streamline your accounts receivable processes."
      />
      <BlockHeaderWithImage
        title="We're experts when it comes to net terms management"
        desc="We're a complete net terms and credit management solution. Let Resolve reduce your risk, improve your cash flow, and enhance your Accounts Receivable processes."
        image={data.finalizeBuyerCreditImage.childImageSharp.gatsbyImageData}
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
        borderRadius={9}
        boxShadow={
          '0px 55.7784px 111.557px -55.7784px rgba(0, 0, 0, 0.2), 0 0 11.5123px rgba(0, 0, 0, 0.05);'
        }
      />
      <SpaceDivider height="100" />
      <BlockText
        title={
          <span>
            Why use Resolve to manage <br /> your net terms?
          </span>
        }
      />
      <BlockIconRight
        icon={<ReduceFinancialRiskIcon width={197} height={197} />}
        backgroundImage={getSrc(data.bgIcon.childImageSharp.gatsbyImageData)}
        title={<span>Reduce your financial risk and exposure</span>}
        description="Let us take on the risk of offering net terms. The bigger your customers and their orders, the bigger the risk is to your business in floating net terms. Resolve can manage your net terms so you can focus on growth."
      />
      <BlockImageLeft
        image={data.sendInvoiceImage.childImageSharp.gatsbyImageData}
        title={<span>Improve cash flow, get paid 90% upfront</span>}
        description="Get cash in the bank, and fast. Resolve will advance pay up to 90% on invoices from your approved customers. Speeding up cash flow will transform the financial health of your business."
        image_width={466}
        image_align="center"
        boxShadow={
          '0px 40.7527px 81.5054px -40.7527px rgba(0, 0, 0, 0.2), 0 0 8.4111px rgba(0, 0, 0, 0.05);'
        }
        borderRadius={8}
      />
      <BlockImageRight
        image={data.paidInvoiceImage.childImageSharp.gatsbyImageData}
        title={<span>Increase & grow your B2B sales</span>}
        description="Offering net terms to business buyers is proven to increase sales volume and sales frequency. Don't give your customers a reason to buy from anywhere else."
        image_width={542}
        image_align="center"
        boxShadow={
          '0px 33.8296px 67.6592px -33.8296px rgba(0, 0, 0, 0.2), 0 0 6.98221px rgba(0, 0, 0, 0.05);'
        }
        borderRadius={6}
      />
      <SpaceDivider height="100" />
      <BlockCTA
        title="Ready to find out how Resolve can improve your Net Terms process?"
        primaryButtonText="Request demo"
        align="center"
        hasBackground={true}
        background={getSrc(data.reviewBanner.childImageSharp.gatsbyImageData)}
      />
      <Block3Part
        title={<span>How Resolve helps your business operations</span>}
        items={[
          {
            icon: <NetTermsCalendarIcon width="60" height="60" />,
            title: 'Net terms & credit management',
            content: (
              <div>
                Resolve's a complete net terms management solution - we'll take
                care of everything needed to offer net terms (30, 60, or 90
                days) to your customers.
              </div>
            ),
          },
          {
            icon: <AccountReceivableIcon width="60" height="60" />,
            title: 'Accounts receivable automation',
            content: (
              <div>
                Resolve streamlines your Accounts Receivable tasks such as
                credit checks, reminders and collections, and processing
                payments.
              </div>
            ),
          },
          {
            icon: <CreditTeamIcon width="60" height="60" />,
            title: 'Embedded credit team',
            content: (
              <div>
                Resolve acts as your credit team on tap. We make credit
                checking, credit decisions, and credit line management fast and
                simple.
              </div>
            ),
          },
        ]}
      />
      <BlockKeyFeatures
        title={'Resolve key features'}
        grayBackground
        items={[
          {
            title: 'Smart Credit Engine',
            icon: <SmartCheckIcon width="50" height="50" />,
            content: (
              <div>
                Resolve's credit check of your customer is completed within
                hours. Our Smart Credit Engine means fast and simple financial
                assessment of your customer for net terms and a credit line.
              </div>
            ),
          },
          {
            title: 'Advance Pay',
            icon: <AdvancePayIcon width="50" height="50" />,
            content: (
              <div>
                Resolve's Advance Pay means your invoices get paid upfront. Once
                approved, your customer's risk profile will be for 50%, 75%, or
                90% advance rates (meaning we'll pay out 90% of the invoice).
              </div>
            ),
          },
          {
            title: 'Payment Chaser',
            icon: <PaymentChaserIcon width="50" height="50" />,
            content: (
              <div>
                Resolve's Payment Chaser product enhances your 'credit team'
                resources, we automate the time-consuming tasks of payment
                reminders, servicing, and collections. You don't have to be the
                bad guy.
              </div>
            ),
          },
          {
            title: 'Payment Portal',
            icon: <PaymentPortalIcon width="50" height="50" />,
            content: (
              <div>
                Resolve's Payments Portal accepts payments by ACH, Check, and
                credit card. We take care processing your customer payments,
                saving your team time.
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider height={100} />
      <Block4Part
        title={<span>It's simple &#8210;</span>}
        titleClass="block-4-part__title_custom"
        items={[
          {
            pretitle: '90%',
            content: (
              <div>
                Of your customer
                <br />
                invoice advanced
              </div>
            ),
          },
          {
            pretitle: '1 day',
            content: (
              <div>
                Advance is paid
                <br />
                to your account
              </div>
            ),
          },
          {
            pretitle: '30, 60, 90',
            content: (
              <div>
                Net terms for your
                <br /> approved customers
              </div>
            ),
          },
          {
            pretitle: '2.61% fee',
            content: (
              <div>
                On 30 day net terms & <br />
                90% advance rate
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider height={100} />
      <BlockCTA
        pretitle="See Resolve for yourself."
        title={
          <span>
            Ready to offer
            <br /> smarter net terms?
          </span>
        }
        primaryButtonText="Request demo"
      />

      <Footer />
    </Layout>
  );
}
