import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import BlockHeaderWithImage from '../components/BlockHeaderWithImage';
import Block2Part from '../components/Block2Part';
import Block3Part from '../components/Block3Part';
import Block4Part from '../components/Block4Part';
import SpaceDivider from '../components/SpaceDivider';
import BlockCTA from '../components/BlockCTA';
import BlockImageLeft from '../components/BlockImageLeft';
import BlockIconLeft from '../components/BlockIconLeft';
import BlockIconRight from '../components/BlockIconRight';
import Footer from '../components/Footer';

import ResolveDirectAPIIcon from '../components/icons/ResolveDirectAPI';
import ResolveQuickbooksIcon from '../components/icons/ResolveQuickbooks';

import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
    merchantAccountSummaryImage: file(
      name: { eq: "merchant-account-summary" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    checkoutFormImage: file(name: { eq: "checkout-form" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    images: allFile(filter: { relativeDirectory: { eq: "integrations" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(width: 240, layout: FIXED, placeholder: BLURRED)
          }
        }
      }
    }
    bgIconWhite: file(relativePath: { eq: "common/bg-icon-white.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          height: 400
          placeholder: BLURRED
          layout: CONSTRAINED
        )
      }
    }
    bgIcon: file(relativePath: { eq: "common/bg-icon.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default function IntegrationsPage({ data }) {
  const images = edgesByName(data.images);

  return (
    <Layout>
      <GatsbySeo
        title="Integrations with accounting and ecommerce"
        description="Resolve & integration with financial tools: QuickBooks Online, Magento 2, and other accounts receivable automation."
      />
      <BlockHeaderWithImage
        title="Resolve & integration with your financial tech stack"
        desc="Traditional sales or ecommerce - Resolve integrates seamlessly into your workflows. We make offering net terms to your customers simple."
        image={data.merchantAccountSummaryImage.childImageSharp.gatsbyImageData}
        bigCover
        bigCoverImageHeight={611}
        opacity={0.8}
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
      />
      <Block3Part
        items={[
          {
            content: (
              <div>
                <div className="integration-logo">
                  <GatsbyImage
                    image={images['quickbooks-logo']}
                    alt="QuickBooks"
                  />
                </div>
                <div>
                  <h2 style={{ fontWeight: '400' }}>Accounting</h2>
                </div>
                <div className="block-2-part__item-content">
                  Our integration automatically imports your QuickBooks customer and invoice records. You can choose which invoices to offer net terms on - simply complete the process in our dashboard.
                </div>
              </div>
            ),
          },
          {
            content: (
              <div>
                <div className="integration-logo">
                  <GatsbyImage
                    image={images['magento2-logo']}
                    alt="Magento 2"
                  />
                </div>
                <div>
                  <h2 style={{ fontWeight: '400' }}>Ecommerce</h2>
                </div>
                <div>
                  <span>
                    {
                      "Resolve's Magento Checkout Extension allows your business customers to apply for net terms at checkout without leaving your online store. Offer the same net terms options across all your sales channels."
                    }
                  </span>
                </div>
              </div>
            ),
          },
          {
            content: (
              <div>
                <div className="integration-logo">
                  <GatsbyImage
                    image={images['woocommerce-logo']}
                    alt="WooCommerce"
                  />
                </div>
                <div>
                  <h2 style={{ fontWeight: '400' }}>Ecommerce</h2>
                </div>
                <div>
                  <span>
                    {
                      'Resolve’s WooCommerce Checkout Extension allows your business customers to apply for net terms at checkout without leaving your online store. Bring net terms online with Resolve.'
                    }
                  </span>
                </div>
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider height="100" />
      <BlockIconLeft
        icon={<ResolveDirectAPIIcon width={350} height={300} />}
        backgroundImage={getSrc(
          data.bgIconWhite.childImageSharp.gatsbyImageData
        )}
        grayBackground
        title={<span>{'Looking for more ecommerce options?'}</span>}
        description="Resolve's flexible API can be integrated into any ecommerce platform. Allow your business customers to apply for net terms at checkout without leaving your online store."
        ctaText={'Explore the docs'}
        ctaButtonTo={'https://app.resolvepay.com/docs/api/'}
      />
      <SpaceDivider height="100" />
      <Block3Part
        title={<span>How do we work with QuickBooks?</span>}
        titleTextAlign="left"
        items={[
          {
            title: 'Automated bookkeeping',
            content: (
              <div>
                Update QuickBooks as you get advance paid by Resolve.
                Auto-bookkeeping pushes your transaction records to QuickBooks,
                linked to the original invoice. Save time and energy reconciling
                your books and enjoy better traceability between invoices,
                payments and payouts.
              </div>
            ),
          },
          {
            title: "You're in control - sync invoices",
            content: (
              <div>
                You pick whether you want to offer net terms through Resolve on
                any invoices in QuickBooks. They'll sync to Resolve where
                you can complete the process in our dashboard.
              </div>
            ),
          },
          {
            title: 'Fast customer credit checks',
            content: (
              <div>
                Sync your customer details from QuickBooks to Resolve. We
                can run fast, verifiable credit checks, no lengthy forms needed
                from your customer.
              </div>
            ),
          },
        ]}
      />
      <BlockIconRight
        icon={<ResolveQuickbooksIcon width={197} height={197} />}
        backgroundImage={getSrc(data.bgIcon.childImageSharp.gatsbyImageData)}
        title={
          <span>
            See Resolve <br />& QuickBooks
          </span>
        }
        description={
          "Want to see how Resolve works together with QuickBooks? Book a demo with one of our product specialists. We'll answer your questions and outline our typical workflow for net terms."
        }
        ctaText={'Get Started'}
        ctaButtonTo={'/contact-sales/'}
      />
      <SpaceDivider height="100" />
      <Block2Part
        title={<span>How do we work with ecommerce?</span>}
        grayBackground
        items={[
          {
            title: 'Resolve checkout extension',
            content: (
              <div>
                Do your repeat customers purchase via ecommerce? Resolve’s
                Checkout Extension means you can offer customers net terms at
                checkout, without them leaving your online store.
              </div>
            ),
          },
          {
            title: 'Order management',
            content: (
              <div>
                Manage net terms orders from within your ecommerce order
                management system. Capture, cancel, fully refund, or partially
                refund these orders in your system and then sync that
                information back to Resolve.
              </div>
            ),
          },
        ]}
      />
      <BlockImageLeft
        image={data.checkoutFormImage.childImageSharp.gatsbyImageData}
        title={<span>See Resolve at checkout</span>}
        description={
          'Want to see how Resolve looks on your ecommerce checkout? Book a demo with one of our product specialists. We’ll answer your questions and outline our typical workflow for net terms.'
        }
        ctaText={'Get Started'}
        ctaButtonTo={'/contact-sales/'}
        image_width={546}
        image_align="center"
        boxShadow={
          '0px 45.8968px 91.7937px -45.8968px rgba(0, 0, 0, 0.2), 0 0 9.47281px rgba(0, 0, 0, 0.05);'
        }
        borderRadius={8}
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
      <SpaceDivider height={100} />
      <BlockCTA
        pretitle="See Resolve for yourself."
        title="Learn more with our product specialists."
        primaryButtonText="Request demo"
      />

      <Footer />
    </Layout>
  );
}
