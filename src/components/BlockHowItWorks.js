import React, { useState } from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import FaqItem from './FaqItem';
import BlockBackgroundAngled from './BlockBackgroundAngled';
import { colors } from '../constants';

export default function BlockHowItWorks({ pretitle, title, data }) {
  const [image, setImage] = useState(data.length ? data[0].image : null);
  const [expandedNumber, setExpandedNumber] = useState(
    data.length ? data[0].id : null,
    null
  );

  return (
    <div className="block-how-it-works">
      <div className="block-how-it-works__column">
        <div className="block-how-it-works__pretitle app__pretitle">
          {pretitle}
        </div>
        <div className="block-how-it-works__title app__title">{title}</div>
        <hr />
        {data.map(item => (
          <React.Fragment key={item.question}>
            <FaqItem
              number={item.id}
              expanded={item.id === expandedNumber}
              showExpandIcon={false}
              question={item.question}
              questionClassName="block-how-it-works__question"
              expandedQuestionClassName="block-how-it-works__expanded-question"
              onClick={() => {
                setExpandedNumber(item.id === expandedNumber ? null : item.id);
                setImage(item.image);
              }}
            >
              {item.answer}
            </FaqItem>
            <hr />
          </React.Fragment>
        ))}
      </div>
      <div className="block-how-it-works__column block-how-it-works__column_centered">
        <BlockBackgroundAngled className="block-how-it-works__image_container">
          {image && (
            <GatsbyImage image={image} className="block-how-it-works__image" alt="" />
          )}
        </BlockBackgroundAngled>
      </div>
      <style jsx global>{`
        .block-how-it-works {
          display: flex;
          flex-wrap: wrap-reverse;
        }

        .block-how-it-works__title {
          max-width: 480px;
        }

        .block-how-it-works__column {
          flex: 1 1 320px;
        }
        .block-how-it-works__column:first-child {
          flex-basis: 480px;
        }

        .block-how-it-works__column_centered {
          text-align: center;
          overflow: hidden;
        }

        .block-how-it-works__question {
          color: ${colors.question};
        }

        .block-how-it-works__expanded-question {
          color: ${colors.activeQuestion};
        }

        hr {
          background-color: ${colors.separator};
        }

        .block-how-it-works__image_container {
          padding: 100px 0;
        }
      `}</style>
      <style jsx global>{`
        .block-how-it-works__image {
          margin: 0 auto;
          width: 100%;
          max-width: 300px;
          height: auto;
          box-shadow: -12px 13px 56px -28px rgba(0, 0, 0, 0.6),
            -20px 32px 94px -19px rgba(50, 50, 93, 0.5);
          transform: perspective(1100px) rotateY(-15deg);
        }
      `}</style>
    </div>
  );
}
