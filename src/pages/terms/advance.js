import React from 'react';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

import { fonts } from '../../constants';

export default function TermsPage() {
  return (
    <Layout>
      <GatsbySeo title="Advance Agreement" />
      <Container>
        <section>
          <h1 className="app__title">Advance Agreement</h1>
          <div className="app__content">
            <h3>Last Updated: September 30, 2020</h3>
            <p>
              This Advance Agreement ("<strong>Advance Agreement</strong>") is a
              legal agreement between the merchant party ("
              <strong>Merchant</strong>
              ") and Resolve Corp. ("<strong>Resolve</strong>"), a Delaware
              corporation, and sets forth the terms and conditions under which
              Resolve authorizes Merchant to market and offer the Advance
              Services, as defined herein.
            </p>
            <p>
              To the extent Merchant and Resolve have previously entered into a
              Merchant Account Agreement, this Advance Agreement supersedes such
              Merchant Account Agreement with respect to all Advance Services
              (as defined below) provided by Resolve from and after May 29,
              2020, and such Merchant Account Agreement shall have no further
              force or effect with respect to any Advance Services provided on
              or after such date.
            </p>
            <h3>1. Introduction.</h3>
            <p>
              WHEREAS, Resolve provides a commercial charge account program (the
              "<strong>Advance Services</strong>") that offers certain
              commercial financing options, including, but not limited to,
              open-end charge accounts and payment deferral options through
              Resolve's proprietary financial platform and related application
              programming interfaces ("<strong>APIs</strong>").
            </p>
            <p>
              WHEREAS, Merchant wishes to offer Resolve's Advance Services to
              qualifying businesses seeking to finance the purchase of certain
              goods or services offered and sold by Merchant ("
              <strong>Customers</strong>").
            </p>
            <p>
              WHEREAS, Resolve agrees to make the Advance Services available to
              the Merchant for use by its Customers in accordance with the terms
              and conditions of this Agreement.
            </p>
            <h3>2. Terms and Conditions of Merchant Participation.</h3>
            <ol type="a">
              <li>
                Merchant acknowledges and agrees that Merchant's access to, and
                Resolve's obligation to offer, the Advance Services is
                contingent upon the evaluation and approval of Merchant by
                Resolve, in its sole discretion. Such evaluation may include,
                but is not limited to, evaluating any history of litigation and
                customer complaints, historic chargeback rates and losses, tax
                returns, legal status, the financial background of Merchant's
                owner(s) (including credit reports or other background
                information), the overall financial health of Merchant, the
                nature of the Merchant's business and any other information
                reasonably requested by Resolve. Merchant shall provide all
                supporting materials that Resolve may reasonably request while
                performing such evaluation. Merchant represents, warrants,
                covenants and agrees that all information provided to Resolve in
                connection with the evaluation and approval of Merchant will be
                true, accurate and complete in all respects. Resolve reserves
                the right, in its reasonable discretion from time to time, to
                reassess Merchant's eligibility for the Advance Services at any
                time and from time to time, for any reason and, upon a negative
                determination, terminate this Agreement and provide a pro rata
                refund of any prepaid fees.
              </li>
              <li>
                During the Term, Merchant will not integrate, market, sell or
                promote any Competing Service Provider's application that
                includes (i) commercial charge accounts or payment deferral
                options or (ii) a combination of other lending functionality
                identical or substantially similar to the Advance Services. "
                <strong>Competing Service Provider</strong>" means any person
                not party to the Agreement who markets commercial charge
                accounts or payment deferral options to business customers
                through a mobile or electronic interface, web browsers, or
                point-of-sale application.
              </li>
              <li>
                Merchant agrees that Customer disputes will be resolved in
                accordance with the{' '}
                <a href="http://help.resolvepay.com/en/articles/2017014-customer-dispute-resolution-procedures/">
                  Customer Dispute Resolution Policy
                </a>{' '}
                ("
                <strong>CDRP</strong>").
              </li>
              <li>
                Merchant agrees that the following types of items are ineligible
                for the Advance Services ("<strong>Prohibited Items</strong>"):
                ammunition, firearms, firearm parts or accessories, weapons or
                knives regulated under applicable law, narcotics, steroids,
                controlled substances, drug paraphernalia, items infringing
                third-party intellectual property, and any illegal or illicit
                items, activities or transactions.
              </li>
              <li>
                The use of the Advance Services is limited to the United States.
              </li>
              <li>
                The Advance Services may contain technological measures designed
                to prevent unauthorized or illegal use of the Advance Services.
                Resolve may use these measures to maintain the security and
                reliability of the Advance Services, verify Merchant's
                compliance with the terms of this Agreement and enforce
                Resolve's rights, including all intellectual property rights, in
                and to the Advance Services. Resolve may restrict or suspend
                Merchant's access to the APIs and the Advance Services as
                necessary to protect the APIs against misuse and to ensure the
                reliability and security of the Advance Services.
              </li>
              <li>
                Resolve and its representatives may collect and use diagnostic,
                technical and related information regarding the performance of
                the APIs or the Advance Services and Merchant's use of the APIs
                and the Advance Services to monitor and improve the performance
                of the APIs and the Advance Services and to enhance the features
                and functions of the APIs and the Advance Services. Such data is
                owned by Resolve and is Resolve's Confidential Information.
              </li>
            </ol>
            <h3>3. Merchant Responsibilities.</h3>
            <span>Merchant shall be responsible for:</span>
            <ol type="a">
              <li>
                Establishing and maintaining a United States depository account
                ("
                <strong>Bank Account</strong>") in good standing and informing
                Resolve of any changes to such account;
              </li>
              <li>
                Taking such actions as are reasonably requested by Resolve to
                integrate or implement the Advance Services with Merchant's
                sales and finance processes or to effectuate the implementation
                of such Advance Services through a mutually acceptable method
                determined in good faith. Merchant shall use commercially
                reasonable efforts to cause such integration or implementation
                to be operational within sixty (60) days of the Effective Date.
                Merchant agrees that it is solely responsible for engaging in
                testing to ensure the proper functioning of the APIs in
                combination with Merchant's own IT systems. Merchant's
                commercial use of the APIs constitutes an acknowledgment that
                the Advance Services were tested to Merchant's satisfaction;
              </li>
              <li>
                Maintaining commercially reasonable business practices
                consistent with the industry standards applicable to Merchant as
                related to Merchant's shipping and service fulfillment
                obligations arising from Merchant's contractual relationships
                with Customers. This shall include, but is not limited to,
                shipping goods or providing services financed through the
                Advance Services immediately when a transaction is Captured by
                Merchant and providing Resolve with shipping carrier and
                tracking information upon request.
              </li>
              <li>
                Maintaining a refund and return policy that is clearly displayed
                or otherwise easily accessible by Customers on Merchant's
                website or order documentation prior to the completion of
                purchase;
              </li>
              <li>
                Using reasonable efforts to cooperate with Resolve in marketing
                and promotional campaigns, which shall be mutually agreed by
                Resolve and Merchant. Merchant agrees to include Resolve's name
                and/or logo wherever Merchant markets, sells or promotes the
                Advance Services; provided that, in no event shall Merchant use
                Resolve's name or product in Merchant's customized marketing or
                promotional materials without Resolve's prior written approval,
                which may be withheld in its sole discretion. Merchant shall
                submit any such proposed marketing or promotional materials or
                other materials that refer to or display Resolve Marks (as
                defined below) to Resolve for review, and Resolve shall have ten
                (10) business days to respond to any such submission;
              </li>
              <li>Complying with all applicable U.S. laws and regulations.</li>
            </ol>
            <h3>4. Resolve Responsibilities.</h3>
            <span>Resolve shall be responsible for:</span>
            <ol type="a">
              <li>
                Making commercially reasonable efforts to provide to Merchant
                the Advance Services described in the Advance Agreement;
              </li>
              <li>
                Providing Merchant with information, tools or services necessary
                for Merchant to integrate Resolve's Advance Services, including
                any corresponding production software key, in a timely manner,
                and taking such actions as are reasonably requested by Merchant
                to facilitate Merchant's implementation of Advance Services;
              </li>
              <li>
                Using commercially reasonable physical, managerial, and
                technical safeguards to preserve the integrity and security of
                the Advance Services; and
              </li>
              <li>Complying with all applicable U.S. laws and regulations.</li>
            </ol>
            <h3>5. Program Terms for Resolve Advance Services; Fees.</h3>
            <ol type="a">
              <li>
                <span>Assignment of Indebtedness.</span> Each time Merchant
                conducts a sale that is processed through the Advance Services,
                Merchant will and hereby does assign to Resolve (including its
                subsidiaries, affiliates, agents, and assigns) any indebtedness
                created between Merchant and Customer (the "
                <strong>Assignment of Indebtedness</strong>"). In exchange for
                and conditioned upon the Assignment of Indebtedness and the
                Advance Fees (as defined below), Resolve will provide an Advance
                (as defined below) from the sale.
              </li>
              <li>
                <span>Payments.</span>
                <ol type="i">
                  <li>
                    When a Successful Transaction is Captured (as defined below)
                    through the Advance Services, Resolve shall remit payment
                    (the "<strong>Advance</strong>") to the Merchant in
                    accordance with the terms of this Advance Agreement. The
                    amount of the Advance shall be equal to the value of the
                    Successful Transaction multiplied by the Advance Rate (as
                    defined below).
                  </li>
                  <li>
                    Once the Customer pays Resolve for the full value of a
                    Successful Transaction, Resolve will remit payment to the
                    Merchant for the difference of the full value of that
                    Successful Transaction and the Advance for that Successful
                    Transaction (the "<strong>Balance</strong>"). In the event
                    the Customer pays Resolve less than the full value of a
                    Successful Transaction, but more than the Advance for that
                    Successful Transaction, Resolve shall remit payment to the
                    Merchant for the difference of the amount actually received
                    by Resolve and the Advance. In the event the Customer pays
                    Resolve less than the Advance, then Resolve has no
                    obligation to pay Merchant any additional amounts.
                  </li>
                  <li>
                    If Merchant receives payment directly from a Customer for a
                    Successful Transaction that was processed with the Advance
                    Services, Merchant must notify Resolve immediately so that
                    Resolve can debit Merchant for repayment of the Advance.
                  </li>
                  <li>
                    Notwithstanding anything to the contrary in this Section
                    5(c), all payments to Merchant by Resolve are subject to
                    reduction or offset as set forth in this Advance Agreement.
                  </li>
                </ol>
              </li>
              <li>
                <span>Fees.</span>
                <ol type="i">
                  <li>
                    The "<strong>Advance Fees</strong>" are equal to (x) the
                    percentage set forth beside the Trade Credit Terms on the
                    Order Form, multiplied by (y) the applicable Advance Rate,
                    multiplied by (z) the gross dollar amount of sales that are
                    (a) approved by Resolve and (b) Captured by Merchant ("
                    <strong>Successful Transactions</strong>"). Resolve will
                    assign each Customer an "<strong>Advance Rate</strong>",
                    depending on the Customer's credit quality and other risk
                    attributes. A sale is "<strong>Captured</strong>" by
                    Merchant (i.e., Merchant becomes entitled to payment of the
                    Advance) when Merchant: (1) acknowledges to Resolve that a
                    pending credit transaction with a Customer was created
                    through the Resolve platform; (2) agrees to fulfill the
                    pending transaction; and (3) ships the goods or provides or
                    otherwise makes the goods or services available to the
                    Customer. "<strong>Order Form</strong>" means the online or
                    written form between Resolve and Merchant evidencing the
                    initial subscription for the Advance Services approved by
                    Merchant and any subsequent Order Forms submitted
                    thereafter. Resolve reserves the right to revise the Fees at
                    any time upon providing thirty (30) days' prior written
                    notice to Merchant.
                  </li>
                  <li>
                    Merchant shall pay to Resolve the Advance Fees, which may be
                    credited by Resolve against any amounts payable to Merchant.
                    All Advance Fees are due immediately, except as otherwise
                    expressly noted herein. Notwithstanding anything else
                    contained herein, the Advance Fees shall be nonrefundable
                    after the date that is five (5) days after a sale is
                    Captured. Resolve may revise its billing procedures at its
                    sole discretion with 30-day prior written notice to
                    Merchant.
                  </li>
                  <li>
                    Merchant may not impose on a Customer any surcharge or fee
                    for use of the Advance Services greater than similar fees
                    for other payment methods that Merchant supports.
                  </li>
                </ol>
              </li>
              <li>
                <span>Returned Merchandise; Refunds.</span> Subject to the CDRP,
                Resolve shall not hold Customer liable for any amount arising
                from Customer's purchase if Customer provides Resolve with
                reasonably detailed documentary evidence showing that the
                product in question was returned to Merchant in accordance with
                Merchant's stated return policy. In the event that a purchase is
                returned to Merchant by a Customer following a Successful
                Transaction or when Merchant otherwise determines that a refund
                is owed to a Customer, Merchant shall: (a) promptly process such
                refund owed to the Customer so that Resolve may credit the
                Customer's outstanding balance accordingly; (b) return to
                Resolve the amount of such refund; and (c) issue only full or
                partial refunds and not store credit. In the case of partial
                refunds, Merchant shall be solely responsible for determining
                the amount of such refund and liable for any dispute with a
                Customer relating thereto.
              </li>
              <li>
                <span>Payment Schedule.</span>
                <ol type="i">
                  <li>
                    (i) Once the Bank Account information has been reviewed and
                    verified by Resolve, subject to the terms hereof, Resolve
                    will begin making periodic payments to Merchant. Resolve
                    will initiate transfer of Settlement Funds to Merchant's
                    Bank Account upon a Successful Transaction. The applicable "
                    <strong>Settlement Funds</strong>" shall consist of the
                    total dollar amount of Successful Transactions not included
                    in previous payments to Merchant by Resolve, less (a)
                    accrued but unpaid Fees; (b) amounts relating to disputed
                    transactions pursuant the CDRP; and (c) any other amounts
                    owed by Merchant to Resolve under the Agreement (including
                    refunds as provided in Section 5(d)).
                  </li>
                  <li>
                    In the event where the Settlement Funds amount is negative,
                    Merchant hereby authorizes Resolve to debit Merchant's Bank
                    Account for any amounts due and payable under this
                    Agreement.
                  </li>
                  <li>
                    Resolve reserves the right to change the timing of any
                    payment of Settlement Funds or suspend payouts to Merchant's
                    Bank Account in the event Resolve determines that such
                    action is necessary due to excessive disputes or other
                    suspicious activity associated with Merchant's use of the
                    Advance Services or if required by law or court order, with
                    such determination in Resolve's sole discretion.
                  </li>
                </ol>
              </li>
            </ol>
            <h3>6. Fraudulent Transactions.</h3>

            <p>
              If Merchant or Customer changes product shipping details, either
              before or after a Successful Transaction, Merchant assumes the
              risk of loss of the value of the transaction unless such changes
              have received the prior written approval of Resolve.
              Notwithstanding anything else contained herein, in the event
              Resolve informs Merchant that a Customer transaction is fraudulent
              or likely fraudulent prior to Merchant shipping goods or providing
              services, and Merchant ships the goods or provides the services
              notwithstanding this information, Merchant is liable for any loss
              resulting from such transaction. For the avoidance of doubt,
              Resolve is under no obligation to detect fraud or provide any such
              notice.
            </p>
            <h3>7. Independent Contractors.</h3>
            <p>
              The parties to this Agreement are independent contractors. Nothing
              in this Agreement shall be construed to create a joint venture,
              partnership, franchise or agency relationship between the parties.
              Neither party has the authority, without the other party's written
              approval, to bind or commit the other party in any capacity.
            </p>
            <h3>8. License Grants and Intellectual Property.</h3>
            <ol type="a">
              <li>
                <span>Service License.</span> During the Term and subject to the
                terms and conditions of this Agreement, Resolve hereby grants
                Merchant a limited, revocable, non-exclusive, non-transferable,
                non-sublicensable license to access and use the Advance Services
                and integrate the APIs in order to provide and to enable
                Customers to access, use, perform and display (publicly or
                otherwise) the Advance Services.
              </li>
              <li>
                <span>Trademark License.</span> During the Term and subject to
                the terms and conditions of this Agreement, each party grants to
                the other party a limited, revocable, non-exclusive,
                non-transferable license, non-sublicensable right to use,
                reproduce, display, distribute and transmit the other party's
                name, logo and any other trademarks, trade names, service marks,
                photographs, graphics, artwork, text and other content provided
                or specified by such party in any and all media formats, whether
                registered or unregistered, (collectively the "
                <strong>Marks</strong>") solely in connection with and solely to
                the extent reasonably necessary for the purposes of this
                Agreement; provided, however, that, such license to Merchant
                shall be limited to the Resolve Marks described in{' '}
                <a href="http://merchants.resolvepay.com/">
                  http://merchants.resolvepay.com
                </a>
                . Use of the Marks does not create in either party's favor any
                right, title or interest in the Marks or any continuing rights
                to market or distribute the Advance Services. Neither party
                shall register or apply for registration of any of the other
                party's Marks (or any similar trademarks, service marks or
                logos) for itself, or any other party. Each party agrees to
                cooperate with the other if the other party seeks to proceed
                with any infringement action regarding such rights.
              </li>
              <li>
                <span>Resolve Intellectual Property.</span> This Agreement is
                not a sale and does not convey to Merchant any rights of
                ownership in or related to the Advance Services. Merchant agrees
                and acknowledges that Resolve is the exclusive owner of and
                retains all right, title, and interest in any and all software,
                technology or tools used by Resolve to promote, market, sell,
                generate, or distribute the Advance Services, including
                Resolve's Marks and/or copyrighted material (collectively, "
                <strong>Resolve IP</strong>"). Merchant may not, nor may
                Merchant allow any third party to (i) modify, translate, reverse
                engineer, decompile, disassemble, otherwise attempt to derive
                source code from, or create derivative works based on, the
                Resolve IP; (ii) make unauthorized copies of the Resolve IP;
                (iii) distribute or market the Advance Services and any Resolve
                IP, except to Customers, without Resolve's prior written
                authorization; (iv) remove any proprietary notices, labels or
                Marks on or in any copy of the Advance Services or Resolve IP;
                (v) alter or remove any warranties, disclaimers, and license
                agreements shipped with the Advance Services; or (vi) use the
                Advance Services and Resolve IP in any manner or for any purpose
                other than for which the Advance Services and Resolve IP have
                been incorporated or for which the Advance Services and Resolve
                IP have been provided.
              </li>
              <li>
                <span>Feedback License.</span> Merchant grants to Resolve a
                worldwide, perpetual, irrevocable, royalty-free, assignable,
                sublicensable, transferable license to use and incorporate into
                the APIs and/or the Advance Services any suggestion, correction
                or other feedback provided by Merchant relating to the Advance
                Services.
              </li>
              <li>
                <span>Restrictions on Use of Advance Services.</span> Merchant
                will not: (i) offer for sale or lease, sell, resell, lease or in
                any way transfer the Advance Services; (ii) attempt to create a
                substitute or similar service through the use of, or access to,
                the Advance Services; (iii) and will ensure that Customers and
                third parties do not access or use the Advance Services in a way
                intended to avoid incurring fees, misrepresent usage or
                performance data, misrepresent transaction amount or item data,
                or misrepresent user information; or (iv) perform any benchmark
                tests against a competing provider (e.g. conversion lift,
                approval rates, average order value, or share of cart, etc.)
                without the prior written consent of Resolve (any results of
                such permitted benchmark testing shall be deemed Confidential
                Information of Resolve and, other than as provided in Section 10
                (Confidential Information), shall not be shared with any other
                party without Resolve's prior written consent). Merchant will
                immediately notify Resolve if Merchant becomes aware of any
                material breach relating to the Advance Services.
              </li>
            </ol>
            <h3>9. Representations and Warranties.</h3>
            <p>
              Each party hereto represents and warrants that: (a) if an entity,
              it is duly formed, validly existing, and in good standing under
              the laws of its state of incorporation or formation; (b) it has
              the right, power and authority to enter into this Agreement; (c)
              when executed and delivered by such party, it will constitute a
              legal, valid and binding obligations of such party; (d) it shall
              comply at all times with all applicable U.S. laws, rules and
              regulations in connection with carrying out its obligations
              contained herein; and (e) neither the execution, delivery or
              performance of this Agreement nor the consummation of the
              transaction contemplated hereby shall conflict with, result in a
              violation or breach of, or require the consent of any person under
              the terms, conditions or provisions of any contract, notice,
              indenture, license, permit, lease or any other instrument of such
              party.
            </p>
            <h3>10. Confidential Information.</h3>
            <p>
              Neither party hereto shall use the other party's Confidential
              Information for any purpose whatsoever outside of the scope of
              this Agreement, nor shall either party disclose such Confidential
              Information to any third party without the prior written consent
              of the other party. Each party further shall take all reasonable
              precautions to prevent any unauthorized disclosure of the other's
              Confidential Information. Each party shall limit access to
              Confidential Information to those of its employees, contractors
              and agents who need such access for purposes consistent with this
              Agreement and shall be responsible for any breach of this Section
              10 by such employees, contractors and agents. It is understood
              that each party's Confidential Information shall remain the sole
              property of such party. In the event that either party becomes
              legally compelled (by law, rule, regulation, subpoena, or similar
              court process) to disclose any Confidential Information, such
              party will, to the extent legally permissible, provide the other
              party with notice of such circumstances and will limit such
              disclosure to only what is specifically required. This provision
              shall supersede any previous agreements, whether written or oral,
              between the parties hereto regarding Confidential Information. As
              used in this Agreement, "<strong>Confidential Information</strong>
              " means any proprietary information, technical data, demographic
              information, Customer data, trade secrets or know-how, including
              but not limited to research, product plans, products, services,
              customers, customer lists, markets, software, developments,
              inventions, processes, formulas, technology, designs, drawings,
              engineering, hardware configuration information, marketing,
              finances or other business information disclosed by either party
              either directly or indirectly in writing, orally or by drawings or
              inspection of parts or equipment but excludes any such information
              that: (a) was lawfully in a party's possession before receiving it
              from the other party; (b) is provided in good faith to one party
              by a third party without, to such party's knowledge, breaching any
              rights of the other party; (c) is or becomes generally available
              to the public other than through a violation of this Agreement; or
              (d) was or is independently developed without the use of or
              reference to the Confidential Information.
            </p>
            <h3>11. Disclaimers.</h3>
            <p>
              THE APIS AND THE ADVANCE SERVICES ARE PROVIDED "AS IS" AND, EXCEPT
              AS SET FORTH IN SECTION 9, RESOLVE MAKES NO REPRESENTATION OR
              WARRANTY OF ANY KIND, EXPRESS, IMPLIED OR STATUTORY, REGARDING THE
              SERVICES. TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALL CONDITIONS
              AND WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
              WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
              PURPOSE, ARE HEREBY EXPRESSLY DISCLAIMED BY RESOLVE, EXCEPT TO THE
              EXTENT ANY SUCH EXCLUSION WOULD CONTRAVENE ANY APPLICABLE STATUTE.
            </p>
            <h3>12. Indemnification</h3>
            <p>
              Merchant agrees to defend, indemnify and hold, Resolve and its
              affiliated and related entities, and each of their respective
              officers, directors, agents and employees, harmless from and
              against any third party claims, lawsuits, investigations,
              penalties, damages, losses or expenses (including, but not limited
              to, reasonable attorney's fees) arising out of or relating to any
              of the following: (a) any misrepresentation, breach or alleged
              breach of, or default in connection with any of the
              representations, warranties, covenants or other provisions of
              Merchant contained in this Agreement (or any agreement
              incorporated by reference herein); (b) any claim arising out of or
              relating to the goods or services provided by Merchant, including
              but not limited to, any claims for false advertising, unfair
              business practices, product defects, sales or distribution of
              Prohibited Items, personal injury, death or property damages; (c)
              any claim arising from Customers' use of the Advance Services; or
              (d) Merchant's gross negligence or willful misconduct.
            </p>
            <h3>13. Limitation of Liability.</h3>
            <p>
              IN NO EVENT SHALL RESOLVE BE LIABLE OR OBLIGATED TO MERCHAN OR ANY
              THIRD PARTY FOR ANY LOSS OF, OR DAMAGE TO, DATA OR ANY SPECIAL,
              INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL
              DAMAGES, COSTS, EXPENSES, OR LOSSES OF ANY KIND REGARDLESS OF THE
              FORM OF ACTION, WHETHER IN CONTRACT, TORT, NEGLIGENCE, STRICT
              PRODUCT LIABILITY, OR OTHERWISE. RESOLVE'S SOLE AND COMPLETE
              LIABILITY TO MERCHANT FOR ANY CLAIMS ARISING OUT OR OF RELATING TO
              THIS AGREEMENT SHALL BE LIMITED TO THE AMOUNT OF FEES PAID BY
              MERCHANT TO RESOLVE PURSUANT TO THIS AGREEMENT DURING THE PREVIOUS
              TWELVE MONTH PERIOD PRECEDING THE EVENT OR SITUATION GIVING RISE
              TO SUCH LIABILITY. THIS LIMITATION OF LIABILITY SHALL APPLY TO THE
              MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW AND NOTWITHSTANDING THE
              FAILURE OF ANY LIMITED REMEDY.
            </p>
            <h3>14. Dispute Resolution; Governing Law.</h3>
            <ol type="a">
              <li>
                If any dispute arises under this Agreement, including, but not
                limited to, disputes relating to Fees, amounts withheld from
                payments by Resolve and amounts payable to Resolve with respect
                to customer disputes or indemnities, both parties agree to make
                a good faith effort to negotiate and resolve the dispute within
                thirty (30) days' written notice of such dispute. No action,
                suit, arbitration or other proceeding may be commenced (other
                than for undisputed amounts) before the parties have attempted
                to resolve the dispute pursuant to this provision, unless
                immediate injunctive relief is being sought.
              </li>
              <li>
                (b) This Agreement shall be governed by and construed in
                accordance with the laws of the State of California
                notwithstanding any conflict of law rules. Any dispute, claim or
                controversy arising out of or relating to this Agreement, or the
                breach, termination, enforcement, interpretation or validity
                thereof, shall be determined by arbitration in San Francisco,
                California before one arbitrator. The arbitration shall be
                administered by Judicial Arbitration and Mediation Advance
                Services pursuant to its Comprehensive Arbitration Rules and
                Procedures and in accordance with the "
                <strong>Expedited Procedures</strong>" described therein.
                Judgment on the award may be entered by any court having
                jurisdiction. This clause shall not preclude parties from
                seeking provisional remedies in aid of arbitration from a court
                of appropriate jurisdiction. In all arbitrations, each party
                will bear the expense of its own counsel, experts, witnesses,
                administrative fees and expenses, and preparation and
                presentation of evidence at the arbitration. If for any reason
                this arbitration clause is deemed inapplicable or invalid, both
                Merchant and Resolve waive, to the fullest extent allowed by
                law, any claims to recover punitive or exemplary damages and any
                right to pursue any claims on a class or consolidated basis or
                in a representative capacity.
              </li>
            </ol>
            <h3>15. Force Majeure.</h3>
            <p>
              Except for each party's payment obligations, neither party will be
              responsible for any failure or delay in performance due, in whole
              or in part, directly or indirectly, to any contingency, delay,
              failure, or cause of any nature beyond its reasonable control,
              including, without in any way limiting the generality of the
              foregoing, fire, terrorism, epidemic, earthquake, storm, flood or
              other weather, unavailability of necessary utilities or raw
              materials, strike, lockout, unavailability of components, war,
              riot, acts of God, regulation, ordinance, or instructions of
              government or other public authorities, or judgment or decree of a
              court of competent jurisdiction (not arising out of breach by such
              party of this Agreement) or other event that is traditionally
              recognized by California courts as an event of force majeure.
            </p>
            <h3>16. Assignment.</h3>
            <p>
              Neither party may assign all or part of this Agreement without
              such assignment being considered a change to the Agreement without
              the prior written consent of the other party. Notwithstanding the
              foregoing, such consent shall not be required in the case of an
              assignment in connection with a merger, consolidation, change or
              control or the sale or transfer of all or substantially all the
              party's assets related to the business covered hereby. Following
              any assignment permitted hereunder, the assignee shall have the
              same rights and obligations as the assignor and shall agree in
              writing to be bound by the terms and conditions of this Agreement.
            </p>
            <h3>17. Survival</h3>
            <p>
              No termination of this Agreement will release either party from
              any payment or other obligations owed to the other, or affect any
              rights or liabilities of either party with respect to any breach
              of this Agreement. Sections 5, 8(c), 8(d), 10, 11, 12, 13, 14 and
              17 shall survive termination of this Agreement until the
              obligations of those sections are completed.
            </p>
            <h3>18. Updates to Advance Agreement; Notice.</h3>
            <p>
              Resolve may prospectively add to, delete, or amend this Advance
              Agreement at any time. We reserve the right, subject to Law, to
              deliver to you any Notice of changes to existing terms or the
              addition of new terms by posting an updated version of this
              Advance Agreement on the Resolve website or by delivering notice
              of changes to you electronically, and your continued use of the
              Advance Services will constitute acceptance of any these amended
              or new terms.
            </p>
            <h3>19. Waiver</h3>
            <p>
              The failure of any party to enforce any of the terms and
              conditions of the Agreement shall not constitute a waiver of that
              party's right thereafter to enforce each and every term and
              condition of this Agreement.
            </p>
            <h3>20. Entire Agreement; Severability.</h3>
            <p>
              This Advance Agreement constitutes the entire understanding and
              contract between the parties and supersedes all prior agreements
              (including any prior agreement entered into between the parties),
              understandings, arrangements, commitments or representations, oral
              or written, between the parties with respect to the subject matter
              hereof. To the extent of any conflict between this Advance
              Agreement and the Order Form, the terms of the Order Form shall
              control. The terms and conditions of this Agreement will further
              supersede all pre-printed terms and conditions contained on any
              purchase order or other business form submitted by Merchant to
              Resolve. If any provision of this Agreement is determined to be
              invalid, illegal or unenforceable, the remaining provisions of
              this Agreement shall remain in full force and effect.
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
