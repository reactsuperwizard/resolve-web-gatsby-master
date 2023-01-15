import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import Layout from '../components/Layout';
import SpaceDivider from '../components/SpaceDivider';
import Footer from '../components/Footer';
import BlockHero from '../components/home/BlockHero';
import BlockScrollingText from '../components/home/BlockScrollingText';
import BlockContentWithImage from '../components/home/BlockContentWithImage';
import BlockContentWithIcon from '../components/home/BlockContentWithIcon';
import BlockImage from '../components/home/BlockImage';
import BlockFinancialTech from '../components/home/BlockFinancialTech';
import BlockParallelCards from '../components/home/BlockParallelCards';
import BlockBusniessResults from '../components/home/BlockBusinessResults';
import BlockIndustriesServe from '../components/home/BlockIndustriesServe';
import BlockProductCards from '../components/BlockProductCards';
import BlockIntegrates from '../components/BlockIntegrates';
import BlockLogos from '../components/BlockLogos';
import CustomerIcon from '../components/icons/Customer';
import EnhanceIcon from '../components/icons/Enhance';
import PressureIcon from '../components/icons/Pressure';
import QuietCreditCheckIcon from '../components/icons/QuietCreditCheck';
import RiskAdvancePayIcon from '../components/icons/RiskAdvancePay';
import IntegrationsIcon from '../components/icons/Integrations';

import { edgesByName } from '../utils/gql';
import {
  screen,
  fonts,
  colors,
  Industries1,
  Industries2,
  Industries3,
  Industries4,
  Industries5,
  Industries6,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
  Learn1,
  Learn2,
  Learn3,
  Product1,
  Product2,
  Product3,
  CustomerChecker,
  CustomerCreditCheck,
  CreditBuyer,
  FinalizeBuyerCredit,
  Invoices,
} from '../constants';

export const pageQuery = graphql`
  query HomePageQuery {
    stars: file(relativePath: { eq: "home/5stars.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    manufacturer: file(relativePath: { eq: "home/manufacturer.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    automotive: file(relativePath: { eq: "home/automotive.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    industrial: file(relativePath: { eq: "home/industrial.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    grayMask: file(relativePath: { eq: "home/gray-mask.svg" }) {
      publicURL
    }
    bg: file(relativePath: { eq: "home/bg.svg" }) {
      publicURL
    }
    merchantAccountDashBoardImage: file(
      name: { eq: "merchant-account-dashboard" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    riskAssessment: file(name: { eq: "risk-assessment" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    paidInvoice: file(relativePath: { eq: "home/paid-invoice.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    aboutBusinessImage: file(
      relativePath: { eq: "home/about-business-advanced-wheel-teach-home.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
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
  }
`;

