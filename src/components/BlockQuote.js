import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

import Container from './Container';
import { screen } from '../constants';

export default function BlockQuote({
  title,
  author,
  children,
  image,
}) {
  return (
    <section className="block-quote">
      <Container>
        <div className="block-quote__wrap">
          <div className="block-quote__sign">“</div>
          <div className="block-quote__quote">{children}</div>
          <div className="block-quote__author">{author}</div>
          <div className="block-quote__title">{title}</div>
          {image && (
            <GatsbyImage
              image={image}
              imgStyle={{ objectFit: 'contain' }}
              alt="quote"
              className="block-quote__image" />
          )}
        </div>
      </Container>
      <style jsx>{`
        .block-quote {
          background: #F7F8FA;
          clip-path: polygon(0 35%, 100% 5%, 100% 65%, 0 95%);
          padding: 240px 0;           
        }
        .block-quote__wrap {
          position: relative;
          text-align: center;
        }
        .block-quote__sign {
          font-weight: 300;
          font-size: 80px;
          line-height: 80px;
          color: #1F325D;
        }
        .block-quote__quote {
          max-width: 1030px;
          margin: 0 auto;
          margin-top: -20px;
          margin-bottom: 64px;
          font-weight: 300;
          font-size: 40px;
          line-height: 48px;
          color: #1F325D;
        }
        .block-quote__author {
          font-weight: 500;
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0.5px;
          color: #1F325D;
        }
        .block-quote__title {
          font-size: 20px;
        }
        @media (max-width: ${screen.laptop}px) {
          .block-quote {
            clip-path: polygon(0 25%, 100% 5%, 100% 75%, 0 95%);
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-quote {
            padding: 150px 0;           
            clip-path: polygon(0 25%, 100% 5%, 100% 75%, 0 95%);
          }
          .block-quote__sign {
            font-size: 48px;
            line-height: 48px;
          }
          .block-quote__quote {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 40px;
          }
          .block-quote__author {
            font-size: 16px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-quote {
            padding: 100px 0;           
            clip-path: polygon(0 15%, 100% 5%, 100% 85%, 0 95%);
          }
        }
      `}</style>
      <style jsx global>{`
        .block-quote__image {
          /* max-width: 140px; */
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}
