import React from 'react';
import classNames from 'classnames';

import { colors } from '../constants';

import CloseIcon from '../images/common/reset-icon.inline.svg';
import AdvancePayIcon from './icons/AdvancePay';

const iconWidth = 28;
const iconPadding = 5;
const iconOffset = (iconWidth + iconPadding) / 16; // px to rem

const closeWidth = 1.3125;
const closeMargin = 1.5;
const closeOffset = closeWidth + closeMargin * 2;

export default function Notice({ hidden, dismissable, content }) {
  const [noticeClosed, setNoticeClosed] = React.useState(false);

  if (hidden) return null;

  return (
    <>
      <div className={classNames('notice', { 'notice--closed': noticeClosed })}>
        <div className="notice-content">
          <AdvancePayIcon width={iconWidth} />
          <span
            dangerouslySetInnerHTML={{
              __html: content?.childMarkdownRemark?.html,
            }}
          />
        </div>
        {dismissable && <CloseIcon onClick={() => setNoticeClosed(true)} />}
      </div>
      <style jsx>{`
        .notice {
          display: flex;
          align-items: center;

          top: 0;
          position: sticky;
          z-index: 1;

          background: ${colors.orange};
        }

        .notice--closed {
          display: none;
        }

        .notice-content {
          margin: 0 auto;
          padding: 0.7rem 0 0.7rem ${dismissable ? closeOffset : iconOffset}rem;
          position: relative;
        }

        .notice-content :global(svg) {
          top: 50%;
          left: ${dismissable ? closeOffset : iconOffset}rem;
          position: absolute;
          transform: translate(-100%, -50%);
          padding-right: ${iconPadding}px;
        }

        @media (min-width: 500px) {
          .notice-content {
            padding: 0.7rem 0 0.7rem
              ${dismissable ? closeOffset + iconOffset : iconOffset}rem;
          }

          .notice-content :global(svg) {
            left: ${dismissable ? closeOffset + iconOffset : iconOffset}rem;
          }
        }

        .notice-content :global(svg > path) {
          fill: ${colors.white};
        }

        .notice :global(p) {
          display: inline-block;
          color: ${colors.white};
          text-align: center;
          font-weight: 500;
        }

        .notice :global(p a) {
          color: ${colors.white};
          text-decoration: underline;
        }

        .notice > :global(svg) {
          width: ${closeWidth}rem;
          height: ${closeWidth}rem;
          margin: 0 ${closeMargin}rem;
          color: ${colors.white};
          cursor: pointer;
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}
