import React from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Container from '../Container';
import { screen } from '../../constants';
import GreenCheckIcon from '../icons/GreenCheck';

export default function BlockResolveOffer() {
  const data = useStaticQuery(graphql`
    {
      whatWeOffer: file(relativePath: { eq: "careers/what-we-offer.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      whatWeOfferTablet: file(
        relativePath: { eq: "careers/what-we-offer-tablet.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const offer_list = [
    'Fully remote & flexible work environment',
    'Low-ego environment',
    'Unlimited PTO',
    'Paid health/dental/vision coverage for employee',
    '401(k) with match',
    'Meaningful equity stock options',
    'Paid parental leave',
    'Company retreats 2X per year',
    'WFH stipend',
    'Learning and development & co-working space stipend',
  ];

  return (
    <section className="block-resolve-offer">
      <Container>
        <h2 className="block__title">What we offer</h2>
        <p className="block__content">
          There are benefits to being a Resolver. Here are just a few
        </p>
        <div className="offer-list-wrapper desktop">
          <ul className="offer-list">
            {offer_list.slice(0, 6).map(item => (
              <li className="offer-item" key={item}>
                <GreenCheckIcon />
                <p className="offer-item__name">{item}</p>
              </li>
            ))}
          </ul>
          <GatsbyImage
            className="offer-image"
            image={getImage(data.whatWeOffer)}
            alt="What we offer"
          />
          <ul className="offer-list">
            {offer_list.slice(6).map(item => (
              <li className="offer-item" key={item}>
                <GreenCheckIcon />
                <p className="offer-item__name">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="offer-list-wrapper tablet">
          <GatsbyImage
            className="offer-image"
            image={getImage(data.whatWeOfferTablet)}
            alt="What we offer"
          />
          <div className="list__wrapper">
            <ul className="offer-list">
              {offer_list.slice(0, 6).map(item => (
                <li className="offer-item" key={item}>
                  <GreenCheckIcon />
                  <p className="offer-item__name">{item}</p>
                </li>
              ))}
            </ul>
            <ul className="offer-list">
              {offer_list.slice(6).map(item => (
                <li className="offer-item" key={item}>
                  <GreenCheckIcon />
                  <p className="offer-item__name">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className="request-button"
          onClick={() => navigate('https://jobs.ashbyhq.com/resolvepay')}
        >
          View our openings
        </button>
      </Container>
      <style jsx>{`
        .block-resolve-offer {
          padding: 150px 0 50px;
          background: linear-gradient(-8deg, #fff 73.2%, #f7f8fa 73.3%);
          text-align: center;
        }
        .block__title {
          margin-top: 200px;
        }
        .offer-list-wrapper {
          margin-top: 65px;
        }
        .offer-list {
          max-width: 368px;
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        .offer-item {
          display: flex;
          align-items: baseline;
          margin-bottom: 16px;
        }
        .offer-item__name {
          margin-left: 12px;
          font-weight: 300;
          font-size: 20px;
          line-height: 24px;
          text-align: left;
          color: #1f325d;
        }
        .request-button {
          margin-top: 80px;
          padding: 10px 18.5px 14px;
        }
        .desktop,
        .tablet {
          display: none;
        }
        @media (min-width: ${screen.laptop}px) {
          .desktop {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-resolve-offer {
            padding-top: 100px;
            background: linear-gradient(-8deg, #fff 81.2%, #f7f8fa 81.3%);
          }
          .offer-list-wrapper {
            margin-top: 35px;
          }
          .tablet {
            display: block;
          }
          .desktop {
            display: none;
          }
          .list__wrapper {
            margin-top: 35px;
            display: flex;
            justify-content: space-around;
          }
          .request-button {
            margin-top: 50px;
          }
          .offer-item__name {
            font-weight: 400;
            font-size: 17px;
            line-height: 24px;
            margin-left: 8px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-resolve-offer {
            padding-top: 50px;
            background: linear-gradient(-8deg, #fff 85.2%, #f7f8fa 85.3%);
          }
          .list__wrapper {
            max-width: 584px;
            margin: 0 auto;
            margin-top: 35px;
            justify-content: space-between;
          }
          .offer-list {
            max-width: 276px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-resolve-offer {
            background: linear-gradient(-8deg, #fff 87.2%, #f7f8fa 87.3%);
          }
          .block-resolve-offer {
            text-align: left;
          }
          .offer-list-wrapper {
            margin-top: 32px;
          }
          .list__wrapper {
            margin-top: 24px;
            flex-direction: column;
          }
          .offer-list {
            max-width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        .offer-image {
          margin: 0 24px;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .offer-image {
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
}
