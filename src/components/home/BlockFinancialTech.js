import React from 'react';
import { AccountingErp, screen } from "../../constants";
import Container from "../Container";

function BlockFinancialTech() {
  return (
    <section className="block-financial-tech">
      <Container>
        <div className="content-wrapper">
          <div className="content-item">
            <h2 className="section__title">
              How does Resolve fit in
              your financial tech stack?
            </h2>
            <p className="section__subtitle">
              Invoicing, credit, payments, and more
            </p>
            <p className="section__content">
              Resolve integrates with your accounting system, to streamline all invoicing workflows (net terms or due upon receipt). We bring credit expertise and accounts receivable horsepower to your existing accounting and ERP system.
            </p>
          </div>
          <div className="tech__image">
            <img src={AccountingErp} alt="financial tech stack" />
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-financial-tech {
          padding: 400px 0 0;
          background: linear-gradient( -8.7deg,#152549 73.2%,transparent 73.3% );
          position: relative;
        }
        .content-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .content-item {
          width: 454px;
        }
        .section__title {
          margin-top: 0;
          margin-bottom: 32px;
          font-weight: 400;
          font-size: 48px;
          line-height: 56px;
          color: #FFFFFF;
        }
        .section__subtitle {
          margin-bottom: 16px;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #FB835E;
        }
        .section__content {
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 0.5px;
          color: #FFFFFF;
          opacity: 0.8;
        }
        @media (max-width: ${screen.desktop}px) {
          .block-financial-tech {
            margin-top: -200px;
            padding-top: 350px;
          }
          .tech__image img {
            width: 100%;
          }
          .content-item {
            margin-right: 24px;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-financial-tech {
            margin-top: -300px;
          }
          .section__title {
            margin-bottom: 16px;
            font-size: 24px;
            line-height: 32px;
          }
          .section__subtitle {
            margin-bottom: 8px;
            font-size: 12px;
            line-height: 24px;
          }
          .section__content {
            font-size: 16px;
            line-height: 22px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-financial-tech {
            padding-top: 250px;
            background: linear-gradient( -8.7deg,#152549 85.2%,transparent 85.3% );
          }
          .tech__image {
            margin: 0 auto;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-financial-tech {
            margin-top: -430px;
            padding-top: 400px;
            background: linear-gradient( -8.7deg,#152549 75.2%,transparent 75.3% );
          }
          .content-wrapper {
            flex-wrap: wrap;
          }
          .content-item {
            width: 100%;
            max-width: 100%;
            margin-right: 0;
            margin-bottom: 65px;
          }
          .tech__image img {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default BlockFinancialTech;
