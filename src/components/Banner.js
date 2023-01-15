import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import { screen, colors } from '../constants';

export default function Banner({
  className = '',
  showImage = false,
  long = false,
}) {
  const data = useStaticQuery(graphql`{
  images: allFile(
    filter: {relativeDirectory: {eq: "home"}}
    sort: {fields: relativePath}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  bgHeader: file(relativePath: {eq: "common/bg-header.svg"}) {
    publicURL
  }
}
`);

  return (
    <div className={`banner ${className}`}>
      {showImage && (
        <div className="banner__row">
          <div className="banner__column banner__column_1">
            <GatsbyImage
              image={data.images.edges[0].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
          <div className="banner__column banner__column_2">
            <GatsbyImage
              image={data.images.edges[1].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
          <div className="banner__column banner__column_3">
            <GatsbyImage
              image={data.images.edges[2].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
          <div className="banner__column banner__column_4">
            <GatsbyImage
              image={data.images.edges[3].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
          <div className="banner__column banner__column_5">
            <GatsbyImage
              image={data.images.edges[4].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
            <GatsbyImage
              image={data.images.edges[5].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
          <div className="banner__column banner__column_6">
            <GatsbyImage
              image={data.images.edges[6].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
            <GatsbyImage
              image={data.images.edges[7].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
          <div className="banner__column banner__column_7">
            <GatsbyImage
              image={data.images.edges[8].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
            <GatsbyImage
              image={data.images.edges[9].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
            <GatsbyImage
              image={data.images.edges[10].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
          <div className="banner__column banner__column_8">
            <GatsbyImage
              image={data.images.edges[11].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
            <GatsbyImage
              image={data.images.edges[12].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
            <GatsbyImage
              image={data.images.edges[13].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
          <div className="banner__column banner__column_9">
            <GatsbyImage
              image={data.images.edges[14].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
            <GatsbyImage
              image={data.images.edges[15].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
            <GatsbyImage
              image={data.images.edges[16].node.childImageSharp.gatsbyImageData}
              alt="business process"
              className="banner__image" />
          </div>
        </div>
      )}
      <style jsx>{`
        .banner {
          width: 100%;
          height: 1786px;

          background-image: url('${data.bgHeader.publicURL}');
          background-repeat: ${long ? 'repeat-y' : 'no-repeat'};
          background-position-x: center;
          background-position-y: ${long ? 'initial' : '160px'};

          display: flex;
          justify-content: center;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: -1;
        }

        .banner__row {
          display: flex;
          width: 100%;
          justify-content: center;
        }
        .banner__column {
          display: block;
          margin-right: 29px;
          flex: 1;
          max-width: 139px;
        }
        .banner__column:first-child {
          margin-left: 29px;
        }
        .banner__column_1 {
          margin-top: 870px;
        }
        .banner__column_2 {
          margin-top: 970px;
        }
        .banner__column_3 {
          margin-top: 910px;
        }
        .banner__column_4 {
          margin-top: 850px;
        }
        .banner__column_5 {
          margin-top: 700px;
        }
        .banner__column_6 {
          margin-top: 610px;
        }
        .banner__column_7 {
          margin-top: 360px;
        }
        .banner__column_8 {
          margin-top: 270px;
        }
        .banner__column_9 {
          margin-top: 170px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .banner {
            background-position-x: left;
            background-position-y: ${long ? '40px' : '150px'};
            overflow: hidden;
          }
          .banner__column:first-child {
            margin-left: -30px;
          }
          .banner__column {
            margin-right: 19px;
          }
          .banner__column_2 {
            margin-top: 910px;
          }
          .banner__column_3 {
            margin-top: 880px;
          }
          .banner__column_5 {
            margin-top: 780px;
          }
          .banner__column_6 {
            margin-top: 720px;
          }
          .banner__column_7 {
            margin-top: 560px;
          }
          .banner__column_8 {
            margin-top: 490px;
            margin-right: -30px;
          }
          .banner__column_9 {
            display: none;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .banner {
            background-position-x: left;
            background-size: 750px;
            background-position-y: ${long ? '-25px' : '350px'};
            overflow: hidden;
          }
          .banner__column:first-child {
            margin-left: -10px;
          }
          .banner__column {
            margin-right: 10px;
          }
          .banner__column_1 {
            margin-top: 320px;
          }
          .banner__column_2 {
            margin-top: 340px;
          }
          .banner__column_3 {
            margin-top: 330px;
          }
          .banner__column_4 {
            margin-top: 305px;
          }
          .banner__column_5 {
            margin-top: 260px;
          }
          .banner__column_6 {
            margin-top: 225px;
          }
          .banner__column_7 {
            margin-top: 145px;
            margin-right: -10px;
          }
          .banner__column_8,
          .banner__column_9 {
            display: none;
          }
        }
      `}</style>
      <style jsx global>{`
        .banner__image {
          width: 100%;
          height: auto;
          opacity: 0.9;
          border-radius: 5.8px;
          box-shadow: 2px 18px 47px 0 rgba(0, 0, 0, 0.15),
            0 7px 18px 0 rgba(0, 0, 0, 0.27);
          background-color: ${colors.bannerBackground};
          margin-bottom: 32.6px;
        }

        .banner__image:last-child {
          margin-bottom: 0;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .banner__image {
            margin-bottom: 23.4px;
          }
          .banner__image div {
            padding-bottom: 133.3% !important;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .banner__image {
            margin-bottom: 14.5px;
          }

          .banner__image div {
            padding-bottom: 133% !important;
          }
        }
      `}</style>
    </div>
  );
}
