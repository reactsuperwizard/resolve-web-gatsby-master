import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import BlockHeaderWithImage from '../components/BlockHeaderWithImage';
import SpaceDivider from '../components/SpaceDivider';
import BlockCTA from '../components/BlockCTA';
import Footer from '../components/Footer';
import BlockImageRight from '../components/BlockImageRight';
import BlockImageLeft from '../components/BlockImageLeft';
import BlockIconRight from '../components/BlockIconRight';
import Block3Part from '../components/Block3Part';
import Block2Part from '../components/Block2Part';

import MoneyRepeatIcon from '../components/icons/MoneyRepeat';
import IncreaseIcon from '../components/icons/Increase';
import ReduceFinancialRiskIcon from '../components/icons/ReduceFinancialRisk';
import IntegrationIcon from '../components/icons/Integration';
import MoneySquareIcon from '../components/icons/MoneySquare';
import TimeNewIcon from '../components/icons/TimeNew';
import SmartCheckIcon from '../components/icons/SmartCheck';
import NetTermsCalendarNewIcon from '../components/icons/NetTermsCalendarNew';

import { screen } from '../constants';
import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
    images: allFile(
      filter: { relativeDirectory: { eq: "net-terms-ecommerce" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    bgIcon: file(relativePath: { eq: "common/bg-icon.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    checkOut: file(relativePath: { eq: "net-terms-ecommerce/checkout-2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    approvedForCredit: contentfulAsset(title: { eq: "Approved for credit" }) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
    woocommerceLogo: file(
      relativePath: { eq: "integrations/woocommerce-logo.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    magento2Logo: file(relativePath: { eq: "integrations/magento2-logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default function NetTermsEcommercePage({ data }) {
  const images = edgesByName(data.images);

  return (
    <Layout>
      <GatsbySeo
        title="Net terms for ecommerce B2B buyers"
        description="Resolve is the B2B version of Affirm. Find out how to offer your customers more payment options and net terms credit."
      />
      <BlockHeaderWithImage
        title="We're the 'B2B version of Affirm' net terms for ecommerce"
        desc="We make it easy to offer net terms with all your sales channels. Your B2B customers can apply for net terms at checkout right from your online store."
        image={images['checkout-big']}
        sub_image={images['checkout-small']}
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
        bigCover
        bigCoverImageHeight={516}
        image_width={690}
        image_align="center"
        boxShadow={'0px 1.73426px 6.06992px rgba(0, 0, 0, 0.1);'}
        borderRadius={7}
        sub_image_width={252}
        sub_image_box_shadow={'0px 1.73426px 6.06992px rgba(0, 0, 0, 0.1);'}
        sub_image_border_radius={7}
      />
      <SpaceDivider height={100} />
      <Block2Part
        items={[
          {
            content: (
              <div>
                <div className="integration-logo magento2-woocommerce">
                  <GatsbyImage
                    image={data.magento2Logo.childImageSharp.gatsbyImageData}
                    imgStyle={{ maxWidth: '228px', objectFit: 'contain' }}
                    alt="Magento 2"
                  />
                  <GatsbyImage
                    image={data.woocommerceLogo.childImageSharp.gatsbyImageData}
                    imgStyle={{ maxWidth: '248px', objectFit: 'contain' }}
                    alt="WooCommerce"
                  />
                </div>
                <div>
                  Resolve’s Magento 2 or WooCommerce Checkout Extension allows
                  your customers to apply for net terms at checkout without
                  leaving your online store. Offer the same net terms options
                  across all your sales channels.
                </div>
              </div>
            ),
          },
          {
            content: (
              <div>
                <div className="integration-logo">
                  <span
                    className="icon"
                    style={{ display: 'flex', justifyContent: 'flex-start' }}
                  >
                    <IntegrationIcon width={90} height={90} />
                    <h2
                      className="block-2-part__item-title"
                      style={{ fontWeight: '400', fontSize: '32px' }}
                    >
                      Custom connections
                    </h2>
                  </span>
                </div>
                <div>
                  Resolve's flexible API can be integrated into any ecommerce
                  platform. Allow your business customers to apply for net terms
                  at checkout without leaving your online store.
                </div>
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider />
      <Block3Part
        title="How net terms management helps your ecommerce"
        items={[
          {
            pretitle: <IncreaseIcon />,
            title: 'Increase your B2B sales',
            content: (
              <div>
                Offering net terms to business buyers is proven to increase
                sales volume and customer retention.
              </div>
            ),
          },
          {
            pretitle: <MoneyRepeatIcon />,
            title: 'Improve your cash flow',
            content: (
              <div>
                Get cash in the bank, and fast. Resolve will advance pay
                invoices from your approved customers.
              </div>
            ),
          },
          {
            pretitle: <ReduceFinancialRiskIcon width={64} height={64} />,
            title: `Reduce your financial risk`,
            content: (
              <div>
                Let us take on the risk of offering net terms. Floating your own
                net terms could sink your business.
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider />
      <Block2Part
        title="What does Resolve look like in your ecommerce checkout?"
        items={[
          {
            pretitle: (
              <GatsbyImage
                image={data.checkOut.childImageSharp.gatsbyImageData}
                className="block-img-with-shadow"
                alt="Checkout"
              />
            ),
            title: `Net terms at checkout`,
            content: (
              <div>
                Your customers get the option to apply for net terms (or utilize
                approved net terms) at checkout. Application is through a simple
                Resolve powered form.
              </div>
            ),
          },
          {
            pretitle: (
              <GatsbyImage
                image={data.approvedForCredit.gatsbyImageData}
                className="block-img-with-shadow"
                alt="Finalize Buyer Credit"
              />
            ),
            title: `Approval within 1 day`,
            content: (
              <div>
                Your customers hear back from us within a day and usually within
                hours. We'll keep them in the loop with the approval process -
                once approved they complete their purchase.
              </div>
            ),
          },
        ]}
        grayBackground
        textAlign="center"
      />
      <SpaceDivider height={50} />
      <BlockImageRight
        image={images['shopify']}
        title={<span>Looking for a Shopify net terms option?</span>}
        description="Resolve doesn't currently offer a Shopify checkout flow integration. However, we still have some options for Shopify merchants to offer net terms to their customers. Please reach out to discuss the details with our team."
        withButton={{
          text: 'Request demo',
          linkTo: '/contact-sales/',
          hasArrow: true,
          large: true,
        }}
        boxShadow="none"
        image_width={247}
        image_align="center"
      />
      <SpaceDivider />
      <Block3Part
        title={
          <div>
            How do we approve your
            <br />
            customers for net terms?
          </div>
        }
        items={[
          {
            pretitle: <SmartCheckIcon />,
            title: (
              <div>
                Resolve runs smart
                <br />
                credit checks
              </div>
            ),
            content: (
              <div>
                Depending on the results, your customer's invoices will qualify
                for Advance Pay - 90% paid upfront. Note that higher risk
                customers may still qualify for 75% or 50% advance.
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
                customers you can absorb this fee into your pricing, or pass it
                on to them.
              </div>
            ),
          },
          {
            pretitle: <TimeNewIcon />,
            title: (
              <div>
                We'll chase payments
                <br />
                &amp; manage collections
              </div>
            ),
            content: (
              <div>
                Resolve is your 'credit team' on tap. We send payment reminders
                and help chase any late payments, saving your team time.
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider />
      <BlockImageLeft
        image={images['customer-summary']}
        title={
          <span>
            Which of your customers
            <br />
            can we work with?
          </span>
        }
        description="Resolve works best with your trusted repeat-purchase customers. Please note that consumers or sole-proprietors are not approvable for business credit."
        image_width={573}
      />
      <SpaceDivider />
      <BlockIconRight
        icon={<MoneySquareIcon width="197" height="197" />}
        title={<span>What does it cost to offer net terms?</span>}
        description="Resolve fees are a flat 2.61% on a 90% advanced, 30 day net terms invoice. Work the fees into your pricing or pass them on to your customer directly. Our 60 and 90 day net term options incur a higher fee."
        backgroundImage={getSrc(data.bgIcon.childImageSharp.gatsbyImageData)}
      />
      <SpaceDivider height={150} />
      <BlockCTA
        pretitle="Book a time with our product specialists"
        title={
          <span>
            Want to see the Resolve
            <br />
            checkout in action?
          </span>
        }
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
      />

      <Footer darkSkin />
      <style jsx global>{`
        .block-img-with-shadow {
          overflow: unset !important;
        }

        .block-img-with-shadow picture img {
          box-shadow: 0 42.4071px 84.8142px -42.4071px rgb(0 0 0 / 30%),
            0 70.6785px 141.357px -28.2714px rgb(50 50 93 / 25%),
            inset 0 1.41357px 1.41357px rgb(143 153 174 / 5%);
        }

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
          width: 100%;
        }
      `}</style>
    </Layout>
  );
}
