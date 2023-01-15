import React from 'react';

import { colors } from '../constants';

export default function ACHReturnCodesTable() {
  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th title="Field #1" className="col1">
                Return Code
              </th>
              <th title="Field #2" className="col2">
                Description
              </th>
              <th title="Field #3" className="col3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R01</td>
              <td>Insufficient Funds</td>
              <td>
                The available and / or cash reserve balance is not sufficient to
                cover the dollar value of the debit entry.
              </td>
            </tr>
            <tr>
              <td>R02</td>
              <td>Account Closed</td>
              <td>
                A previously active account has been closed by action of the
                customer or the RDFI.
              </td>
            </tr>
            <tr>
              <td>R03</td>
              <td>No Account / Unable to Locate Account</td>
              <td>
                The account number structure is valid and it passes the check
                digit validation, but the account number does not correspond to
                the individual identified in the entry, or the account number
                designated is not an open account.
              </td>
            </tr>
            <tr>
              <td>R04</td>
              <td>Invalid Account Number</td>
              <td>
                The account number structure is not valid. The entry may fail
                the check digit validation or may contain an incorrect number of
                digits.
              </td>
            </tr>
            <tr>
              <td>R05</td>
              <td>Unauthorized Debit Entry</td>
              <td>
                A business debit entry was transmitted to a members consumer
                account, and the member had not authorized the entry
              </td>
            </tr>
            <tr>
              <td>R06</td>
              <td>Returned per ODFI's Request</td>
              <td>
                The ODFI has requested that the RDFI return the ACH entry. If
                the RDFI agrees to return the entry, the ODFI must indemnify the
                RDFI according to Article Five (Return, Adjustment, Correction,
                and Acknowledgement of Entries and Entry Information) of these
                Rules.
              </td>
            </tr>
            <tr>
              <td>R07</td>
              <td>Authorization Revoked by Customer</td>
              <td>
                The RDFI&#39;s customer (the Receiver) has revoked the
                authorization previously provided to the Originator for this
                particular transaction.
              </td>
            </tr>
            <tr>
              <td>R08</td>
              <td>Payment Stopped or Stop Payment on Item</td>
              <td>
                The Receiver of a recurring debit transaction has the right to
                stop payment on any specific ACH debit. The RDFI determines that
                a stop payment order has been placed on the item to which the
                PPD debit entry constituting notice of presentment or the PPD
                Accounts Receivable Truncated Check Debit Entry relates.
              </td>
            </tr>
            <tr>
              <td>R09</td>
              <td>Uncollected Funds</td>
              <td>
                Sufficient book or ledger balance exists to satisfy the dollar
                value of the transaction, but the dollar value of transactions
                in the process of collection (i.e., uncollected checks) brings
                the available and/or cash reserve balance below the dollar value
                of the debit entry.
              </td>
            </tr>
            <tr>
              <td>R10</td>
              <td>Customer Advises Not Authorized</td>
              <td>
                The RDFI has been notified by its customer, the Receiver, that
                the Originator of a given transaction has not been authorized to
                debit his account.
              </td>
            </tr>
            <tr>
              <td>R11</td>
              <td>Check Truncation Entry Return </td>
              <td>
                To be used when returning a check truncation entry. This reason
                for return should be used only if no other return reason code is
                applicable.
              </td>
            </tr>
            <tr>
              <td>R12</td>
              <td>Branch Sold to Another DFI</td>
              <td>
                A financial institution may continue to receive entries destined
                for an account at a branch that has been sold to another
                financial institution. Because the RDFI no longer maintains the
                account and is unable to post the entry, it should return the
                entry to the ODFI.
              </td>
            </tr>
            <tr>
              <td>R13</td>
              <td>RDFI Not Qualified to Participate</td>
              <td>
                Financial institution does not receive commercial ACH entries.
              </td>
            </tr>
            <tr>
              <td>R14</td>
              <td>
                Representative Payee Deceased or Unable to Continue in that
                Capacity
              </td>
              <td>
                The representative payee is a person or institution authorized
                to accept entries on behalf of one or more other persons, such
                as legally incapacitated adults or minor children. The
                representative payee is either deceased or unable to continue in
                that capacity. The beneficiary is not deceased.
              </td>
            </tr>
            <tr>
              <td>R15</td>
              <td>
                Beneficiary or Accountholder (Other than a Representative Payee)
                Deceased
              </td>
              <td>
                1.The beneficiary is the person entitled to the benefits and is
                deceased. The beneficiary may or may not be the account holder;
                2.The account holder (acting in a non-representative payee
                capacity) is an owner of the account and is deceased.
              </td>
            </tr>
            <tr>
              <td>R16</td>
              <td>Account Frozen</td>
              <td>
                The funds in the account are unavailable due to specific action
                taken by the RDFI or by legal action.
              </td>
            </tr>
            <tr>
              <td>R17</td>
              <td>File Record Edit Criteria (Specify)</td>
              <td>
                Fields rejected by RDFI processing (identified in return
                addenda)
              </td>
            </tr>
            <tr>
              <td>R18</td>
              <td>Improper Effective Entry</td>
              <td>
                Entries have been presented prior to the first available
                processing window for the effective date
              </td>
            </tr>
            <tr>
              <td>R19</td>
              <td>Amount Field Error</td>
              <td>Improper formatting of the amount field</td>
            </tr>
            <tr>
              <td>R20</td>
              <td>Non-Transaction Account</td>
              <td>
                The ACH entry destined for a non-transaction account, as defined
                in Regulation D, would include either an account against which
                transactions are prohibited or limited or a pass - through where
                the entry is for a credit union or thrift organization and
                Regulation E descriptive requirements cannot be met.
              </td>
            </tr>
            <tr>
              <td>R21</td>
              <td>Invalid Company Identification</td>
              <td>
                The identification number used in the Company Identification
                Field is not valid. This Return Reason Code will normally be
                used on CIE transactions.
              </td>
            </tr>
            <tr>
              <td>R22</td>
              <td>Invalid Individual ID Number</td>
              <td>
                In CIE and MTE entries, the Individual ID Number is used by the
                Receiver to identify the account. The Receiver has indicated to
                the RDFI that the number with which the Originator was
                identified is not correct.
              </td>
            </tr>
            <tr>
              <td>R23</td>
              <td>Credit Entry Refused by Receiver</td>
              <td>
                The Receiver may return a credit entry because one of the
                following conditions exists: 1. a minimum amount required by the
                Receiver has not been remitted; 2. the exact amount required has
                not been remitted; 3. the account is subject to litigation and
                the Receiver will not accept the transaction; 4. acceptance of
                the transaction results in an overpayment; 5. the Originator is
                not known by the Receiver; 6. the Receiver has not authorized
                this credit entry to this account.
              </td>
            </tr>
            <tr>
              <td>R24</td>
              <td>Duplicate Entry</td>
              <td>
                The RDFI has received what appears to be a duplicate entry;
                i.e., the trace number, date, dollar amount and/or other data
                matches another transaction. This code should be used with
                extreme care. The RDFI should be aware that if a file has been
                duplicated, the Originator may have already generated a reversal
                transaction to handle the situation.
              </td>
            </tr>
            <tr>
              <td>R25</td>
              <td>Addenda Error</td>
              <td>Improper formatting of the addenda record information</td>
            </tr>
            <tr>
              <td>R26</td>
              <td>Mandatory Field Error</td>
              <td>Improper information in one of the mandatory fields</td>
            </tr>
            <tr>
              <td>R27</td>
              <td>Trace Number Error</td>
              <td>
                Original entry trace number is not valid for return entry; or
                addenda trace numbers do not correspond with entry detail record
              </td>
            </tr>
            <tr>
              <td>R28</td>
              <td>Routing Number Check Digit Error</td>
              <td>Check digit for transit routing number is incorrect</td>
            </tr>
            <tr>
              <td>R29</td>
              <td>Corporate Customer Advises Not Authorized</td>
              <td>
                The RDFI has been notified by the Receiver (non-consumer) that
                the Originator of a given transaction has not been authorized to
                debit the Receiver&#39;s account.
              </td>
            </tr>
            <tr>
              <td>R30</td>
              <td>RDFI Not Participant In Check Truncation Program</td>
              <td>
                Financial institution not participating in automated check
                safekeeping application
              </td>
            </tr>
            <tr>
              <td>R31</td>
              <td>Permissible Return Entry (CCD and CTX Only)</td>
              <td>
                The RDFI has been notified by the ODFI that the ODFI agrees to
                accept a CCD or CTX return entry in accordance with Article
                Seven, section 7.3 (ODFIAgrees to Accept CCD or CTXReturn).
              </td>
            </tr>
            <tr>
              <td>R32</td>
              <td>RDFI Non-Settlement</td>
              <td>RDFI is not able to settle the entry</td>
            </tr>
            <tr>
              <td>R33</td>
              <td>Return of XCK Entry</td>
              <td>
                RDFI determines at its sole discretion to return an XCK entry;
                an XCK return entry may be initiated by midnight of the sixtieth
                day following the settlement date if the XCK entry
              </td>
            </tr>
            <tr>
              <td>R34</td>
              <td>Limited Participation DFI</td>
              <td>
                RDFI participation has been limited by a federal or state
                supervisor
              </td>
            </tr>
            <tr>
              <td>R35</td>
              <td>Return of Improper Debit Entry</td>
              <td>
                ACH debit not permitted for use with the CIE standard entry
                class code (except for reversals)
              </td>
            </tr>
            <tr>
              <td>R36</td>
              <td>Return of Improper Credit Entry</td>
              <td>
                ACH credit entries are not permitted for use with ARC, BOC, POP,
                RCK, TEL, XCK
              </td>
            </tr>
            <tr>
              <td>R37</td>
              <td>
                Source Document Presented for Payment (adjustment entries)
                (A.R.C.)
              </td>
              <td>
                The source document to which an ARC, BOX, or POP entry relates
                has been presented for payment.
              </td>
            </tr>
            <tr>
              <td>R38</td>
              <td>Stop Payment on Source Document (adjustment entries)</td>
              <td>
                Stop payment has been placed on a check used for an ARC entry
              </td>
            </tr>
            <tr>
              <td>R39</td>
              <td>
                Improper Source Document/Source Document Presented for Payment
              </td>
              <td>
                Source Document Presented for Payment RDFI determines that the
                source document (share draft or check) used for an ARC, BOC or
                POP entry is not eligible for conversion. Or the share draft has
                already been paid as a normal check posting.
              </td>
            </tr>
            <tr>
              <td>R40</td>
              <td>Return of ENR Entry by Federal Government Agency</td>
              <td>
                The Federal Government Agency determines at its sole discretion
                to return an ENR entry. This return reason code may be used only
                to return ENR entries.
              </td>
            </tr>
            <tr>
              <td>R41</td>
              <td>Invalid Transaction Code</td>
              <td>
                Either the Transaction Code included in Field 3 of the Addenda
                Record does not conform to the ACH Record Format Specifications
                contained in Appendix Two (ACH Record Format Specifications) or
                it is not appropriate with regard to an automated ENRollment
                entry.
              </td>
            </tr>
            <tr>
              <td>R42</td>
              <td>Routing Number or Check Digit Error (ENR only)</td>
              <td>
                The Routing Number and the Check Digit included in Field 3 of
                the Addenda Record is either not a valid number or it does not
                conform to the Modulus 10 formula.
              </td>
            </tr>
            <tr>
              <td>R43</td>
              <td>Invalid DFI Account Number (ENR only) </td>
              <td>
                The consumer's or company's account number included in Field 3
                of the Addenda Record must include at least one alphanumeric
                character.
              </td>
            </tr>
            <tr>
              <td>R44</td>
              <td>
                Invalid Individual Id Number or Identification Number (ENR only){' '}
              </td>
              <td>
                The Individual ID Number/Identification Number provided in Field
                3 of the Addenda Record does not match a corresponding ID number
                in the Federal Government Agency's records.
              </td>
            </tr>
            <tr>
              <td>R45</td>
              <td>Invalid Individual Name/Company Name (ENR only) </td>
              <td>
                The name of the consumer or company provided in Field 3 of the
                Addenda Record either does not match a corresponding name in the
                Federal GovernmentAgency's records or fails to include at least
                one alphanumeric character.
              </td>
            </tr>
            <tr>
              <td>R46</td>
              <td>Invalid Representative Payee Indicator (ENR only) </td>
              <td>
                The Representative Payee Indicator Code included in Field 3 of
                the Addenda Record has been omitted or it is not consistent with
                the Federal Government Agency's records.
              </td>
            </tr>
            <tr>
              <td>R47</td>
              <td>Duplicate Enrollment</td>
              <td>
                The entry is a duplicate of an automated ENRollment entry
                previously initiated by a participant in the ENRautomated
                ENRollment program.
              </td>
            </tr>
            <tr>
              <td>R48</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R49</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R50</td>
              <td>State Law Affecting RCK Acceptance</td>
              <td>
                The RDFI is located in a state that has not adopted Revised
                Article 4 of the Uniform Commercial Code (1990 official Text)
                and has not revised its customer agreements to allow for
                electronic presentment. The RDFI is located within a state that
                requires all canceled checks to a specific type of account to be
                returned to the Receiver within the periodic statement.
              </td>
            </tr>
            <tr>
              <td>R51</td>
              <td>
                Item Ineligible, Notice Not Provided, Signature Not Genuine, or
                Item Altered
              </td>
              <td>
                An entry may be considered to be ineligible if the item to which
                the RCK entry relates is not an item within the meaning of
                Revised Article 4 of the Uniform Commercial Code (1990 official
                Text); the item is not a negotiable demand draft drawn on or
                payable through or at a Participating DFI, other than a Federal
                Reserve Bank or Federal Home Loan Bank; the item is in an amount
                of $2,500 or more; the item does not indicate on the face of the
                document that it was returned due to “Not Sufficient Funds,
                &quot;NSF&quot;, Uncollected Funds,” or comparable language; the
                item is dated more than 180 days from the date the entry is
                being transmitted to the RDFI (i.e., the item to which the RCK
                entry relates is stale dated); the item is drawn on a
                non-Consumer Account; the item has been previously presented
                more than two times in its physical form, or more than one time
                in its physical form and more than one time as an RCK entry.
              </td>
            </tr>
            <tr>
              <td>R52</td>
              <td>Stop Payment on Item</td>
              <td>
                The RDFI determines that a stop payment order has been placed on
                the item to which the RCK entry relates. An RDFI using this
                Return Reason Code must transmit the return entry by its ACH
                Operator's deposit deadline for the return entry to be made
                available to the ODFI no later than the opening of business on
                the banking day following the sixtieth calendar day following
                the SettlementDate of the RCK entry to which the item relates.
              </td>
            </tr>
            <tr>
              <td>R53</td>
              <td>Paper Backup Missing or not in Agreement</td>
              <td>
                In addition to an RCK entry, the item to which the RCK entry
                relates has also been presented for payment.
              </td>
            </tr>
            <tr>
              <td>R54</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R55</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R56</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R57</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R58</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R59</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R60</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R61</td>
              <td>Misrouted Return</td>
              <td>
                The financial institution preparing the return entry (the RDFI
                of the original entry) has placed the incorrect Routing Number
                in the Receiving DFI Identification field (positions 04-12,
                including Check Digit, of the Entry Detail Record).
              </td>
            </tr>
            <tr>
              <td>R62</td>
              <td>Incorrect Trace Number</td>
              <td>
                The Trace Number found in positions 07-21 in the Addenda Record
                of the return entry is different from the trace number of the
                original entry.
              </td>
            </tr>
            <tr>
              <td>R63</td>
              <td>Incorrect Dollar Amount</td>
              <td>
                The dollar amount in the Entry Detail Record of the return entry
                is different from the dollar amount of the original entry.
              </td>
            </tr>
            <tr>
              <td>R64</td>
              <td>Incorrect Individual Identification</td>
              <td>
                The Individual Identification Number reflected in the Entry
                Detail Record of the return entry is different from the
                Individual Identification Number/Identification Number used in
                the original entry.
              </td>
            </tr>
            <tr>
              <td>R65</td>
              <td>Incorrect Transaction Code</td>
              <td>
                The Transaction Code in the Entry Detail Record of the return
                entry is not the return equivalent of the Transaction Code in
                the original entry. (See list of Transaction Codes in Appendix
                Two (ACH Record Format Specifications). All entries must be
                returned as received: e.g., credit as credit, debit as debit,
                demand as demand, savings as savings.)
              </td>
            </tr>
            <tr>
              <td>R66</td>
              <td>Incorrect Company Identification</td>
              <td>
                The Company Identification number used in the Company/Batch
                Header Record of the return entry is different from the Company
                Identification number used in the original entry.
              </td>
            </tr>
            <tr>
              <td>R67</td>
              <td>Duplicate Return</td>
              <td>
                The ODFI has received more than one return for the same entry.
              </td>
            </tr>
            <tr>
              <td>R68</td>
              <td>Untimely Return</td>
              <td>
                The return entry has not been sent within the timeframe
                established by these rules.
              </td>
            </tr>
            <tr>
              <td>R69</td>
              <td>Multiple Errors</td>
              <td>
                Two or more of the following fields—Original Entry Trace Number,
                Amount, Individual Identification Number/Identification Number,
                Company Identification, and/or Transaction Code—are incorrect.
              </td>
            </tr>
            <tr>
              <td>R70</td>
              <td>Permissible Return Entry Not Accepted</td>
              <td>
                The ODFI has received a CCD or CTX return entry identified by
                the RDFI as being returned with the permission of the ODFI, but
                the ODFI has not agreed to accept the entry. This code may be
                used only to dishonor a return containing an R31 return reason
                code.
              </td>
            </tr>
            <tr>
              <td>R71</td>
              <td>Misrouted dishonored return </td>
              <td> </td>
            </tr>
            <tr>
              <td>R72</td>
              <td>Untimely dishonored return </td>
              <td> </td>
            </tr>
            <tr>
              <td>R73</td>
              <td>Timely original return </td>
              <td> </td>
            </tr>
            <tr>
              <td>R74</td>
              <td>Corrected return </td>
              <td> </td>
            </tr>
            <tr>
              <td>R75</td>
              <td>Original Return Not a Duplicate</td>
              <td>
                The original return entry was not a duplicate of an entry
                previously returned by the ODFI. This code may be used by the
                RDFI to contest an entry dishonored by the ODFI using return
                code R67 (duplicate return).
              </td>
            </tr>
            <tr>
              <td>R76</td>
              <td>No Errors Found</td>
              <td>
                The original return entry did not contain the errors indicated
                by the ODFI in the dishonored return entry bearing return code
                R69 (field errors).
              </td>
            </tr>
            <tr>
              <td>R77</td>
              <td>Non-Acceptance of R62 Dishonored Return</td>
              <td> </td>
            </tr>
            <tr>
              <td>R78</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R79</td>
              <td>Reserved</td>
              <td> </td>
            </tr>
            <tr>
              <td>R80</td>
              <td>Cross-Border Payment Coding Error</td>
              <td>
                The cross-border entry is being returned due to one or more of
                the following conditions: • invalid Foreign Exchange Indicator;
                • invalid ISO Originating Currency Code; • invalid ISO
                Destination Currency Code; • invalid ISO Destination Country
                Code; • invalid Transaction Type Code.
              </td>
            </tr>
            <tr>
              <td>R81</td>
              <td>Non-Participant in Cross-Border Program</td>
              <td>
                The cross-border entry is being returned because the Originating
                Gateway Operator does not have an agreement with the ODFI to
                process cross-border entries.
              </td>
            </tr>
            <tr>
              <td>R82</td>
              <td>Invalid Foreign Receiving DFI Identification</td>
              <td>
                The reference used to identify the Foreign Receiving DFI of an
                outbound cross-border entry is invalid.
              </td>
            </tr>
            <tr>
              <td>R83</td>
              <td>Foreign Receiving DFI Unable To Settle</td>
              <td>
                The cross-border entry is being returned due to settlement
                problems in the foreign payment system.
              </td>
            </tr>
            <tr>
              <td>R84</td>
              <td>Entry not processed by gateway</td>
              <td> </td>
            </tr>
            <tr>
              <td>R85</td>
              <td> Incorrectly coded outbound international payment</td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>
        {`
          .table-wrapper {
            background: #fff;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
            padding: 24px 34px;
            margin: 0 auto;
            max-width: 1000px;
            border-radius: 8px;
            width: 100%;
            margin-bottom: 20px;
            box-sizing: border-box;
          }
          .table {
          }
          .table td,
          .table th {
            line-height: 1.5;
            padding: 10px 10px 10px 0;
            text-align: left;
            vertical-align: top;
          }
          .table th {
            color: ${colors.baliHai};
            font-size: 0.85rem;
            font-weight: normal;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
          }
          .form {
            max-width: 100%;
            width: 100%;
            margin: 20px;
            box-sizing: border-box;
          }
          .table-search {
            border: solid 1px #ddd;
            color: #0f2454;
            font-family: HalyardDisplay, Helvetica, sans-serif;
            width: 100%;
            max-width: 100%;
            font-size: 1rem;
            padding: 0.75rem 0.5rem 0.75rem 0.5rem;
            box-sizing: border-box;
            margin: 10px 0 20px 0;
          }
          .table td:first-child {
            font-weight: 600;
          }
          .col1 {
            width: 20%;
          }
          .col2 {
            width: 30%;
          }
          .col3 {
            width: 50%;
          }
        `}
      </style>
    </>
  );
}
