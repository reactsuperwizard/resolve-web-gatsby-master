import React, { useState } from 'react';

import PlusIcon from './icons/Plus';
import MinusIcon from './icons/Minus';

import { colors, fonts, screen } from '../constants';

export default function Faqitem({
  question,
  answer,
  number,
  showExpandIcon = true,
  questionClassName,
  expandedQuestionClassName,
  onClick,
  children,
  defaultExpanded,
  ...props
}) {
  const [expanded, setExpanded] = useState(props.expanded || defaultExpanded);

  const isExpanded = onClick ? props.expanded : expanded;

  function onClickItem(event) {
    if (onClick) {
      onClick(event);
    } else {
      setExpanded(prev => !prev);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClickItem}
      onKeyDown={onClickItem}
    >
      <div className="faq-item__question">
        <div
          className={`faq-item__question_text ${
            isExpanded ? expandedQuestionClassName : questionClassName
          }`}
        >
          {number && (
            <span className="faq-item__question_number">{number}</span>
          )}
          {question}
        </div>
        {showExpandIcon && (
          <div className="faq-item__question_icon">
            {isExpanded ? <MinusIcon /> : <PlusIcon />}
          </div>
        )}
      </div>

      <div className={`transition ${isExpanded ? 'expanded' : ''}`}>
        <div
          className={`faq-item__answer ${
            number ? 'faq-item__answer_number' : ''
          }`}
        >
          {children ? children : answer}
        </div>
      </div>

      <style jsx>{`
        .faq-item__question {
          cursor: pointer;
          font-size: 30px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.7px;
          align-items: center;
          justify-content: space-between;
          display: flex;
          padding-bottom: 20px;
          padding-top: 20px;
        }
        .faq-item__answer {
          max-width: 840px;
          font-size: 22px;
          font-weight: 400px;
          line-height: 1.4;
          letter-spacing: 0.7px;
          padding-bottom: 20px;
          text-align: left;
        }
        .faq-item__answer_number {
          padding-left: 64px;
          color: ${colors.activeQuestion};
        }
        .faq-item__question_text {
          padding-right: 30px;
        }

        .transition {
          opacity: 0;
          transform: translate(0, -20px);
          max-height: 0;
          overflow: hidden;
          transition: max-height 250ms linear 0ms, opacity 250ms linear 0ms,
            transform 250ms cubic-bezier(0.165, 0.84, 0.44, 0.53) 0ms;
        }

        .transition.expanded {
          opacity: 1;
          transform: translate(0, 0);
          max-height: 100%;
          overflow: auto;
          transition: max-height 250ms linear 0ms, opacity 250ms linear 0ms,
            transform 250ms cubic-bezier(0, 0.75, 0.72, 0.6) 0ms;
        }

        .faq-item__question_number {
          width: 64px;
          display: inline-block;

          font-family: ${fonts.halyardDisplay};
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0;

          text-align: center;
        }
        .faq-item__question_icon {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: ${screen.mobileMax}px) {
          .faq-item__question {
            font-size: 24px;
            letter-spacing: 0.6px;
            padding: 15px 0;
          }
          .faq-item__answer {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
