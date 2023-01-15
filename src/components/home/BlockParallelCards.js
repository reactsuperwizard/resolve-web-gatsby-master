import React from 'react'
import { screen } from "../../constants"
import Container from "../Container"
import ParallelCard from "../ParallelCard"

export default function BlockParallelCards({ title, items }) {
  return <section className="block-parallel-cards">
    <Container>
      <h2 className="section__title">{title}</h2>
      <div className="cards-wrapper">
        {
          items.map((item, idx) =>
            <ParallelCard key={idx} data={item} />
          )
        }
      </div>
    </Container>
    <style jsx>{`
      .block-parallel-cards {
        margin-top: -1px;
        padding: 50px 0 0;
        background: linear-gradient( -8.7deg,#fff 73.2%,#152549 73.3% );
      }
      .section__title {
        max-width: 561px;
        margin: 0 auto;
        margin-top: 400px;
        margin-bottom: 13px;
        font-weight: 400;
        font-size: 48px;
        line-height: 56px;
        color: #1F325D;
        text-align: center;
      }
      @media (max-width: ${screen.laptop}px) {
        .block-parallel-cards {
          background: linear-gradient( -8.7deg,#fff 85.2%,#152549 85.3% );
        }
        .section__title {
          margin-top: 300px;
        }
      }
      @media (max-width: ${screen.mobileMax}px) {
        .block-parallel-cards {
          background: linear-gradient( -8.7deg,#fff 88.2%,#152549 88.3% );
        }
        .block-parallel-cards .cards-wrapper {
          justify-content: space-around;
        }
        .section__title {
          margin-top: 250px;
          font-size: 28px;
          line-height: 36px;
          margin-bottom: 24px;
        }
      }
      @media (max-width: ${screen.mobileExtraSmall}px) {
        .block-parallel-cards {
          background: linear-gradient( -8.7deg,#fff 90.2%,#152549 90.3% );
        }
      }
    `}</style>
    <style jsx global>{`

    `}</style>
  </section>
}