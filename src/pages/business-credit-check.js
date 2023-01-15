import React from 'react';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import BlockHeaderWithImage from '../components/BlockHeaderWithImage';
import Block3Part from '../components/Block3Part';
import BlockText from '../components/BlockText';
import BlockCTA from '../components/BlockCTA';
import BlockQuote from '../components/BlockQuote';
import BlockLogos from '../components/BlockLogos';
import SpaceDivider from '../components/SpaceDivider';
import BlockImageRight from '../components/BlockImageRight';
import BlockImageLeft from '../components/BlockImageLeft';
import BlockIconRight from '../components/BlockIconRight';
import Footer from '../components/Footer';

import CreditTeamIcon from '../components/icons/CreditTeam';
import ReduceFinancialRiskIcon from '../components/icons/ReduceFinancialRisk';
import NetTermsCalendarIcon from '../components/icons/NetTermsCalendar';
import AccountReceivableIcon from '../components/icons/AccountReceivable';
import CreditCheckMetricIcon from '../components/icons/CreditCheckMetric';

import { edgesByName } from '../utils/gql';
import { screen } from '../constants';

export const pageQuery = graphql`
  {
    insightsImage: file(name: { eq: "insights" }) {
      childImageSharp {
        gatsbyImageData(width: 463, quality: 90, layout: CONSTRAINED)
      }
    }
    finalizeImage: file(name: { eq: "finalize" }) {
      childImageSharp {
        gatsbyImageData(width: 500, quality: 90, layout: CONSTRAINED)
      }
    }
    aboutYourBusinessImage: file(name: { eq: "about-your-business" }) {
      childImageSharp {
        gatsbyImageData(width: 389, quality: 90, layout: CONSTRAINED)
      }
    }
    reasonsImage: file(name: { eq: "reasons-net-terms" }) {
      childImageSharp {
        gatsbyImageData(width: 500, quality: 90, layout: CONSTRAINED)
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

const CTA_URL = 'https://b2b.resolvepay.com/free-business-credit-check';
const CTA_BLOG_URL =
  'https://resolvepay.com/blog/post/resolve-guide-customer-credit-checking/';

export default function CreditCheckPage({ data }) {
  const companies = edgesByName(
    data.companies,
    node => node.image.gatsbyImageData
  );

  return (
    <Layout>
      <GatsbySeo
        title="Business credit check your customers"
        description="Resolve business credit checks can help you eliminate net terms risk. We'll share information & results from our credit experts."
      />
      <BlockHeaderWithImage
        title="Your customer's credit analyzed by experts - for free"
        desc="Resolve's business credit check provides a full report that is personalized and evaluated by our credit experts. We only require the business name and address, that's it!"
        icon={
          <div className="credit-check-header-icon">
            <CreditCheckMetricIcon />
          </div>
        }
        primaryButtonText="Try for free"
        primaryButtonTo={CTA_URL}
        image_width={559}
        boxShadow="none"
      />
      <SpaceDivider height="100" />
      <BlockText title="Why the Resolve business credit check?" />
      <BlockIconRight
        icon={<ReduceFinancialRiskIcon width={197} height={197} />}
        backgroundImage={getSrc(data.bgIcon.childImageSharp.gatsbyImageData)}
        title="Your customer's credit-worthiness impacts you"
        description="Find out how safe your net terms invoice payments really are. The bigger your customers and their orders, the bigger the risk is to your business in floating net terms. We’ll share insights about your customers so you can de-risk your credit decisions."
      />
      <BlockImageLeft
        image={data.reasonsImage.childImageSharp.gatsbyImageData}
        title="Resolve blog: Why your team shouldn’t be doing credit checks"
        description="On paper, the old-school method for performing a business credit check looks pretty simple. But in reality, getting business data is a lengthy information-gathering expedition that can take days or weeks to complete."
        image_width={446}
        image_align="center"
        borderRadius={28}
        hasArrow={false}
        ctaButtonTo={CTA_BLOG_URL}
        ctaText="Read More"
      />
      <BlockImageRight
        image={data.aboutYourBusinessImage.childImageSharp.gatsbyImageData}
        title="It's simple - no lengthy forms required"
        description="Resolve puts an end to lengthy forms and manual reference checks. We only need the name &amp; address of your customer - that's it! Your customer doesn't need to provide a thing."
        image_width={389}
        image_align="center"
        borderRadius={28}
      />
      <SpaceDivider height="100" />
      <BlockCTA
        title="Try our business credit check for free..."
        primaryButtonText="Try for free"
        primaryButtonTo={CTA_URL}
        align="center"
        hasBackground={true}
        background={getSrc(data.reviewBanner.childImageSharp.gatsbyImageData)}
      />
      <BlockImageLeft
        image={data.insightsImage.childImageSharp.gatsbyImageData}
        title="Personalized insights from our credit experts"
        description="Our Resolve credit risk experts have a wealth of experience working with fortune 500 companies from Amazon to Paypal. We'll share easy-to-digest yet deep insights, that you can't get from credit bureaus."
        image_width={463}
        image_align="center"
        borderRadius={28}
      />
      <BlockImageRight
        image={data.finalizeImage.childImageSharp.gatsbyImageData}
        title="Resolve can improve your cash flow too"
        description="Resolve can also help you unlock cash tied up in net terms invoices. We'll pay your approved customer's net terms invoices in 1 day, increasing your cash flow and growth. This means Resolve takes on the risk of floating net terms with our non-recourse financing."
        image_width={389}
        image_align="center"
        borderRadius={28}
      />
      <SpaceDivider height="100" />
      <SpaceDivider height={50} />
      <Block3Part
        title={
          <span>
            How else does Resolve help
            <br />
            your business operations?
          </span>
        }
        items={[
          {
            icon: <NetTermsCalendarIcon width="60" height="60" />,
            title: 'Net terms & credit management ',
            content: (
              <div>
                Resolve&#39;s a complete net terms management solution -
                we&#39;ll take care of everything needed to offer net terms (30,
                60, or 90 days) to your customers.
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
      <BlockQuote
        title="Account Executive at Hyperikon"
        author="Ray Gil"
        image={companies['Hyperikon']}
      >
        "Resolve has been like a spring... allowing us to grow and scale our B2B
        business quickly. It&#39;s been a catalyst to faster and better growth
        for us."
      </BlockQuote>
      <SpaceDivider height="100" />
      <BlockLogos
        title="Resolve does business credit checking for thousands of these company's customers"
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
      <SpaceDivider height="100" />
      <BlockCTA
        pretitle="See Resolve for yourself."
        title={
          <span>
            Try our business credit
            <br />
            check today.
          </span>
        }
        primaryButtonText="Try for free"
        primaryButtonTo={CTA_URL}
      />
      <Footer />
      <style jsx global>
        {`
          .credit-check-header-icon {
            margin-left: -182px;
            margin-bottom: -150px;
          }

          @media (max-width: ${screen.navigationFirstPoint}px) {
            .credit-check-header-icon {
              margin-left: -80px;
              margin-bottom: -150px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
