import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import BlockCustomerStoriesHero from "../../components/customer-stories/BlockCustomerStoriesHero";
import BlockCaseStudyCards from '../../components/BlockCaseStudyCards';
import BlockCustomerSays from '../../components/BlockCustomerSays';

import { fonts, colors, screen, Case1, Case2, Case3, Case4, Case5, Case6, Case7, Case8, Case9, G2, Capterra } from '../../constants';

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default function caseStudiesPage({ data }) {
  const title = 'Customer Success Stories';
  const description =
    'Learn how our customers have used Resolve to simplify their accounts receivable, improve cash flow, reduce risk, and grow sales.';

  const case_studies = [
    {
      desc: (
        <>
          How Archipelago tripled revenue while increasing purchasing speed by 90%
        </>
      ),
      to: '/blog/post/how-archipelago-tripled-their-revenue-through-resolve/',
      img: Case1,
      title: 'Manufacturers & wholesalers',
    },
    {
      desc: (
        <>
          Better than Bill.com: Navigating price surges with a QBO integration
        </>
      ),
      to: '/blog/post/a-quickbooks-online-integration-better-than-bill-com/',
      img: Case2,
      title: 'Automotive & parts',
    },
    {
      desc: (
        <>
          SDi Fire unlcoks working capital and inceases profit margins by 25%
        </>
      ),
      to: '/customers/sdi-fire/',
      img: Case3,
      title: 'Industrial equipment',
    },
    {
      desc: (
        <>
          How a fast-growing supplier erased AR pains while enhancing customer relationships
        </>
      ),
      to: '/blog/post/how-a-supplier-solved-AR-challenges-with-Resolve/',
      img: Case4,
      title: 'Manufacturers & wholesalers',
    },
    {
      desc: (
        <>
          DocShop Pro built a medical marketplace with growing cart sizes
        </>
      ),
      to: '/blog/post/docshop-pro-b2b-marketplace-resolve/',
      img: Case5,
      title: 'Manufacturers & wholesalers',
    },
    {
      desc: (
        <>
          How Elston Materials plans on growing by 20% with improved margins and morale
        </>
      ),
      to: '/blog/post/concrete-supplier-elston-materials-sales-growth/',
      img: Case6,
      title: 'Manufacturers & wholesalers',
    },
    {
      desc: (
        <>
          Expanding a specialty B2B marketplace into new markets: Lessons from GoMaterials
        </>
      ),
      to: '/blog/post/b2b-marketplace-gomaterials/',
      img: Case7,
      title: 'Manufacturers & wholesalers',
    },
    {
      desc: (
        <>
          How Tern Bicycles increased sales orders with better B2B payment workflows
        </>
      ),
      to: '/blog/post/tern-bicycles-b2b-payments/',
      img: Case8,
      title: 'Manufacturers & wholesalers',
    },
    {
      desc: (
        <>
          How a B2B tire distributor tripled revenue with a net terms payment partner
        </>
      ),
      to: '/blog/post/b2b-tire-marketplace-net-terms-credit-management/',
      img: Case9,
      title: 'Manufacturers & wholesalers',
    },
  ];
  const customer_says = [
    {
      logo: G2,
      siteName: 'G2',
      review: `"If you are looking for a credit terms company, 
      Resolve is your go-to! We really enjoy how involved Resolve is when assisting customers and getting them approved for credit terms. This allows our company to grow in revenue."`,
      name: 'Kristin N.',
      role: 'Operations Manager',
      link: 'https://www.g2.com/products/resolve-resolve/reviews',
    },
    {
      logo: Capterra,
      siteName: 'Capterra',
      review: `"Resolve is an amazing company to partner with. Their customer service is out of this world. The software is extremely easy to navigate through. I couldn't speak higher about our experience with Resolve."`,
      name: 'Quinn S.',
      role: 'AR Specialist',
      link: 'https://www.capterra.com/p/230146/Resolve/reviews/',
    },
  ];

  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          url: `${data.site.siteMetadata.siteUrl}/customers/`,
          title: `${title} | Resolve`,
          description: `${description}`,
        }}
      />

      <BlockCustomerStoriesHero title="Meet our growing customers"
        desc="Read our case studies to learn how manufacturers, commercial suppliers, and resellers all grew faster with Resolve." />
      <Container>
        <BlockCaseStudyCards items={case_studies} />
        <BlockCustomerSays items={customer_says} />
      </Container>
      <Footer />
      <style jsx>{`
        .data-info {
          display: flex;
          font-family: ${fonts.halyardDisplay};
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 1.4;
          letter-spacing: 0.024px;
          text-transform: uppercase;
          margin-top: 32px;
          margin-bottom: 64px;
          max-width: 540px;
        }

        .red-title {
          text-transform: none;
          font-size: 48px;
          line-height: 1.2;
          letter-spacing: 0.053px;
          color: ${colors.salmon};
          padding-bottom: 8px;
        }

        .data-info > div:not(:last-child) {
          padding-right: 24px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .data-info {
            flex-direction: column;
          }

          .data-info > div:not(:last-child) {
            margin-bottom: 22px;
            padding-right: 0;
          }
        }
      `}</style>
    </Layout>
  );
}
