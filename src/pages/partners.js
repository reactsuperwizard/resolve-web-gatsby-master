import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import BlockWhyApply from "../components/partners/BlockWhyApply";
import BlockPartnerLogos from "../components/partners/BlockPartnerLogos";
import BlockQuote from '../components/BlockQuote';
import BlockIntegrates from "../components/BlockIntegrates";
import BlockBecomePartner from "../components/partners/BlockBecomePartner";
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import BlockPartnersHero from "../components/partners/BlockPartnersHero";
import BlockWhyPartner from "../components/partners/BlockWhyPartner";
import { B2bIcon, GrowIcon, ScaleIcon } from "../constants";

export const pageQuery = graphql`
  query PartnerPageQuery {
    bg: file(relativePath: { eq: "home/bg.svg" }) {
      publicURL
    }
    customerSummaryImage: file(
      relativePath: { eq: "partner/customer-summary.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default function PartnerPage({ data }) {

  return (
    <Layout>
      <GatsbySeo
        title="Learn about Partnerships with Resolve"
        description="Resolve Partnerships will help you drive growth for your clients and your business."
      />
      <BlockPartnersHero />
      <BlockWhyPartner title="Why partner with Resolve?"
        items={[
          {
            icon: GrowIcon,
            title: 'Grow your client’s business',
            content: "Resolve allows businesses to take on larger orders and enter new markets, without impacting their cash flow. Your clients can win more sales, get paid faster, and give their customers more time and more ways to pay."
          },
          {
            icon: B2bIcon,
            title: 'Implement modern B2B payments',
            content: "Resolve provides a modern B2B payments experience for your client’s customers. The online payments portal gives them both more time to pay, and more ways to pay. Resolve completes the ideal B2B tech-stack with our integration options.",
          },
          {
            icon: ScaleIcon,
            title: 'Scale your earnings',
            content: "Recommend the best-in-class solution for your clients, and earn commission as part of our revenue share program. We’re invested in your growth too, scale your business with Resolve.",
          },
        ]} />

      <BlockQuote author="SS&amp;Si Dealer Network">
        Resolve allowed us to expand &amp; enter new markets. We could now take
        larger orders on with net terms, which we previously had to turn down.
      </BlockQuote>
      <BlockWhyApply
        title="Who should apply?"
        items={[
          {
            title: 'Financial & e-commerce systems integrators',
            content: "These partners help their clients with financial processes, accounting system connections, and e-commerce payments. Apply to see how Resolve integrates with QuickBooks Online & Magento 2."
          },
          {
            title: 'B2B marketplaces & e-commerce',
            content: "Partner with Resolve to solve your B2B marketplace payments. Focus on growing your marketplace, we’ll take care of payments. Apply now to learn about our API payments experience and see our online payment portal demo."
          },
          {
            title: 'Resolve current customers',
            content: "Our current customers best understand the benefits of Resolve, making them the perfect referers . We give our current customers the opportunity to earn from their referrals to Resolve. Learn about our co-marketing support and options."
          },
        ]}
      />
      <BlockPartnerLogos />
      <BlockIntegrates />
      <BlockBecomePartner
        title="How to become a partner?"
        items={[
          {
            title: 'Apply now',
            content: "We encourage everyone who is interested to apply. From consultants to co-marketing opportunities. We’ll set up a time to chat.",
          },
          {
            title: 'Implement modern B2B payments',
            content: "We encourage everyone who is interested to apply. From consultants to co-marketing opportunities. We’ll set up a time to chat.",
          },
          {
            title: 'Scale your earnings',
            content: "Recommend the best-in-class solution for your clients, and earn commission as part of our revenue share program. We’re invested in your growth too, scale your business with Resolve.",
          },
        ]}
      />

      <Footer graySkin />
      <style jsx>{`
        .block-background {
          background-image: url(${data.bg.publicURL});
          background-repeat: no-repeat;
          background-position: 50%;
          background-size: auto;
        }
        .block-3part {
          margin-top: -300px;
        }
      `}</style>
      <style jsx global>{`
        .integration-logo.api svg {
          margin: -115px 0 -145px -25px;
        }

        .integration-logo.quickbooks picture img,
        .integration-logo.magento2 picture img {
          margin-left: -7px;
        }

        .magento2-woocommerce {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 15px;
          padding-top: 3px;
        }

        .magento2-woocommerce img {
          margin-right: 14px;
        }

        .magento2-woocommerce div {
          max-width: 168px;
        }

        .integration-logo.api {
          margin-bottom: 10px;
        }
      `}</style>
    </Layout>
  );
}
