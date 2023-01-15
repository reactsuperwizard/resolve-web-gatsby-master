import React from 'react';

import Error from './Error';

import { colors, fonts } from '../constants';

import ChevronArrowIcon from './icons/ChevronArrow';

export default function Select({ error, label, darkLabel, options, firstOptionLabel, ...props }) {
  const { id, value } = props;
  const errorId = `${id}-error`;

  return (
    <div className="input__container">
      {label && (
        <label className={`label ${darkLabel ? "label-dark" : ""}`} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input">
        <select
          className={`input__line ${error ? 'input_invalid' : ""} ${!value ? "input_placeholder" : ""}`}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          {...props}
        >
          <option value="">{firstOptionLabel || "Please select"}</option>
          {options.map(item => {
            if (typeof item.value === 'undefined') {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            }
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
        <div className="icon">
          <ChevronArrowIcon width={14} height={14} />
        </div>
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
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 8px;
          letter-spacing: 0.4px;
          color: ${colors.label};
          display: block;
          font-family: ${fonts.halyardText};
        }
        .label-dark {
          color: ${colors.darkSlateBlue};
        }
        .input {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .input__line {
          height: 40px;
          border-radius: 3px;
          border: solid 1px ${colors.inputBorder};
          padding: 0 16px;
          padding-right: 32px;
          font-family: ${fonts.halyardDisplay};
          font-size: 17px;
          letter-spacing: 0.4px;
          color: ${colors.input};
          box-sizing: border-box;
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
        .input_placeholder {
          color: ${colors.inputPlaceholder};
        }
        select {
          align-items: center;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: #fff;
          border: 1px solid #d4d6d7;
          border-radius: 8px;
          cursor: pointer;
          display: block;
          font-family: inherit;
          font-size: 1rem;
          padding: 0 1rem;
          height: 45px;
          resize: none;
          width: 100%;
        }
        .input .icon {
          position: absolute;
          top: 13px;
          right: 10px;
          pointer-events: none;
          line-height: 0;
        }
      `}</style>
    </div>
  );
}
