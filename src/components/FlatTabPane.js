import React from 'react';

import Error from './Error';

import { colors, fonts } from '../constants';

export default function FlatTabPane({
  error,
  label,
  darkLabel,
  options,
  onChange,
  id,
  value,
}) {
  const errorId = `${id}-error`;

  return (
    <fieldset className="flat-tab-pane__container">
      {label && (
        <legend className={`label ${darkLabel ? 'label-dark' : ''}`}>
          {label}
        </legend>
      )}
      <div className="flat-tab-pane">
        <div className="flat-tab-pane__options">
          {options.map(option => (
            <div className="flat-tab-pane__option-container">
              <label
                className={`flat-tab-pane__option-label  ${
                  value === option.name
                    ? 'flat-tab-pane__option-label-selected'
                    : ''
                }`}
                htmlFor={option.id || option.name}
              >
                {option.label}
              </label>
              <input
                type="radio"
                name={option.name}
                id={option.id || option.name}
                onChange={() => {
                  onChange(option.name);
                }}
                className="flat-tab-pane__option"
                checked={value === option.name}
                aria-describedby={error ? errorId : undefined}
              />
            </div>
          ))}
        </div>
        {error && (
          <div className="flat-tab-pane__error">
            <Error error={error} id={errorId} />
          </div>
        )}
      </div>
      <style jsx>{`
        .flat-tab-pane__container {
          width: 100%;
          border: 0;
          padding: 0;
          margin: 0;
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
        .flat-tab-pane {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }
        .flat-tab-pane__options {
          width: 100%;
          box-sizing: border-box;
          display: flex;
        }

        .flat-tab-pane__option-label {
          display: inline-block;
          width: 100%;
          padding-top: 8px;
          padding-bottom: 8px;
          border: solid 1px ${colors.inputBorder};
          font-family: ${fonts.halyardDisplay};
          font-weight: normal;
          font-size: 17px;
          letter-spacing: 0.4px;
          color: ${colors.inputPlaceholder};
          background-color: ${colors.white};
          cursor: pointer;
          text-align: center;
          box-sizing: border-box;
        }

        .flat-tab-pane__option {
          position: absolute;
          opacity: 0;
          width: 0;
        }

        .flat-tab-pane__option-container {
          flex: 1;
        }

        .flat-tab-pane__option-container:not(:last-child) .flat-tab-pane__option-label {
          border-right: 0;
        }

        .flat-tab-pane__option-container:first-child .flat-tab-pane__option-label {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }

        .flat-tab-pane__option-container:last-child .flat-tab-pane__option-label {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }

        .flat-tab-pane__option-label-selected {
          background-color: ${colors.darkSlateBlue};
          color: ${colors.white};
          border-color: ${colors.darkSlateBlue};
        }

        .flat-tab-pane__error {
          margin-top: 8px;
        }
      `}</style>
    </fieldset>
  );
}