export default function IndexPage({ data }) {
  const companies = edgesByName(
    data.companies,
    node => node.image.gatsbyImageData
  );
  return (
    <Layout>
      <GatsbySeo
        title="Fuel growth with embedded B2B payments"
        description="Resolve is the easiest way to increase your customers' buying power via credit lines and Net Payment Terms. Trusted by the world's most innovative companies."
      />
      <BlockHero />
      <BlockLogos
        title="Trusted by over 12,000 businesses"
        image={data.stars}
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
            offsetTop: 0,
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
      <BlockScrollingText />

      <BlockContentWithImage
        title={<span>Managing net terms credit in-house is risky</span>}
        description="The in-house resources needed to manage net terms are costly. Credit checking, credit line decisions, reminders, and collections processes result in cash flow delays. Smart businesses outsource credit to experts."
        main_image={CustomerChecker}
        modal_image={CustomerCreditCheck}
      />
      <BlockContentWithImage
        title={<span>How does managing terms impact growth?</span>}
        description="Offer your customers a professional and simplified buying experience. Don't make them wait to get net terms, or give them reason to buy elsewhere."
        net_terms={[
          'Slow credit checks?',
          'Limited credit lines?',
          'Clunky invoicing communications?',
          'Limited payment options?',
        ]}
        main_image={CreditBuyer}
        modal_image={FinalizeBuyerCredit}
        flex_direction="row-reverse"
      />
      <BlockContentWithImage
        title={<span>Remove uncertainty from credit decisions</span>}
        description="Does it take more than a week to approve a new customer? How confident do you feel about credit line decisions? Resolve gives you credit expertise on tap, and near-instant approvals. Offer net terms with confidence."
        main_image={Invoices}
        withButton={{
          text: 'Request demo',
          linkTo: '/contact-sales/',
        }}
      />

      <SpaceDivider height={100} />
      <BlockContentWithIcon
        title="How does Resolve fuel business growth?"
        items={[
          {
            icon: <CustomerIcon className="customer-icon" />,
            title: "Improve your customer's experience",
            content:
              "Modernize your customer's experience with an online payment portal. One place to manage open invoices and process payments — ACH, wire, credit card, and checks.",
          },
          {
            icon: <EnhanceIcon className="customer-icon" />,
            title: 'Enhance your AR team',
            content:
              'Resolve is your AR team on tap - automating payment processing, reminders, and collections. We also take care of credit checks, credit decisions, and invoicing.',
          },
          {
            icon: <PressureIcon className="customer-icon" />,
            title: 'Ease capital pressures',
            content:
              'Smooth uneven cash flow and reduce bad debts with embedded invoice financing. Access flexible net terms invoice advance payment options. Receive payment in one day.',
          },
        ]}
      />

      <BlockImage />
      <BlockFinancialTech />
      <BlockParallelCards
        title="Businesses are growing with Resolve"
        items={[
          {
            title: 'Commercial Electronics',
            desc: 'How Archipelago Lighting tripled revenue while increasing purchasing speed by 90%',
            img: CaseStudy1,
            to: '/blog/post/how-archipelago-tripled-their-revenue-through-resolve/',
          },
          {
            title: 'Sporting Goods',
            desc: 'How Tern Bicycles increased sales orders with better B2B payment workflows',
            img: CaseStudy2,
            to: '/blog/post/tern-bicycles-b2b-payments/',
          },
          {
            title: 'Industrial equipment',
            desc: 'How Elston Materials plans on growing by 20% with improved margins and morale',
            img: CaseStudy3,
            to: '/blog/post/concrete-supplier-elston-materials-sales-growth/',
          },
        ]}
      />
      <BlockBusniessResults />
      <BlockIndustriesServe
        items={[
          {
            title: 'Industrial equipment',
            desc: 'We already work with manufacturers of industrial equipment, machinery, parts, safety gear, and more.',
            img: Industries1,
          },
          {
            title: 'Sporting goods',
            desc: 'Resolve works with many sporting goods companies such as bike manufacturers and distributors.',
            img: Industries2,
          },
          {
            title: 'Construction machinery',
            desc: 'Resolve works with machinery suppliers into the construction industry, parts, accessories and more.',
            img: Industries3,
          },
          {
            title: 'Commercial electronics',
            desc: 'Resolve is familiar with companies in LED lighting, commercial lighting, lighting fixtures, security equipment, smart homes, etc.',
            img: Industries4,
          },
          {
            title: 'Automotive & parts',
            desc: 'Resolve works with companies in the automotive sector specializing in parts, tires, and marketplaces.',
            img: Industries5,
          },
          {
            title: 'Manufacturers & wholesalers',
            desc: 'Resolve works best with companies selling physical products; Our customers are usually manufacturers, wholesalers, re-sellers, or distributors.',
            img: Industries6,
          },
        ]}
      />

      <BlockProductCards
        title="Product pages"
        items={[
          {
            to: '/business-credit-check/',
            title: (
              <>
                <QuietCreditCheckIcon />
                <span style={{ marginLeft: '12px' }}>
                  Quiet credit checking
                </span>
              </>
            ),
            content:
              "Take advantage of Resolve's proprietary 'quiet credit check'. Our credit experts share credit results within 24 hours - only the business name and address are needed.",
            image: Product1,
          },
          {
            to: '/b2b-payments/',
            title: (
              <>
                <RiskAdvancePayIcon />
                <span style={{ marginLeft: '12px' }}>
                  De-risk with Advance Pay
                </span>
              </>
            ),
            content:
              'Relieve working capital and supply chain pressures with Advance Pay. Get paid 30 to 90 day faster, reduce your bad debt risk, and ease cash flow constraints.',
            image: Product2,
          },
          {
            to: '/integrations',
            title: (
              <>
                <IntegrationsIcon />
                <span style={{ marginLeft: '12px' }}>
                  Integrations & connections
                </span>
              </>
            ),
            content:
              'Traditional sales or ecommerce - Resolve integrates seamlessly into your workflows. We make offering net terms to your customers simple.',
            image: Product3,
          },
        ]}
      />
      <BlockProductCards
        title="Learn more about Resolve"
        items={[
          {
            to: '/blog/post/best-B2B-payment-solutions-guide/',
            title: 'The Definitive Guide to the Best B2B Payments Platforms',
            image: Learn1,
          },
          {
            to: '/blog/post/how-to-offer-net-terms-online/',
            title: 'How to Offer Net Terms Online: The Ultimate Guide for B2B',
            image: Learn2,
          },
          {
            to: '/blog/post/resolve-guide-customer-credit-checking/',
            title: 'How to Run a Business Credit Check Like a Pro',
            image: Learn3,
          },
        ]}
      />

      <BlockIntegrates />

      <Footer darkSkin />
      <style jsx>{`
        .block-background {
          background-image: url(${data.bg.publicURL});
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: auto;
        }
        .block-industries {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-template-rows: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }
        .block-industries__item {
          box-shadow: 0 48.4511px 96.9023px -48.4511px rgba(0, 0, 0, 0.2),
            0 0 10px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          background-color: #ffffff;
          font-size: 24px;
          line-height: 1.4;
          font-family: ${fonts.halyardDisplay};
          color: ${colors.darkSlateBlue};
          font-weight: 400;
          text-align: center;
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .block-customers {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
          margin-top: 30px;
        }
        .block-customers__item {
          background-color: #ffffff;
          box-shadow: 0 48.4511px 96.9023px -48.4511px rgba(0, 0, 0, 0.2),
            0 0 10px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
        }
        .block-customers__item-title {
          padding: 40px 30px;
          border-bottom: 1px solid rgba(20, 24, 34, 0.2);
          font-size: 24px;
          line-height: 1.4;
          font-family: ${fonts.halyardDisplay};
          color: ${colors.darkSlateBlue};
          font-weight: 400;
          margin: 0;
        }
        .block-customers__item-stats {
          padding: 30px;
          display: flex;
          justify-content: space-between;
        }
        .block-customers__item-stat:not(:last-child) {
          margin-right: 20px;
        }
        .block-customers__item-stat-title {
          color: ${colors.salmon};
          font-family: ${fonts.halyardDisplay};
          font-size: 40px;
          line-height: 48px;
          font-weight: 400;
          display: block;
        }
        .block-customers__item-stat-desc {
          font-size: 20px;
        }
        @media (max-width: ${screen.tabletMax}px) {
          .block-industries {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: repeat(3, minmax(0, 1fr));
          }
          .block-learn-more {
            box-shadow: none;
            padding: 0;
            border-radius: 0;
            margin: 0;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-industries {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            grid-template-rows: repeat(6, minmax(0, 1fr));
          }
          .block-industries__item {
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .block-customers {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
          .block-customers__item-title {
            padding: 30px;
          }
          .block-customers__item-stats {
            flex-wrap: wrap;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-customers__button {
          margin-left: 30px;
          margin-bottom: 30px;
          margin-top: 15px;
        }
        .block-learn-more__button {
          display: block;
          margin: 0 auto;
        }
        .request-button {
          display: inline-block;
          border: 0;
          background: ${colors.orange2};
          color: #fff;
          cursor: pointer;
          outline: none;
          border-radius: 32px;
          font-size: 18px;
          line-height: 24px;
        }
      `}</style>
    </Layout>
  );
}
