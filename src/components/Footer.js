import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Container from './Container';
import FacebookIcon from './icons/Facebook';
import TwitterIcon from './icons/Twitter';
import LinkedInIcon from './icons/LinkedIn';

import { fonts, screen } from '../constants';
import FooterLogo from './icons/FooterLogo';
import SpaceDivider from './SpaceDivider';

export default function Footer({
  graySkin,
  items,
  subItems,
}) {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');

  return (
    <footer className="block-footer">
      <Container>
        <div className="block-footer__top">
          <div className="footer-cta">
            <h2 className="footer-cta__title">Unlock growth with Resolve</h2>
            <p className="footer-cta__desc">
              Talk with our product specialists today.
            </p>
            <div className="footer-cta__actions">
              {/* <input className="email-input" type='email' value={email} onChange={(e) => setEmail(e.value)} placeholder="Email address" /> */}
              <button
                className="request-button"
                onClick={() => navigate('/contact-sales')}
              >
                Request demo
              </button>
            </div>
          </div>
        </div>
        <div className="block-footer__inner">
          <div className="block-footer__row_links">
            <div className="block-footer__icons">
              <FooterLogo />
              <ul className="block-footer__social-media">
                <li>
                  <a
                    href="https://www.facebook.com/resolvepay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block-footer__social-media-link"
                    title="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/resolvepay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block-footer__social-media-link"
                    title="Twitter"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/resolvepay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block-footer__social-media-link"
                    title="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="block-footer__links">
              {items.map(item => (
                <div key={item.id} className="block-footer__link-group">
                  <div className="block-footer__link-group-title">
                    {item.title}
                  </div>
                  {item.links.map(link =>
                    link.link.startsWith('/') ? (
                      <Link
                        key={link.id}
                        className="block-footer__link"
                        to={link.link}
                      >
                        {link.title}
                      </Link>
                    ) : (
                      <a
                        key={link.id}
                        href={link.link}
                        className="block-footer__link"
                      >
                        {link.title}
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
          <SpaceDivider height={200} />
          <div className="block-footer__subitems">
            <div className="block-footer__corp">©{year} Resolve Corp.</div>

            {subItems.map(item => (
              <div key={item.id} className="block-footer__subitems-links">
                {item.links.map(link =>
                  link.link.startsWith('/') ? (
                    <Link
                      key={link.id}
                      className="block-footer__link"
                      to={link.link}
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a
                      key={link.id}
                      href={link.link}
                      className="block-footer__link"
                    >
                      {link.title}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-footer {
          background: linear-gradient(-8deg, #1f325d 71%, ${graySkin ? "#F7F8FA" : "#fff"} 71.1%);
          min-height: 770px;
          margin-top: -100px;
          padding-bottom: 24px;
        }
        .block-footer__top {
          padding-top: 350px;
          display: flex;
          justify-content: center;
        }
        .footer-cta__title {
          margin-top: 50px;
        }
        .footer-cta__title {
          margin-bottom: 8px;
          font-weight: 400;
          font-size: 36px;
          line-height: 42px;
          color: #ffffff;
          text-align: center;
        }
        .footer-cta__desc {
          margin-bottom: 32px;
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #ffffff;
          opacity: 0.8;
          text-align: center;
        }
        .footer-cta__actions {
          position: relative;
          /* width: 597px; */
          cursor: pointer;
          text-align: center;
        }
        .email-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #475C8B;
          border-radius: 36px;
          color: white;
          padding: 18px 165px 22px 25px;
          line-height: 1;
          box-sizing: border-box;
          outline: none;
          font-weight: 300;
          font-size: 18px;
          font-family: ${fonts.halyardDisplay};
          line-height: 24px;
          letter-spacing: 0.2px;
        }
        .email-input::placholder {
          color: white;
          opacity: 1;
        }
        .request-button {
          /* position: absolute; */
          margin: 0;
          padding: 10px 32.5px 14px;
          /* right: 8px;  */
          /* top: 8px; */
          /* bottom: 8px; */
          border: 0;
          outline: none;
          z-index: 2;
        }
        .request-button:hover {
          background-color: rgb(251, 131, 94, 0.95);
        }
        .block-footer__inner {
          padding-top: 65px;
          margin-top: 65px;
        }
        .block-footer__row_links {
          display: flex;
          justify-content: space-between;
        }

        .block-footer__links {
          display: flex;
          flex-direction: row;
        }
        .block-footer__link-group {
          display: flex;
          flex-direction: column;
          margin-left: 45px;
        }
        .block-footer__link-group-title {
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          color: #FFFFFF;
          margin-bottom: 32px;
        }

        .block-footer__social-media {
          list-style-type: none;
          margin: 0;
          padding: 0;
          margin-top: 20px;
          display: flex;
        }
        .block-footer__social-media-link {
          width: 40px;
          height: 40px;
          color: white;
          margin-right: 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #475C8B;
          border-radius: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .block-footer__social-media-link:hover {
          border-color: #4881FF;
        }
        .block-footer__corp {
          font-weight: 400;
          font-size: 18px;
          line-height: 18px;
          color: #c7ccd6;
        }
        .block-footer__subitems {
          display: flex;
          justify-content: space-between;
        }
        hr {
          margin: 50px 0 25px 0;
          opacity: 0.15;
          background-color: white;
        }
        .block-footer__get-started_links {
          margin-top: 75px;
          display: flex;
          justify-content: flex-end;
        }
        .block-footer__get-started_link:first-child {
          margin-left: 0;
        }
        @media (max-width: ${screen.laptop}px) {
          .block-footer {
            background: linear-gradient(-8deg, #1f325d 75%, ${graySkin ? "#F7F8FA" : "#fff"} 75.1%);
          }
        }
        @media (max-width: ${screen.tabletMax}px) {
          .block-footer__top {
            padding-top: 300px;
          }
          .block-footer__row_links {
            flex-direction: column;
          }
          .block-footer__icons {
            flex-direction: row;
            align-items: center;
            margin-bottom: 50px;
          }
          .block-footer__links {
            justify-content: space-between;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-footer {
            margin-top: -50px;
            background: linear-gradient(-8deg, #0f2454 84%, ${graySkin ? "#F7F8FA" : "#fff"} 84.1%);
          }
          .footer-cta {
            margin: 0 auto;
          }
          .footer-cta__title {
            margin-bottom: 8px;
            font-size: 32px;
            line-height: 40px;
          }
          .footer-cta__desc {
            font-size: 17px;
            line-height: 24px;
          }
          .footer-cta__actions {
            width: 511px;
          }
          .block-footer__icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .block-footer__top {
            justify-content: start;
          }
          .block-footer__get-started {
            text-align: left;
          }
          .block-footer__link-group {
            width: 24%;
            margin: 0 0 50px 0;
          }
          .block-footer__links {
            flex-wrap: wrap;
          }
          .block-footer__social-media {
            margin-top: 0;
          }
          .block-footer__corp {
            margin-bottom: 8px;
            font-weight: 400;
            font-size: 15px;
            line-height: 16px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-footer {
            margin-top: 0;
            background: linear-gradient(-8deg, #0f2454 90%, ${graySkin ? "#F7F8FA" : "#fff"} 90.1%);
          }
          .block-footer__top {
            padding-top: 200px;
          }
          .footer-cta {
            width: 100%;
          }
          .footer-cta__title {
            margin-bottom: 8px;
            font-size: 24px;
            line-height: 32px;
            text-align: left;
          }
          .footer-cta__desc {
            margin-bottom: 24px;
            font-size: 17px;
            line-height: 24px;
            text-align: left;
          }
          .footer-cta__content {
            padding-bottom: 500px;
          }
          .footer-cta__actions {
            width: 100%;
          }
          .email-input {
            padding: 14px 150px 14px 25px;
          }
          .request-button {
            padding: 10px 14.5px 14px;
            font-size: 14px;
            line-height: 16px;
          }
          .block-footer__link-group {
            width: 44%;
          }
          .block-footer__inner {
            margin-top: 75px;
            padding-top: 32px;
            border-top: 1px solid rgba(255, 255, 255, 0.5);
          }
          .block-footer__icons {
            margin-bottom: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .block-footer__link-group-title {
            margin-bottom: 16px;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;
            opacity: 0.5;
          }
          .block-footer__link-group {
            margin-bottom: 80px;
          }
          .block-footer__subitems {
            justify-content: center;
            flex-direction: column;
          }
          .block-footer__subitems-links {
            display: flex;
            justify-content: center;
            width: 100%;
          }
          .block-footer__corp {
            text-align: center;
          }
          .block-footer__social-media-link {
            width: 32px;
            height: 32px;
            margin-right: 8px;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-footer__link {
          font-weight: 300;
          font-size: 16px;
          line-height: 18px;
          color: #8E96A7;
          margin-bottom: 16px;
        }
        .block-footer__link:hover {
          color: #ffffff !important;
        }
        .block-footer__link-group > a:last-child {
          margin-bottom: 0;
        }
        .block-footer__subitems .block-footer__link {
          font-weight: 400;
          font-size: 18px;
          line-height: 18px;
          margin-left: 40px;
        }
        @media (max-width: ${screen.tabletMax}px) {
          .block-footer__link {
            margin-bottom: 18px;
          }
          .block-footer__subitems .block-footer__link {
            margin: 0;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .block-footer__subitems .block-footer__link {
            margin: 0 12px;
            font-weight: 300;
            font-size: 16px;
            line-height: 18px;
            color: #c7ccd6;
          }
          .block-footer__links > a:last-child {
            margin-bottom: 0;
          }
          .space-divider {
            display: none;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .footer-logo {
            width: 150px;
            height: 32px;
          }
          .block-footer__link {
            margin-bottom: 12px;
            font-weight: 300;
            font-size: 16px;
            line-height: 18px;
            color: #c7ccd6;
          }
        }
      `}</style>
    </footer>
  );
}

Footer.defaultProps = {
  title: '',
  buttonText: '',
  items: [
    {
      id: 'product',
      title: 'Product',
      links: [
        {
          id: 'b2b-payments',
          link: '/b2b-payments/',
          title: 'B2B Payments',
        },
        {
          id: 'net-terms',
          link: '/net-terms/',
          title: 'Net Terms',
        },
        {
          id: 'accounts-receivable',
          link: '/accounts-receivable/',
          title: 'Accounts Receivable',
        },
        {
          id: 'business-credit-check',
          link: '/business-credit-check/',
          title: 'Business Credit Check',
        },
        {
          id: 'integrations',
          link: '/integrations/',
          title: 'Integrations',
        },
        {
          id: 'faq',
          link: '/faq/',
          title: 'FAQ',
        },
      ],
    },
    {
      id: 'company',
      title: 'Company',
      links: [
        { id: 'about-us', link: '/about/', title: 'About Us' },
        {
          id: 'careers',
          link: '/careers/',
          title: 'Careers',
        },
        { id: 'partner', link: '/partners/', title: 'Partner Program' },
        { id: 'contact-us', link: '/contact-sales/', title: 'Contact Us' },
      ],
    },
    {
      id: 'solutions',
      title: 'Solutions',
      links: [
        {
          id: 'new-net-terms',
          link: '/net-terms-new/',
          title: 'New to Net Terms',
        },
        {
          id: 'manage-net-terms',
          link: '/net-terms-management/',
          title: 'Manage to Net Terms',
        },
        {
          id: 'e-commerce-net-terms',
          link: '/net-terms-ecommerce/',
          title: 'Net Terms for E-commerce',
        },
        {
          id: 'better-than-factoring',
          link: '/better-than-factoring/',
          title: 'Better than Factoring',
        },
      ],
    },
    {
      id: 'resources',
      title: 'Resources',
      links: [
        {
          id: 'blog',
          link: '/blog/',
          title: 'Blog',
        },
        {
          id: 'customer-stories',
          link: '/customers/',
          title: 'Customer Stories',
        },
        // {
        //   id: 'help-center',
        //   link: 'https://help.resolvepay.com/',
        //   title: 'Customer Help Center',
        // },
        // {
        //   id: 'api-reference',
        //   link: 'https://resolvepay.redoc.ly/',
        //   title: 'API Reference',
        // },
        {
          id: 'status',
          link: 'https://status.resolvepay.com/',
          title: 'Status',
        },
        {
          id: 'security',
          link: 'https://security.resolvepay.com/',
          title: 'Security',
        },
      ],
    },
  ],
  subItems: [
    {
      id: 'services',
      links: [
        {
          id: 'terms-of-service',
          link: '/terms/',
          title: 'Terms of Service',
        },
        { id: 'privacy-policy', link: '/privacy/', title: 'Privacy Policy' },
      ],
    },
  ],
};
