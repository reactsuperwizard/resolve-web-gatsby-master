import React, { useMemo, useEffect, useState, useRef } from 'react';
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from '@reach/slider';
import '@reach/slider/styles.css';
import throttle from 'lodash/throttle';

import Error from './Error';

import { colors, fonts } from '../constants';

export default function Slider({
  error,
  label,
  formatValue,
  onChange,
  ...props
}) {
  const { id, value, min, max } = props;
  const errorId = `${id}-error`;

  const [handlePositioningClassName, setHandlePositioningClassName] = useState(
    ''
  );

  const handleRef = useRef();
  const handleLabelRef = useRef();

  // Make sure the handle isn't overflowing from the screen, especially useful on mobile
  const updateHandleClassName = () => {
    const handleDimensions = handleRef?.current
      ? handleRef.current.getBoundingClientRect()
      : {};
    const handleLabelDimensions = handleLabelRef?.current
      ? handleLabelRef.current.getBoundingClientRect()
      : {};

    const handleCenter = handleDimensions.left + handleDimensions.width / 2;

    if (handleCenter - handleLabelDimensions.width / 2 <= 0) {
      setHandlePositioningClassName('slider__handle-label-left');
    } else if (
      handleCenter + handleLabelDimensions.width / 2 >=
      window.innerWidth
    ) {
      setHandlePositioningClassName('slider__handle-label-right');
    } else if (handlePositioningClassName) {
      setHandlePositioningClassName('');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateHandleClassName);
    return () => {
      window.removeEventListener('resize', updateHandleClassName);
    };
  });

  useEffect(() => {
    updateHandleClassName();
  });

  const throttledOnChange = useMemo(() => throttle(onChange, 100), [onChange]);

  return (
    <div className="input__container">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="slider">
        <SliderInput {...props} onChange={throttledOnChange}>
          <SliderTrack>
            <SliderRange />
            <SliderHandle ref={handleRef}>
              <span
                className={`slider__handle-label ${handlePositioningClassName}`}
                ref={handleLabelRef}
              >
                {formatValue(value)}
              </span>
            </SliderHandle>
          </SliderTrack>
        </SliderInput>
        <div className="slider__boundary-container">
          <span className="slider__boundary">{formatValue(min)}</span>
          <span className="slider__boundary">{formatValue(max)}</span>
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
          color: ${colors.darkSlateBlue};
          display: block;
          font-family: ${fonts.halyardText};
        }
        .slider {
          margin-bottom: 32px;
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          padding-top: 40px;
        }
        .slider__handle-label {
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          top: -32px;
          font-family: ${fonts.halyardDisplay};
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.47px;
        }
        .slider__handle-label-left {
          left: 0;
          transform: none;
        }
        .slider__handle-label-right {
          left: unset;
          right: 0;
          transform: none;
        }
        .slider__boundary-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 8px;
        }
        .slider__boundary {
          font-family: ${fonts.halyardText};
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.4px;
          color: ${colors.baliHai};
        }
        .input_invalid {
          border: solid 1px ${colors.inputError};
        }
        .input__error {
          margin-top: 8px;
        }
      `}</style>
      <style jsx global>{`
        [data-reach-slider-input][data-orientation='horizontal'] {
          height: 3px;
        }
        [data-reach-slider-track] {
          background-color: ${colors.baliHai};
          height: 3px;
        }
        [data-reach-slider-range] {
          background-color: ${colors.darkSlateBlue};
        }
        [data-reach-slider-handle] {
          width: 22px;
          height: 22px;
          border-radius: 20px;
          background-color: ${colors.white};
          border: 1px solid ${colors.baliHai};
          box-shadow: 0 2px 5px 0 rgba(60, 77, 87, 0.1),
            0 1px 1px 0 rgba(60, 77, 87, 0.2);
        }
        [data-reach-slider-handle]:hover {
          cursor: pointer;
          box-shadow: 0 4px 7px 0 rgba(60, 77, 87, 0.2),
            0 1px 1px 0 rgba(60, 77, 87, 0.2);
        }
        [data-reach-slider-track][data-orientation='horizontal']:before {
          width: 100%;
          height: 1.5rem;
          top: calc(-0.5rem - 1px);
          left: 0;
          content: '';
          position: absolute;
        }
        [data-reach-slider-range][data-orientation='horizontal'] {
          height: 100%;
        }
        [data-reach-slider-handle][aria-orientation='horizontal'] {
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
}
