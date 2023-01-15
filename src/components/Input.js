import React from 'react';

import Error from './Error';

import { colors, fonts } from '../constants';

export default function Input({ error, label, ...props }) {
  const { id } = props;
  const errorId = `${id}-error`;

  return (
    <div className="input__container">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input">
        <input
          className={`input__line ${error ? 'input_invalid' : ''}`}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <div className="input__error">
            <Error error={error} id={errorId} />
          </div>
        )}
      </div>
      <style jsx>{`
        .input__container {
          width: 100%;
        }
        .label {
          ${labelStyles()}
        }
        .input {
          ${inputContainerStyles()}
        }
        .input__line {
          ${inputStyles()}
        }
        .input__line::placeholder {
          font-family: ${fonts.halyardDisplay};
          font-size: 18px;
          line-height: 1.33;
          letter-spacing: 0.4px;
          color: ${colors.inputPlaceholder};
        }
        .input_invalid {
          border: solid 1px ${colors.inputError};
        }
        .input__error {
          margin-top: 8px;
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
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  `;
}

export function inputStyles() {
  return `
    height: 40px;
    border-radius: 3px;
    border: solid 1px ${colors.inputBorder};
    padding: 0 16px;
    font-family: ${fonts.halyardDisplay};
    font-size: 17px;
    letter-spacing: 0.4px;
    color: ${colors.input};
    width: 100%;
    display: block;
    box-sizing: border-box;
  `;
}
