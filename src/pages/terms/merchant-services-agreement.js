import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

import { fonts } from '../../constants';

export default function TermsPage() {
  return (
    <Layout>
      <GatsbySeo title="Merchant Services Agreement" />
      <Container>
        <section>
          <h1 className="app__title">Merchant Services Agreement</h1>
          <div className="app__content">
            <h3>Last Updated: July 26, 2022</h3>
            <p>
              This Agreement is entered into by and between Merchant and Resolve
              as of the Effective Date.
            </p>
            <p>
              <strong> WHEREAS</strong>, Resolve offers a proprietary platform
              and related APIs, software, processing, and suite of other
              services designed to help Merchant offer and administer its trade
              credit terms to Merchant’s Customers (collectively, the{' '}
              <strong>“Services”</strong>), and Merchant wishes to subscribe for
              the Services.
            </p>
            <p>
              <strong>WHEREAS</strong>, Merchant wishes, from time to time, to
              engage in Receivables Purchase Transactions, and Resolve may, from
              time to time, enter into Receivables Purchase Transactions.
            </p>
            <p>
              <strong>NOW, THEREFORE</strong>, the Parties agree as follows:
            </p>
            <h3>1. Definitions. </h3>
            <span>
              Unless otherwise defined in this Agreement, the following terms
              will have the following meanings
            </span>
            <ol type="a">
              <li>
                <strong>“ACH”</strong> means an Automated Clearing House
                transaction processed on the network sponsored by the National
                Automated Clearing House Association.
              </li>
              <li>
                <strong>“Agreement”</strong> means this Merchant Services
                Agreement.
              </li>
              <li>
                <strong>“APIs”</strong> means application programming
                interfaces.
              </li>
              <li>
                <strong>“Bank Account”</strong> means a business demand account,
                acceptable to Resolve in its sole discretion, that is titled in
                Merchant’s legal name at a depository institution the deposits
                of which are insured up to applicable limits by the Federal
                Deposit Insurance Corporation, which is used for Merchant’s
                business operations and is able to transact and process ACH
                account debits and credits.
              </li>
              <li>
                <strong>“Collections”</strong> means, with respect to any
                Receivable, all amounts collected in respect of such Receivable
                pursuant to the applicable Customer Contract with respect to
                such Receivable, together with any proceeds of collateral and
                other amounts obtained through enforcement of, or exercise of
                remedies under, such applicable Customer Contract.
              </li>
              <li>
                <strong>“Confidential Information”</strong> means any
                proprietary information, technical data, demographic
                information, Customer data, trade secrets, or know-how,
                including research, product plans, products, services,
                customers, customer lists, markets, software, developments,
                inventions, processes, formulas, technology, designs, drawings,
                engineering, hardware configuration information, marketing,
                finances or other business information disclosed by either Party
                either directly or indirectly in writing, orally or by drawings
                or inspection of parts or equipment; but excludes any such
                information that: (i) was lawfully in a Party’s possession
                before receiving it from the other Party; (ii) is provided in
                good faith to one Party by a third party without, to such
                Party’s knowledge, breaching any rights of the other Party;
                (iii) is or becomes generally available to the public other than
                through a violation of this Agreement; or (iv) was or is
                independently developed without the use of or reference to the
                Confidential Information.
              </li>
              <li>
                <strong>“Customer”</strong> means a business entity,
                association, sole proprietorship, or any other similar
                organization to whom Merchant provides goods or services, or any
                customer, designee, assignee, or successor of such person.
              </li>
              <li>
                <strong>“Customer Contract”</strong> means, with respect to any
                Receivable, any order, invoice, receipt, note, loan agreement,
                installment agreement, trade credit agreement, or other document
                or agreement evidencing Merchant’s right to receipt of payment
                on account of such Receivable.
              </li>
              <li>
                <strong>“Dispute”</strong> means a situation in which a Customer
                questions any goods or services underlying a Receivable or
                otherwise asserts any offset, set-off, defense, claim,
                counterclaim, dispute, deduction, reduction, discount,
                allowance, right of return, right of recoupment, or warranty
                claim of any kind relating to such goods or services; and is
                unwilling to pay the Receivable or a portion of the Receivable.
                Disputes between the Customer and Merchant may arise for many
                reasons, including: (i) goods or services were not provided as
                agreed or contracted; (ii) cancellations or returns; (iii)
                damaged or defective goods or services; (iv) goods not received
                or services not performed; (v) dissatisfaction with goods or
                services provided; and (vi) billing errors. A Customer’s
                inability to pay a Receivable due to insolvency is not a
                Dispute.
              </li>
              <li>
                <strong>“Effective Date”</strong> means the date on which
                Merchant signs the Order Form.
              </li>
              <li>
                <strong>“Discount”</strong> means the amount disclosed to
                Merchant, on the Order Form or otherwise, that Resolve charges
                per transaction to purchase a Receivable. Discounts may vary by
                transaction and by Customer.
              </li>
              <li>
                <strong>“Lien”</strong> means any lien, liability, claim,
                charge, restriction, condition, option, right, security
                interest, hypothecation, pledge, claim, set-off, offset,
                participation, encumbrance, or other similar right, of any kind
                or nature whatsoever or any other rights or interests that may
                be inconsistent with a transaction contemplated in or adverse to
                Resolve’s interests under this Agreement.
              </li>
              <li>
                <strong>“Losses”</strong> means any claims, causes of action,
                liabilities, losses, damages, settlements, penalties, fines,
                forfeitures, fees (including expert witness, accounting fees,
                and reasonable attorney’s fees), costs, and expenses.
              </li>
              <li>
                <strong>“Mark”</strong> means any name, logo and any other
                trademarks, trade names, service marks, photographs, graphics,
                artwork, text and other content provided or specified by such
                Party in any media format, whether registered or unregistered.
              </li>
              <li>
                <strong>“Merchant”</strong> means the business identified as the
                Merchant on the signature page of the Order Form and its
                successors and permitted designees and assignees.
              </li>
              <li>
                <strong>“Order Form”</strong> means the order form between
                Resolve and the Merchant evidencing the Merchant’s initial
                subscription for the Services, and any order forms related to
                the Services entered into by and between Resolve and Merchant.
              </li>
              <li>
                <strong>“Party” or “Parties”</strong> means Merchant or Resolve,
                individually or collectively.
              </li>
              <li>
                <strong>“Payment Account”</strong> means the bank account(s)
                established or arranged by Resolve into which Collections on
                account of Retained Receivables may be deposited. The Payment
                Account may be a pooled account into which various collections
                are deposited.
              </li>
              <li>
                <strong>“Processing Fee”</strong>
                means the amount disclosed to Merchant, on an Order Form or
                otherwise, that Resolve charges per transaction to process
                Customer payments on Receivables, which may vary according to
                payment method.
              </li>
              <li>
                <strong>“Purchase Price”</strong> means, with respect to any
                Receivable purchased by Resolve from the Merchant from time to
                time hereunder, the face (gross) amount of such Receivable (or,
                in the case of a partial purchase, the face (gross) amount of
                the portion purchased), minus the Discount.
              </li>
              <li>
                <strong>“Purchased Receivable”</strong> means a Receivable
                (excluding any Merchant obligations or liabilities) or any
                portion thereof that Resolve purchases from Merchant by paying
                the Purchase Price.
              </li>
              <li>
                <strong>“Receivable”</strong> means the right to payment owed to
                Merchant by a Customer arising out of the provision of goods
                and/or services by the Merchant to such Customer or to its
                designee and any other related rights, in each case to the
                extent processed by Merchant’s use of the Services. A
                Receivable, if a Purchased Receivable, also includes any Related
                Assets.
              </li>
              <li>
                <strong>“Receivables Purchase Transaction”</strong> means a
                transaction relating to the purchase by Resolve of a Purchased
                Receivable from Merchant.
              </li>
              <li>
                <strong>“Related Assets”</strong> means, with respect to any
                Receivable, (i) all Collections on account of such Receivable,
                (ii) an electronic copy of the Customer Contract evidencing such
                Receivable, (iii) electronic, executed copies of any
                modifications, amendments, supplements, or addendums to such
                Customer Contract, and (iv) all books and records related to any
                of the foregoing.
              </li>
              <li>
                <strong>“Repurchase Price”</strong> means, with respect to any
                Purchased Receivable: (i) where on or before the fifth day
                following the related Receivables Purchase Transaction a Dispute
                arose, Merchant provided Resolve timely notice of the Dispute,
                and Merchant did not breach any of its Receivable-level
                representations or warranties in Section 6(b) with respect to
                the Purchased Receivable: the Purchase Price attributable
                thereto, minus any amounts received by Resolve from a Customer
                in respect of such Purchased Receivable; or (ii) in all other
                circumstances: the Purchase Price attributable thereto, minus
                any amounts received by Resolve from a Customer in respect of
                such Purchased Receivable, plus the Discount.
              </li>
              <li>
                <strong>“Resolve”</strong> means Resolve Corp., a Delaware
                corporation, and its designees, assignees, and successors. For
                the avoidance of doubt, the Parties agree that Resolve’s
                affiliate, Resolve Asset Vehicle 1, LLC, a Delaware limited
                liability company, may serve as such a designee, assignee, or
                successor, in Resolve’s sole discretion, with respect to any
                Receivables Purchase Transaction.
              </li>
              <li>
                <strong>“Resolve IP”</strong> means all software, technology or
                tools used by Resolve to promote, market, sell, generate, or
                distribute the Services, including Resolve’s Marks and/or
                copyrighted material.
              </li>
              <li>
                <strong>“Retained Receivable”</strong> means a Receivable or any
                portion thereof that Resolve does not purchase from Merchant, or
                which has been repurchased by Merchant.
              </li>
              <li>
                <strong>“Services”</strong> has the meaning set forth in the
                recitals.
              </li>
              <li>
                <strong>“Subscription Fee”</strong> means the amount disclosed
                to Merchant, on the Order Form or otherwise, that Resolve
                charges for Merchant’s use of the Services, according to the
                service level chosen by Merchant. Except as otherwise expressly
                specified in the Order Form, the Subscription Fee for any
                renewal period will be priced at Resolve’s applicable list price
                in effect at the time of the such renewal, as disclosed to
                Merchant before such renewal. For clarity, if the chosen service
                level of a Service is changed, the Subscription Fee will be
                repriced for the changed service level and may result in a loss
                of any discount compared to the prior subscription or
                subscription term.
              </li>
            </ol>
            <h3>2. General Terms and Conditions.</h3>
            <span>Merchant agrees that:</span>
            <ol type="a">
              <li>
                <strong>Merchant Eligibility</strong>. Before Merchant may
                access the Services, Resolve may conduct a due diligence
                evaluation of and approve, in its sole discretion, Merchant for
                such access. Resolve’s due diligence of Merchant may include
                evaluating any history of litigation and customer complaints,
                historic chargeback rates and losses, tax returns, legal status,
                the financial background of Merchant, the overall financial
                health of Merchant, the nature of Merchant’s business, and any
                other information reasonably requested by Resolve. Merchant
                authorizes Resolve to obtain credit reports and make other
                inquiries of any bank, lender, and trade credit references
                identified by Merchant, and other information sources as Resolve
                deems appropriate. Merchant agrees to provide all information
                that Resolve may reasonably request while performing such due
                diligence. Resolve reserves the right at any time, in its sole
                discretion, to reassess Merchant’s eligibility for the Services.
              </li>
              <li>
                <strong>Merchant’s Trade Credit.</strong> Although the Services
                are designed to help Merchant offer trade credit terms to
                Merchant’s Customers, Merchant is solely responsible for
                designing the trade credit terms offered to its Customers,
                underwriting and making credit decisions regarding its
                Customers, and providing any disclosures to Customers, each in
                compliance with applicable law.
              </li>
              <li>
                <strong>United States.</strong> Merchant will use the Services
                only within the United States and any transactions relating to
                the Services will also occur only within the United States and
                only with Customers in the United States.
              </li>
              <li>
                <strong>Fees.</strong> Merchant will pay the Subscription Fees
                and Processing Fees when due, as disclosed to Merchant, on the
                Order Form or otherwise. Merchant agrees that Resolve may change
                the Subscription Fees and Processing Fees or their due dates at
                any time upon thirty (30) days’ prior written notice to
                Merchant, and that Merchant’s continued use of the Services will
                constitute acceptance of any change.
              </li>
              <li>
                <strong>Customer’s Costs.</strong> Merchant will not impose on
                any Customer any surcharge, fee, or price for goods, services,
                or transactions related to the Services that are greater than
                any surcharge, fee, or price imposed on goods, services, or
                transactions that do not involve the Services.
              </li>
              <li>
                <strong>Merchant Integration.</strong> Merchant will take such
                actions as are reasonably requested by Resolve to integrate or
                implement the Services with Merchant’s sales and finance
                processes or to effectuate the implementation of such Services
                through a mutually acceptable method determined in good faith by
                the Parties. Merchant will use commercially reasonable efforts
                to cause such integration or implementation to be operational
                within sixty (60) days of the Effective Date. Merchant is solely
                responsible for engaging in testing to ensure the proper
                functioning of the Services in combination with Merchant’s own
                systems. Merchant’s use of the Services constitutes Merchant’s
                acknowledgment that the Services were tested to Merchant’s
                satisfaction.
              </li>
              <li>
                <strong>Ineligible Goods and Services.</strong> Any Merchant
                offering or provision of the following goods or services is
                ineligible for the Services: ammunition, firearms, firearm parts
                or accessories, and weapons or knives regulated under applicable
                law; narcotics, steroids, controlled substances, and drug
                paraphernalia; goods or services infringing third-party
                intellectual property; goods or services provided to a Customer
                for personal, family, or household purposes; money transmission
                services; medical services; and any illegal or illicit goods or
                services.
              </li>
              <li>
                <strong>
                  Protecting Security and Reliability of Services.
                </strong>{' '}
                The Services may contain technological measures designed to help
                prevent unauthorized or illegal use of the Services, and Resolve
                may use these measures to help maintain the security and
                reliability of the Services, verify Merchant’s compliance with
                the terms of this Agreement, and enforce Resolve’s rights,
                including any intellectual property rights related to the
                Services. Merchant agrees that Resolve may restrict or suspend
                Merchant’s access to Services to protect against misuse, to
                ensure the security and reliability of the Services, and to
                protect against any other risks or concerns determined by
                Resolve in its sole discretion.
              </li>
              <li>
                <strong>Monitoring.</strong> Resolve and its representatives may
                collect and use diagnostic, technical and related information
                regarding the performance of the Services and Merchant’s use of
                the Services to monitor and improve the performance of the
                Services and to enhance the features and functions of the
                Services. Such information is owned by Resolve and is Resolve’s
                Confidential Information.
              </li>
              <li>
                <strong>Bank Account.</strong> Merchant will establish the Bank
                Account and maintain it in good standing, and Merchant will not
                change the Bank Account without Resolve’s prior written consent,
                which will not be unreasonably withheld. Merchant authorizes
                Resolve to initiate an ACH account credit to the Bank Account
                for any amount owed by Resolve to Merchant under this Agreement,
                and to initiate an ACH account debit from the Bank Account for
                any amount owed by Merchant to Resolve under this Agreement.
                Resolve is not responsible for any non-sufficient funds fees,
                overdraft fees, or other fees that may be incurred if the Bank
                Account has insufficient funds. The Bank Account may also have
                an ACH account debit block or filter to reject unauthorized ACH
                account debits. Merchant must check with its depository
                institution to determine if the Bank Account has this feature,
                and, if so, authorize Resolve to process ACH account debits on
                the Bank Account. If any Resolve ACH transaction is returned due
                to an ACH account debit block, filter, or any other reason,
                Merchant must promptly pay any resulting fees or charges,
                including any that may be assessed on Resolve.
              </li>
              <li>
                <strong>Law.</strong> Merchant will comply with applicable law
                in connection with this Agreement.
              </li>
              <li>
                <strong>Marketing.</strong> Merchant will use commercially
                reasonable efforts to market and promote Customer transactions
                created or processed by Merchant’s use of the Services. In
                marketing and promoting such transactions, Merchant may use any
                sales channel, form of media, media channel, advertisement,
                marketing script, and press release; provided that any such
                marketing or promotion will be accurate, will not be unfair,
                deceptive, or abusive, and will comply with applicable law. Any
                marketing or promotions that include Resolve’s Mark must be
                approved in writing in advance by Resolve in its sole
                discretion, and Merchant will promptly make changes to, or stop
                using, any previously approved marketing and promotions if and
                as directed by Resolve.
              </li>
              <li>
                <strong>Exclusivity.</strong> Merchant will not integrate,
                offer, market, assist, facilitate, sell, or promote any person,
                or the goods or services of any person, who is not party to the
                Agreement and who offers, markets, assists, facilitates, sells,
                or promotes trade credit or other payment deferral options that
                are not credit cards, purchase-money loans, or leasing programs
                to business customers through any internet, mobile, web browser,
                point-of-sale devices or applications, or any other electronic
                means.
              </li>
            </ol>
            <h3>3. Receivable Purchase Transactions.</h3>
            <ol type="a">
              <li>
                <strong>Offers of Receivables.</strong> From time to time,
                Merchant may offer for sale to Resolve any Receivable owed to
                Merchant by a Customer. Resolve may decide to purchase, but is
                not obligated to purchase, all or part of any Receivable that
                Merchant offers for sale to Resolve. No Receivable may be
                offered or sold by Merchant to any person other than Resolve
                unless the Receivable first has been offered to and declined by
                Resolve.
              </li>
              <li>
                <strong>Discounts.</strong> Resolve will charge, and Merchant
                agrees to pay, the Discount with respect to each Purchased
                Receivable. Payment of the Discount is due immediately upon
                Resolve’s purchase of such Receivable.
              </li>
              <li>
                <strong>Purchase.</strong> The Purchase Price will be paid by
                ACH account credit to the Bank Account. Upon payment of the
                Purchase Price to Merchant, all of Merchant’s right, title, and
                interest in the Purchased Receivable, including any rights to
                payment, are absolutely and irrevocably sold, transferred, and
                assigned to Resolve. Resolve does not assume any liabilities or
                obligations related to any Purchased Receivable; any such
                liabilities and obligations remain solely with Merchant. All
                taxes incurred by Merchant or Resolve in such transactions will
                be borne by Merchant.
              </li>
              <li>
                <strong>Non-Recourse.</strong> With respect to Receivables
                Purchase Transactions, the relationship between the Parties is
                of seller (i.e., Merchant) and purchaser (i.e., Resolve) of
                Receivables; the Parties’ relationship is not one of lender and
                borrower. Resolve’s right to receive payment on account of any
                Purchased Receivable is generally non-recourse. This means that
                if the Customer pays Resolve an amount that is less than the
                amount of the Purchased Receivable—for example, if the Customer
                has closed in the ordinary course of business—and Merchant has
                not breached this Agreement and the applicable Purchased
                Receivable is not subject to a repurchase under Section 3(j),
                then Merchant will have no payment obligation on such Purchased
                Receivable.
              </li>
              <li>
                <strong>Servicing of Purchased Receivables.</strong> All
                Purchased Receivables will be serviced, collected, and
                administered by Resolve, with full right to take any action in
                doing so, including changing the terms of any Purchased
                Receivable. Any such action could adversely affect, including
                reducing the value of, any Receivable or the portions of any
                Receivable that Resolve does not purchase from Merchant, and
                Merchant agrees that Resolve will have no liability for any such
                effects. The Merchant authorizes Resolve to notify each Customer
                of Resolve’s interest in any Purchased Receivable owed by such
                Customer. If instructed by Resolve, Merchant will immediately
                (i) notify Merchant’s Customer in writing that Resolve has
                purchased the Purchased Receivables and (ii) provide Resolve
                with any and all requested contact information related to
                Merchant’s Customer. If Merchant receives any Customer payment
                on a Purchased Receivable, Merchant must notify Resolve
                immediately, segregate the amount of such payment for Resolve’s
                benefit, and immediately remit the amount of such payment to
                Resolve. If a Purchased Receivable is only a portion of a
                Receivable (for the avoidance of doubt, the unpurchased portion
                of such Receivable is a Retained Receivable), then Resolve and
                Merchant will be entitled to any Customer payments on the
                Receivable on a pro rata basis, and Resolve will as Merchant’s
                agent remit Merchant’s portion of such Customer payment to
                Merchant in accordance with Section 4. Merchant will provide
                Resolve any requested assistance regarding servicing,
                collecting, and administering any Purchased Receivable and
                facilitating payment of any Receivable.
              </li>
              <li>
                <strong>Security Interest and Financing Statements.</strong>{' '}
                Merchant acknowledges and agrees that it is intended that the
                conveyance of all right, title, and interest in and to the
                Purchased Receivables is and will be an absolute and irrevocable
                sale, conveyance, and transfer conveying title, free and clear
                of any Lien, and that such Purchased Receivables will not be
                part of Merchant’s estate (or bankruptcy estate) in the event of
                an insolvency proceeding with respect to Merchant (which will
                include, for the avoidance of doubt, the filing of a decree or
                order for relief by a court having jurisdiction in respect of
                Merchant or any substantial part of its property in an
                involuntary case under Title 11 of the United States Code or any
                other state or federal applicable insolvency law now or later in
                effect, or appointing a receiver, liquidator, assignee,
                custodian, trustee, sequestrator, or similar official for
                Merchant or for any substantial part of its property, or
                ordering the winding-up or liquation of Merchant’s affairs, or
                the commencement by Merchant of a voluntary case under any
                applicable insolvency law now or later in effect, or the consent
                by Merchant to the entry of an order for relief in an
                involuntary case under any such law, or the consent by Merchant
                to the appointment of or taking possession by a receiver,
                liquidator, assignee, custodian, trustee, sequestrator, or
                similar official for Merchant or for any substantial part of its
                property, or the making by Merchant of any general assignment
                for the benefit of creditors, or the failure by Merchant to pay
                its debts as such debts become due, or the taking of Merchant of
                any action in furtherance of any of the foregoing). It is not
                intended that such conveyance be deemed a pledge of the
                Purchased Receivables to Resolve to secure a debt or other
                obligation of Merchant. If, however, notwithstanding such
                intention, the purchase and sale provided for in Section 3 is
                determined to be a transfer for security, then this Agreement
                will be deemed to be, and hereby is, a “security agreement”
                within the meaning of Article 9 of the Uniform Commercial Code,
                and Merchant grants to Resolve a first priority security
                interest in, and lien on, all right, title, and interest in and
                to the Purchased Receivables, now existing or later arising or
                created, to secure the prompt and complete payment of any loan
                deemed to have been made, together with all of the other
                obligations of Merchant under this Agreement. Resolve will have,
                in addition to the rights and remedies that it may have under
                this Agreement, all other rights and remedies provided to a
                secured creditor under the Uniform Commercial Code and other
                applicable law, which rights and remedies will be cumulative.
                Merchant authorizes Resolve to file one or more financing
                statements (including any continuation or amendment) consistent
                with the applicable Uniform Commercial Code, identifying
                Merchant as “debtor” and/or “seller,” in any applicable filing
                office in any applicable jurisdiction that Resolve deems
                necessary or desirable in order to perfect or give notice of the
                irrevocable purchase and sale of the Purchased Receivables
                and/or the security interest granted by Merchant in such
                Receivables and related assets under this Section 3(f). Any such
                financing statement may state that such sale is a sale and not
                an assignment for security and may state that Merchant is
                prohibited from obtaining any financing that impairs the value
                of the Purchased Receivables or Resolve’s right to collect or
                realize same.
              </li>
              <li>
                <strong>No Impairment.</strong> Merchant will not take any
                action or make any omission (including (i) changing the payment
                terms or due date of a Purchased Receivable, or (ii) placing or
                allowing placement of a Lien on any Purchased Receivable) that
                has, individually or in the aggregate, an adverse effect on any
                Purchased Receivable or on the ability to collect on any
                Purchased Receivable.
              </li>
              <li>
                <strong>Further Assurances.</strong> Merchant will take all
                actions requested by Resolve, as applicable, to preserve and
                protect Resolve’s right, title, and interest in and to any
                Purchased Receivable and to realize Customer payment in full on
                any such Purchased Receivable.
              </li>
              <li>
                <strong>Disputes.</strong> Merchant must notify Resolve of any
                Dispute within five days of becoming aware of it. Resolving
                Disputes is solely the responsibility of Merchant. Merchant will
                work directly with Customer in good faith to resolve the
                Dispute. Merchant will provide Resolve periodic updates, as
                requested by Resolve, regarding the status of the Dispute. A
                Dispute is resolved when Customer pays the full Receivable
                balance (or unpaid remainder of the Receivable) to Merchant. If
                Merchant is unable to resolve a Dispute related to a Purchased
                Receivable within ten days, Merchant must repurchase the
                Purchased Receivable and pay to Resolve the Repurchase Price
                immediately upon demand. Resolve is authorized to initiate ACH
                account debits from the Bank Account in the amount of the
                Repurchase Price.
              </li>
              <li>
                <strong>Repurchases.</strong> If Merchant breaches any of its
                Receivable-level representations or warranties in Section 6(b)
                with respect to any Purchased Receivable, Merchant must give
                Resolve notice of any such breach immediately upon becoming
                aware of it. Upon discovering any such breach (through Merchant
                or otherwise), Resolve may require Merchant, and Merchant hereby
                agrees, to repurchase the related Purchase Receivable from
                Resolve by paying the Repurchase Price immediately upon demand.
                Merchant hereby authorizes Resolve to initiate ACH account
                debits from the Bank Account in the amount of the Repurchase
                Price. Merchant further authorizes Resolve to apply any
                Collections received by Resolve on account of Retained
                Receivables to the payment of any Repurchase Price or other
                amount due and unpaid hereunder.
              </li>
            </ol>
            <h3>4. Administration of Retained Receivables.</h3>
            <ol type="a">
              <li>
                <strong>Administration Services.</strong> Resolve will provide
                to Merchant forms of electronic account statements in the
                Merchant’s name and using the Merchant’s Marks and send such
                statements to Customers on Merchant’s behalf. The statements
                will provide that check, ACH, and wire payments are to be made
                to the Payment Account. Resolve may indicate on the statements
                that they are “powered by Resolve” or similar designations.
              </li>
              <li>
                <strong>Payment Account.</strong> From time to time, Resolve as
                Merchant’s Agent will cause Collections deposited in the Payment
                Account on account of Retained Receivables to be remitted to a
                bank account designated by Merchant, net of any amounts due to
                Resolve under this Agreement. As consideration for Resolve’s
                administration of the Retained Receivables, Merchant will pay
                Resolve the Processing Fees by withdrawal from the Payment
                Account, by netting from remittances as provided in this Section
                4(b), or by such other manner specified by Resolve from time to
                time. Resolve may also withdraw and retain any interest earned
                on funds in the Payment Account.
              </li>
            </ol>
            <h3>5. License Grants and Intellectual Property.</h3>
            <ol type="a">
              <li>
                <strong>Service License.</strong> During the subscription term
                Merchant subscribes for the Services, and subject to the terms
                and conditions of this Agreement, Resolve hereby grants Merchant
                a limited, revocable, non-exclusive, non-transferable,
                non-sublicensable license to access and use the Services and
                integrate the APIs in order to provide and to enable Customers
                to access, use, perform, and display (publicly or otherwise) the
                Services.
              </li>
              <li>
                <strong>Trademark License.</strong> During the term of this
                Agreement, and subject to the terms and conditions of this
                Agreement, each Party grants to the other Party a limited,
                revocable, non-exclusive, non-transferable license,
                non-sublicensable right to use, reproduce, display, distribute
                and transmit the other Party’s Marks solely in connection with
                and solely to the extent reasonably necessary for the purposes
                of this Agreement; and Merchant also grants to Resolve such a
                license and rights with respect to Merchant’s Marks in
                connection with Resolve’s press releases, customer lists,
                investor pitches, case studies, web pages, and other
                advertising, promotional, or marketing materials. Use of the
                Marks does not create in either Party’s favor any right, title
                or interest in the Marks or any continuing rights to market or
                distribute the Services. Neither Party shall register or apply
                for registration of any of the other Party’s Marks (or any
                similar trademarks, service marks or logos) for itself, or any
                other Party. Each Party agrees to cooperate with the other if
                the other Party seeks to proceed with any infringement action
                regarding such rights.
              </li>
              <li>
                <strong>Resolve Intellectual Property.</strong> This Agreement
                is not a sale and does not convey to Merchant any rights of
                ownership in or related to the Services. Merchant agrees and
                acknowledges that Resolve is the exclusive owner of and retains
                all right, title, and interest in any Resolve IP. Merchant may
                not, nor may Merchant allow any third party to (i) modify,
                translate, reverse engineer, decompile, disassemble, otherwise
                attempt to derive source code from, or create derivative works
                based on, the Resolve IP; (ii) make unauthorized copies of the
                Resolve IP; (iii) distribute or market the Services and any
                Resolve IP, except to Customers, without Resolve’s prior written
                authorization; (iv) remove any proprietary notices, labels or
                Marks on or in any copy of the Services or Resolve IP; (v) alter
                or remove any warranties, disclaimers, and license agreements
                shipped with the Services; or (vi) use the Services and Resolve
                IP in any manner or for any purpose other than for which the
                Services and Resolve IP have been incorporated or for which the
                Services and Resolve IP have been provided.
              </li>
              <li>
                <strong>Feedback License.</strong> Merchant grants to Resolve a
                worldwide, perpetual, irrevocable, royalty-free, assignable,
                sublicensable, transferable license to use and incorporate into
                the APIs and/or the Services any suggestion, correction or other
                feedback provided by Merchant relating to the Services.
              </li>
              <li>
                <strong>Restrictions on Use of Services.</strong> Merchant will
                not: (i) offer for sale or lease, sell, resell, lease or in any
                way transfer the Services; (ii) attempt to create a substitute
                or similar service through the use of, or access to, the
                Services; (iii) and will ensure that Customers and third parties
                do not access or use the Services in a way intended to avoid
                incurring fees, misrepresent usage or performance data,
                misrepresent transaction amount or item data, or misrepresent
                user information; or (iv) perform any benchmark tests against a
                competing provider (e.g. conversion lift, approval rates,
                average order value, or share of cart, etc.) without the prior
                written consent of Resolve (any results of such permitted
                benchmark testing shall be deemed Confidential Information of
                Resolve and, other than as provided in Section 7, shall not be
                shared with any third party without Resolve’s prior written
                consent). Merchant will immediately notify Resolve if Merchant
                becomes aware of any material breach relating to the Services.
              </li>
            </ol>
            <h3>6. Representations, Warranties, and Covenants.</h3>
            <ol type="a">
              <li>
                <strong>General Representations and Warranties.</strong>{' '}
                Merchant represents, warrants, and covenants on an continuing
                basis: (i) Merchant is and will be duly organized, validly
                existing, and in good standing under the laws of its
                organizational jurisdiction, duly qualified to do business in
                each jurisdiction where it conducts its business, and have and
                will have the full power and authority to carry on its business
                in the manner conducted as of the date of this Agreement; (ii)
                Merchant has and will have full power and authority to enter
                into, deliver, and perform all its obligations under this
                Agreement, and it has and will have been duly authorized to do
                so by any necessary organizational action; (iii) there are and
                will be no laws, organizational instruments, contracts, or any
                other circumstances that would conflict with or prevent Merchant
                from entering into or performing its obligations under this
                Agreement; (iv) the individual executing this Agreement on
                Merchant’s behalf is at least 18 years of age and has the
                authority and legal capacity necessary to bind Merchant; (v)
                following execution and delivery, this Agreement constitutes the
                valid and binding obligation of Merchant, enforceable against
                Merchant in accordance with its terms; (vi) Merchant has and
                will maintain insurance in such amounts and against such risks
                as are reasonably necessary to protect its business and will
                provide proof of such insurance to Resolve upon reasonable
                request; (vii) Merchant is and will be in possession of and
                compliance with all licenses, permits, approvals, consents, and
                other authorizations required by any governmental body to
                conduct its business; (viii) Merchant is and will be in
                compliance with all laws, regulations, ordinances, orders, and
                other requirements of any governmental body; (ix) Merchant is
                not and will not be a target of any economic or trade sanctions
                issued or administered by any governmental body; (x) all tax
                returns and tax reports, and all taxes due and payable or
                required to be filed by Merchant have been or will be filed and
                paid, on a timely basis (including any extensions); (xi)
                Merchant has no and will have no material liabilities and no
                material contingent liabilities, except those which Merchant
                disclosed to Resolve in writing before the Effective Date and
                except current liabilities incurred in the ordinary course of
                business; (xii) Merchant is not and will not be subject to any
                Lien, except those which Merchant disclosed to Resolve in
                writing before the Effective Date and except those incurred in
                the ordinary course of business; (xiii) Merchant will promptly
                notify Resolve of any significant change or other development
                that has or may have a material adverse effect on or a
                significant change in Merchant’s business, and Merchant agrees
                to provide to Resolve, upon request, any information related to
                Merchant’s business or the transactions contemplated by this
                Agreement; (xiv) there is and will be no action, suit, claim,
                inquiry, investigation, or legal, administrative, or arbitration
                proceeding pending or currently threatened, whether at law, in
                equity, or before any governmental authority, against Merchant;
                (xv) Merchant has not declared bankruptcy within the past seven
                years preceding the Effective Date, has not consulted with a
                bankruptcy attorney within the past six months preceding the
                Effective Date, and is not and will not contemplate or
                anticipate the filing of a bankruptcy or other insolvency
                proceeding, or closing or materially modifying Merchant’s
                business; (xvi) Merchant is and will be solvent and capable of
                fulfilling its obligations under this Agreement, and Merchant
                has not been having and will not have any difficulty paying
                amounts due to others in full and when due; and (xvii) and any
                information, materials, data, content, or documents Merchant
                directly or indirectly provides to Resolve are true, correct,
                and complete and nothing material has been omitted.
              </li>
              <li>
                <strong>
                  Representations and Warranties Concerning Purchased
                  Receivables.
                </strong>{' '}
                For each Purchased Receivable, Merchant makes the following
                representations and warranties as of the time of purchase by
                Resolve: (i) Merchant holds good and marketable legal title to
                the Purchased Receivable, free and clear of any Liens and
                restrictions on transfer; (ii) Merchant has not sold, pledged,
                assigned, or encumbered the Purchased Receivable; (iii) no
                person has any rights, interest, or claims in or to the
                Purchased Receivable; (iv) the Purchased Receivable is not
                subject to any reduction in value resulting from Merchant’s
                decisions, actions, or omissions, and is presently and
                unconditionally owing; (v) the Purchased Receivable is not past
                due and represents amounts owed by the Customer arising from
                Merchant’s actual and timely performance or provision of goods
                or services to the Customer in the ordinary course of Merchant’s
                business; (vi) the Purchased Receivable is not subject to any
                Dispute; (vii) no agreement has been made under which the
                Customer may claim any deduction or discount against the
                Purchased Receivable; (viii) the Customer is liable for the full
                amount of the Purchased Receivable and has not objected to its
                payment or the quality or quantity of the goods or services
                performed or provided; (ix) the Purchased Receivable has not
                been modified, dismissed, settled, or paid; (x) there has been
                no error, misrepresentation, negligence, fraud, omission, or
                violation of law on the part of any person with respect to the
                Purchased Receivable or its underlying goods or services; and
                (xi) Merchant has no knowledge that the Customer has filed or
                intends to file for bankruptcy or receivership, or has been
                having any difficulty paying or intends not to pay amounts due
                to any person in full and when due.
              </li>
            </ol>

            <h3>7. Confidential Information.</h3>
            <p>
              Neither Party shall use the other Party’s Confidential Information
              for any purpose whatsoever outside of the scope of this Agreement,
              nor shall either Party disclose the other Party’s Confidential
              Information to any third party without the prior written consent
              of the other Party. Each Party further shall take all reasonable
              precautions to prevent any unauthorized disclosure of the other’s
              Confidential Information. Each Party shall limit access to
              Confidential Information to those of its employees, contractors,
              and agents who need such access for purposes consistent with this
              Agreement and shall be responsible for any breach of this Section
              7 by such employees, contractors and agents. It is understood that
              each Party’s Confidential Information shall remain the sole
              property of such Party. In the event that either Party becomes
              legally compelled (by law, rule, regulation, subpoena, or similar
              court process) to disclose any Confidential Information, such
              Party will, to the extent legally permissible, provide the other
              Party with immediate notice of such circumstances and will limit
              such disclosure to only what is specifically required.
            </p>

            <h3>8. Consent to Electronic Communication. </h3>
            <p>
              By signing this Agreement, including if by signing electronically,
              Merchant irrevocably consents and agrees that Resolve may provide
              all information and disclosures required by law to Merchant
              electronically; and Merchant’s electronic signature on this
              Agreement and related documents has the same effect as if Merchant
              signed them in ink. This consent applies to acceptance of this
              Agreement, to all future communications with Merchant, and to
              other communications, notices, and disclosures that Resolve
              provides to Merchant electronically. All communications provided
              electronically will be deemed to be “in writing.” Resolve reserves
              the right to cancel electronic disclosure services and to change
              such services or send disclosures in paper form at any time.
              Resolve is responsible for sending notice of the disclosures to
              you electronically, but is not responsible for any delay or
              failure in Merchant’s receipt or review.
            </p>

            <h3>9. Consent to Telephonic Communications.</h3>
            <p>
              For informational, servicing, fraud, or collection related
              communications, Merchant agrees that Resolve may use the phone
              numbers that Merchant provides to Resolve to contact Merchant’s
              phone, cellular phone, or wireless device with text messages,
              artificial or prerecorded voice calls, and calls made by an
              automatic telephone dialing system. Merchant represents and
              warrants that any phone number that Merchant provides to Resolve
              is a business-purpose phone number that belongs to Merchant or
              that Merchant is authorized to provide to Resolve. Call and text
              frequency may vary and may be recurring. This consent applies even
              if Merchant is charged for the call or text under Merchant’s plan.
              Merchant is responsible for any charges that may be billed to
              Merchant by Merchant’s communications carrier when Resolve
              contacts Merchant. Message and data rates may vary. Resolve and
              any carrier are not liable for delayed or undelivered messages. To
              ensure that Merchant receives accurate and courteous customer
              service, Merchant’s calls with Resolve may be monitored or
              recorded by us or our agents, and Merchant agrees to any such
              monitoring and recording.
            </p>

            <h3>10. Notices to Resolve.</h3>
            <p>
              All notices to Resolve concerning this Agreement must be sent to
              us at: Resolve Corp., 2261 Market Street #4229, San Francisco, CA
              94114. Notice by Merchant to Resolve is deemed to be given when
              received by Resolve.
            </p>

            <h3>11. Notices to Merchant.</h3>
            <p>
              All notices to Merchant concerning this Agreement will be sent to
              Merchant’s last mailing address or email address that Resolve has
              on file for Merchant. Notice by Resolve to Merchant is deemed to
              be given when sent. Merchant agrees to notify Resolve, as set
              forth in Section 10, immediately regarding any change of
              Merchant’s address or email address. Until Resolve is notified
              that Merchant’s address has changed, Resolve will continue to send
              notices to the last address or email address for Merchant that
              Resolve maintained on file.
            </p>

            <h3>12. WARRANTY DISCLAIMER.</h3>
            <p>
              THE SERVICES AND RECEIVABLES PURCHASE TRANSACTIONS ARE PROVIDED
              “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND,
              INCLUDING THOSE EXPRESS, IMPLIED, OR STATUTORY, AND, TO THE
              FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, RESOLVE DISCLAIMS
              ALL WARRANTIES OF ANY KIND REGARDING THE SERVICES AND RECEIVABLES
              PURCHASE TRANSACTIONS INCLUDING THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, QUALITY, ACCURACY,
              NONINFRINGEMENT, TITLE, AND ANY WARRANTY ARISING OUT OF COURSE OF
              DEALING, USAGE, OR TRADE.
            </p>

            <h3>13. Set Off.</h3>
            <p>
              Resolve may set off any Subscription Fees, Processing Fees,
              Discounts, Repurchase Prices, costs, expenses, indemnification
              amounts, and any other amounts Merchant owes Resolve, as
              applicable, against any Purchase Prices, remittances, or other
              amounts owed by Resolve to Merchant.
            </p>

            <h3>14. Indemnification; Remedies. </h3>
            <ol type="a">
              <li>
                Merchant agrees to indemnify and hold Resolve and its affiliated
                and related entities, and each of their respective officers,
                directors, agents, and employees, harmless from and against any
                Losses arising out of or relating to any of the following: (i)
                any misrepresentation, breach or alleged breach of, failure, or
                default by Merchant in connection with any of representation,
                warranty, covenant, or other provision of this Agreement (or any
                agreement incorporated by reference herein); (ii) any Dispute or
                other claim arising out of or relating to the goods or services
                provided by Merchant, including any claims for false
                advertising, unfair business practices, product defects, and
                personal injury, death, and property damage; (iii) any claim
                arising from Customers’ use of the Services; (iv) Resolve’s
                servicing of the Retained Receivables; or (v) Merchant’s gross
                negligence or willful misconduct. In addition to the rights and
                remedies Resolve has under this Agreement, Resolve will also
                have all other rights and remedies provided under applicable law
                and equity, which rights and remedies will be cumulative.
              </li>
              <li>
                Resolve agrees to indemnify and hold Merchant and its affiliated
                and related entities, and each of their respective officers,
                directors, agents, and employees, harmless from and against any
                Losses arising out of or relating to any of the following: (i)
                any misrepresentation, breach or alleged breach of, failure, or
                default by Resolve in connection with any of representation,
                warranty, covenant, or other provision of this Agreement (or any
                agreement incorporated by reference herein); or (ii) Resolve’s
                gross negligence or willful misconduct. In addition to the
                rights and remedies Merchant has under this Agreement, Merchant
                will also have all other rights and remedies provided under
                applicable law and equity, which rights and remedies will be
                cumulative.
              </li>
            </ol>

            <h3>15. Limitation of Liability.</h3>
            <p>
              IN NO EVENT SHALL EITHER PARTY BE LIABLE OR OBLIGATED TO THE OTHER
              PARTY OR ANY THIRD PARTY FOR ANY LOSS OF, OR DAMAGE TO, DATA OR
              ANY SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY OR
              CONSEQUENTIAL DAMAGES, COSTS, EXPENSES, OR LOSSES OF ANY KIND,
              INCLUDING LOSS OF PROFIT, USE, OR DATA, LOSS OF OTHER INTANGIBLES,
              LOSS OF SECURITY OF INFORMATION, UNAUTHORIZED ACCESS TO THE
              SERVICES OR INFORMATION, OR UNAUTHORIZED INTERCEPTION OF ANY
              INFORMATION, REGARDLESS OF THE FORM OF ACTION, WHETHER IN
              CONTRACT, TORT, NEGLIGENCE, STRICT PRODUCT LIABILITY, OR
              OTHERWISE. RESOLVE’S SOLE AND COMPLETE LIABILITY TO MERCHANT FOR
              ANY CLAIMS ARISING OUT OR OF RELATING TO THIS AGREEMENT SHALL BE
              LIMITED TO THE AGGREGATE AMOUNT OF SUBSCRIPTION FEES PAID BY
              MERCHANT TO RESOLVE PURSUANT TO THIS AGREEMENT DURING THE PREVIOUS
              TWELVE MONTH PERIOD PRECEDING THE EVENT OR SITUATION GIVING RISE
              TO SUCH LIABILITY, OR $10,000, WHICHEVER IS LESS. THIS LIMITATION
              OF LIABILITY SHALL APPLY TO THE MAXIMUM EXTENT PERMITTED BY
              APPLICABLE LAW AND NOTWITHSTANDING THE FAILURE OF ANY LIMITED
              REMEDY.
            </p>

            <h3>16. Dispute Resolution; Governing Law.</h3>
            <ol type="a">
              <li>
                If any dispute arises under this Agreement, the Parties agree to
                make a good faith effort to negotiate and resolve the dispute
                within thirty (30) days’ written notice of such dispute. No
                action, suit, arbitration, or other proceeding may be commenced
                (other than for undisputed amounts) before the Parties have
                attempted to resolve the dispute pursuant to this provision,
                unless immediate injunctive relief is being sought.
              </li>
              <li>
                This Agreement shall be governed by and construed in accordance
                with the laws of the State of Delaware notwithstanding any
                conflict of law rules. Any dispute, claim or controversy arising
                out of or relating to this Agreement, or the breach,
                termination, enforcement, interpretation or validity thereof,
                shall be determined by arbitration in New Castle County,
                Delaware before one arbitrator. The arbitration shall be
                administered by Judicial Arbitration and Mediation Services
                pursuant to its Comprehensive Arbitration Rules and Procedures
                and in accordance with the “Expedited Procedures” described
                therein. Judgment on the award may be entered by any court
                having jurisdiction. This clause shall not preclude the Parties
                from seeking provisional remedies in aid of arbitration from a
                court of appropriate jurisdiction. In all arbitrations, each
                Party will bear the expense of its own counsel, experts,
                witnesses, administrative fees and expenses, and preparation and
                presentation of evidence at the arbitration. If for any reason
                this arbitration clause is deemed inapplicable or invalid, both
                Merchant and Resolve waive, to the fullest extent allowed by
                law, any claims to recover punitive or exemplary damages and any
                right to pursue any claims on a class or consolidated basis or
                in a representative capacity.
              </li>
            </ol>

            <h3>17. Independent Contractors.</h3>
            <p>
              Except for the agency expressly provided in Sections 3(e) and
              4(a), nothing in this Agreement shall be construed to create a
              joint venture, partnership, franchise, or agency relationship
              between the Parties and neither Party has the authority, without
              the other Party’s written approval, to bind or commit the other
              Party in any capacity.
            </p>

            <h3>18. Force Majeure.</h3>
            <p>
              Except for each Party’s payment obligations, neither Party will be
              responsible for any failure or delay in performance due, in whole
              or in part, directly or indirectly, to any contingency, delay,
              failure, or cause of any nature beyond its reasonable control,
              including, without in any way limiting the generality of the
              foregoing, fire, terrorism, pandemic or epidemic, earthquake,
              storm, flood or other weather, unavailability of necessary
              utilities, telecommunications failures, or shortage of raw
              materials, strike, lockout, labor problems, unavailability of
              components, war, riot, acts of God, regulation, ordinance, or
              instructions of government or other public authorities, or
              judgment or decree of a court of competent jurisdiction (not
              arising out of breach by such Party of this Agreement) or other
              event that is traditionally recognized by Delaware courts as an
              event of force majeure.
            </p>

            <h3>19. Assignment.</h3>
            <p>
              Merchant may not sell, assign, or transfer this Agreement or any
              rights or obligations under it without Resolve’s advance written
              consent, and any sale, assignment, or transfer or attempt thereof
              without Resolve’s prior written consent is and will be null and
              void. Resolve may sell, assign, or transfer to any person, all or
              any portion of a Purchased Receivable, this Agreement, or any of
              Resolve’s rights or obligations under this Agreement without prior
              notice to Merchant. The provisions of this Agreement will inure to
              the benefit of, and be binding upon, the Parties and their
              respective successors and permitted assigns.
            </p>

            <h3>20. Termination; Survival.</h3>
            <ol type="a">
              <li>
                <i> Subscription Term of the Services.</i> The initial
                subscription term for the Services is set forth in the
                applicable Order Form. At the end of the initial subscription
                term, except as otherwise expressly specified in the Order Form,
                the subscription term of each Service will renew automatically
                for additional successive 12-month subscription terms, unless at
                least 30 days prior to the end of the then-current subscription
                term either Party notifies the other Party in writing that it
                will not renew the subscription term for the Services. Upon
                expiration or termination of the subscription term of the
                Services, Merchant will immediately cease use of the Services,
                and all rights related to the use of the Services granted to
                Merchant under this Agreement will automatically terminate,
                regardless of whether this Agreement is also terminated. For
                clarity, the expiration or termination of the subscription term
                of the Services will not in and of itself constitute a
                termination of the Agreement.
              </li>
              <li>
                <i>Termination of Agreement.</i> A Party may terminate this
                Agreement for cause (i) upon 30 days written notice to the other
                Party of a breach if such breach remains uncured at the
                expiration of the 30-day period, or (ii) if the other Party
                becomes the subject of a petition in bankruptcy or any other
                proceeding relating to insolvency, receivership, liquidation, or
                assignment for the benefit of creditors which is not dismissed
                after 30 days of the related filing. Resolve may also terminate
                this Agreement without cause at any time upon notice to
                Merchant. Merchant may also terminate this Agreement without
                cause at any time after the subscription term of the Services
                has been terminated or expired, as applicable, upon notice to
                Reoslve. Subject to the foregoing conditions, any permitted
                notice of termination of this Agreement by Merchant will become
                effective in one (1) business day or such longer period
                commercially reasonable under the circumstances, provided that
                no such termination by Merchant will be effective until such
                time as all Purchased Receivables have been fully received by
                Resolve.
              </li>
              <li>
                <i>Effect of Expiration or Termination; Survival.</i> Regardless
                of any termination or expiration of the subscription term of the
                Services or any termination of this Agreement, Merchant will
                continue to be obligated to pay all amounts owing by it under,
                and to otherwise perform the terms of, this Agreement, and all
                of Resolve’s rights will continue in full force and effect until
                all of Merchant’s obligations are fully satisfied, including
                payment of Subscription Fees, Processing Fees, Discounts, and
                Repurchase Prices, which Resolve will continue to impose until
                the date full payment is received. However, if this Agreement is
                terminated in accordance with Section 20(b) by Merchant for
                cause or by Resolve without cause, Resolve will refund Merchant
                any prepaid Subscription Fees covering the remainder of the
                subscription term for the Services after the effective date of
                termination. Sections 2(h), 2(i), 3 through 3(j), 4(b), 5, 6(b),
                7 through 9, 12 through 19, and 21 through 24 will survive any
                termination or expiration of the subscription term of the
                Services and any termination of this Agreement.
              </li>
            </ol>

            <h3>21. Amendment.</h3>
            <p>
              Resolve may, at any time and subject to applicable law, change any
              term or add any new term in this Agreement, including those
              related to Subscription Fees, Processing Fees, Discounts, or other
              charges, or other terms. When required by applicable law, Resolve
              will deliver a notice of any change(s) or addition(s) to Merchant.
              No change to any term or new term in this Agreement will affect
              any Merchant obligation under this Agreement to pay, in full, all
              amounts owing by it under, or otherwise perform the terms of, this
              Agreement. Merchant’s continued use of the Services will
              constitute acceptance of any amendment.
            </p>

            <h3>22. Non-Waiver.</h3>
            <p>
              The failure of any Party to enforce any of the terms and
              conditions of the Agreement shall not constitute a waiver of that
              Party’s right thereafter to enforce each and every term and
              condition of this Agreement.
            </p>

            <h3>23. Severability.</h3>
            <p>
              If any provision of this Agreement is determined to be void or
              unenforceable under applicable law, rule, or regulation, all other
              provisions of this Agreement shall be valid and enforceable.
            </p>

            <h3>24. Entire Agreement.</h3>
            <p>
              This Agreement and the Order Form constitute the entire agreement
              between Merchant and Resolve relating to the subject matter hereof
              and supersede any other prior written or oral agreements between
              Merchant and Resolve relating to the same. To the extent of any
              conflict between this Agreement and the Order Form, the terms of
              the Order Form shall control. No terms or conditions contained on
              any purchase order or other business form submitted by Merchant to
              Resolve will be binding on Resolve or constitute any part of this
              Agreement or of the Order Form. This Agreement may not be amended
              except in accordance with the provisions of this Agreement.
            </p>
          </div>
        </section>
      </Container>
      <Footer />
      <style jsx>{`
        h1,
        h2,
        h3,
        h4 {
          font-family: ${fonts.halyardDisplay};
        }
        section {
          max-width: 960px;
        }
        p,
        li {
          padding-bottom: 18px;
        }
        li span {
          text-decoration: underline;
        }
        strong {
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
}
