import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import { screen, colors, fonts } from '../constants';

import './fonts.css';

const Layout = ({ children, onType, removeOverflowHidden }) => {
  const [offsetY, setOffsetY] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pageYOffset !== offsetY) {
        setOffsetY(pageYOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <Header pageType={onType} />
      {children}
      <style jsx global>{`
        ${!removeOverflowHidden
          ? `html,
        body {
          overflow-x: hidden;
        }`
          : ''}
        body {
          margin: 0;
          font-weight: 300;
          color: ${colors.primary};
          font-family: ${fonts.halyardDisplay};
        }
        button:focus {
          outline: none;
        }
        p {
          margin: 0;
        }
        hr {
          height: 1px;
          color: ${colors.athensGray};
          background-color: ${colors.athensGray};
          border: none;
        }
        a {
          text-decoration: none;
          color: ${colors.link};
        }
        .sticky-header {
          background-color: #F7F8FA;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          transition: box-shadow 150ms ease-in-out;
        }
        .sticky-header__solid {
          box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);
        }
        .app-hero__title {
          font-family: ${fonts.halyardDisplay};
          font-weight: normal;
          font-size: 56px;
          line-height: 72px;
          letter-spacing: 0.5px;
          color: ${colors.darkSlateBlue};
          margin: 0 0 24px;
          max-width: 648px;
        }

        .app__pretitle {
          font-family: ${fonts.halyardText};
          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          letter-spacing: 1.32px;
          text-transform: uppercase;
          color: ${colors.darkSlateBlue};
          margin-bottom: 35px;
        }
        .app__title {
          font-family: ${fonts.halyardDisplay};
          font-size: 40px;
          font-weight: normal;
          line-height: 56px;
          letter-spacing: 0.1px;
          color: ${colors.darkSlateBlue};
          margin: 10px 0 30px;
        }
        .app__subtitle {
          font-family: ${fonts.halyardDisplay};
          font-size: 48px;
          font-weight: 600;
          line-height: 3.375rem;
          letter-spacing: 0;
        }
        .app__block_title {
          font-family: ${fonts.halyardDisplay};
          font-size: 28px;
          font-weight: 600;
          line-height: 1.43;
          letter-spacing: 0;
          color: ${colors.darkSlateBlue};
        }
        .app-hero__desc,
        .app__desc {
          font-family: ${fonts.halyardDisplay};
          font-size: 26px;
          line-height: 40px;
          letter-spacing: 0.5px;
          margin: 0 0 48px;
        }
        .app__block_desc {
          font-size: 22px;
          line-height: 1.64;
          letter-spacing: 0.8px;
        }
        .app__logo-title {
          line-height: 2.5;
          letter-spacing: 1.3px;
          font-size: 16px;
          font-weight: 500;
          margin-right: 5px;
        }
        .app__content {
          line-height: 24px;
          font-size: 18px;
        }
        .app__actions {
          margin-top: 35px;
        }
        .app__actions button {
          margin-right: 24px;
        }
        .app_actions button:last-child {
          margin-right: 0;
        }
        .app__row {
          display: flex;
        }
        .app__column {
          flex: 1;
        }
        .app__row .app__column {
          margin-right: 80px;
        }
        .app__row .app__column:last-child {
          margin-right: 0;
        }
        .app__image-group {
          position: relative;
        }
        .app__subimage > img,
        .app__image > img {
          max-width: 100%;
          height: auto;
        }
        .app__subimage {
          width: 100%;
          position: absolute;
          bottom: -70px;
          left: -132px;
        }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px white inset;
          -webkit-text-fill-color: ${colors.darkSlateBlue};
        }
        .block__title {
          margin: 0 0 24px;
          font-weight: 400;
          font-size: 64px;
          line-height: 72px;
          color: #1F325D;
        }
        .block__content {
          font-weight: 300;
          font-size: 18px;
          line-height: 24px;
          color: #5E6677;
        }
        .lp .app-hero__title {
          font-family: ${fonts.halyardDisplay};
          font-weight: 600;
          font-size: 48px;
          line-height: 3.5rem;
        }

        .lp .app__title {
          font-size: 36px;
        }
        .request-button {
          display: inline-block;
          padding: 10px 10px 14px;
          border: 0;
          background: ${colors.orange2};
          box-shadow: 0px 2px 12px rgba(251, 131, 94, 0.2), 0px 6px 24px rgba(251, 131, 94, 0.2);
          color: #fff;
          cursor: pointer;
          outline: none;
          border-radius: 32px;
          font-family: ${fonts.halyardDisplay};
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          box-shadow: 0px 2px 12px rgba(251, 131, 94, 0.25), 0px 6px 24px rgba(251, 131, 94, 0.26);
        }
        .request-button:hover {
          box-shadow: none;
        }
        .cards-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        @media (max-width: ${screen.tabletMax}px) {
          .app__row {
            flex-direction: column;
          }
          .app__row .app__column {
            margin-right: 0;
            margin-bottom: 90px;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          #content.app__modal-active {
            display: none;
          }
          .app__mobile_hidden {
            display: none;
          }
          .app-hero__title {
            font-size: 48px;
            line-height: 3.5rem;
            letter-spacing: 0;
            margin: 10px 0 15px;
          }
          .app__title {
            font-size: 38px;
            line-height: 3rem;
            letter-spacing: 0;
            margin: 10px 0 15px;
          }
          .app__subtitle {
            font-size: 38px;
            font-weight: 600;
            line-height: 3rem;
            letter-spacing: 0;
            margin-top: 20px;
          }
          .app__block_title {
            font-size: 26px;
            font-weight: 600;
            line-height: 1.31;
            letter-spacing: 0;
            margin: 15px 0;
          }
          .app__desc {
            font-size: 22px;
            line-height: 1.27;
            letter-spacing: 0.9px;
          }
          .app__row .app__column {
            margin-bottom: 60px;
          }
          .app__actions {
            flex-direction: column;
            margin-top: 40px;
          }
          .app__actions button {
            margin-right: 0;
            margin-bottom: 15px;
            width: 100%;
          }
          .app_actions button:last-child {
            margin-bottom: 0;
          }
          .app__subimage {
            width: 95px;
            bottom: -20px;
            left: -20px;
          }
          .block__title {
            margin-bottom: 16px;
            font-size: 36px;
            line-height: 44px;
          }
          .block__content {
            font-size: 16px;
            line-height: 22px;
          }
        }
      `}</style>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
