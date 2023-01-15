import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import SpaceDivider from '../../components/SpaceDivider';

import BlockHeaderWithContent from '../../components/BlockHeaderWithContent';
import Tags from '../../components/Tags';

import { colors, fonts, screen } from '../../constants';
import BlockQuoteWithContent from '../../components/BlockQuoteWithContent';
import BlockCTA from '../../components/BlockCTA';

export const pageQuery = graphql`
  {
    hyperikonLedTubes: contentfulAsset(title: { eq: "hyperikon-led-tubes" }) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`;

export default function CaseStudyHyperikon({ data }) {
  const title = 'Hyperikon Customer Story';
  const description = `How Hyperikon multiplied their B2B sales and reduced their deal closing time with Resolve`;

  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title: `${title} | Resolve`,
          description: `${description}`,
        }}
      />
      <Container className="customers-page">
        <BlockHeaderWithContent
          title="How Hyperikon multiplied their B2B sales and reduced their deal closing time"
          image={data.hyperikonLedTubes.gatsbyImageData}
          desc={
            <div>
              Hyperikon rapidly expanded its B2B sales through Resolve's simple
              credit application and quick credit decisions
            </div>
          }
          additionalInfo={
            <div className="data-info">
              <div>
                <div className="red-title">3x</div>
                Average order size
              </div>
              <div>
                <div className="red-title">90%</div>
                Faster sales cycle
              </div>
              <div>
                <div className="red-title">1.5x</div>
                More closed B2B sales
              </div>
            </div>
          }
        />

        <section className="case-study__main-content flex">
          <div className="text-container">
            <div className="text-block">
              <div className="text-title">The Hyperikon Success Story</div>
              <div className="text-content">
                Started in 2010, <a href="https://hyperikon.com/">Hyperikon</a>{' '}
                has grown from humble beginnings to a provider of 250+ LED
                products and e-commerce brand with almost 1 million customers on
                Amazon and their own website.
              </div>
            </div>
            <div className="text-block">
              <div className="text-title">The Challenge of Extending Terms</div>
              <div className="text-content">
                When the leadership team at Hyperikon set out to grow their
                wholesale LED lighting business, they envisioned a truly
                seamless B2B buying experience for their business customers with
                Net Payment Terms.
                <SpaceDivider height={20} />
                Without Resolve, Hyperikon's business customers would be forced
                through a difficult and lengthy credit approval process -- long
                multi-page applications, paper and fax based processes, and
                multi-week decision timelines. Hyperikon wanted to change that
                and deliver a frictionless, customer-first approach.
              </div>
            </div>
            <div className="text-block">
              <div className="text-title">
                The Hyperikon and Resolve Partnership
              </div>
              <div className="text-content">
                Hyperikon stood out from the moment it announced the Resolve Net
                60 payment option to its customers. For buyers, this meant no
                more paper or fax applications, waiting for weeks to hear back
                about a credit decisions, and no more upfront deposits. Resolve
                returned credit decisions the same business day and worked with
                buyers to get them the line they needed to make bigger
                purchases.
                <SpaceDivider height={20} />
                "One huge benefit has been the speed which customers find out
                about whether they're approved for a Resolve credit limit" says
                Gil. "In the cases of our larger corporate buyers, they reduced
                their order placing process with Hyperikon from a month or
                longer to just a few days, a 90% reduction in our time to
                close."
                <SpaceDivider height={20} />
                Hyperikon wholesale customers on Resolve's net terms also
                increased their orders to 3x their previous size with the extra
                cash to reach the bulk discount rates, a huge win for
                Hyperikon's growth goals. "I've been regularly seeing much
                larger orders with Resolve than I would have otherwise seen
                without net payment terms, which has been a huge win for our
                wholesale business," said Gil.
              </div>
            </div>
            <div className="text-block">
              <div className="text-title">The Result</div>
              <div className="text-content">
                Resolve's B2B payment solution helped Hyperikon realize their
                vision and put them one step ahead of their competition.
                <SpaceDivider height={20} />
                "In the end, Resolve allowed us to reach our wholesale goals
                much faster than we expected. We could have spent years offering
                a suboptimal set of payment options that wouldn't have come
                close to what Resolve provides," said Gil. "With Resolve, we are
                truly able to provide a wholesale customer a benefit when they
                buy from us, which encourages larger purchases and higher
                frequency repeat rates. Our close rate is easily 50% higher
                because we offer Resolve."
                <SpaceDivider height={20} />
                That edge in converting orders from buyers helped power
                Hyperikon's rapid organic customer growth which Hyperikon's
                wholesale team attributes directly to Resolve. "We wouldn't have
                been able to do that without Resolve," Gil says. In just about a
                few quarters, the company's wholesale business had rocketed from
                a small base of buyers to countless business customers and
                glowing wholesale customer feedback.
              </div>
            </div>
          </div>
          <div className="tags">
            <Tags
              title="Topics Covered"
              items={[
                {
                  title: 'Grow sales',
                },
                {
                  title: 'Net terms automation',
                },
              ]}
            />
          </div>
        </section>

        <SpaceDivider height={50} />
        <BlockQuoteWithContent
          quote={`"Resolve has been like a spring for Hyperikon, allowing us to grow and scale our B2B business more quickly than any other company. It's been a catalyst to faster and better growth for us."`}
          authorInfo={
            <div>
              <div className="author-name">Ray Gil</div>Account Executive at
              Hyperikon
            </div>
          }
        />
        <SpaceDivider height={100} />

        <BlockCTA
          pretitle="Ready to get started?"
          title={<span>Make growth your story with Resolve</span>}
          primaryButtonText="Get started"
          primaryButtonTo="/contact-sales/"
          align="center"
        />
      </Container>
      <Footer />
      <style jsx global>{`
        .case-study__main-content.flex {
          display: flex;
          color: ${colors.cello};
          margin: 0 auto;
          padding: 0 50px;
          max-width: 1280px;
        }

        .case-study__main-content .text-block {
          max-width: 918px;
          margin-bottom: 85px;
        }

        .author-name {
          font-weight: 600;
        }

        .case-study__main-content .text-title {
          font-family: ${fonts.halyardDisplay};
          font-style: normal;
          font-weight: 600;
          font-size: 42px;
          line-height: 64px;
          letter-spacing: 0.045px;
          color: ${colors.cello};
          margin-bottom: 20px;
        }

        .case-study__main-content .text-content {
          font-size: 18px;
          line-height: 160%;
          letter-spacing: 1px;
          color: ${colors.cello};
        }

        .case-study__main-content .text-content ul {
          list-style-type: none;
          padding-left: 12px;
        }

        .case-study__main-content .text-content ul li:before {
          content: '-';
          text-indent: -12px;
          font-weight: bold;
          position: absolute;
        }

        .case-study__main-content .list-title {
          font-weight: 600;
          font-size: 18px;
          line-height: 160%;
          letter-spacing: 1px;
        }

        .case-study__main-content .text-container {
          position: relative;
          padding-right: 82px;
          margin-right: 49px;
        }

        .case-study__main-content .text-container:before {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          opacity: 0.2;
          width: 1px;
          height: 75%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          );
        }

        .data-info {
          display: flex;
          font-family: ${fonts.halyardDisplay};
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.024px;
          text-transform: uppercase;
          margin-top: 74px;
          justify-content: space-between;
          max-width: 540px;
        }

        .red-title {
          text-transform: none;
          font-size: 56px;
          line-height: 72px;
          letter-spacing: 0.053px;
          color: ${colors.salmon};
        }

        .case-study__main-content .contact_sales__container {
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .case-study__main-content .text-title {
            font-size: 36px;
            line-height: 130%;
            letter-spacing: 0.045px;
          }

          .case-study__main-content .text-content {
            font-size: 16px;
            line-height: 160%;
            letter-spacing: 1px;
          }

          .case-study__main-content .list-title,
          .case-study__main-content li {
            font-size: 15px;
            line-height: 160%;
            letter-spacing: 1px;
          }

          .case-study__main-content .text-content ul li:before,
          .case-study__main-content .text-container:before {
            display: none;
          }

          .case-study__main-content.flex {
            flex-direction: column-reverse;
            padding: 0;
          }

          .tags-container {
            margin-bottom: 66px;
            border-top: 1px solid ${colors.black};
            padding-top: 38px;
          }

          .tags-container .tags {
            flex-direction: row;
          }

          .case-study__main-content .text-container {
            margin: 0;
            padding: 0;
          }

          .data-info {
            flex-direction: column;
          }

          .data-info > div:first-child {
            margin-bottom: 22px;
          }
        }
      `}</style>
    </Layout>
  );
}
