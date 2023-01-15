import React from 'react';
import PropTypes from 'prop-types';

import { errorStyles } from './Error';
import { inputContainerStyles, inputStyles, labelStyles } from './Input';
import {
  buttonStyles,
  buttonStylesDisabled,
  buttonStylesHover,
} from './Button';

HubSpotForm.propTypes = {
  btnPrimary: PropTypes.bool,
  btnLarge: PropTypes.bool,
};

HubSpotForm.defaultProps = {
  btnPrimary: true,
  btnLarge: false,
};

export default function HubSpotForm({ btnPrimary, btnLarge }) {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '8982602',
          formId: 'dd22e634-52df-4e5d-833a-c33c0e8b889e',
          sfdcCampaignId: '7014x000000eERlAAM',
          target: '#hsForm',
        });
      }
    });
  }, []);

  return (
    <div className="hs-form__container">
      <h2 className="hs-form__head">Learn B2B best practices.</h2>
      <p className="hs-form__subhead">
        <strong>Subscribe for tactical tips</strong> on growing your business
        and optimizing your net terms and receivables workflow.
      </p>

      <div id="hsForm" className="hs-form__form-box" />

      <style jsx>{`
        .hs-form__container {
          position: relative; // prevents container being overlapped by footer
          max-width: 50rem;
          margin: 5rem auto;
        }
        .hs-form__head {
          margin-top: 23px;
          margin-bottom: 0.3rem;
        }
        .hs-form__subhead {
          margin-bottom: 2rem;
        }
        .hs-form__form-box {
          padding: 2rem;
          box-sizing: border-box;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <style jsx global>{`
        .hs-form-field > label {
          ${labelStyles()}
        }
        .hs-form-field label > span:nth-child(2) {
          margin-left: 0.2em; // add a bit of space on the asterisk
        }

        .hs-form input {
          ${inputContainerStyles()}
        }

        .hs-input {
          ${inputStyles()}
        }

        .no-list {
          list-style: none;
          padding: 0;
        }
        .hs-error-msg {
          ${errorStyles()}
          list-style: none;
        }

        .hs-button {
          ${buttonStyles(btnLarge, btnPrimary)}
        }

        .hs-button:hover:enabled {
          ${buttonStylesHover(btnPrimary)}
        }

        .hs-button:disabled {
          ${buttonStylesDisabled(btnPrimary)}
        }

        @media (min-width: 990px) {
          .hs-form__container {
            display: grid;
            grid-template:
              [full-height-start] auto 1fr [full-height-end]
              /
              [left-start] 1fr
              [left-end right-start] 1fr
              [right-end];
            grid-column-gap: 2rem;
          }
          .hs-form__head {
            grid-column: left;
          }
          .hs-form__subhead {
            grid-column: left;
          }
          .hs-form__form-box {
            grid-area: full-height / right;
          }
        }
      `}</style>
    </div>
  );
}
