import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Footer from '../components/Footer';
import BlockLogos from '../components/BlockLogos';
import SpaceDivider from '../components/SpaceDivider';
import BlockContactUsHubspotForm from '../components/BlockContactUsHubspotForm';
import SocialValidationCard from '../components/SocialValidationCard';

import { screen } from "../constants";

import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
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

export default function ContactSalesPage({ data }) {
  const companies = edgesByName(
    data.companies,
    node => node.image.gatsbyImageData
  );

  return (
    <Layout landingNav>
      <GatsbySeo
        title="Request a demo of Resolve"
        description="Resolve helps manage net terms and credit lines. See our product in action, and find out how we can help your account receivable processes."
      />
      <Container>
        <div className="contact-us-section">
          <BlockContactUsHubspotForm />
          <SocialValidationCard />
        </div>
        <SpaceDivider height={100} />
        <BlockLogos
          pretitle="Trusted by innovative companies"
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
      </Container>
      <Footer darkSkin />
      <style jsx>{`
        .contact-us-section {
          margin-top: 130px;
          display: flex;
          align-items: flex-start;
          flex-direction: row;
        }

        @media (max-width: 1140px) {
          .contact-us-section {
            flex-direction: column;
          }
        }
        @media (max-width: ${screen.mobileMax}) {
          .contact-us-section {
            margin-top: 60px;
          }
        }
      `}</style>
      <style jsx global>{`
        .contact-us-section .social-validation-card {
          margin-top: 50px;
        }

        .contact-us-section > div:first-child {
          margin-right: 124px;
        }

        @media (max-width: 1140px) {
          .contact-us-section > div:first-child {
            margin-right: auto;
            margin-bottom: 56px;
          }

          .contact-us-section .social-validation-card {
            margin: 0 auto;
          }
        }
      `}</style>
    </Layout>
  );
}
