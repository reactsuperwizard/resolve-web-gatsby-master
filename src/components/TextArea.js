import React from 'react';

import Error from '../components/Error';

import { colors, fonts } from '../constants';

export default function TextArea({ label, error, ...props }) {
  return (
    <div>
      {label && <label className="label">{label}</label>}
      <div className={`input ${error && 'input_invalid'}`}>
        <textarea className="input__line" {...props} />
      </div>
      {error && <Error error={error} />}
      <style jsx>{`
        .label {
          ${labelStyles()}
        }
        .input {
          ${inputContainerStyles()}
        }
        .input_invalid {
          border: solid 1px ${colors.inputError};
          margin-bottom: 5px;
        }
        .input__line {
          border: none;
          font-family: ${fonts.halyardDisplay};
          font-size: 18px;
          line-height: 1.33;
          letter-spacing: 0.4px;
          color: ${colors.input};
          width: 100%;
          resize: vertical;
        }
        .input__line:focus,
        .input__line:active {
          outline: none;
        }
        .input__line::placeholder {
          font-family: ${fonts.halyardDisplay};
          font-size: 18px;
          line-height: 1.33;
          letter-spacing: 0.4px;
          color: ${colors.inputPlaceholder};
        }
      `}</style>
    </div>
  );
}

export function labelStyles() {
  return `
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
    letter-spacing: 0.4px;
    color: ${colors.label};
    display: block;
    font-family: ${fonts.halyardText};
  `;
}

export function inputContainerStyles() {
  return `
    border-radius: 3px;
    border: solid 1px ${colors.inputBorder};
    margin-bottom: 20px;
    padding: 12px;
  `;
}
