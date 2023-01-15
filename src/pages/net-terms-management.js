import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import BlockHeaderWithImage from '../components/BlockHeaderWithImage';
import SpaceDivider from '../components/SpaceDivider';
import BlockCTA from '../components/BlockCTA';
import Footer from '../components/Footer';
import BlockText from '../components/BlockText';
import BlockImageRight from '../components/BlockImageRight';
import BlockImageLeft from '../components/BlockImageLeft';
import BlockIconRight from '../components/BlockIconRight';
import BlockIconLeft from '../components/BlockIconLeft';
import Block3Part from '../components/Block3Part';
import BlockKeyFeatures from '../components/BlockKeyFeatures';

import PaymentChaserIcon from '../components/icons/PaymentChaser';
import PaymentPortalIcon from '../components/icons/PaymentPortal';
import SmartCheckIcon from '../components/icons/SmartCheck';
import AdvancePayIcon from '../components/icons/AdvancePay';
import CreditTeamIcon from '../components/icons/CreditTeam';
import MoneyRepeatIcon from '../components/icons/MoneyRepeat';

import { screen } from '../constants';
import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
    images: allFile(
      filter: { relativeDirectory: { eq: "net-terms-management" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    bgIcon: file(relativePath: { eq: "common/bg-icon.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default function NetTermsManagementPage({ data }) {
  const images = edgesByName(data.images);

  return (
    <Layout>
      <GatsbySeo
        title="Gain risk-free net terms financing for B2B customers"
        description="Resolve can manage your existing net terms & AR. Let us take care of credit checking, financing risk, and payment processing."
      />
      <BlockHeaderWithImage
        title="Let Resolve fix your net terms headache"
        desc="Offering net terms can be a lot of work for your team. Let us manage every aspect, from smart credit checks, to payment and collections management. Resolve is your 'credit team' on tap."
        image={images['customer-overview']}
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
        bigCover
        bigCoverImageHeight={382}
      />
      <SpaceDivider height="100" />
      <SpaceDivider height="100" />
      <BlockText
        title={
          <span>
            How does Resolve manage <br /> your net terms?
          </span>
        }
      />
      <SpaceDivider />
      <BlockImageRight
        image={images['add-customer']}
        title={<span>Smart credit checks in minutes not weeks</span>}
        description="Get credit checks done fast. Resolve's credit assessment uses proprietary financial databases and algorithms to assess your customers. Want to do a quiet pre-approval check on a new customer? They don't have to fill in a thing."
        image_width={464}
        image_align="center"
      />
      <SpaceDivider />
      <BlockImageLeft
        image={images['send-invoice']}
        title={<span>Get up to 90% paid out in advance</span>}
        description="Resolve will advance pay up to 90% on invoices from your approved customers. Dramatically improve cash flow,  and reduce your risk.  Let Resolve can manage your net terms credit risk so you can focus on growth."
        image_width={520}
        image_align="center"
      />
      <SpaceDivider height="100" />
      <BlockIconRight
        icon={<PaymentChaserIcon width={197} height={197} />}
        title={<span>Resolve takes care of payments & collections</span>}
        description="We're your Accounts Receivable partner. Resolve automates the time-consuming tasks of payment reminders, servicing, and collections. We process payments and chase any late payments."
        backgroundImage={getSrc(data.bgIcon.childImageSharp.gatsbyImageData)}
        image_align="center"
      />
      <SpaceDivider height="100" />
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
      <Block3Part
        title="Moving existing net terms to Resolve is simple"
        items={[
          {
            pretitle: <CreditTeamIcon width={64} height={64} />,
            title: 'Sync your customer details',
            content: (
              <div>
                Resolve syncs with QuickBooks Online to help you seamlessly
                select which ones to run through our simple and fast credit
                assessment.
              </div>
            ),
          },
          {
            pretitle: <PaymentPortalIcon width={64} height={64} />,
            title: 'We help update the payment details',
            content: (
              <div>
                Resolve helps you reach out to your existing customers with
                updated payment details. You're in control, choose automated or
                manual emails.
              </div>
            ),
          },
          {
            pretitle: <MoneyRepeatIcon width={65} height={64} />,
            title: 'They get more ways to pay',
            content: (
              <div>
                Resolve's payments portal accepts payments by ACH, Check, and
                credit card. We give your customers more flexibility and
                options.
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider />
      <BlockImageRight
        image={images['finalize-buyer-credit']}
        title={<span>Resolve stays in the background</span>}
        description="You own your customer relationships - Resolve stays in the background with our white label features."
        image_width={461}
        image_align="center"
      />
      <SpaceDivider />
      <BlockIconLeft
        icon={<CreditTeamIcon width="197" height="197" />}
        title={<span>Our team is here to help with every step</span>}
        description="Resolve offers world-class customer service and support. You won't be on your own - we'll help with accounting system connections, net terms migration, and product training."
        backgroundImage={getSrc(data.bgIcon.childImageSharp.gatsbyImageData)}
      />
      <SpaceDivider height={150} />
      <BlockCTA
        pretitle="Chat with our product specialists"
        title={
          <span>
            Learn how we can help
            <br />
            manage your net terms.
          </span>
        }
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
      />

      <Footer darkSkin />
      <style jsx global>{`
        .seller__faq {
          margin-top: 120px;
          margin-bottom: 100px;
        }
        .seller__row {
          margin-bottom: 60px;
        }

        @media (max-width: 1140px) {
          .seller__image {
            max-width: 400px;
            clip-path: polygon(0px 140px, 625px 0, 480px 420px, 0 530px);
          }
          .seller__image_simple-tire {
            max-width: 340px;
          }
          .seller__subimage_simple-tire {
            max-width: 190px;
          }
          .seller__more-than_desc {
            max-width: 450px;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .seller__info > div {
            flex: initial;
            margin-right: 0;
          }
          .seller__info {
            flex-direction: column-reverse;
            margin-top: -64px;
          }
          .seller__info > div {
            margin-top: -170px;
          }
          .seller__image {
            max-width: 480px;
            clip-path: polygon(0px 175px, 745px 0, 480px 355px, 0 465px);
            position: relative;
            top: -20px;
          }
          .seller__row {
            margin-bottom: 80px;
          }
          .seller__resolve-simplifies {
            padding-top: 560px;
            background-size: 650px;
          }
          #how-it-works {
            position: relative;
            top: 560px;
          }
          .seller__resolve-simplifies .app__column:last-child,
          .seller__resolve-simplifies .seller__row .app__column {
            margin-bottom: 0;
          }

          .seller__more-than {
            flex-direction: column-reverse;
            margin-top: 80px;
            padding-bottom: 60px;
          }
          .seller__faq {
            margin-top: 100px;
          }
          .seller__image_simple-tire {
            width: 480px;
            height: 420px;
            overflow: hidden;
          }
          .seller__more-than .app__image-group {
            margin-bottom: 80px;
          }
          .seller__more-than_desc {
            max-width: initial;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .seller__image {
            max-width: 240px;
            clip-path: polygon(0px 89px, 368px 0, 385px 145px, 0 230px);
            top: 30px;
          }
          .seller__info > div {
            margin-top: -40px;
          }
          .seller__icon-title {
            font-size: 20px;
            line-height: 2.08;
            letter-spacing: 0.5px;
          }
          .seller__subtitle {
            margin-bottom: 50px;
          }
          .seller__more-than_desc.app__desc {
            font-size: 28px;
            line-height: 1.29;
            letter-spacing: 0;
          }
          .seller__row {
            margin-bottom: 60px;
          }
          .seller__resolve-simplifies {
            background-size: 330px;
            padding-top: 300px;
          }
          #how-it-works {
            top: 300px;
          }
          .seller__image_simple-tire {
            width: 220px;
            height: 235px;
          }
          .seller__more-than .app__image-group {
            margin-bottom: 40px;
          }
          .seller__more-than {
            margin-top: 40px;
          }
        }
      `}</style>
    </Layout>
  );
}
