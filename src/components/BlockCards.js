import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

import Card from './Card';
import RightArrowIcon from './icons/RightArrow';
import { colors, screen } from '../constants';

export default function BlockCards({
  pretitle = '',
  title = '',
  subtitle = '',
  cards = [],
  hideRightArrow = false,
  marginBottom = false,
}) {
  const data = useStaticQuery(graphql`
    {
      image: file(name: { eq: "card-banner" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <section className="block-cards">
      {pretitle && (
        <div className="block-cards__pretitle app__pretitle">{pretitle}</div>
      )}
      {title && <h1 className="block-cards__title app__title">{title}</h1>}
      <div
        className={`block-cards__cards${
          marginBottom ? ' block-cards__cards-margin-bottom' : ''
        }`}
      >
        {cards.map(card => (
          <Card
            key={card.id}
            title={
              <span className="block-cards__card-title">
                {card.title}{' '}
                {!hideRightArrow && (
                  <RightArrowIcon color={colors.darkSlateBlue} />
                )}
              </span>
            }
            href={card.href}
            hideLearnMore
            className="block-cards__card"
          >
            {card.content}
          </Card>
        ))}
      </div>
      <style jsx>{`
        .block-cards__pretitle {
          text-align: center;
        }

        .block-cards__title {
          text-align: center;
        }

        .block-cards__cards {
          display: flex;
          justify-content: center;
        }

        .block-cards__cards-margin-bottom {
          margin-bottom: -250px;
        }

        .block-cards__card-title {
          display: flex;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-cards__cards {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-cards__card {
          background-image: url('${getSrc(
            data.image.childImageSharp.gatsbyImageData
          )}');
          background-size: 200px;
          background-repeat: no-repeat;
          background-position: right bottom;
          margin-right: 20px;
          background-color: white;
          max-width: 400px;
          min-height: 150px !important;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-cards__card {
            margin: 0 0 20px 0;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-cards__card {
          margin-right: 40px;
        }
        .block-cards__card:last-child {
          margin-right: 0;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-cards__card {
            margin: 0 0 40px 0;
          }
          .block-cards__card:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
