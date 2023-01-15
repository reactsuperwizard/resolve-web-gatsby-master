import React from 'react';
import { colors, fonts } from '../constants';
import RightArrowIcon from './icons/RightArrow';
import Loading from './Loading';

export default function Button({
  className = '',
  buttonStyle = '',
  children,
  large,
  hasArrow,
  primary,
  isFullWidth,
  loading,
  linkTo,
  ...props
}) {
  return (
    <button
      className={`button ${
        hasArrow && !isFullWidth ? 'button__with-arrow' : ''
      } ${isFullWidth ? 'button__full' : ''} ${buttonStyle} ${className}`}
      {...props}
      href={linkTo}
    >
      {children}
      {loading && <Loading when={loading} />}
      {hasArrow && (
        <span className="button__arrow-icon">
          <RightArrowIcon
            color={primary ? colors.secondary : colors.primary}
            backgroundColor={primary ? colors.primary : colors.secondary}
          />
        </span>
      )}
      <style jsx>{`
        .button {
          ${buttonStyles(large, primary)}
        }

        .button:hover:enabled {
          ${buttonStylesHover(primary)}
        }

        .button:disabled {
          ${buttonStylesDisabled(primary)}
        }

        .button__with-arrow {
          padding-right: 52px;
        }

        .button__full {
          width: 100%;
        }

        .button__arrow-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 16px;
          line-height: 0;
        }

        .button.transparent {
          border: 1px solid ${colors.indigo};
          color: ${colors.indigo};
          background-color: ${colors.white};
        }
      `}</style>
    </button>
  );
}

export function buttonStyles(large, primary) {
  return `
    font-size: ${large ? '20' : '17'}px;
    font-weight: normal;
    font-family: ${fonts.halyardDisplay};
    color: ${primary ? colors.secondary : colors.primary};
    background-color: ${primary ? colors.primary : colors.secondary};
    position: relative;

    height: ${large ? '56' : '48'}px;
    line-height: ${large ? '56' : '48'}px;
    padding: 0 24px;
    border: 0;
    box-shadow: 0 2px 5px rgba(60, 77, 87, 0.1),
      0 1px 1px rgba(60, 66, 87, 0.201459);
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    border-radius: 4px;
  `;
}

export function buttonStylesHover(primary) {
  return `
    cursor: pointer;
    background-color: ${primary ? 'rgba(31, 50, 93, 0.95)' : '#fafafa;'};
  `;
}

export function buttonStylesDisabled(primary) {
  return `
    background-color: ${primary ? 'rgba(31, 50, 93, 0.5)' : '#ccc'};
  `;
}
