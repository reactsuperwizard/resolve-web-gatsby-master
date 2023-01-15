import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Container from "../Container";
import { edgesByName } from "../../utils/gql";
import { screen } from "../../constants";

export default function BlockResolveValues() {
  const data = useStaticQuery(graphql`{
    icons: allFile(
      filter: {relativeDirectory: {eq: "careers"}}
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }`);
  const icons = edgesByName(
    data.icons,
    node => node.childImageSharp.gatsbyImageData
  );
  const values = [
    {
      label: "How we act",
      title: "Fearlessly human",
      list: [
        {
          icon: icons["tenacious-ownership"],
          name: "Tenacious ownership"
        },
        {
          icon: icons["assume-positive-intent"],
          name: "Assume positive intent"
        },
        {
          icon: icons["be-direct"],
          name: "Be direct"
        },
      ]
    },
    {
      label: "How we decide",
      title: "Proactive curiosity",
      list: [
        {
          icon: icons["wear-our-customers-shoes"],
          name: "Wear our customers shoes"
        },
        {
          icon: icons["think-in-first-principles"],
          name: "Think in first principles"
        },
        {
          icon: icons["write-it-down"],
          name: "Write it down"
        },
      ]
    },
    {
      label: "How we win",
      title: "Compounding collaboration",
      list: [
        {
          icon: icons["iterate-measure"],
          name: "Iterate & measure"
        },
        {
          icon: icons["simplify"],
          name: "Simplify"
        },
        {
          icon: icons["front-of-jersey"],
          name: "Front of Jersey"
        },
      ]
    },
  ]

  return (
    <section className="block-resolve-values">
      <Container>
        <h2 className="block__title">
          Resolve’s values
        </h2>
        <p className="block__content">
          Explore the tenets that guide how we act, make decisions, and win.
        </p>
        <div className="values-wrapper">
          {
            values.map((item, idx) =>
              <div className="value-box" key={idx}>
                <div className="value-box__inner">
                  <p className="box__label">{item.label}</p>
                  <h3 className="box__title">{item.title}</h3>
                  {
                    item.list.map((value) =>
                      <div className="value-item" key={value.name}>
                        <GatsbyImage className="value-item__icon" image={getImage(value.icon)} alt={value.name} />
                        <p className="value-item__name">{value.name}</p>
                      </div>
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </Container>
      <style jsx>{`
        .block-resolve-values {
          padding: 250px 0 0;
          background: linear-gradient(-8deg,#F7F8FA 84%,#fff 84.1%);
        }
        .block__title, .block__content {
          text-align: center;
        }
        .values-wrapper {
          margin-top: 72px;
          display: flex;
          justify-content: center;
        }
        .value-box {
          width: 33.33%;
          max-width: 356px;
          padding: 8px;
          margin-right: 24px;
          background: #FFFFFF;
          border-radius: 16px;
          box-sizing: border-box;
          flex-shrink: 0;
        }
        .value-box:last-child {
          margin-right: 0;
        }
        .value-box__inner {
          padding: 36px 24px 24px;
          border: 1px solid #FB835E;
          border-radius: 8px;
          text-align: center;
        }
        .box__label {
          margin-bottom: 8px;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #FB835E;
        }
        .box__title {
          margin: 0 0 40px;
          padding: 0 35px;
          font-weight: 400;
          font-size: 32px;
          line-height: 40px;
          color: #1F325D;
        }
        .value-item {
          margin-bottom: 24px;
          padding: 32px 8px;
          border: 1px solid #DCDCDC;
          border-radius: 8px;
        }
        .value-item:last-child {
          margin-bottom: 0;
        }
        .value-item__name {
          margin-top: 16px;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #1F325D;
        }
        @media (max-width: ${screen.laptop}px) {
          .values-wrapper {
            margin-top: 40px;
          }
          .value-box {
            margin-right: 8px;
          }
          .value-box__inner {
            padding: 24px 12px;
          }
          .box__label {
            font-size: 16px;
            line-height: 16px;
          }
          .box__title {
            margin-bottom: 24px;
            padding: 0 60px;
            font-size: 22px;
            line-height: 28px;
          }
          .value-item {
            margin-bottom: 24px;
            padding: 16px 0;
          }
          .value-item__name {
            margin-top: 8px;
            font-size: 16px;
            line-height: 22px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .value-box {
            padding: 6px;
          }
          .box__title {
            padding: 0 25px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-resolve-values {
            padding: 130px 0 0;
          }
          .values-wrapper {
            flex-wrap: wrap;
          }
          .value-box {
            width: 100%;
            margin: 0;
          }
          .box__label {
            margin-bottom: 4px;
            font-size: 17px;
            line-height: 24px;
          }
          .box__title {
            margin-bottom: 16px;
            padding: 0;
            font-size: 22px;
            line-height: 32px;
          }
          .value-item {
            margin-bottom: 16px;
            padding: 16px;
            display: flex;
            align-items: center;
          }
          .value-item__name {
            margin: 0;
            font-size: 18px;
            line-height: 24px;
          }
        }
      `}</style>
      <style jsx global>{`
        .value-item__icon {
          width: 56px;
          height: 56px;
        }
        @media (max-width: ${screen.laptop}px) {
          .value-item__icon {
            width: 40px;
            height: 40px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .value-item__icon {
            margin-right: 8px;
          }
        }
      `}</style>
    </section>
  );
}
