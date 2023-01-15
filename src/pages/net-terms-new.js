import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
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
import Block3Part from '../components/Block3Part';
import Block2Part from '../components/Block2Part';
import Block4Part from '../components/Block4Part';

import TimeNewIcon from '../components/icons/TimeNew';
import CreditCheckIcon from '../components/icons/CreditCheck';
import SmartCheckIcon from '../components/icons/SmartCheck';
import NetTermsCalendarNewIcon from '../components/icons/NetTermsCalendarNew';

import { screen } from '../constants';
import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
    netTermsNew: allFile(
      filter: { relativeDirectory: { eq: "net-terms-new" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 240)
          }
        }
      }
    }
    bgIcon: file(relativePath: { eq: "common/bg-icon.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    woocommerceLogo: file(
      relativePath: { eq: "integrations/woocommerce-logo.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default function NetTermsNewPage({ data }) {
  const netTermsNew = edgesByName(data.netTermsNew);
  const integrationLogos = edgesByName(
    data.netTermsNew,
    node => node.childImageSharp.gatsbyImageData
  );

  return (
    <Layout>
      <GatsbySeo
        title="For B2B businesses that are new to net terms"
        description="Resolve for net terms & credit management. Better than factoring, we unlock your accounts receivable with non-recourse financing."
      />
      <BlockHeaderWithImage
        title="Want to grow your B2B sales? We'll help you offer net terms."
        desc="Give your buyers the credit they need to purchase more easily.  Allow them to place larger orders, and place orders with you more frequently."
        image={netTermsNew['finalize-buyer-credit']}
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
        bigCover
        bigCoverImageHeight={608}
      />
      <SpaceDivider height="100" />
      <BlockText title="How does Resolve help you offer net terms?" />
      <SpaceDivider />
      <BlockImageRight
        image={netTermsNew['send-invoice']}
        title={<span>Reduce risk, our balance sheet not yours</span>}
        description="Offering net terms is like being the bank for your customers. Resolve takes on the credit assessment, credit decision, and the majority risk of late payments or defaults."
        image_width={466}
      />
      <SpaceDivider />
      <BlockImageLeft
        image={netTermsNew['paid-invoice']}
        title={<span>Get up to 90% of invoices upfront</span>}
        description="Resolve will advance pay up to 90% on invoices from your approved customers.  That means you get paid within a day - but your customers get 30, 60 or 90 days to pay."
        image_width={529}
      />
      <SpaceDivider height="100" />
      <BlockIconRight
        icon={<CreditCheckIcon width={197} height={197} />}
        title={<span>Smart credit checks for both of us</span>}
        description="Resolve can make smart credit assessments in hours. We share the results - helping you decide which customers to offer net terms to.  (Resolve advises against sole proprietors and one-off buyers for net terms offerings)."
        backgroundImage={getSrc(data.bgIcon.childImageSharp.gatsbyImageData)}
      />
      <SpaceDivider height="150" />
      <Block3Part
        title="How does Resolve work? "
        items={[
          {
            pretitle: <SmartCheckIcon />,
            title: (
              <div>
                Resolve runs smart customer
                <br />
                credit checks
              </div>
            ),
            content: (
              <div>
                Depending on the results, your customer's invoices will qualify
                for Advance Pay. This means up to 90% paid upfront. Note that
                higher risk customers may qualify for 75% or 50%.
              </div>
            ),
          },
          {
            pretitle: <NetTermsCalendarNewIcon />,
            title: (
              <div>
                Offer net terms
                <br />
                to your customer
              </div>
            ),
            content: (
              <div>
                Resolve fees are 2.61% on 30 day net terms. Depending on your
                customers expectations you can absorb this fee into your pricing
                - or pass it on to them.
              </div>
            ),
          },
          {
            pretitle: <TimeNewIcon />,
            title: (
              <div>
                We'll chase payments
                <br />& manage collections
              </div>
            ),
            content: (
              <div>
                Resolve is like your 'credit team' or Accounts Receivable on
                tap. We send payment reminders and help chase any late payments.
              </div>
            ),
          },
        ]}
        grayBackground={true}
        primaryButtonText={'Request demo'}
      />
      <SpaceDivider height="100" />
      <Block2Part
        title="Offer net terms for traditional or ecommerce sales"
        items={[
          {
            content: (
              <div>
                <div className="integration-logo">
                  <GatsbyImage
                    image={integrationLogos['quickbooks-logo']}
                    alt="QuickBooks"
                  />
                </div>
                <div>
                  <h2
                    className="block-2-part__title"
                    style={{ fontWeight: '400' }}
                  >
                    Invoice management
                  </h2>
                </div>
                <div className="block-2-part__item-content">
                  Resolve integrates with QuickBooks Online and lets you send
                  the net terms invoices from our system - while keeping your
                  QuickBooks Online records straight.
                </div>
              </div>
            ),
          },
          {
            content: (
              <div>
                <div className="integration-logo magento2-woocommerce">
                  <GatsbyImage
                    image={integrationLogos['magento2-logo']}
                    alt="Magento 2"
                    imgStyle={{ maxWidth: '248px', objectFit: 'contain' }}
                  />
                  <GatsbyImage
                    image={data.woocommerceLogo.childImageSharp.gatsbyImageData}
                    imgStyle={{ maxWidth: '248px', objectFit: 'contain' }}
                    alt="WooCommerce"
                  />
                </div>
                <div>
                  <h2
                    className="block-2-part__title"
                    style={{ fontWeight: '400' }}
                  >
                    Online checkout
                  </h2>
                </div>
                <div>
                  Resolve's Checkout Extension for Magento and WooCommerce mean
                  you can offer customers net terms at checkout, all from within
                  your store online.
                </div>
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider height="100" />
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
      <SpaceDivider height={150} />
      <BlockCTA
        pretitle="See Resolve in action."
        title={
          <span>
            Want to learn more about
            <br />
            offering net terms?
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

        .magento2-woocommerce {
          display: flex;
          justify-content: flex-start;
          padding-top: 20px;
          margin-bottom: 20px;
          align-items: center;
        }

        .magento2-woocommerce img {
          margin-right: 20px;
        }

        .magento2-woocommerce div {
          max-width: 248px;
          flex: 1 1 248px;
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
