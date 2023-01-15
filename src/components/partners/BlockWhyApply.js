import React from 'react';
import { navigate, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { screen } from '../../constants';
import Container from '../Container';

export default function BlockWhyApply({ title, items }) {
  const data = useStaticQuery(graphql`
    query PartnersApplyQuery {
      applyImage: file(
        relativePath: { eq: "partner/partners-apply.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  return (
    <section className="block-why-apply">
      <Container>
        <div className="block__inner">
          <GatsbyImage className="block__image" image={getImage(data.applyImage)} alt="who should apply?" />
          <div>
            <h2 className="block__title">{title}</h2>
            <div className="list-items">
              {
                items.map((item, idx) =>
                  <div className="list-item" key={idx}>
                    <h4 className="item__title">{item.title}</h4>
                    <p className="item__content">{item.content}</p>
                  </div>
                )
              }
            </div>
            <button
              className="request-button"
              onClick={() => navigate('/partnerships-form')}
            >
              Apply now
            </button>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-why-apply {
          padding: 80px 0 160px;
        }
        .block__inner {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .block__title {
          margin-top: 0;
          margin-bottom: 32px;
          font-weight: 400;
          font-size: 44px;
          line-height: 52px;
          color: #1F325D;
        }
        .list-items {
          max-width: 597px;
        }
        .list-item {
          margin-bottom: 40px;
        }
        .item__title {
          margin-bottom: 8px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          color: #FB835E;
        }
        .item__content {
          font-weight: 300;
          font-size: 17px;
          line-height: 24px;
          color: #5E6677;
        }
        .request-button {
          padding: 10px 47px 14px;
        }
        @media (max-width: ${screen.laptop}px) {
          .block__title {
            font-size: 24px;
            line-height: 32px;
          }
          .list-items {
            max-width: 500px
          }
          .list-item {
            margin-bottom: 32px;
          }
          .item__title {
            font-size: 20px;
            line-height: 24px;
          }
          .item__content {
            font-size: 16px;
            line-height: 22px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block__inner {
            align-items: flex-start;
            justify-content: space-between;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-why-apply {
            padding-bottom: 90px;
          }
          .block__inner {
            flex-wrap: wrap;
          }
        }
      `}</style>
      <style jsx global>{`
        .block__image {
          max-width: 494px;
          margin-right: 24px;
        }
        @media (max-width: ${screen.navigationFirstPoint}px) {
          .block__image {
            max-width: 327px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block__image {
            margin: 0 auto;
            margin-bottom: 32px;
          }
        }
      `}</style>
    </section>
  );
}
