import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import SpaceDivider from '../../components/SpaceDivider';

import BlockHeaderWithContent from '../../components/BlockHeaderWithContent';
import Tags from '../../components/Tags';
import { edgesByName } from '../../utils/gql';

import { colors, fonts, screen } from '../../constants';
import BlockQuoteWithContent from '../../components/BlockQuoteWithContent';
import BlockCTA from '../../components/BlockCTA';

export const pageQuery = graphql`
  {
    caseStudyImages: allFile(
      filter: { relativeDirectory: { eq: "case-study" } }
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
    sdiFireLogo: contentfulAsset(title: { eq: "sdi-fire-logo" }) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
    hyperikonLedTubes: contentfulAsset(title: { eq: "hyperikon-led-tubes" }) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
    viceGolfBrandImage: contentfulAsset(
      title: { eq: "vice-golf-brand-image" }
    ) {
      title
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`;

export default function CaseStudySdiFire({ data }) {
  const caseStudyImages = edgesByName(data.caseStudyImages);
  return (
    <Layout>
      <GatsbySeo
        title="SDi Fire Customer Story"
        description="SDi Fire leveraged Resolve's Advance Pay product and simple credit application to close sales and increase profit margins"
        openGraph={{
          title: 'SDi Fire Customer Story',
          description:
            "SDi Fire leveraged Resolve's Advance Pay product and fast and easy credit application to close sales and increase profit margins",
        }}
      />
      <Container className="customers-page">
        <BlockHeaderWithContent
          title="SDi Fire unlocks working capital and increases profit margins with Resolve"
          image={caseStudyImages['sdi-fire']}
          desc={
            <div>
              SDi Fire leveraged Resolve's Advance Pay product and simple credit
              application to close sales and increase profit margins
            </div>
          }
          additionalInfo={
            <div className="data-info">
              <div>
                <div className="red-title">25%</div>
                Profit Margin Lift
              </div>
              <div>
                <div className="red-title">2 weeks</div>
                Reduced time for <br />
                new credit approvals
              </div>
            </div>
          }
        />

        <section className="case-study__main-content flex">
          <div className="text-container">
            <div className="text-block">
              <div className="text-title">The SDi Fire Success Story</div>
              <div className="text-content">
                SDi Fire was founded 1996 with the mission of providing security
                and fire alarm testing equipment to corporations all around the
                world.
                <SpaceDivider height={20} />
                Initially, SDi Fire only provided a small range of detector
                testing tools. SDi Fire has since grown from its humble
                beginnings and now offers a wide array of industrial grade fire
                alarm testing products from top manufacturers all around the
                world.
                <SpaceDivider height={20} />
                SDi Fire continues to maintain relationships with leading
                industry associations and committees to ensure that they
                continue to be knowledgable and well-versed in the latest fire
                protection and safety standards. Notable clients of SDi Fire
                include: NASA, Disney and Seaworld. Their devices can even be
                found in Buckingham Palace.
              </div>
            </div>
            <div className="text-block">
              <div className="text-title">The Challenge of Extending Terms</div>
              <div className="text-content">
                SDi Fire had been offering terms to their B2B customers, but as
                their business grew, the process began to strain their
                operations since capital was being tied up in accounts
                receivable. In addition, it was time-consuming and difficult to
                determine the creditworthiness of new accounts. If SDi Fire
                stopped extending terms, this would result in lost sales and
                lower margins, since their customers would purchase from their
                distributors instead. As a result, SDi Fire searched for a B2B
                financing partner that would allow their customers to continue
                buying directly.
                <SpaceDivider height={20} />
                Their top requirements for a net payment terms partner included:
                <ul>
                  <li>
                    <div className="list-title">Free up working capital</div>
                    One of the important selection criteria for SDi Fire was the
                    ability to free up their working capital. SDi Fire
                    understood that by having more working capital they could
                    invest this capital into the company's overall growth.
                    <SpaceDivider height={20} />
                  </li>
                  <li>
                    <div className="list-title">Fast and simple</div>
                    The life safety industry is considered to be slowing moving
                    and resistant to change. Just getting customers to switch
                    from faxing orders to emails could be an endeavor. As a
                    result, the ability to apply for terms had to be extremely
                    fast and simple for their customers.
                    <SpaceDivider height={20} />
                  </li>
                  <li>
                    <div className="list-title">Dedicated support</div>
                    SDi Fire wanted a partner that had a "small company feel" so
                    they could reach out and talk to a real person if they ran
                    into any issues. They didn't want to be another "number",
                    which is what they felt when talking to traditional banks.
                    In addition, SDi Fire wanted to integrate their terms
                    process with their ERP system, so they wanted a close
                    partner who could also support them on the technical side to
                    ensure that this process went smoothly.
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="text-title">
                The SDi Fire and Resolve Partnership
              </div>
              <div className="text-content">
                SDi Fire had a clear selection criteria when they were searching
                for a partner that could help solve their B2B net payments
                problems. It was very important to SDi Fire that the credit
                application process was super easy to navigate and understand.
                They didn't want a situation where the application process ended
                up becoming a blocker to their customers.
                <SpaceDivider height={20} />
                In Resolve, SDi Fire was able to find a solution that was very
                simple for both SDi Fire and for SDi Fire's customers. In fact,
                it was so easy that their customers didn't initially believe SDI
                Fire when they explained the application process.
                <SpaceDivider height={20} />
                SDi Fire evaluated other competitors in the B2B financing space.
                But none of these other offerings gave SDi Fire the level of
                comfort that they needed in order to proceed and sign on with
                these solution providers.
                <SpaceDivider height={20} />
                Resolve was able to solve SDi Fire's B2B terms problems while
                maintaining a very personal relationship. SDi Fire wanted to
                know that their needs were important and that they could have a
                direct line of communication with their service provider and
                Resolve was able to provide that level of personal support to
                them.
              </div>
            </div>
            <div className="text-block">
              <div className="text-title">
                Resolve Helps SDi Fire Improve Profit Margins
              </div>
              <div className="text-content">
                Since partnering with Resolve, SDi Fire has seen a marked
                improvement on their profit margins. SDi Fire's profit margins
                have increased by 25% in comparison to prior partnering with
                Resolve.
                <SpaceDivider height={20} />
                Historically, their customers would have purchased from a
                distributor so that they could pay on net payment terms. This
                would have resulted in lower margins. Now SDi Fire is able to
                work directly with these customers. As a result, SDi Fire has
                able to build and grow direct relationships with their
                customers.
                <SpaceDivider height={20} />
                Resolve has taken away any guesswork required when providing
                credit to SDi Fire's customers. In the past, SDi Fire would have
                to run their own credit checks on a one-to-one basis. It was
                very difficult for SDi Fire to understand their customers'
                creditworthiness. The process of evaluating a potential
                customer's creditworthiness was long (sometimes taking weeks)
                SDi Fire's potential customers sometimes struggled to provide{' '}
                <Link to="/blog/post/understanding-how-trade-references-work/">
                  trade references
                </Link>{' '}
                which was a key piece to understanding creditworthiness. In
                these situations, SDi Fire had to make a educated guesses when
                deciding whether to extend credit.
                <SpaceDivider height={20} />
                SDi Fire no longer has to go through a long vetting process with
                each customer, as they could leverage Resolve's ability to take
                care of all the credit offering decisions and they can focus on
                growing their business. This has significantly shortened the
                amount of time they require to make credit decisions, from weeks
                down to hours.
                <SpaceDivider height={20} />
                SDi Fire's customers are delighted that the credit application
                is seamless as the credit product is still billed as SDi Fire,
                but now it's powered by Resolve. From this perspective, SDi
                Fire's customers feel a level of security since they are still
                purchasing directly from SDi Fire. Their customers love the
                ability to apply for net terms on SDi Fire's website and get a
                response back relatively quickly.
                <SpaceDivider height={20} />
                Resolve has been able hit on all the metrics that SDi Fire cares
                about: increase in profit margins, process simplification, and
                increase in conversions.
              </div>
            </div>
          </div>
          <div className="tags">
            <Tags
              title="Topics Covered"
              items={[
                {
                  title: 'Unlock working capital',
                },
                {
                  title: 'Extend net terms',
                },
                {
                  title: 'Margin expansion',
                },
              ]}
            />
          </div>
        </section>

        <SpaceDivider height={50} />
        <BlockQuoteWithContent
          quote={`"We were looking for a company that could help us leverage our relationships with our customers to have them start buying more directly instead of heading to our distributors. Having the Resolve option really gave our customers the opportunity to buy direct."`}
          authorInfo={
            <div>
              <div className="author-name">Joe Cagiano</div>B2B Sales Manager at
              SDi Fire
            </div>
          }
        />
        <SpaceDivider height={100} />

        <BlockCTA
          pretitle="Ready to get started?"
          title={
            <span>
              Take your B2B sales to the
              <br /> next level.
            </span>
          }
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
