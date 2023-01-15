import React from 'react';
import { getSrc } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Block3PartIllo from '../components/Block3PartIllo';
import Block4Part from '../components/Block4Part';
import Block4PartCompanies from '../components/Block4Part';
import BlockAboutDescription from '../components/BlockAboutDescription';
import BlockCTA from '../components/BlockCTA';
import BlockHowItWorks from '../components/BlockHowItWorks';
import BlockHeaderHomepage from '../components/BlockHeaderHomepage';
import BlockHeaderNoImage from '../components/BlockHeaderNoImage';
import BlockHeaderWithImage from '../components/BlockHeaderWithImage';
import BlockImageRight from '../components/BlockImageRight';
import BlockImageLeft from '../components/BlockImageLeft';
import BlockLogos from '../components/BlockLogos';
import BlockQuote from '../components/BlockQuote';
import BlockText from '../components/BlockText';

import SpaceDivider from '../components/SpaceDivider';
import BlockCards from '../components/BlockCards';
import Footer from '../components/Footer';

import TimeIcon from '../components/icons/Time';
import ShieldIcon from '../components/icons/Shield';
import DropIcon from '../components/icons/Drop';

import { edgesByName } from '../utils/gql';

export const pageQuery = graphql`
  {
    repeatCustomersImage: file(name: { eq: "repeat-customers" }) {
      childImageSharp {
        gatsbyImageData(width: 480, layout: CONSTRAINED)
      }
    }
    biggerBuyersImage: file(name: { eq: "bigger-buyers" }) {
      childImageSharp {
        gatsbyImageData(width: 520, layout: CONSTRAINED)
      }
    }
    homeFurnishingsSmall: file(name: { eq: "home-furnishings-small" }) {
      childImageSharp {
        gatsbyImageData(width: 244, layout: CONSTRAINED)
      }
    }
    simpleTireSmall: file(name: { eq: "simple-tire-small" }) {
      childImageSharp {
        gatsbyImageData(width: 244, layout: CONSTRAINED)
      }
    }
    banner: file(relativePath: { eq: "banners/why-sell-banner.png" }) {
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
    howItWorksImages: allFile(
      filter: { relativeDirectory: { eq: "how-it-works" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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

export default function ComponentsPage({ data }) {
  const companies = edgesByName(
    data.companies,
    node => node.image.gatsbyImageData
  );
  const howItWorksImages = edgesByName(data.howItWorksImages);

  return (
    <Layout>
      <Container>
        <h3>Block3PartIllo</h3>
        <Block3PartIllo
          title="Why sell with Resolve"
          rows={[
            [
              {
                icon: <TimeIcon />,
                title: 'Expand your average order size',
                content: (
                  <div>
                    Give your buyers the credit they need to expand their
                    budgets to pull the trigger on a larger purchase.
                  </div>
                ),
              },
              null,
              null,
            ],
            [
              {
                icon: <ShieldIcon width="28" height="28" />,
                title: 'Increase repeat purchases',
                content: (
                  <div>
                    Provide your buyers a dedicated line of credit to encourage
                    them to purchase again and again with you.
                  </div>
                ),
              },
              {
                icon: <DropIcon width="28" height="28" />,
                title: 'Convert new and old leads into buyers',
                content: (
                  <div>
                    Our credit approvals help you reach out to existing or new
                    customers who haven't yet started to buy from you.{' '}
                  </div>
                ),
              },
              null,
            ],
          ]}
          backgroundImage={getSrc(data.banner.childImageSharp.gatsbyImageData)}
        />
        <SpaceDivider height={100} />
        <h3>Block4Part</h3>
        <Block4Part
          title="Block4Part Title"
          items={[
            {
              pretitle: '20%+',
              title: 'Increase in average order size',
              content: (
                <div>
                  Give your buyers the credit they need to grow and make larger
                  purchases.
                </div>
              ),
            },
            {
              pretitle: '90%',
              title: 'Faster sales cycle time',
              content: (
                <div>
                  Close new buyers faster and streamline credit approvals.
                </div>
              ),
            },
            {
              pretitle: '< 1 min',
              title: 'Average time for buyer application',
              content: (
                <div>
                  It takes only minutes to fill out your integrated secure web
                  application.{' '}
                </div>
              ),
            },
            {
              pretitle: '$0',
              title: 'The cost buyers pay for credit',
              content: (
                <div>
                  Reward your loyal buyers with flexible payment and 0% APR
                  terms.{' '}
                </div>
              ),
            },
          ]}
        />
        <SpaceDivider height={100} />
        <h3>Block4PartCompanies</h3>
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
              title: 'LEDMyplace',
              image: data.LEDMyplaceImage.image.gatsbyImageData,
              imageDesc: 'LEDMyplace my place company logo',
              review: '20% Increase in average order size',
            },
            {
              title: 'ikio',
              image: data.ikioImage.image.gatsbyImageData,
              imageDesc: 'ikio company logo',
              review: 'Increase in corporate buyers',
            },
          ]}
        />
        <SpaceDivider height={100} />
        <h3>BlockAboutDescription</h3>
        <BlockAboutDescription
          desc={
            <>
              <p className="title app_pretitle">Our story</p>
              <p className="app__desc">
                Resolve creates a two-way relationship for you and your buyers:
                they get improved cash flow and financing and you get repeat
                purchases.
              </p>
              <p className="app__desc">
                Our credit lines have driven sales, increased order size, and
                improved customer satisfaction for countless companies, and they
                will for you too.
              </p>
            </>
          }
        />
        <SpaceDivider height={100} />
        <h3>BlockBackgroundAngled</h3>
        <SpaceDivider height={100} />
        <h3>BlockLogos</h3>
        <BlockLogos
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
        <h3>BlockCTA</h3>
        <BlockCTA
          pretitle="Ready to get started?"
          title="Take your B2B sales to the next level."
          primaryButtonText="Get started"
          secondaryButtonText="Contact sales"
          secondaryButtonTo="/contact-sales/"
        />
        <SpaceDivider height={100} />
        <h3>BlockHeaderWithImage</h3>
        <BlockHeaderWithImage
          title="Powerful tools built for every step of B2B sales."
          subtitle="How Resolve Works"
          desc="Resolve is designed to help your sales team close deals and convert leads - from large manual orders to enterprise level eCommerce checkouts."
          image={data.biggerBuyersImage.childImageSharp.gatsbyImageData}
          primaryButtonText="Get started"
          primaryButtonTo="/contact-sales/"
        />
        <SpaceDivider height={100} />
        <h3>BlockHowItWorks</h3>
        <BlockHowItWorks
          pretitle="simple and automated"
          title="Resolve fits your B2B sales flow"
          data={[
            {
              id: '01',
              question: 'Offer net terms',
              answer:
                'Easily extend net terms financing on your website using our net term payment gateway.',
              image: howItWorksImages['mills'],
            },
            {
              id: '02',
              question: 'Get more customers',
              answer:
                'Buyers apply through your unique application to get approved for dedicated payment terms (net 30-60) with your business within one business day.',
              image: howItWorksImages['tell-us-about'],
            },
            {
              id: '03',
              question: 'Make sales',
              answer:
                'You recieve more sales and your buyers receive a personalized confirmation of their payment.',
              image: howItWorksImages['order-confirmation'],
            },
            {
              id: '04',
              question: 'Get paid',
              answer:
                'After a purchase is placed, Resolve automatically deposits the funds into your bank account. We handle invoicing the customer, billings, and collections.',
              image: howItWorksImages['get-paid'],
            },
          ]}
        />
        <SpaceDivider height={100} />
        <h3>BlockHeaderHomepage</h3>
        <BlockHeaderHomepage
          desc="Resolve is the easiest way to increase your customers' buying power via credit lines and Net Payment Terms. Trusted by the world's most innovative companies."
          primaryButtonText="Get a Demo"
          primaryButtonTo="/"
        />
        <SpaceDivider height={100} />
        <h3>BlockHeaderNoImage</h3>
        <BlockHeaderNoImage
          pretitle="Grow Your Sales"
          title="Better buyer financing that grows your B2B sales"
          desc="The future of B2B is in capturing and supporting your buyers, big and small.  Resolve gives your buyers the financial tools and A/P optimization to make bigger purchases, more often."
          primaryButtonText="Get started"
          primaryButtonTo="/"
          secondaryButtonText="Secondary"
          secondaryButtonTo="/"
        />
        <SpaceDivider height="100" />
        <h3>BlockImageRight</h3>
        <BlockImageRight
          image={data.repeatCustomersImage.childImageSharp.gatsbyImageData}
          sub_image={data.homeFurnishingsSmall.childImageSharp.gatsbyImageData}
          pretitle="More repeat purchases"
          title={
            <span>
              Make buyers <br /> into repeat customers
            </span>
          }
          description="Resolve creates a two-way relationship for you and your buyers: they get improved cashflow and financing and you get repeat purchases. "
          quote="When a customer of ours uses Resolve, they're significantly more likely to buy from us again and again down the road."
          author={
            <span>
              <img
                src={companies['Ondemand tires']}
                alt="Ondemand tires company logo"
              />
            </span>
          }
        />
        <SpaceDivider height="100" />
        <h3>BlockImageLeft</h3>
        <BlockImageLeft
          image={data.biggerBuyersImage.childImageSharp.gatsbyImageData}
          sub_image={data.simpleTireSmall.childImageSharp.gatsbyImageData}
          pretitle="Bigger Buyers"
          title={<span>Work with bigger & better buyers</span>}
          description="Flexible financial tools power up your sales, with smoother cash flow for small buyers to
          extended lines for big buyers."
          quote="With Resolve, Ikio experienced an increase in corporate buyers."
          author={
            <span>
              <img src={companies['ikio']} alt="ikio company logo" />
            </span>
          }
        />
        <SpaceDivider height="100" />
        <h3>BlockQuote</h3>
        <SpaceDivider height="100" />
        <BlockQuote
          title="Account Executive at Hyperikon"
          author="Ray Gil"
          image={companies['Hyperikon']}
        >
          "Resolve has been like a spring... allowing us to grow and scale your
          B2B business more quickly than any other company. It's been a catalyst
          to faster and better growth for us."
        </BlockQuote>
        <SpaceDivider height="100" />
        <h3>BlockText</h3>
        <BlockText
          pretitle="Pretitle"
          title="Title"
          desc={
            <>
              <p>This is the body</p>
              <p>
                This is the 2nd paragraph. Start investing in your growth with
                improved cash flow. Smart companies focus on scaling and skip
                the risk and collections.
              </p>
              <p>
                This is the 3rd paragraph. Leverage powerful eCommerce
                integrations to automate from approval to financing to checkout.
              </p>
            </>
          }
        />
        <SpaceDivider height="100" />
        <h3>BlockCards</h3>
        <BlockCards
          cards={[
            {
              id: 'improve-your-cashflow',
              title: 'Improve your cash flow',
              href: '/improve-cashflow/',
              content:
                'Start investing in your growth with improved cash flow. Smart companies focus on scaling and skip the risk and collections.',
            },
            {
              id: 'optimize-your-receivables',
              title: 'Optimize your receivables',
              href: '/optimize-accounts-receivable/',
              content:
                'Leverage powerful eCommerce integrations to automate from approval to financing to checkout.',
            },
          ]}
          marginBottom
        />
      </Container>
      <Footer darkSkin />
    </Layout>
  );
}
