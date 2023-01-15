import React from 'react';
import { screen } from "../constants";
import CustomerSayCard from './CustomerSayCard';

export default function BlockCustomerSays({ items }) {
  return (
    <section className="customer-says">
      <h2 className="customer-says__title">Our customers say it best</h2>
      <div className="customer-says__grid">
        {items.map((item, index) => (
          <CustomerSayCard key={index} {...item}></CustomerSayCard>
        ))}
      </div>
      <style jsx>{`
        .customer-says {
          margin: 170px 0 0;
        }
        .customer-says__title {
          margin-bottom: 52px;
          font-weight: 400;
          font-size: 44px;
          line-height: 52px;
          text-align: center;
        }
        .customer-says__grid {
          display: flex;
          flex-wrap: wrap;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .customer-says {
            margin: 80px 0 40px;
          } 
          .customer-says__title {
            font-size: 24px;
            line-height: 32px;
          }
        }
      `}</style>
    </section>
  );
}
