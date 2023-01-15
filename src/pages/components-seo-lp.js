import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Banner from '../components/Banner';
import BlockHeaderNoImage from '../components/BlockHeaderNoImage';
import SpaceDivider from '../components/SpaceDivider';
import BlockLogos from '../components/BlockLogos';
import BlockImageRight from '../components/BlockImageRight';
import BlockCards from '../components/BlockCards';
import Block4Part from '../components/Block4Part';
import Block4PartCompanies from '../components/Block4PartCompanies';
import Footer from '../components/Footer';

import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
    simpleTire: file(name: { eq: "simple-tire" }) {
      childImageSharp {
        gatsbyImageData(width: 520, layout: CONSTRAINED)
      }
    }
    simpleTireSmall: file(name: { eq: "simple-tire-small" }) {
      childImageSharp {
        gatsbyImageData(width: 244, layout: CONSTRAINED)
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
    OndemandTiresImage: contentfulCompany(name: { eq: "Ondemand tires" }) {
      image {
        gatsbyImageData(width: 130, layout: FIXED)
      }
    }
    LEDMyplaceImage: contentfulCompany(name: { eq: "LEDMyplace" }) {
      image {
        gatsbyImageData(width: 130, layout: FIXED)
      }
    }
    ikioImage: contentfulCompany(name: { eq: "ikio" }) {
      image {
        gatsbyImageData(width: 130, layout: FIXED)
      }
    }
  }
`;

export default function FeaturesLPExamplePage({ data }) {
  const companies = edgesByName(
    data.companies,
    node => node.image.gatsbyImageData
  );

  return (
    <Layout>
      <GatsbySeo title="Advance Pay" />
      <Banner />
      <Container>
        <BlockHeaderNoImage
          pretitle="Advance Pay"
          title="Get paid faster than your customers pay you"
          desc="Accelerate payments on net terms, so that you can unlock trapped working capital, invest in your business, and reduce risk "
          primaryButtonText="Get started"
          primaryButtonTo="/contact-sales/"
        />

        <SpaceDivider height={100} />

        <BlockLogos
          title="Trusted by the world's most innovative companies"
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

        <SpaceDivider height={100} />

        <BlockImageRight
          image={data.simpleTire.childImageSharp.gatsbyImageData}
          sub_image={data.simpleTireSmall.childImageSharp.gatsbyImageData}
          title="Get Paid Upfront"
          subtitle={<span>Make big sales and get paid upfront</span>}
          description="Offer Net 30-60-90 to your buyers while unlocking working capital anytime by drawing funds from invoices"
        />

        <SpaceDivider height={100} />

        <h2>What is [Feature]?</h2>
        <p>Ability to add large content block</p>

        <SpaceDivider height={100} />

        <h2>How to use [Feature]?</h2>
        <p>Ability to add large content block</p>

        <SpaceDivider height={100} />

        <Block4Part
          title="Value prop/features section"
          items={[
            {
              title: 'Increase in average order size',
              content: (
                <div>
                  Give your buyers the credit they need to grow and make larger
                  purchases.
                </div>
              ),
            },
            {
              title: 'Faster sales cycle time',
              content: (
                <div>
                  Close new buyers faster and streamline credit approvals.
                </div>
              ),
            },
            {
              title: 'Average time for buyer application',
              content: (
                <div>
                  It takes only minutes to fill out your integrated secure web
                  application.{' '}
                </div>
              ),
            },
          ]}
        />

        <SpaceDivider height={100} />

        <Block4PartCompanies
          title="Innovative companies see results with Resolve"
          mainItem={{
            image: data.OndemandTiresImage.image.gatsbyImageData,
            imageDesc: 'Ondemand tires company logo',
            review: (
              <span>
                "When a customer of ours uses Resolve,
                <br />
                they're significantly more likely to buy from
                <br />
                us again and again down the road."
              </span>
            ),
          }}
          items={[
            {
              id: 'led-my-place',
              image: data.LEDMyplaceImage.image.gatsbyImageData,
              imageDesc: 'LEDMyplace company logo',
              review: '20% Increase in average order size',
            },
            {
              id: 'ikio',
              image: data.ikioImage.image.gatsbyImageData,
              imageDesc: 'ikio company logo',
              review: 'Increase in corporate buyers',
            },
          ]}
        />

        <SpaceDivider height={100} />

        <BlockCards
          title="See related content/features"
          cards={[
            {
              id: 'optimize-your-receivables',
              title: 'Optimize your receivables',
              href: '/optimize-accounts-receivable/',
              content:
                'Leverage powerful eCommerce integrations to automate from approval to financing to checkout. ',
            },
            {
              id: 'grow-your-sales',
              title: 'Grow your sales',
              href: '/grow-sales/',
              content:
                'Flex your B2B muscle with credit and financing automation to boost order size and order frequency.',
            },
          ]}
          marginBottom
        />
      </Container>
      <Footer />
    </Layout>
  );
}
