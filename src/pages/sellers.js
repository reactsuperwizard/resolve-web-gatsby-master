import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import scrollToElement from 'scroll-to-element';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Button from '../components/Button';
import GetDemoButton from '../components/GetDemoButton';
import ForSellersIcon from '../components/icons/ForSellers';
import FaqItem from '../components/FaqItem';
import GrowthIcon from '../components/icons/Growth';
import RepeatIcon from '../components/icons/Repeat';
import MoneyIcon from '../components/icons/Money';

import { colors, screen } from '../constants';

export const pageQuery = graphql`
  {
    seller: file(name: { eq: "seller" }) {
      childImageSharp {
        gatsbyImageData(width: 480, layout: CONSTRAINED)
      }
    }
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
    whySellBanner: file(relativePath: { eq: "banners/why-sell-banner.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    reviewBanner: file(relativePath: { eq: "banners/review-banner.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;

export default function SellersPage({ data }) {
  return (
    <Layout>
      <GatsbySeo
        title="How Resolve helps offer net terms to your customers"
        description="Resolve helps grow your B2B sales, and unlock working capital. Stop losing sales over net terms or credit checking delays."
      />
      <Banner />
      <Container>
        <section className="seller__info">
          <div>
            <div className="seller__icon">
              <ForSellersIcon />{' '}
              <span className="seller__icon-title">For Sellers</span>
            </div>
            <h1 className="app__title">
              Grow B2B sales with automated net terms.
            </h1>
            <p className="app__desc">
              <span className="app__mobile_hidden">
                Whether you want to grow your business, simplify your accounting
                or get paid upfront,
              </span>
              {` `}
              Resolve makes selling wholesale as easy as direct to consumer.
            </p>
            <div className="app__actions">
              <Button
                large
                onClick={event =>
                  scrollToElement('#how-it-works', {
                    ease: 'inOutQuad',
                    duration: 2000,
                  })
                }
              >
                How it Works
              </Button>
              <GetDemoButton />
            </div>
          </div>
          <GatsbyImage
            image={data.seller.childImageSharp.gatsbyImageData}
            alt="Seller"
            className="app__image seller__image"
          />
        </section>

        <section className="seller__why-sell">
          <h2 className="app__subtitle seller__subtitle">
            Why sell with Resolve
          </h2>
          <div className="app__row">
            <div className="app__column">
              <GrowthIcon />
              <h3 className="app__block_title">
                Expand your average order size
              </h3>
              <p className="app__block_desc">
                Give your buyers the credit they need to expand their budgets
                and pull the trigger on larger purchases.
              </p>
            </div>
            <div className="app__column">
              <RepeatIcon />
              <h3 className="app__block_title">Increase repeat purchases</h3>
              <p className="app__block_desc">
                Provide your buyers a dedicated line of credit to encourage them
                to purchase again and again with you.
              </p>
            </div>
            <div className="app__column">
              <MoneyIcon />
              <h3 className="app__block_title">
                Convert new & old leads into buyers
              </h3>
              <p className="app__block_desc">
                Our credit approvals help you reach out to existing or new
                customers who haven't yet started to buy from you.
              </p>
            </div>
          </div>
        </section>

        <section className="seller__more-than">
          <div>
            <h2 className="app__subtitle seller__subtitle">
              More than financing
            </h2>
            <p className="app__desc seller__more-than_desc">
              "When a customer of ours uses Resolve, they're significantly more
              likely to buy from us again and again down the road."
            </p>
            <p className="seller__more-than_author">
              Thomas Ganey, VP of Sales at SimpleTire
            </p>
          </div>
          <div className="app__image-group">
            <div className="app__image seller__image_simple-tire">
              <GatsbyImage
                image={data.simpleTire.childImageSharp.gatsbyImageData}
                alt="SimpleTire"
                className="app__image seller__image_simple"
              />
            </div>
            <div className="app__subimage seller__subimage_simple-tire">
              <GatsbyImage
                image={data.simpleTireSmall.childImageSharp.gatsbyImageData}
                alt="Tire"
                className="app__image"
              />
            </div>
          </div>
        </section>

        <div id="how-it-works" />

        <section className="seller__resolve-simplifies">
          <h2 className="app__subtitle seller__subtitle">
            Resolve simplifies
            <br />
            B2B commerce
          </h2>
          <div className="app__row seller__row">
            <div className="app__column">
              <GrowthIcon />
              <h3 className="app__block_title">Advance your cash flow</h3>
              <p className="app__block_desc">
                Resolve pays you upfront for the Net 30-90 terms billed to your
                customers, so your receivables disappear.
              </p>
            </div>
            <div className="app__column" />
            <div className="app__column" />
          </div>
          <div className="app__row">
            <div className="app__column">
              <RepeatIcon />
              <h3 className="app__block_title">Reduce your risk</h3>
              <p className="app__block_desc">
                We take on billing, collections, and repayment risk so you can
                focus on your core business.
              </p>
            </div>
            <div className="app__column">
              <MoneyIcon />
              <h3 className="app__block_title">Reach new untapped markets</h3>
              <p className="app__block_desc">
                Our underwriting looks beyond traditional business credit
                factors, so you can sell to more customers.
              </p>
            </div>
            <div className="app__column" />
          </div>
        </section>

        <section className="seller__faq">
          <h2 className="app__title seller__title">
            Frequently Asked
            <br />
            Questions
          </h2>
          <hr />
          <FaqItem question="How does Resolve work?">
            Resolve offers risk-free payment terms to your customers. After a
            purchase is placed, Resolve automatically deposits the funds in your
            bank account. We'll invoice your customer and handle billings and
            collections for you.
          </FaqItem>
          <hr />
          <FaqItem question="How does Net Terms grow my business?">
            We allow your customers to buy now and pay later. This convenience
            boosts conversion, revenue, and customer loyalty. In addition, our
            advanced underwriting looks beyond traditional commercial credit
            data, allowing you to sell to more customers.
          </FaqItem>
          <hr />
          <FaqItem question="Can you do ecommerce integrations?">
            Resolve integrates seamlessly into your website and checkout flow to
            drive conversion, AOV, and revenue. Ask us about the different
            platforms we support.
          </FaqItem>
          <hr />
          <FaqItem question="How do my customers pay?">
            Your customers can pay their bills online by ACH transfer or by
            mailing us a check.
          </FaqItem>
          <hr />
        </section>
      </Container>
      <Footer darkSkin />
      <style jsx global>{`
        .seller__more-than,
        .seller__info {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 64px;
        }
        .seller__info > div {
          flex: 1;
          margin-right: 30px;
        }
        .seller__info .app__desc,
        .seller__info .app__title {
          max-width: 646px;
        }
        .seller__icon {
          display: flex;
          align-items: center;
        }

        .seller__icon-title {
          font-size: 28px;
          font-weight: 400;
          line-height: 2.08;
          letter-spacing: 0.5px;
          margin-left: 15px;
          color: ${colors.monaLisa};
        }
        .seller__why-sell {
          margin-top: 130px;
        }

        .seller__subtitle {
          margin-bottom: 100px;
        }

        .seller__more-than {
          margin-top: 140px;
          background-image: url('${getSrc(
            data.reviewBanner.childImageSharp.gatsbyImageData
          )}');
          background-repeat: no-repeat;
          background-position-x: right;
          padding-bottom: 180px;
        }
        .seller__more-than_desc {
          max-width: 550px;
          font-size: 38px;
          line-height: 1.37;
          letter-spacing: 0;
        }

        .seller__more-than_author {
          font-size: 22px;
          line-height: 1.64;
          letter-spacing: 0.8px;
        }

        .seller__resolve-simplifies {
          background-image: url('${getSrc(
            data.whySellBanner.childImageSharp.gatsbyImageData
          )}');
          background-repeat: no-repeat;
          background-position-x: right;
        }
        .seller__faq {
          margin-top: 120px;
          margin-bottom: 100px;
        }
        .seller__row {
          margin-bottom: 60px;
        }
        .seller__image {
          max-width: 480px;
          clip-path: polygon(0px 140px, 625px 0, 480px 550px, 0 660px);
          position: relative;
          top: -20px;
        }
        .seller__image_simple {
          width: 420px;
          position: static !important;
        }

        .seller__image_simple-tire {
          max-width: 420px;
        }
        .seller__subimage_simple-tire {
          width: 100%;
          max-width: 244px;
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
          .seller__image_simple {
            width: auto;
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
