import React, { useState, useEffect, useCallback } from 'react';
import { noop } from 'lodash';

import { screen } from '../constants';

function HeaderNav(props) {
  const { children = '?', content, showNavigationDrawer } = props;
  const [movileView, setMovileView] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const onResizeWindow = useCallback(() => {
    if (typeof window !== 'undefined') {
      const nextMovileView = window.innerWidth < screen.tabletMax;
      if (expanded && movileView && !nextMovileView) {
        setExpanded(false);
      }

      setMovileView(nextMovileView);
    }
  }, [expanded, movileView]);

  const onMouseOver = () => {
    if (!showNavigationDrawer) {
      setExpanded(true);
      props.onMouseOver();
    }
  };

  const onMouseOut = () => {
    if (!showNavigationDrawer) {
      setExpanded(false);
      props.onMouseOut();
    }
  };

  const onClick = () => {
    if (showNavigationDrawer) {
      setExpanded(!expanded);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMovileView(window.innerWidth < screen.tabletMax);

      window.addEventListener('resize', onResizeWindow);
      return () => window.removeEventListener('resize', onResizeWindow);
    }
  }, [onResizeWindow]);

  return (
    <div
      className="header-nav"
      onClick={onClick}
      onKeyDown={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onMouseOver}
      onBlur={onMouseOut}
      role="button"
      tabIndex={0}
    >
      <div className="header-nav__trigger">{children}</div>
      {content && (
        <div
          className={`header-nav__content ${
            showNavigationDrawer ? '' : 'header-nav__content_absolute'
          }`}
          style={{
            ...(expanded && {
              maxHeight: '100vh',
              visibility: 'visible',
              opacity: 1,
            }),
            ...(showNavigationDrawer
              ? {
                  overflow: 'hidden',
                }
              : {
                  boxShadow: '0 6px 20px 0 rgba(23, 28, 33, 0.16)',
                }),
          }}
        >
          <div className="header-nav__arrow" />
          {content}
        </div>
      )}
      <style jsx>{`
        .header-nav {
          position: relative;
          display: inline-block;
          padding: 10px 0;
          z-index: 10;
          margin-left: 40px;
        }

        .header-nav__content {
          min-width: 200px;
          max-width: 360px;
          width: max-content;
          max-height: 0;

          border-radius: 3px;
          background-color: #fff;

          visibility: hidden;
          opacity: 0;

          transition: 0.33s;

          padding: 20px;
        }

        .header-nav__content_absolute {
          position: absolute;
          margin-top: 28px;
          top: inherit;
          left: 0;
        }

        .header-nav__trigger {
          user-select: none;
        }

        .header-nav__arrow {
          position: absolute;
          bottom: 100%;
          left: 40px;
          width: 50px;
          height: 25px;
          overflow: hidden;
          transform: translateX(-50%);
        }

        .header-nav__arrow::after {
          content: '';
          position: absolute;

          bottom: 0;
          left: 50%;

          width: 15px;
          height: 15px;

          background-color: #fff;
          box-shadow: 0 6px 20px 0 rgba(23, 28, 33, 0.16);

          transform: translateX(-50%) translateY(50%) rotate(45deg);
        }

        @media (max-width: ${screen.navigationSecondPoint}px) {
          .header-nav {
            margin-left: 0;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .header-nav__content {
            margin-top: 0;
            margin-left: 48px;
            padding: 0;
          }
        }
      `}</style>
      <style jsx global>{`
        .header-nav__popup {
          margin: 15px 15px;
        }

        .header-nav__item {
          color: #0f2454;
        }

        .header-nav__item:hover {
          color: #8f99ae !important;
          cursor: pointer;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .header-nav__popup {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}

HeaderNav.defaultProps = {
  onMouseOver: noop,
  onMouseOut: noop,
};

export default HeaderNav;
