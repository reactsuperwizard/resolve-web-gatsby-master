import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import { colors, screen, fonts } from '../constants';
import { edgesByName } from '../utils/gql';

export default function BlockHeaderWithContent({
  pretitle = '',
  pretitleImage = null,
  pretitleImageAltText = '',
  title = '',
  desc = '',
  image,
  additionalInfo,
}) {
  const data = useStaticQuery(graphql`{
  caseStudyImages: allFile(filter: {relativeDirectory: {eq: "case-study"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`);

  const caseStudyImages = edgesByName(data.caseStudyImages);
  return (
    <section className="block-header-with-content">
      <div className="background-images">
        <GatsbyImage
          image={caseStudyImages['blue-squares']}
          alt="left"
          className="banner__image-left" />
        <GatsbyImage
          image={caseStudyImages['blue-gradient']}
          alt="right"
          className="banner__image-right" />
      </div>

      <div className="block-header-with-content__content">
        <div className="content-text">
          {pretitleImage && (
            <GatsbyImage
              image={pretitleImage}
              alt={pretitleImageAltText}
              className="app__image block-header-with-content__pretitle_image" />
          )}
          <div className="block-header-with-content__pretitle app__pretitle">
            {pretitle}
          </div>
          <h1 className="block-header-with-content__title">{title}</h1>
          <div className="block-header-with-content__desc">
            {desc}
            <div className="desc-view">{additionalInfo}</div>
          </div>
        </div>
        <GatsbyImage image={image} alt="right" className="content-image" />
        <div className="tablet-view">{additionalInfo}</div>
      </div>

      <style jsx>{``}</style>
      <style jsx global>{`
        .block-header-with-content {
          margin: -72px auto 184px;
          padding: 180px 50px 0;
          max-width: 1280px;
        }

        .banner__image-left,
        .banner__image-right {
          flex: 1 1 auto;
        }

        .tablet-view {
          display: none;
        }

        .banner__image-left {
          max-width: 390px;
        }

        .background-images {
          position: absolute;
          width: 100%;
          left: 0;
          right: 0;
          top: 0;
          display: flex;
          justify-content: space-between;
          height: 100%;
          z-index: -1;
          margin: 0 auto;
          max-width: 1520px;
          max-height: 800px;
        }

        .banner__image-right {
          right: 0;
          left: auto;
          height: 100%;
          width: 100%;
          max-width: 530px;
        }

        .content-image {
          width: 100%;
          max-height: 535px;
        }

        .block-header-with-content__title {
          font-family: ${fonts.halyardDisplay};
          font-style: normal;
          font-weight: 600;
          font-size: 56px;
          line-height: 72px;
          letter-spacing: 0.053px;
          color: ${colors.cello};
          margin-bottom: 25px;
        }

        .block-header-with-content__content {
          position: relative;
          display: flex;
        }

        .block-header-with-content__content .content-text {
          max-width: 710px;
        }

        .block-header-with-content__desc {
          font-size: 28px;
          line-height: 160%;
          letter-spacing: 1px;
          max-width: 608px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-header-with-content__title {
            font-size: 32px;
            line-height: 130%;
            letter-spacing: -0.1px;
            margin-bottom: 8px;
          }

          .tablet-view {
            display: block;
          }

          .block-header-with-content__desc {
            font-size: 16px;
          }

          .block-header-with-content__content {
            flex-direction: column;
          }

          .banner__image-left,
          .desc-view {
            display: none;
          }

          .block-header-with-content {
            margin-bottom: 40px;
            padding: 115px 0 0;
          }

          .content-image {
            right: -40px;
            max-height: 321px;
            max-width: 374px;
            margin-left: auto;
          }

          .background-images {
            justify-content: flex-end;
            height: 95%;
          }

          .banner__image-right {
            max-width: 295px;
          }

          .block-header-with-content__content .content-text {
            margin-bottom: 72px;
          }
        }
      `}</style>
    </section>
  );
}
