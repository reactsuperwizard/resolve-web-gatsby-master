import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import scrollToElement from 'scroll-to-element';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Button from '../components/Button';
import FaqItem from '../components/FaqItem';

import ForBuyersIcon from '../components/icons/ForBuyers';
import GrowthIcon from '../components/icons/Growth';
import RepeatIcon from '../components/icons/Repeat';
import MoneyIcon from '../components/icons/Money';

import { colors, screen } from '../constants';

export const pageQuery = graphql`
  {
    buyerImage: file(name: { eq: "buyer" }) {
      childImageSharp {
        gatsbyImageData(width: 480, layout: CONSTRAINED)
      }
    }
    commonLiving: file(name: { eq: "common-living" }) {
      childImageSharp {
        gatsbyImageData(width: 640, layout: CONSTRAINED)
      }
    }
    commonLivingSmall: file(name: { eq: "common-living-small" }) {
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

export default function BuyersPage({ data }) {
  return (
    <Layout>
      <GatsbySeo
        title="How Resolve helps your suppliers offer net terms"
        description="Resolve can help your suppliers offer you net terms as a payment option. Let them know about our 30, 60, and 90 day net terms & buyer credit."
      />
      <Banner />
      <Container>
        <section className="buyer__info">
          <div>
            <div className="buyer__icon">
              <ForBuyersIcon />{' '}
              <span className="buyer__icon-title">For Buyers</span>
            </div>
            <h1 className="app__title">Purchase wholesale and pay later.</h1>
            <p className="app__desc">
              No matter your size or cash flow, Resolve helps you buy what your
              business needs now and pay later, with no interest or fees for 30
              - 90 days.
            </p>
            <div className="app__actions">
              <Button
                onClick={() =>
                  scrollToElement('#how-it-works', {
                    ease: 'inOutQuad',
                    duration: 2000,
                  })
                }
                large
              >
                How it Works
              </Button>
            </div>
          </div>
          <GatsbyImage
            image={data.buyerImage.childImageSharp.gatsbyImageData}
            alt="Buyer"
            className="buyer__image app__image"
          />
        </section>

        <section className="buyer__why-sell">
          <h2 className="app__subtitle buyer__subtitle">
            Why buy with Resolve
          </h2>
          <div className="app__row">
            <div className="app__column">
              <GrowthIcon />
              <h3 className="app__block_title">
                Buy what you need now and pay later
              </h3>
              <p className="app__block_desc">
                Pay suppliers later and get a short-term capital extension that
                helps you keep your cash flow positive.
              </p>
            </div>
            <div className="app__column">
              <RepeatIcon />
              <h3 className="app__block_title">Optimize your purchase flow</h3>
              <p className="app__block_desc">
                Manage purchases on a team level with multiple accounts and
                simple invoices designed around your A/R flow.
              </p>
            </div>
            <div className="app__column">
              <MoneyIcon />
              <h3 className="app__block_title">
                Pay 0% interest for 30-90 days
              </h3>
              <p className="app__block_desc">
                Pay off your balance within your terms with no fees, and have
                your credit available for more purchases.
              </p>
            </div>
          </div>
        </section>

        <section className="buyer__flexible">
          <div style={{ flex: 1 }}>
            <h2 className="app__subtitle">
              Flexible and fast
              <br />
              approval
            </h2>
            <p className="app__desc buyer__flexible_desc">
              "The process was super simple, I just had to fill out the
              application form, the same day I was approved for $50,000."
            </p>
            <p className="buyer__flexible_author">
              Ray Olsen, Procurement & Installation
              <br />
              Manager at Common Living
            </p>
          </div>
          <div className="app__image-group" style={{ flex: 1 }}>
            <div className="app__image buyer__image_common-living">
              <GatsbyImage
                image={data.commonLiving.childImageSharp.gatsbyImageData}
                alt="Office"
              />
            </div>
            <div className="app__subimage buyer__subimage_common-living">
              <GatsbyImage
                image={data.commonLivingSmall.childImageSharp.gatsbyImageData}
                alt="Office man"
              />
            </div>
          </div>
        </section>

        <div id="how-it-works" />
        <section className="buyer__smooth-accounts">
          <h2 className="app__subtitle buyer__subtitle">
            Smooth accounts
            <br />
            payable flow
          </h2>
          <div className="app__row buyer__row">
            <div className="app__column">
              <GrowthIcon />
              <h3 className="app__block_title">
                Purchase with any team member
              </h3>
              <p className="app__block_desc">
                Resolve is optimized for any size team, with easy purchasing
                with no financial, AP dashboard, and autopay.{' '}
              </p>
            </div>
            <div className="app__column" />
            <div className="app__column" />
          </div>
          <div className="app__row">
            <div className="app__column">
              <RepeatIcon />
              <h3 className="app__block_title">
                Receive invoices per purchase
              </h3>
              <p className="app__block_desc">
                With flexibile invoicing by email and in your personal buyer
                dashboard, you can keep accounts payable in the loop.
              </p>
            </div>
            <div className="app__column">
              <MoneyIcon />
              <h3 className="app__block_title">
                Pay with ACH or through check
              </h3>
              <p className="app__block_desc">
                With 0% interest and fees during your 30-90 day terms, you can
                easily set up direct debit and pay after selling.
              </p>
            </div>
            <div className="app__column" />
          </div>
        </section>

        <section className="buyer__faq">
          <h2 className="app__title buyer__title">
            Frequently Asked
            <br />
            Questions
          </h2>
          <hr />
          <FaqItem question="How does Resolve work?">
            Resolve offers hassle-free terms for your purchases, allowing you to
            buy now and pay later.
          </FaqItem>
          <hr />
          <FaqItem question="How do Net Terms work?">
            Depending on what terms the merchant offers, you'll pay the full
            balance in either 30, 60, or 90 days.
          </FaqItem>
          <hr />
          <FaqItem question="How do I purchase with Resolve?">
            Create a Resolve account with one of our merchant partners in just a
            few easy steps. Once you're ready to purchase, either contact your
            sales rep or look for Resolve in the checkout.
          </FaqItem>
          <hr />
          <FaqItem question="How do I pay my invoices?">
            You can pay your bills online by ACH transfer or by mailing us a
            check.
          </FaqItem>
          <hr />
        </section>
      </Container>
      <Footer darkSkin />
      <style jsx>{`
        .buyer__flexible,
        .buyer__info {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 64px;
        }
        .buyer__info > div {
          flex: 1;
          margin-right: 30px;
        }
        .buyer__info .app__desc,
        .buyer__info .app__title {
          max-width: 630px;
        }
        .buyer__flexible {
          background-image: url('${getSrc(
            data.reviewBanner.childImageSharp.gatsbyImageData
          )}');
          background-repeat: no-repeat;
          background-position-x: right;
          padding-bottom: 220px;
        }
        .buyer__icon {
          display: flex;
          align-items: center;
        }

        .buyer__icon-title {
          font-size: 28px;
          font-weight: 400;
          line-height: 2.08;
          letter-spacing: 0.5px;
          margin-left: 15px;
          color: ${colors.monaLisa};
        }
        .buyer__why-sell {
          margin-top: 240px;
          margin-bottom: 160px;
        }
        .buyer__subtitle {
          margin-bottom: 110px;
        }
        .buyer__flexible_desc {
          max-width: 500px;
          font-size: 38px;
          line-height: 1.37;
          letter-spacing: 0;
        }
        .buyer__flexible_author {
          font-size: 22px;
          line-height: 1.64;
          letter-spacing: 0.8px;
        }
        .buyer__flexible .app__image-group {
          top: 60px;
        }
        .buyer__smooth-accounts {
          background-image: url('${getSrc(
            data.whySellBanner.childImageSharp.gatsbyImageData
          )}');
          background-repeat: no-repeat;
          background-position-x: right;
        }
        .buyer__row {
          margin-bottom: 60px;
        }
        .buyer__faq {
          margin-top: 120px;
          margin-bottom: 100px;
        }
        .buyer__image_common-living {
          max-width: 640px;
        }
        .buyer__subimage_common-living {
          max-width: 244px;
        }

        @media (max-width: 1320px) {
          .buyer__image_common-living {
            width: 480px;
          }
          .buyer__subimage_common-living {
            max-width: 190px;
          }
          .buyer__flexible_desc {
            max-width: 450px;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .buyer__info > div {
            flex: initial;
            margin-right: 0;
          }
          .buyer__info {
            flex-direction: column-reverse;
            margin-top: 30px;
          }
          .buyer__row {
            margin-bottom: 80px;
          }
          .buyer__why-sell {
            margin-top: 130px;
            margin-bottom: 10px;
          }
          .buyer__smooth-accounts {
            padding-top: 560px;
            background-size: 650px;
          }
          #how-it-works {
            position: relative;
            top: 560px;
          }
          .buyer__smooth-accounts .app__column:last-child,
          .buyer__smooth-accounts .buyer__row .app__column {
            margin-bottom: 0;
          }
          .buyer__flexible {
            flex-direction: column-reverse;
            margin-top: 80px;
            padding-bottom: 60px;
          }
          .buyer__faq {
            margin-top: 100px;
          }
          .buyer__image_common-living {
            max-width: 520px;
          }
          .buyer__flexible .app__image-group {
            top: 0;
            margin-bottom: 80px;
          }
          .buyer__flexible_desc {
            max-width: initial;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .buyer__icon-title {
            font-size: 20px;
            line-height: 2.08;
            letter-spacing: 0.5px;
          }
          .buyer__subtitle {
            margin-bottom: 50px;
          }
          .buyer__smooth-accounts {
            background-size: 330px;
            padding-top: 300px;
          }
          #how-it-works {
            top: 300px;
          }
          .buyer__image_common-living {
            width: 240px;
          }
          .buyer__flexible {
            padding-bottom: 40px;
          }
          .buyer__flexible .app__image-group {
            margin-bottom: 40px;
          }
          .buyer__flexible_desc.app__desc {
            font-size: 28px;
            line-height: 1.29;
            letter-spacing: 0;
          }
          .buyer__row {
            margin-bottom: 60px;
          }
          .buyer__row:last-child {
            margin: 0;
          }
        }
      `}</style>
      <style jsx global>{`
        .buyer__image {
          flex: 1;
          max-width: 480px;
          position: relative;
          top: 50px;
        }

        @media (max-width: 1140px) {
          .buyer__image {
            width: 400px;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .buyer__image {
            width: 480px;
            top: 0;
            margin-bottom: 30px;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .buyer__image {
            width: 240px;
          }
        }
      `}</style>
    </Layout>
  );
}
