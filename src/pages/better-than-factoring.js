import React from 'react';
import { graphql } from 'gatsby';

import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import BlockHeaderWithImage from '../components/BlockHeaderWithImage';
import SpaceDivider from '../components/SpaceDivider';
import BlockCTA from '../components/BlockCTA';
import Footer from '../components/Footer';
import BlockText from '../components/BlockText';
import BlockImageRight from '../components/BlockImageRight';
import BlockImageLeft from '../components/BlockImageLeft';
import Block3Part from '../components/Block3Part';
import Block4Part from '../components/Block4Part';
import BlockLogos from '../components/BlockLogos';
import BlockQuote from '../components/BlockQuote';
import Banner from '../components/Banner';

import MoneyRepeatIcon from '../components/icons/MoneyRepeat';
import SmartCheckIcon from '../components/icons/SmartCheck';
import NetTermsCalendarNewIcon from '../components/icons/NetTermsCalendarNew';

import { screen } from '../constants';
import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
    bgIcon: file(relativePath: { eq: "common/bg-icon.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
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
    bg: file(relativePath: { eq: "home/bg.svg" }) {
      publicURL
    }
    aboutBusinessImage: file(
      relativePath: { eq: "home/about-business-advanced-wheel-teach-home.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    customerOverviewImage: file(
      name: { eq: "customer-overview-account-receivable" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    aboutYourBusinessImage: file(name: { eq: "about-your-business" }) {
      childImageSharp {
        gatsbyImageData(width: 500, quality: 90, layout: CONSTRAINED)
      }
    }
    finalizeBuyerCreditGroupImage: file(
      relativePath: { eq: "home/finalize-buyer-credit-group.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    arDashboardImage: file(
      relativePath: { eq: "better-than-factoring/ar-dashboard.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    reasonsImage: file(name: { eq: "reasons-invoice-factoring" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 90, width: 580)
      }
    }
  }
`;

const CTA_BLOG_URL =
  'https://resolvepay.com/blog/post/the-resolve-guide-8-reasons-to-avoid-invoice-factoring/';

export default function BetterThanFactoringPage({ data }) {
  const companies = edgesByName(
    data.companies,
    node => node.image.gatsbyImageData
  );

  return (
    <Layout>
      <GatsbySeo
        title="Find out why Resolve is better than factoring"
        description="Resolve is the modern alternative to invoice factoring & purchase order financing. Unlock accounts receivable cash flow in 1 day."
      />
      <Banner />
      <BlockHeaderWithImage
        title="Resolve is the modern alternative to factoring"
        desc="Resolve serves manufacturers and wholesalers who sell machinery, equipment, electronics, sporting goods, and more. You're expected to offer net terms to your business customers, but you'd like to unlock the cash flow that's tied up in these invoices. We'll explain why Resolve is safer, cheaper, and better for your reputation than factoring."
        image={data.arDashboardImage.childImageSharp.gatsbyImageData}
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
        bigCover
        bigCoverImageHeight={611}
      />
      <SpaceDivider height={50} />

      <BlockLogos
        title="We unlock cash flow for 1,000+ businesses"
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
      <div className="block-background">
        <BlockText
          title={
            <span>
              How Resolve is different from <br />
              traditional invoice / AR factoring
            </span>
          }
        />
        <SpaceDivider height={50} />
        <BlockImageLeft
          image={data.aboutYourBusinessImage.childImageSharp.gatsbyImageData}
          title="We remove the risk of customer non-payment"
          description="Resolve's pricing is on our website, fees are a flat 2.61% for 30-day net terms invoices with a 90% advance. Factoring can be expensive, and fee structures complex - it's often not clear how much it will end up costing you. With Resolve, we want to keep it simple and make sure you know exactly how much our fees will be. Our emphasis is on gold standard customer service and relationships."
          image_width={389}
          image_align="center"
          borderRadius={28}
        />
        <SpaceDivider height={50} />
        <BlockImageRight
          boxShadow={'0 0 black'}
          image={
            data.finalizeBuyerCreditGroupImage.childImageSharp.gatsbyImageData
          }
          title="No hidden fees or surprise charges"
          description="Unlike factoring, Resolve is non-recourse financing (and is not a loan). That means, once we approve a customer and advance pay their invoice - the risk is on us if they don't pay. Wouldn't it be nice to completely de-risk floating net terms invoices?"
          image_align="center"
          image_width={780}
        />
        <SpaceDivider height={50} />
        <BlockImageLeft
          image={data.aboutBusinessImage.childImageSharp.gatsbyImageData}
          title={<span>We're so much more than just factoring </span>}
          description="Unlike factoring, Resolve won’t tarnish your reputation. In fact, we modernize your customer's net terms &amp; credit application experience with you. Gain a self-branded online payment portal. They get more time to pay and more ways to pay — credit card, ACH, wires, and mailed checks."
          image_align="center"
          image_width={389}
          image_width_desktop={389}
          ctaText={'Learn more'}
          ctaButtonTo={'/contact-sales/'}
        />
        <SpaceDivider height={50} />
        <BlockImageRight
          image={data.customerOverviewImage.childImageSharp.gatsbyImageData}
          title={<span>Improve your customer's experience</span>}
          description="Resolve helps manage every aspect of offering net terms to your customers. From your customer's perspective, we're like an improved payments portal where they can pay invoices to you. Everything is white-labeled, and your customers (and you) interact with Resolve as an integrated Accounts Receivable resource that is making life better."
          image_width={1010}
          image_height={382}
          image_align="right"
          boxShadow={
            '0px 48.4511px 96.9023px -48.4511px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.05);'
          }
          borderRadius={8}
        />
        <SpaceDivider height={50} />
        <BlockImageLeft
          image={data.reasonsImage.childImageSharp.gatsbyImageData}
          title="Resolve blog: 8 Reasons why Resolve is better than invoice factoring"
          description="When it’s time to collect a late payment on an unpaid invoice, a factoring company will bombard your customers with automated emails until they pay.  They often engage debt-collection-agency scare tactics to make your customer cough up.  Resolve is in an on-going partnership with you, we improve and streamline your customer’s net terms payments experience."
          image_width={446}
          image_align="center"
          borderRadius={28}
          hasArrow={false}
          ctaButtonTo={CTA_BLOG_URL}
          ctaText="Read More"
        />
      </div>
      <SpaceDivider height={50} />

      <BlockQuote
        title="Vice President at Whitewater Forest Products"
        author="Chase Shiels"
        noColor={true}
      >
        "I don't want to act like a bank. With Resolve, it's win-win for
        everyone. I can offer my customers net terms, and I don't have to wait
        30 days to get paid."
      </BlockQuote>

      <Block3Part
        title="How does Resolve work?"
        items={[
          {
            pretitle: <SmartCheckIcon />,
            key: 'resolve-runs-smart-customer',
            title: <div>Resolve runs smart credit checks</div>,
            content: (
              <div>
                Approved customers qualify for Advance Pay. This means uo to 90%
                paid upfront on invoices.
              </div>
            ),
          },
          {
            pretitle: <MoneyRepeatIcon width="60" height="60" />,
            key: 'offer-net-terms',
            title: <div>Offer risk-free net terms</div>,
            content: (
              <div>
                Resolve in non-recourse financing (i.e. risk-free to you).
                Resolve fees are 2.61% on 30 day net terms.
              </div>
            ),
          },
          {
            pretitle: <NetTermsCalendarNewIcon />,
            key: 'chase-payments',
            title: <div>We’ll chase payments &amp; collections</div>,
            content: (
              <div>
                Resolve is like your ‘credit team’ on tap. We process payments,
                send reminders, and collect as needed.
              </div>
            ),
          },
        ]}
      />
      <Block4Part
        title={
          <span>
            The basics of improved
            <br /> cash flow with Resolve
          </span>
        }
        primaryButtonText="Learn More"
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
                On 30 day net terms &amp; <br />
                90% advance rate
              </div>
            ),
          },
        ]}
      />
      <SpaceDivider height={50} />
      <BlockCTA
        pretitle="TALK TO OUR HELPFUL TEAM"
        title={
          <span>
            Resolve is your #1 cash
            <br />
            flow solution
          </span>
        }
        primaryButtonText="Request demo"
        primaryButtonTo="/contact-sales/"
      />

      <Footer darkSkin />
      <style jsx global>{`
        .block-background {
          background-image: url(${data.bg.publicURL});
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: auto;
        }
        .block-quote {
          margin-top: 48px;
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
      `}</style>
    </Layout>
  );
}
