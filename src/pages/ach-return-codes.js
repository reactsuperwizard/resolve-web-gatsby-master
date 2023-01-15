import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import SpaceDivider from '../components/SpaceDivider';
import Container from '../components/Container';
import BlockHeaderNoImage from '../components/BlockHeaderNoImage';
import BlockText from '../components/BlockText';
import ACHReturnCodesTable from '../components/ACHReturnCodesTable';
import Footer from '../components/Footer';

export default function AchReturnCodesPage() {
  return (
    <Layout>
      <GatsbySeo
        title="Common ACH Return Codes [Examples & Definition]"
        description="Directory of the most common ACH Return Codes"
      />
      <Banner />
      <Container>
        <BlockHeaderNoImage
          title="What are ACH return codes?"
          desc={
            <p>
              The best way to ensure the ACH process remains as smooth as possible for your business is to understand ACH returns, their reasons, and how to handle them. Eighty-five reasons can cause ACH payments to fail or be returned, generating return codes during or after ACH payment processing, which we've compiled for you below. Some of the ACH return codes aren't the most user-friendly, and in some cases, the ACH codes are reserved for use by government or receiving depository financial institution (RDFI) organizations.
            </p>
          }
          removeMargin
          descTextAlign="left"
          maxWidth="700"
        />
        <BlockText
          desc={
            <div>
              <h3 style={{ marginTop: 0 }}>Key terms to know about ACH return codes</h3>
              <p>
                Here are some of the key terms you're likely to come across when you read about ACH returns:
              </p>
              <ul>
                <li>
                  ACH - stands for Automated Clearing House
                </li>
                <li>
                  NACHA - the National Automated Clearing House Association that administers the ACH network.
                </li>
                <li>
                  ODFI – Originating Depository Financial Institution an ODFI is a financial institution with an agreement with the Federal Reserve or Clearing House to transmit into the ACH network. Most major banks, payment processors, payment gateways, and ACH payment APIs may also be ODFIs.
                </li>
                <li>
                  RDFI – Receiving Depository Financial Institution, the RDFI is the bank being debited or credited. Like ODFIs, major banking institutions are RDFI-approved, as are many third-party payment gateways and processors.
                </li>
              </ul>
            </div>
          }
          textAlign="left"
        />
        <BlockText
          desc={
            <div>
              <h3>What happens when an ACH payment is returned?</h3>
              <p>
                The RDFI generates ACH debit returns in response to a transaction. Many believe the process is complete after an ACH transaction has been finalized, but that's not the case. For various reasons, an ACH operator may request the funds be returned.
                <br />
                <br />
                The funds are granted when a request is submitted to an ACH operator. Then, the request is sent to the bank holding the accounts, and if the request cannot be completed, the operator requires them to be returned. ACH return codes are the process by which money is taken back with the information as to why the return is being provided. Also, keep in mind the concept of "notice of change" (NOC), as this can play a part in the ACH debit return process. A customer's bank account information may change due to changes in account numbering, bank mergers, etc.
                <br />
                <br />
                When this happens, updated information about the account will be sent back to the submitter, and the transaction will be returned. This step is referred to as a notice of change and requires the submitter to update the customer's bank account information before a subsequent request is submitted.
                <br />
                <br />
                If subsequent requests continue to use outdated information, the transaction most likely won't be processed, resulting in an ACH debit return.
              </p>
            </div>
          }
          textAlign="left"
        />
        <BlockText
          desc={
            <div>
              <h3>What is the time frame for an ACH debit return?</h3>
              <p>
                ACH return codes have a typical turnaround time of two banking days. However, specific ACH return reason codes may have a slightly longer time frame. For example, unauthorized debits to consumer accounts tend to have a 60-day return timeframe, as banking regulations are relatively consumer-friendly.
              </p>
            </div>
          }
          textAlign="left"
        />
        <BlockText
          desc={
            <div>
              <h3>How much is ACH return fees?</h3>
              <p>
                On average, ACH return fees range from $2-$5 per return.
              </p>
            </div>
          }
          textAlign="left"
        />
        <BlockText
          desc={
            <div>
              <h3>Can return ACH payments be disputed?</h3>
              <p>
                If the return meets any of the following criteria, you can request the ODFI dishonor the return:
              </p>
              <ul>
                <li>
                  Incorrect information
                </li>
                <li>
                  Was a duplicate
                </li>
                <li>
                  Was misrouted
                </li>
                <li>
                  Not returned within the proper time frames
                </li>
                <li>
                  This resulted in unintended credit to the receiver related to the reversal process
                </li>
              </ul>
              <p>Dishonored returns must be sent within five banking days of the return settlement date, and the RDFI can contest them. If this happens, recovery will need to occur outside the ACH network.</p>
            </div>
          }
          textAlign="left"
        />
        <ACHReturnCodesTable />
        <SpaceDivider height={75} />
        <BlockText
          desc={
            <div>
              <h3 style={{ marginTop: 0 }}>We can help</h3>
              <p>
                Resolve is a B2B payments solution for inventory-based businesses that offer net terms. Managing credit and net terms in-house is a revenue blocker for many companies. Resolve brings every component needed to handle credit, net terms, and accounts receivable processes into one platform; this unlocks growth as it allows businesses to offer net terms to more of their buyers, take on larger orders, and enter new markets.. Resolve seamlessly scales resource-intensive workflows such as credit management, invoicing reminders, payments processing, reconciliation, and collections (if needed).
              </p>
              <ul>
                <li>
                  Accounts receivables operations: Resolve scales your AR team with your growth; we automate invoicing communications, reminders, reconciliation, and collections.
                </li>
                <li>
                  Embedded credit and net terms management: Resolve's embedded credit expertise and invoice advance payments allow you to focus on your core business. Gain faster credit decisions and reduced AR risk, all while easing pressure on capital.
                </li>
                <li>
                  Payments automation: Resolve's gray-label payments portal gives your customers more ways to pay while processing and reconciling your payments.
                </li>
              </ul>
            </div>
          }
          textAlign="left"
          primaryButtonText="Request Demo"
          primaryButtonTo="/contact-sales/"
        />
      </Container>
      <SpaceDivider height={75} />
      <Footer darkSkin />
      <style jsx global>{`
        p {
          font-size: 1.3rem;
          line-height: 1.6em;
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0;
          margin-inline-end: 0;
        }
        li {
          word-break: break-word;
          padding-left: 0.75rem;
        }
      `}</style>
    </Layout>
  );
}
