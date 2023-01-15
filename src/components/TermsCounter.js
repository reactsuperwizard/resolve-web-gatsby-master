import React from 'react';

import { screen } from '../constants';

export default () => (
  <span className="terms-counter">
    <span className="terms-counter__wrapper">
      <span className="terms-counter__list">
        <span className="terms-counter__list-number">3</span>
        <span className="terms-counter__list-number">6</span>
        <span className="terms-counter__list-number">9</span>
        <span className="terms-counter__list-number">3</span>
      </span>
    </span>
    0
    <style jsx>{`
      .terms-counter {
        display: inline-block;
      }
      .terms-counter__wrapper {
        display: inline-block;
        height: 60px;
        overflow-y: hidden;
        position: relative;
        top: 5px;
      }
      .terms-counter__list {
        position: relative;
        top: -225px;
        -webkit-animation-name: terms; /* Safari 4.0 - 8.0 */
        -webkit-animation-timing-function: ease-in-out; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 10s; /* Safari 4.0 - 8.0 */
        -webkit-animation-iteration-count: infinite; /* Safari 4.0 - 8.0 */
        animation-name: terms;
        animation-timing-function: ease-in-out;
        animation-duration: 10s;
        animation-iteration-count: infinite;
      }
      .terms-counter__list-number {
        display: block;
      }

      @keyframes terms {
        0% {
          top: 0;
        }
        11.1% {
          top: 0;
        }
        22.2% {
          top: 0;
        }
        33.3% {
          top: -75px;
        }
        44.4% {
          top: -75px;
        }
        55.5% {
          top: -75px;
        }
        66.6% {
          top: -150px;
        }
        77.7% {
          top: -150px;
        }
        88.8% {
          top: -150px;
        }
        99.9% {
          top: -225px;
        }
        100% {
          top: -225px;
        }
      }
      @-webkit-keyframes terms {
        0% {
          top: 0;
        }
        11.1% {
          top: 0;
        }
        22.2% {
          top: 0;
        }
        33.3% {
          top: -75px;
        }
        44.4% {
          top: -75px;
        }
        55.5% {
          top: -75px;
        }
        66.6% {
          top: -150px;
        }
        77.7% {
          top: -150px;
        }
        88.8% {
          top: -150px;
        }
        99.9% {
          top: -225px;
        }
        100% {
          top: -225px;
        }
      }

      @media (max-width: ${screen.mobileMax}px) {
        .terms-counter__wrapper {
          height: 38px;
        }
        .terms-counter__list {
          top: -90px;
        }

        @keyframes terms {
          0% {
            top: 0;
          }
          11.1% {
            top: 0;
          }
          22.2% {
            top: 0;
          }
          33.3% {
            top: -45px;
          }
          44.4% {
            top: -45px;
          }
          55.5% {
            top: -45px;
          }
          66.6% {
            top: -90px;
          }
          77.7% {
            top: -90px;
          }
          88.8% {
            top: -90px;
          }
          99.9% {
            top: -135px;
          }
          100% {
            top: -135px;
          }
        }
        @-webkit-keyframes terms {
          0% {
            top: 0;
          }
          11.1% {
            top: 0;
          }
          22.2% {
            top: 0;
          }
          33.3% {
            top: -45px;
          }
          44.4% {
            top: -45px;
          }
          55.5% {
            top: -45px;
          }
          66.6% {
            top: -90px;
          }
          77.7% {
            top: -90px;
          }
          88.8% {
            top: -90px;
          }
          99.9% {
            top: -135px;
          }
          100% {
            top: -135px;
          }
        }
      }
    `}</style>
  </span>
);
