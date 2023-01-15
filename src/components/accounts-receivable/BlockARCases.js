import React from 'react';
import Container from '../Container';
import ParallelCard from "../ParallelCard";
import { ARCase1, ARCase2, screen } from "../../constants";

export default function BlockARCases() {
  const case_studies = [
    {
      title: "Manufacturers & wholesalers",
      desc: "How Tern Bicycles increased sales orders and approved credit with Resolve",
      img: ARCase1,
      to: '/blog/post/tern-bicycles-b2b-payments/'
    },
    {
      title: "Manufacturers & wholesalers",
      desc: "How Resolve helps DocShop Pro boost the bottom line",
      img: ARCase2,
      to: '/blog/post/docshop-pro-b2b-marketplace-resolve/'
    },
  ]

  return (
    <section className="block-ar-cases">
      <Container>
        <h2 className="section__title">Read our case studies</h2>
        <div className="cards-wrapper">
          {
            case_studies.map((item, idx) => <ParallelCard data={item} key={idx} />)
          }
        </div>
      </Container>
      <style jsx global>{`
        .block-ar-cases {
          margin-bottom: 50px;
        }
        .block-ar-cases .section__title {
          font-weight: 400;
          font-size: 48px;
          line-height: 48px;
          text-align: center;
          color: #1F325D;
          margin: 0px;
        }
        .block-ar-cases .cards-wrapper .parallel-card {
          max-width: 570px;
        }
        .block-ar-cases .cards-wrapper .parallel-card .card-inner {
          padding: 11px 0;
        }
        .block-ar-cases .cards-wrapper .parallel-card .card-inner .card__title {
          font-size: 16px;
          line-height: 16px;
          text-decoration-line: underline;
          text-transform: unset;
          color: #8B92A3;
          margin-bottom: 16px;
        }
        .block-ar-cases .cards-wrapper .parallel-card .card-inner .card__title::before {
          display: none;
        }
        .block-ar-cases .cards-wrapper .parallel-card .card-inner .card__desc {
          font-size: 24px;
          line-height: 32px;
        }
        @media (max-width: 1252px) {
          .block-ar-cases .cards-wrapper .parallel-card {
            max-width: 430px;
          }
        }
        @media (max-width: 1070px) {
          .block-ar-cases .section__title {
            margin-bottom: 40px;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-ar-cases .cards-wrapper .parallel-card {
            max-width: 327px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-ar-cases .section__title {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 21px;
          }
          .block-ar-cases .cards-wrapper .parallel-card .card-inner .card__title {
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 12px;
          }
          .block-ar-cases .cards-wrapper .parallel-card .card-inner .card__desc {
            font-size: 18px;
            line-height: 24px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-ar-cases .section__title {
            margin-top: 40px;
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
