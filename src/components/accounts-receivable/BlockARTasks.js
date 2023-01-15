import React from 'react';
import { screen } from "../../constants";
import Container from '../Container';
import InvoicingManagementIcon from "../icons/InvoicingManagement";
import PaymentProcessingIcon from "../icons/PaymentProcessing";
import RemindersCollectionsIcon from "../icons/RemindersCollections";

export default function BlockARTasks() {
  const ar_tasks = [
    {
      title: "Invoicing management",
      content: "Net terms (financed or standard), or due upon receipt. Resolve takes care of all your invoicing work flows. Automate all communications and follow-ups.",
      icon: <InvoicingManagementIcon />
    },
    {
      title: "Reminders and collections",
      content: "Resolve sends professional reminder and summary emails on behalf of your team. For late payers, we manage late fees and collections for you.",
      icon: <RemindersCollectionsIcon />
    },
    {
      title: "Payment processing",
      content: "Resolve processes both your online and offline payments (ACH, wire, credit card, and check). Our payments portal simplifies things for your buyers and your accounting team.",
      icon: <PaymentProcessingIcon />
    },
  ];
  return (
    <section className="block-ar-tasks">
      <Container>
        <h2 className="block__title">Outsource these time-consuming AR tasks</h2>
        <ul className="ar-tasks__list">
          {
            ar_tasks.map((item, idx) => <li className="ar-tasks__list-item" key={idx}>
              <div className="ar-tasks__list-icon">{item.icon}</div>
              <p className="ar-tasks__list-title">{item.title}</p>
              <p className="ar-tasks__list-content">{item.content}</p>
            </li>)
          }
        </ul>
      </Container>
      <style jsx>{`
        .block-ar-tasks {
          padding: 200px 0 100px;
        }
        .block__title {
          font-size: 40px;
          line-height: 48px;
          text-align: center;
          margin-bottom: 64px;
        }
        .ar-tasks__list {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ar-tasks__list-item {
          max-width: 355px;
          margin: 0 32px;
          text-align: center;
        }
        .ar-tasks__list-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          box-shadow: 0px 4px 12px rgba(128, 128, 128, 0.1), 0px 24px 24px rgba(216, 216, 216, 0.1);
          border-radius: 6px;
        }
        .ar-tasks__list-title {
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          color: #1F325D;
          margin-bottom: 16px;
        }
        .ar-tasks__list-content {
          font-weight: 300;
          font-size: 17px;
          line-height: 28px;
          color: #5E6677;
        }
        @media (max-width: ${screen.laptop}px) {
          .block-ar-tasks {
            padding: 100px 0;
          }
          .ar-tasks__list-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 24px;
          }
          .ar-tasks__list-item {
            margin: 0 16px;
            max-width: 213px;
          }
          .ar-tasks__list-item:first-child {
            margin-left: 0;
          }          
          .ar-tasks__list-item:last-child {
            margin-right: 0;
          }          
          .ar-tasks__list-title {
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 8px;
          }
          .ar-tasks__list-content {
            font-size: 15px;
            line-height: 20px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block__title {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 40px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-ar-tasks {
            padding: 60px 0;
          }
          .block__title {
            max-width: 265px;
            margin: 0 auto;
            margin-bottom: 40px;
          }
          .ar-tasks__list {
            flex-wrap: wrap;
          }
          .ar-tasks__list-item {
            max-width: 100%;
            margin: 0 0 40px;
          }
          .ar-tasks__list-item:last-child {
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
}
