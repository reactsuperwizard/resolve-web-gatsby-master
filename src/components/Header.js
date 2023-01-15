import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Slant as Hamburger } from 'hamburger-react';

import ResolveLogo from './icons/ResolveLogo';
import { screen } from '../constants';
import NavDropdown from './NavDropdown';
import CreditCheckAssessIcon from './icons/menu/CreditCheckAssess';
import ARCollectionsIcon from './icons/menu/AR-Collections';
import MenuIntegrationsIcon from './icons/menu/MenuIntegrations';
import InvoicingWorkflowsIcon from './icons/menu/InvocingWorkflows';
import PaymentsIcon from './icons/menu/Payments';
import NavDropdown2Columns from './NavDropdown2Columns';
import DropdownIcon from './icons/Dropdown';

export default function Header({ pageType }) {
  const [hambugerActive, setHambugerActive] = useState(false);
  const [dropdownShow, setDropdownShow] = useState(false);
  const [navMenuShow, setNavMenuShow] = useState({});
  const [scrolled, setScroll] = useState(false);
  const [filterHeight, setFilterHeight] = useState('auto');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScroll(window.pageYOffset > 100)
      );
    }
  }, []);

  const dropdownHandler = navItem => {
    setNavMenuShow({
      ...navMenuShow,
      [navItem]: !navMenuShow[navItem],
    });
  };

  let navMenuClsName = 'navbar-main desktop';
  if (hambugerActive) {
    navMenuClsName += ' active';
  }

  return (
    <header className="header">
      <div className="layout-container" style={{ height: filterHeight }}>
        <nav className={`header-nav ${scrolled && 'scrolled'} ${(dropdownShow || hambugerActive) && 'show'}`}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <ResolveLogo />
          </Link>
          <ul className={navMenuClsName}>
            <li className={`nav-item dropdown ${navMenuShow['product'] && 'show'}`}
              role="presentation"
              onMouseEnter={() => {
                setDropdownShow(true);
                setFilterHeight('314px');
              }}
              onMouseLeave={() => {
                setDropdownShow(false);
                setFilterHeight('auto');
              }}
            >
              <Link
                to="#product"
                className="nav-link"
                onClick={() => dropdownHandler('product')}
              >
                Product
                <DropdownIcon rotate={navMenuShow['product']} />
              </Link>
              <NavDropdown
                items={[
                  {
                    icon: <CreditCheckAssessIcon />,
                    iconHover: <CreditCheckAssessIcon color="#FB835E" />,
                    name: 'Credit check & assessment',
                    label: 'Personalized credit evaluations',
                    to: '/business-credit-check/',
                  },
                  {
                    icon: <ARCollectionsIcon />,
                    iconHover: <ARCollectionsIcon color="#FB835E" />,
                    name: 'AR & collections',
                    label: 'Complete receivables solution',
                    to: '/accounts-receivable/',
                  },
                  {
                    icon: <MenuIntegrationsIcon />,
                    iconHover: <MenuIntegrationsIcon color="#FB835E" />,
                    name: 'Integrations',
                    label: 'Your financial tech stack',
                    to: '/integrations/',
                  },
                  {
                    icon: <InvoicingWorkflowsIcon />,
                    iconHover: <InvoicingWorkflowsIcon color="#FB835E" />,
                    name: 'Invoicing workflows',
                    label: 'Enhance your AR process',
                    to: '/net-terms/',
                  },
                  {
                    icon: <PaymentsIcon />,
                    iconHover: <PaymentsIcon color="#FB835E" />,
                    name: 'Payments',
                    label: 'Streamline B2B payments',
                    to: '/b2b-payments/',
                  },
                ]}
              />
            </li>
            <li className={`nav-item dropdown ${navMenuShow['solutions'] && 'show'}`}
              role="presentation"
              onMouseEnter={() => {
                setDropdownShow(true);
                setFilterHeight('376px');
              }}
              onMouseLeave={() => {
                setDropdownShow(false);
                setFilterHeight('auto');
              }}
            >
              <Link
                to="#solutions"
                className="nav-link"
                onClick={() => dropdownHandler('solutions')}
              >
                Solutions
                <DropdownIcon rotate={navMenuShow['solutions']} />
              </Link>
              <NavDropdown2Columns
                items1={{
                  type: 'Net Terms',
                  items: [
                    {
                      name: "I'm new to Net Terms",
                      label: 'Grow your B2B sales',
                      to: '/net-terms-new/',
                    },
                    {
                      name: 'Manage my existing Net Terms',
                      label: 'Your credit team on tap',
                      to: '/net-terms-management/',
                    },
                    {
                      name: 'Net Terms for e-commerce',
                      label: 'Give customers terms at checkout',
                      to: '/net-terms-ecommerce/',
                    },
                  ],
                }}
                items2={{
                  type: 'Factoring',
                  items: [
                    {
                      name: 'Better than Factoring',
                      label: 'Unlock your cashflow',
                      to: '/better-than-factoring/',
                    },
                  ],
                }}
              />
            </li>
            <li className="nav-item">
              <Link to="/pricing/" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/partners/" className="nav-link">
                Partners
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${navMenuShow['learn'] && 'show'}`}
              role="presentation"
              onMouseEnter={() => {
                setDropdownShow(true);
                setFilterHeight('376px');
              }}
              onMouseLeave={() => {
                setDropdownShow(false);
                setFilterHeight('auto');
              }}
            >
              <Link
                to="#learn"
                className="nav-link"
                onClick={() => dropdownHandler('learn')}
              >
                Learn
                <DropdownIcon rotate={navMenuShow['learn']} />
              </Link>
              <NavDropdown2Columns
                items1={{
                  type: 'Resources',
                  items: [
                    {
                      name: 'About us',
                      label: 'Learn about Resolve',
                      to: '/about/',
                    },
                    {
                      name: 'Customer stories',
                      label: 'Meet our growing customers',
                      to: '/customers/',
                    },
                    {
                      name: 'Customer help center',
                      label: 'Get support for your Resolve account',
                      href: 'https://help.resolvepay.com/',
                    },
                    {
                      name: 'Blog',
                      label: 'The latest on B2B payments',
                      to: '/blog/',
                    },
                  ],
                }}
                items2={{
                  type: 'Tools',
                  items: [
                    {
                      name: 'Cash flow estimator',
                      label: 'Preview your improved cash flow',
                      to: '/cash-flow-calculator/',
                    },
                    {
                      name: 'ACH return codes',
                      label: 'Make your ACH process smooth',
                      to: '/ach-return-codes/',
                    },
                  ],
                }}
              />
            </li>
            <li className="nav-cta">
              <a className="request-button" href="https://app.resolvepay.com/">
                Log in
              </a>
              <a className="nav-link" href="https://app.resolvepay.com/">
                Sign up
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <a className="nav-link" href="https://app.resolvepay.com/">
              Log in
            </a>
            <a className="request-button" href="/contact-sales/">
              Request demo
            </a>
          </div>
          <Hamburger
            toggled={hambugerActive}
            toggle={setHambugerActive}
            color="#1F325D"
            size="20"
          />
        </nav>
      </div>

      <style jsx global>{`
        .header {
          display: flex;
          position: fixed;
          top: ${pageType === "article" ? "" : "20px"};
          width: 100%;
          z-index: 100;
          margin: 0;
          padding: 0;
        }
        .header-nav {
          position: relative;
          height: 70px;
          padding: 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          border-radius: 16px;
        }
        .header-nav.scrolled {
          background: rgba(255, 255, 255, 0.9);
        }
        .header-nav.show {
          border-radius: 16px 16px 0 0;
        }
        .layout-container {
          max-width: 1485px;
          margin: 0 auto;
          width: calc(100vw - 50px);
          position: relative;
          backdrop-filter: blur(10px);
        }
        .navbar-main {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .navbar-main.active {
          padding: 40px 24px;
          display: flex;
          position: absolute;
          background: white;
          top: 70px;
          left: 0px;
          width: 100%;
          height: calc(100vh - 100px);
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 0 0 8px 8px;
          flex-direction: column;
          overflow: auto;
        }
        .nav-link {
          padding: 3px 12px;
          font-weight: 400;
          font-size: 17px;
          line-height: 20px;
          color: #1f325d;
          border: 1px solid transparent;
          opacity: 0.8;
        }
        .nav-link:hover {
          opacity: 1;
          background: #f7f8fa;
          border-radius: 32px;
          border-color: #dcdcdc;
          transition: all 0.15s ease-in;
        }
        .nav-item {
          width: auto;
          height: 100%;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
        }
        .nav-actions .request-button {
          margin-top: 0;
          margin-left: 12px;
          padding: 6px 22px 10px;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          width: 100%;
          top: 100%;
          left: 0px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 0 0 16px 16px;
          z-index: 1;
        }
        .nav-cta {
          display: none;
          margin-top: auto;
          width: 100%;
        }
        .nav-cta a {
          display: block;
          margin: 0;
          padding: 12px;
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
        }
        .nav-cta .request-button {
          width: 70%;
          box-shadow: 0px 2px 12px rgba(251, 131, 94, 0.25),
            0px 6px 24px rgba(251, 131, 94, 0.26);
          border-radius: 60px;
        }
        .nav-cta .nav-link {
          width: 30%;
        }
        .hamburger-react {
          right: -16px;
        }
        @media (min-width: ${screen.tabletMax}px) {
          .dropdown:hover .dropdown-content {
            display: block;
          }
        }
        @media (max-width: ${screen.desktop}px) {
          .layout-container {
            width: calc(100vw - 80px);
            max-width: 1280px;
          }
        }
        @media (max-width: ${screen.tabletMax}px) {
          .layout-container {
            width: 100%;
            height: ${hambugerActive && '100vh !important'};
            margin: 0 40px;
          }
          .hamburger {
            display: block;
          }
          .navbar-main {
            display: none;
          }
          .nav-actions {
            margin-left: auto;
          }
          .nav-actions .nav-link {
            display: none;
          }
          .header-nav {
            border-radius: 8px;
          }
          .header-nav.show {
            border-radius: 8px 8px 0 0;
          }
          .dropdown.show .dropdown-content {
            display: block;
          }
          .dropdown.show .nav-link {
            padding-bottom: 0;
          }
          .nav-item {
            position: relative;
            height: auto;
            width: 100%;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #d9d9d9;
          }
          .nav-link {
            box-sizing: border-box;
            width: 100%;
            padding: 20px 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 24px;
            line-height: 32px;
            opacity: 1;
            text-align: left;
          }
          .nav-link:hover {
            background: none;
            border: none;
          }
          .dropdown-content {
            position: relative;
            top: 0;
            background: transparent;
            backdrop-filter: none;
          }
          .nav-cta {
            margin-top: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .layout-container {
            margin: 0 12px;
          }
          .header-nav {
            padding: 0 24px;
          }
          .navbar-main.active {
            padding: 24px;
          }
          .nav-actions .request-button {
            padding: 6px 8px;
            font-size: 13px;
            line-height: 16px;
          }
          .nav-link {
            padding: 16px 8px;
            font-size: 20px;
            line-height: 24px;
          }
          .dropdown-container {
            padding: 20px 8px;
          }
          .dropdown-item__content {
            margin-left: 16px;
          }
          .nav-cta .request-button {
            width: 60%;
            box-shadow: 0px 4px 8px rgba(251, 131, 94, 0.1),
              0px 8px 16px rgba(251, 131, 94, 0.2);
            border-radius: 36px;
          }
          .nav-cta .nav-link {
            width: 40%;
          }
        }
      `}</style>
      <style jsx global>{`
        .hamburger-react {
          display: none;
          padding: 0;
          cursor: pointer;
        }
        @media (max-width: ${screen.tabletMax}px) {
          .hamburger-react {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
