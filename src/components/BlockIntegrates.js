import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image';
import Container from './Container';

import ArrowIcon from './icons/Arrow';
import { screen } from '../constants';
import { edgesByName } from "../utils/gql";

export default function BlockIntegrates() {
  const [hover, setHover] = useState(false)
  const data = useStaticQuery(graphql`
    query IntegratesQuery {
      images: allFile(filter: { relativeDirectory: { eq: "integrations" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  const images = edgesByName(
    data.images,
    node => node.childImageSharp.gatsbyImageData
  );

  const items = [
    {
      image: images['quickbooks-logo'],
      name: 'QuickBooks Online & Desktop Integration',
    },
    {
      image: images['magento2-logo'],
      name: 'Magento Checkout Extension',
    },
    {
      image: images['woocommerce-logo'],
      name: 'WooCommerce Checkout Extension',
    },
    {
      image: images['resolve-logo'],
      name: 'Resolve API',
    },
  ]
  return (
    <section className="block-integrates">
      <Container>
        <h2 className="block-integrates__title">
          Integrate with accounting & ecommerce
        </h2>
        <div className="block-integration__items">
          {items.map((item, idx) => (
            <Link className="integration-item" to="/integrations" key={idx} onMouseMove={() => setHover(idx)} onMouseLeave={() => setHover("")}>
              <div>
                <GatsbyImage
                  image={item.image}
                  alt={item.name}
                  className="integration-item__image"
                />
                <p className="integration-item__name">{item.name}</p>
              </div>
              <div className="arrow-icon">
                <ArrowIcon color={hover === idx ? '#FFFFFF' : '#1F325D'} />
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <style jsx>{`
        .block-integrates__title {
          margin-top: 0;
          margin-bottom: 40px;
          padding-top: 120px;
          border-top: 1px solid #c2c2c2;
          font-weight: 400;
          font-size: 32px;
          line-height: 40px;
          text-align: center;
          color: #1f325d;
        }
        .block-integration__items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .integration-item__name {
          margin-top: 24px;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #969696;
        }
        .arrow-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1.5px solid #eeeeee;
        }

        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-integrates__title {
            padding-top: 60px;
          }
          .block-integration__items {
            grid-template-columns: unset;
            gap: 16px;
          }
          .integration-item__image {
            margin: 0 auto;
          }
          .integration-item__name {
            margin: 9px 0 16px;
            font-weight: 300;
            font-size: 15px;
            line-height: 20px;
            color: #5e6677;
          }
          .arrow-icon {
            margin-left: auto;
          }
        }
      `}</style>
      <style jsx global>{`
        .integration-item {
          padding: 24px;
          margin: 16px;
          width: 457px;
          display: flex;
          justify-content: space-between;
          flex-shrink: 0;
          border: 1px solid #dcdcdc;
          border-radius: 8px;
        }
        .integration-item:hover .arrow-icon {
          background-color: #1F325D;
          border-color: #1F325D;
          transition: all .2s ease-in-out;
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .integration-item {
            padding: 16px;
            margin: 8px 0;
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>
    </section>
  );
}
