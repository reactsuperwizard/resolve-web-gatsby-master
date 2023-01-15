import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Footer from '../components/Footer';
import FaqItem from '../components/FaqItem';
import BlockHeaderNoImage from '../components/BlockHeaderNoImage';

export default function FAQ() {
  return (
    <Layout>
      <GatsbySeo
        title="Frequently asked questions"
        description="See the answers for some of the most common questions we get asked about Resolve."
      />
      <Banner />
      <Container>
        <BlockHeaderNoImage
          title="Frequently asked questions"
          desc="Here are some of the most common questions we get asked about Resolve. Please reach out to our team for more information."
        />
        <section className="faq">
          <hr />
          <FaqItem
            question="What type of companies does Resolve usually work with?"
            defaultExpanded
          >
            Resolve works predominantly with US-based manufacturers and
            wholesalers. Our customers are B2B and sell to business customers.
            Their products are usually purchased on a repeat basis. Some of the
            specific industries and product types we currently serve: Industrial
            equipment, commercial electronics and lighting, sporting goods and
            bicycle manufacturers, automotive and parts, and construction
            machinery.
          </FaqItem>
          <hr />
          <FaqItem
            question="What is the Resolve 'quiet' credit check?"
            defaultExpanded
          >
            Resolve puts an end to lengthy forms and manual trade reference
            checks. Business credit checks are different than personal credit
            checks. We only need the name and address of your customer - that's
            it! Your customer doesn't need to provide a thing. They will not be
            notified of the credit check, and unlike a personal credit check it
            will not impact their credit score in any way.
          </FaqItem>
          <hr />
          <FaqItem
            question="Which of my customers are eligble for Net Terms?"
            defaultExpanded
          >
            Resolve's Net Terms depends on the credit-worthiness of your
            customers. Unfortunately, we can't credit check or get existing
            tradeline information about sole proprietors, very new, or very
            small businesses. Here's an example of a customer that would likely
            get approved:{' '}
            <span className="faq__italic">
              "Company ABC purchases $22,000 of widget Y each month for 3 x
              retail locations. They've been in business for 4 years and
              registered as an LLC, C-Corp, or S-Corp. Existing Tradelines are a
              previous bank loan, business credit cards, business lines of
              credit."
            </span>
          </FaqItem>
          <hr />
          <FaqItem
            question="Which of my customers will likely not get approved?"
            defaultExpanded
          >
            Unfortunately, we can't credit check or get existing tradeline
            information about sole proprietors, very new, or very small
            businesses. Here's an example of a customer that would likely not
            get approved:{' '}
            <span className="faq__italic">
              "Brad is purchasing $500 of widget X monthly to sell in his store,
              he is registered as a sole proprietor and has been in business for
              9 months. Existing Tradelines are a credit card and some packaging
              purchases."
            </span>
          </FaqItem>
          <hr />
          <FaqItem
            question="How will this impact my customer relationships?"
            defaultExpanded
          >
            Resolve's white label features add value to your customer's
            experience with your business, we stay in the background. Resolve's
            online Payments Portal modernizes your customer's payment experience
            with you - they can pay by credit card, transfer, or check. Resolve
            makes life easier for your customers and your accounts team.
          </FaqItem>
          <hr />
          <FaqItem
            question="How do my customers pay their net terms invoices?"
            defaultExpanded
          >
            Depending on the net terms you selected, your customer will get 30,
            60, or 90 days to pay their invoice. Resolve provides a
            white-labelled Payments Portal for your customers. This allows your
            customers to pay online (by ACH or Credit Card), pay by bank
            transfer, or mail in a check.
          </FaqItem>
          <hr />
          <FaqItem
            question="Does Resolve work with my Shopify ecommerce site?"
            defaultExpanded
          >
            Resolve doesn't currently offer a Shopify checkout flow integration.
            However, we still have some options for Shopify merchants to offer
            net terms to their customers. Please reach out to discuss the
            details with our team.
          </FaqItem>
          <hr />
          <FaqItem
            question="How does offering net terms help grow my business?"
            defaultExpanded
          >
            Don't give your customers an excuse to buy from another supplier who
            is offering net terms. We allow your customers to buy now and pay
            later. This convenience boosts sales conversion, increases their
            purchase frequency and volume, and enhances customer loyalty. In
            addition, our advanced underwriting looks beyond traditional
            commercial credit data, allowing you to sell to more customers.
          </FaqItem>
          <hr />
        </section>
      </Container>
      <Footer darkSkin />
      <style jsx>{`
        .faq {
          margin-bottom: 120px;
        }
        .faq__italic {
          font-style: italic;
        }
      `}</style>
    </Layout>
  );
}
