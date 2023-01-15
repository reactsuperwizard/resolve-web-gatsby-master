import React from 'react';
import { Link } from 'gatsby';

import Header from './Header';

import AccountReceivableIcon from './icons/AccountReceivable';
import Integration from './icons/Integration';
import SmartCheckIcon from './icons/SmartCheck';

import NoteIcon from './icons/Note';
import NetTermsNew from './icons/NetTermsNew';
import NetTermsExist from './icons/NetTermsExist';
import ShoppingCard from './icons/ShoppingCard';
import MoneyRepeatIcon from '../components/icons/MoneyRepeat';
import PaymentPortalSquareIcon from './icons/PaymentPortalSquare';

export default function BlockHeaderNav() {
  return (
    <Header
      style={{
        paddingTop: 200,
        paddingLeft: 20,
        height: 'fit-content',
        minHeight: '100vh',
      }}
      links={[
        {
          title: 'Product',
          content: (
            <div className="header-nav__popup">
              <Link
                to="/b2b-payments/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <PaymentPortalSquareIcon width={40} height={40} />
                </div>
                <div>
                  <div>B2B Payments</div>
                </div>
              </Link>
              <Link
                to="/net-terms/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <NoteIcon />
                </div>
                <div>
                  <div>Net Terms</div>
                </div>
              </Link>
              <Link
                to="/accounts-receivable/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <AccountReceivableIcon width={40} height={40} />
                </div>
                <div>
                  <div>Accounts Receivable</div>
                </div>
              </Link>
              <Link
                to="/business-credit-check/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <SmartCheckIcon width={40} height={40} />
                </div>
                <div>
                  <div>Business Credit Check</div>
                </div>
              </Link>
              <Link
                to="/integrations/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <Integration width={40} height={40} />
                </div>
                <div>
                  <div>Integrations</div>
                </div>
              </Link>
            </div>
          ),
        },
        {
          title: 'Solutions',
          content: (
            <div className="header-nav__popup">
              <div className="components__section">NET TERMS</div>
              <Link
                to="/net-terms-new/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <NetTermsNew />
                </div>
                <div>
                  <div>I'm new to Net Terms</div>
                </div>
              </Link>
              <Link
                to="/net-terms-management/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <NetTermsExist />
                </div>
                <div>
                  <div>Manage my existing Net Terms</div>
                </div>
              </Link>
              <Link
                to="/net-terms-ecommerce/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <ShoppingCard width={40} height={40} />
                </div>
                <div>
                  <div>Net Terms for e-commerce</div>
                </div>
              </Link>
              <div className="components__section">FACTORING</div>

              <Link
                to="/better-than-factoring/"
                className="header-nav__item components__header-link"
              >
                <div style={{ width: 50 }}>
                  <MoneyRepeatIcon width={40} height={40} />
                </div>
                <div>
                  <div>Better than Factoring</div>
                </div>
              </Link>
            </div>
          ),
        },
        {
          title: 'Pricing',
          href: '/pricing/',
        },
        {
          title: 'Partners',
          href: '/partners/',
        },
        {
          title: 'Learn',
          content: (
            <div className="header-nav__popup">
              <div className="components__section">Resources</div>
              <div>
                <Link
                  to="/about/"
                  className="header-nav__item components__header-link"
                >
                  About Us
                </Link>
                <Link
                  to="/blog/"
                  className="header-nav__item components__header-link"
                >
                  Blog
                </Link>
                <Link
                  to="/customers/"
                  className="header-nav__item components__header-link"
                >
                  Customer Stories
                </Link>
                <a
                  href="https://help.resolvepay.com/"
                  className="header-nav__item components__header-link"
                >
                  Customer Help Center
                </a>
                <div className="components__section">Tools</div>
                <Link
                  to="/cash-flow-calculator/"
                  className="header-nav__item components__header-link"
                >
                  Cash Flow Estimator
                </Link>
                <Link
                  to="/ach-return-codes/"
                  className="header-nav__item components__header-link"
                >
                  ACH Return Codes
                </Link>
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
