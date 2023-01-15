import React, { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import { object, number, string } from 'yup';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import { trackSegment } from '../utils/segment';
import { getCampaign } from '../utils/utm';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Button from '../components/Button';
import Select from '../components/Select';
import FlatTabPane from '../components/FlatTabPane';
import { fonts, colors } from '../constants';

const formatNumber = value =>
  `${(value ?? '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

const formatCurrency = value => `$${formatNumber(value)}`;

export default function CashflowCalculatorPage() {
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      monthlyAccountsReceivable: 100_000,
      estimatedMonthlyCashflow: 250_000,
      monthlyInvoicesProcessed: '',
      advanceRate: 75,
    },
    validationSchema: object().shape({
      monthlyAccountsReceivable: number().required('Required'),
      estimatedMonthlyCashflow: number().required('Required'),
      monthlyInvoicesProcessed: string().trim().required('Required'),
      advanceRate: number().required('Required'),
    }),
    onSubmit: () => {
      trackSegment('Cash flow calculator CTA clicked', {
        context: {
          campaign: getCampaign(),
        },
      });

      setIsCalculatorVisible(true);
    },
  });

  const resolveCashflow = Math.round(
    (formik.values.monthlyAccountsReceivable * formik.values.advanceRate) / 100
  );
  const cashflowIncrease = formik.values.estimatedMonthlyCashflow
    ? Math.round(
        (resolveCashflow / formik.values.estimatedMonthlyCashflow) * 100
      )
    : 0;
  const totalCashflow = Math.round(
    resolveCashflow + formik.values.estimatedMonthlyCashflow
  );
  const apRepHours = formik.values.monthlyInvoicesProcessed
    ? Math.round(((formik.values.monthlyInvoicesProcessed * 12) / 60) * 0.8)
    : undefined;

  const setFieldValue = formik.setFieldValue;

  // We're memoizing these onChange handlers so that the slider component can properly throttle
  // onChange events/increase performance
  const onMonthlyAccountsReceivableChange = useCallback(
    value => {
      setFieldValue('monthlyAccountsReceivable', value);
    },
    [setFieldValue]
  );

  const onEstimatedMonthlyCashflowChange = useCallback(
    value => {
      setFieldValue('estimatedMonthlyCashflow', value);
    },
    [setFieldValue]
  );

  return (
    <Layout>
      <GatsbySeo
        title="Net terms cash flow calculator"
        description="Demonstrate how Resolve’s net term can empower your business cash flow"
      />
      <Container>
        <div
          className={`container ${
            isCalculatorVisible ? 'container-with-calculator' : ''
          }`}
        >
          <div
            className={`calculator__container  ${
              isCalculatorVisible ? 'calculator__container-with-calculator' : ''
            }`}
          >
            <div className="calculator__content">
              <>
                <h1 className="calculator__header">
                  Resolve&#39;s Cash Flow Estimator
                </h1>
                <p className="calculator__subtitle">
                  Preview how much Resolve&#39;s advance paid net terms invoices
                  will improve your business cash flow.
                </p>
                <form onSubmit={formik.handleSubmit}>
                  <Slider
                    id="monthlyAccountsReceivable"
                    name="monthlyAccountsReceivable"
                    label="Monthly accounts receivable"
                    min={100_000}
                    max={10_000_000}
                    step={100_000}
                    formatValue={formatCurrency}
                    error={
                      formik.touched.monthlyAccountsReceivable
                        ? formik.errors.monthlyAccountsReceivable
                        : undefined
                    }
                    value={formik.values.monthlyAccountsReceivable}
                    onChange={onMonthlyAccountsReceivableChange}
                  />
                  <Slider
                    id="estimatedMonthlyCashflow"
                    name="estimatedMonthlyCashflow"
                    label="Estimated monthly cash flow"
                    min={0}
                    max={1_000_000}
                    step={50_000}
                    formatValue={formatCurrency}
                    error={
                      formik.touched.estimatedMonthlyCashflow
                        ? formik.errors.estimatedMonthlyCashflow
                        : undefined
                    }
                    value={formik.values.estimatedMonthlyCashflow}
                    onChange={onEstimatedMonthlyCashflowChange}
                  />
                  <div className="calculator__select">
                    <Select
                      id="monthlyInvoicesProcessed"
                      name="monthlyInvoicesProcessed"
                      label="Monthly invoices processed"
                      firstOptionLabel="Select number"
                      error={
                        formik.touched.monthlyInvoicesProcessed
                          ? formik.errors.monthlyInvoicesProcessed
                          : undefined
                      }
                      value={formik.values.monthlyInvoicesProcessed}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      darkLabel
                      options={[
                        {
                          value: 50,
                          label: 'Less than 50',
                        },
                        {
                          value: 100,
                          label: '50 - 100',
                        },
                        {
                          value: 250,
                          label: '100 - 250',
                        },
                        {
                          value: 500,
                          label: '250 - 500',
                        },
                        {
                          value: 1_000,
                          label: '500 - 1,000',
                        },
                        {
                          value: 2_500,
                          label: '1,000 - 2,500',
                        },
                        {
                          value: 5_000,
                          label: '2,500 - 5,000',
                        },
                        {
                          value: 10_000,
                          label: '5,000+',
                        },
                      ]}
                    />
                  </div>
                  <div className="calculator__select">
                    <FlatTabPane
                      id="advanceRate"
                      name="advanceRate"
                      label="Resolve's invoice advance rate (for approved customers)"
                      darkLabel
                      options={[
                        { name: 50, label: '50%' },
                        { name: 75, label: '75%' },
                        { name: 90, label: '90%' },
                      ]}
                      onChange={value => {
                        setFieldValue('advanceRate', value);
                      }}
                      value={formik.values.advanceRate}
                    />
                  </div>
                  {isCalculatorVisible ? null : (
                    <Button
                      primary
                      isFullWidth
                      large
                      type="submit"
                      className="calculator__form_button"
                      loading={formik.isSubmitting}
                    >
                      Calculate
                    </Button>
                  )}
                </form>
              </>
            </div>
          </div>
          <div
            className={`result__container ${
              isCalculatorVisible ? 'result__container-visible' : ''
            }`}
          >
            {isCalculatorVisible ? (
              <div className="result__content">
                <div className="result__gauge">
                  <Gauge />
                  <div className="result__gauge-label-container">
                    <span className="result__text">Additional cash flow</span>
                    <span className="result__gauge-label-title">
                      {formatCurrency(resolveCashflow)}
                    </span>
                  </div>
                </div>
                <div className="result__numbers">
                  <div>
                    <span className="result__text">Cash flow improvement</span>
                    <span className="result__numbers-title">
                      + {cashflowIncrease}%
                    </span>
                  </div>
                  <div>
                    <span className="result__text">Total cash flow</span>
                    <span className="result__numbers-title">
                      {formatCurrency(totalCashflow)}
                    </span>
                  </div>
                  <div>
                    <span className="result__text">
                      Monthly A/R reps hours saved
                    </span>
                    <span className="result__numbers-title">
                      {apRepHours && apRepHours >= 10_000
                        ? `${formatNumber(apRepHours / 8)} days`
                        : apRepHours
                        ? `${formatNumber(apRepHours)} hours`
                        : '- hours'}
                    </span>
                  </div>
                </div>
                <div className="result__benefits">
                  <div>
                    <BoxIcon />
                    <span className="result__benefits-text">
                      Invest in inventory
                    </span>
                  </div>
                  <div>
                    <MoneyIcon />
                    <span className="result__benefits-text">
                      Pay vendors faster
                    </span>
                  </div>
                  <div>
                    <HireIcon />
                    <span className="result__benefits-text">
                      Grow your team
                    </span>
                  </div>
                  <div>
                    <TagIcon />
                    <span className="result__benefits-text">
                      Access to early pay discounts
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
      <Footer darkSkin />
      <style jsx>{`
        .container {
          padding-top: 65px;
          position: relative;
          min-height: 800px;
        }
        @media (max-width: 1024px) {
          .container-with-calculator {
            min-height: 1400px;
          }
        }
        .calculator__container {
          width: 100%;
          position: absolute;
          left: 0;
        }
        .calculator__container-with-calculator {
          width: 47%;
          transition: width 600ms ease-in-out;
        }
        @media (max-width: 1024px) {
          .calculator__container-with-calculator {
            width: 100%;
            transition: none;
          }
        }
        .calculator__content {
          max-width: 510px;
          width: 100%;
          position: relative;
          margin: 0 auto;
        }
        .calculator__header {
          font-family: ${fonts.halyardDisplay};
          color: ${colors.darkSlateBlue};
          font-size: 32px;
          font-weight: 400;
          letter-spacing: 0.48px;
          line-height: 1.4;
          margin: 0 0 4px 0;
        }
        .calculator__subtitle {
          font-family: ${fonts.halyardDisplay};
          color: ${colors.darkSlateBlue};
          font-size: 22px;
          font-weight: 350;
          letter-spacing: 0.61px;
          margin-bottom: 16px;
          line-height: 1.4;
          margin: 0 0 30px 0;
        }
        .calculator__select {
          margin-bottom: 32px;
        }
        .result__container {
          position: absolute;
          right: -50%;
          opacity: 0;
        }
        .result__container-visible {
          width: 47%;
          transition: right 600ms ease-in-out, opacity 900ms ease-in-out;
          right: 0;
          opacity: 1;
        }
        @media (max-width: 1024px) {
          .result__container-visible {
            top: 680px;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .result__container-visible {
            top: 720px;
          }
        }
        .result__content {
          box-sizing: border-box;
          margin: 0 auto;
          background-color: #f7f8fa;
          box-shadow: 0 2px 5px 0 rgba(60, 77, 87, 0.1),
            0 1px 1px 0 rgba(60, 77, 87, 0.2);
          border-radius: 8px;
          max-width: 504px;
          width: 100%;
          padding: 32px;
        }
        @media (max-width: 480px) {
          .result__content {
            padding: 32px 16px;
          }
        }
        .result__gauge {
          position: relative;
        }
        @media (max-width: 480px) {
          .result__gauge {
            padding-top: 64px;
          }
        }
        .result__gauge-label-container {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          padding-top: 24px;
        }
        .result__text {
          font-family: ${fonts.halyardText};
          color: ${colors.darkSlateBlue};
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.4px;
          line-height: 1.2;
          display: block;
        }
        .result__gauge-label-title {
          font-family: ${fonts.halyardDisplay};
          color: ${colors.darkSlateBlue};
          font-size: 32px;
          font-weight: 400;
          letter-spacing: 0.47px;
          line-height: 1.2;
          display: block;
        }
        .result__numbers {
          display: grid;
          column-gap: 16px;
          align-items: end;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          text-align: center;
          margin-top: 32px;
        }
        @media (max-width: 480px) {
          .result__numbers {
            margin-top: 48px;
            grid-template-columns: none;
          }
        }
        .result__numbers-title {
          font-family: ${fonts.halyardDisplay};
          color: ${colors.darkSlateBlue};
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 0.47px;
          line-height: 1.2;
          display: block;
          padding-top: 4px;
        }
        @media (max-width: 480px) {
          .result__numbers-title {
            margin-bottom: 24px;
          }
        }
        .result__benefits {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 32px;
          row-gap: 32px;
          text-align: center;
          margin-top: 60px;
          padding-right: 32px;
          padding-left: 32px;
        }
        @media (max-width: 480px) {
          .result__benefits {
            column-gap: 16px;
            padding-right: 0;
            padding-left: 0;
            margin-top: 32px;
          }
        }
        .result__benefits-text {
          font-family: ${fonts.halyardDisplay};
          color: ${colors.darkSlateBlue};
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.5px;
          line-height: 1.2;
          display: block;
        }
      `}</style>
      <style jsx global>
        {`
          .calculator__form_button {
            margin-top: 48px;
          }
          .calculator__gauge-svg {
            display: block;
            margin: 0 auto;
          }
          @media (max-width: 480px) {
            .calculator__gauge-svg {
              display: none;
            }
          }
          .calculator__result-benefits-icon {
            display: block;
            margin: 0 auto;
            min-height: 60px;
            padding-bottom: 8px;
          }
        `}
      </style>
    </Layout>
  );
}

const Gauge = () => (
  <svg
    width="296"
    height="253"
    viewBox="0 0 296 253"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="calculator__gauge-svg"
  >
    <g filter="url(#filter0_dd)">
      <path
        d="M48.9151 245.083C48.1341 245.864 46.8664 245.865 46.0965 245.073C26.9861 225.417 13.9577 200.641 8.60379 173.726C3.1198 146.156 5.93439 117.579 16.6916 91.6084C27.4489 65.638 45.6657 43.4408 69.0384 27.8237C92.4111 12.2065 119.89 3.87093 148 3.87094C176.11 3.87094 203.589 12.2066 226.962 27.8237C250.334 43.4408 268.551 65.638 279.308 91.6084C290.066 117.579 292.88 146.156 287.396 173.726C282.042 200.641 269.014 225.417 249.903 245.073C249.133 245.865 247.866 245.864 247.085 245.083L219.643 217.641C218.862 216.86 218.863 215.595 219.628 214.798C232.754 201.133 241.708 183.986 245.41 165.374C249.242 146.108 247.275 126.139 239.758 107.991C232.241 89.8426 219.511 74.3313 203.178 63.418C186.845 52.5048 167.643 46.6799 148 46.6799C128.357 46.6799 109.155 52.5048 92.8218 63.418C76.489 74.3313 63.7591 89.8426 56.242 107.991C48.7248 126.139 46.758 146.108 50.5902 165.374C54.2922 183.986 63.2455 201.133 76.3715 214.798C77.1366 215.595 77.1383 216.86 76.3572 217.641L48.9151 245.083Z"
        fill="url(#gradient_linear)"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd"
        x="0.873047"
        y="0.871094"
        width="294.254"
        height="251.797"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.235294 0 0 0 0 0.258824 0 0 0 0 0.341176 0 0 0 0.201459 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.235294 0 0 0 0 0.301961 0 0 0 0 0.341176 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow"
          result="effect2_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient id="gradient_linear" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="25%" stopColor="#FF5E65" />
        <stop offset="45%" stopColor="#FED9D5" />
        <stop offset="55%" stopColor="#FED9D5" />
        <stop offset="75%" stopColor="#0AF0FF" />
      </linearGradient>
    </defs>
  </svg>
);

const BoxIcon = () => (
  <svg
    width="52"
    height="58"
    viewBox="0 0 52 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="calculator__result-benefits-icon"
  >
    <path
      d="M2 14.0568V43.6302L25.8862 55.9146M2 14.0568L25.8862 2L49.8046 13.9555M2 14.0568L25.8862 26.1137M25.8862 55.9146L49.9999 43.6302V14.0568L49.8046 13.9555M25.8862 55.9146V26.1137M25.8862 26.1137L34.5307 21.7195M49.8046 13.9555L41.1022 18.3791M34.5307 21.7195V41.1279L41.8103 37.4881L41.1022 18.3791M34.5307 21.7195L41.1022 18.3791M34.5307 21.7195L21.5639 15.1943L28.1611 11.782L41.1022 18.3791"
      stroke="#0F2454"
      strokeWidth="3"
    />
  </svg>
);

const MoneyIcon = () => (
  <svg
    width="105"
    height="49"
    viewBox="0 0 105 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="calculator__result-benefits-icon"
  >
    <path
      d="M9.78271 11.3943L24.4566 5.74628L24.4566 17.0423L9.78271 11.3943Z"
      fill="#0F2454"
    />
    <circle cx="94.5654" cy="11.394" r="1.95652" fill="#0F2454" />
    <rect
      x="21.46"
      y="9.81836"
      width="17.6277"
      height="3.06569"
      rx="1.53285"
      fill="#0F2454"
    />
    <rect
      x="73.5767"
      y="9.81836"
      width="16.8613"
      height="3.06569"
      rx="1.53285"
      fill="#0F2454"
    />
    <path
      d="M-2.85074e-07 25.1208L14.6739 19.4728L14.6739 30.7688L-2.85074e-07 25.1208Z"
      fill="#0F2454"
    />
    <circle cx="103.043" cy="25.0893" r="1.95652" fill="#0F2454" />
    <rect
      x="13.7954"
      y="23.6113"
      width="21.4599"
      height="3.06569"
      rx="1.53285"
      fill="#0F2454"
    />
    <rect
      x="78.1753"
      y="23.6113"
      width="20.6934"
      height="3.06569"
      rx="1.53285"
      fill="#0F2454"
    />
    <path
      d="M8.99023 38.6814L23.6641 33.0334L23.6641 44.3294L8.99023 38.6814Z"
      fill="#0F2454"
    />
    <circle cx="94.5654" cy="38.1323" r="1.95652" fill="#0F2454" />
    <rect
      x="72.8105"
      y="37.4082"
      width="17.6277"
      height="3.06569"
      rx="1.53285"
      fill="#0F2454"
    />
    <rect
      x="21.46"
      y="37.4082"
      width="18.3942"
      height="3.06569"
      rx="1.53285"
      fill="#0F2454"
    />
    <circle
      cx="56.4127"
      cy="24.7633"
      r="22.2715"
      stroke="#0F2454"
      strokeWidth="3.06569"
    />
    <path
      d="M55.2344 36.6247C53.8705 36.6247 52.5714 36.3963 51.3374 35.9395C50.1249 35.4826 49.1074 34.6994 48.2847 33.5899L50.558 31.5993C51.0343 32.339 51.6946 32.9264 52.539 33.3615C53.405 33.7966 54.3035 34.0359 55.2344 34.0794V25.7907C54.3901 25.5732 53.5782 25.2904 52.7988 24.9423C52.0194 24.5725 51.3265 24.1265 50.7203 23.6044C50.1358 23.0822 49.6703 22.4622 49.3239 21.7443C48.9775 21.0046 48.8043 20.1453 48.8043 19.1663C48.8043 18.2526 48.9775 17.4151 49.3239 16.6536C49.6703 15.8922 50.1358 15.2396 50.7203 14.6957C51.3265 14.1301 52.0194 13.6841 52.7988 13.3577C53.5782 13.0097 54.3901 12.803 55.2344 12.7377V10.584H56.7933V12.7377C57.9624 12.7377 59.1099 12.9553 60.2357 13.3904C61.3831 13.8255 62.3358 14.489 63.0935 15.381L60.9501 17.3389C60.4522 16.6863 59.846 16.1859 59.1315 15.8378C58.417 15.468 57.6376 15.2831 56.7933 15.2831V23.4086C57.6593 23.6914 58.5036 23.996 59.3264 24.3223C60.1491 24.6486 60.8744 25.0619 61.5022 25.5623C62.1517 26.0409 62.6605 26.6392 63.0286 27.3571C63.4183 28.075 63.6131 28.967 63.6131 30.033C63.6131 31.0119 63.4291 31.893 63.0611 32.6762C62.693 33.4594 62.195 34.1338 61.5672 34.6994C60.961 35.265 60.2465 35.711 59.4238 36.0373C58.6011 36.3637 57.7242 36.5595 56.7933 36.6247V38.9416H55.2344V36.6247ZM55.2344 15.2831C54.1736 15.4789 53.3184 15.9248 52.6689 16.621C52.041 17.2954 51.7271 18.1547 51.7271 19.199C51.7271 19.7646 51.8137 20.2432 51.9869 20.6348C52.1817 21.0264 52.4307 21.3636 52.7338 21.6464C53.0586 21.9292 53.4266 22.1794 53.838 22.397C54.271 22.5928 54.7365 22.7885 55.2344 22.9843V15.2831ZM56.7933 34.0794C57.8974 33.9489 58.8176 33.5246 59.5537 32.8067C60.3115 32.0888 60.6903 31.2077 60.6903 30.1635C60.6903 29.5761 60.5821 29.0649 60.3656 28.6298C60.1491 28.1947 59.8568 27.8248 59.4887 27.5203C59.1207 27.2157 58.6985 26.9655 58.2222 26.7697C57.7675 26.5522 57.2912 26.3672 56.7933 26.215V34.0794Z"
      fill="#0F2454"
    />
    <rect
      x="54.416"
      y="10.584"
      width="3.06569"
      height="28.3577"
      fill="#0F2454"
    />
  </svg>
);

const HireIcon = () => (
  <svg
    width="61"
    height="49"
    viewBox="0 0 61 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="calculator__result-benefits-icon"
  >
    <path
      d="M45.7849 23.6159C44.8038 22.3221 42.8854 23.794 43.4956 24.9098L48.4012 35.2608C48.8653 35.6119 49.0065 35.9078 50.0363 35.9078L55.923 32.9965L60.1744 30.7323C61.8096 29.7619 60.8285 27.4976 58.8663 28.1445L51.9986 31.3792C54.2878 24.5863 53.5978 18.886 51.9436 14.9694C49.9825 10.3263 46.6026 6.41879 42.2853 3.8035C37.968 1.18821 32.9334 -0.00152304 27.8987 0.403757C22.864 0.809033 18.0858 2.78865 14.2448 6.06066L13.0821 7.05116L13.0811 7.05019C13.0774 7.0539 13.0737 7.05763 13.0701 7.06138L13.0077 7.11455L13.0151 7.12322C12.8128 7.37199 12.7756 7.68347 12.8423 7.99287C12.9152 8.33128 13.1131 8.67624 13.3693 8.96449C13.6255 9.25288 13.9471 9.49247 14.276 9.61361C14.5659 9.72032 14.8709 9.73764 15.1376 9.60233L15.154 9.6215L16.3912 8.56761C19.7032 5.74624 23.8232 4.03927 28.1645 3.68982C32.5058 3.34035 36.847 4.36623 40.5697 6.62132C44.2924 8.87641 47.3642 12.1725 49.0552 16.1762C50.7462 20.1798 51.0189 23.5886 50.0363 27.821L49.3823 30.4088L45.7849 23.6159Z"
      fill="#0F2454"
    />
    <path
      d="M15.3988 24.945C16.5174 25.7565 18.1443 23.9308 17.5341 22.815L9.39952 14.8023C8.93538 14.4512 8.66796 14.4163 8.17933 14.8023L0.0447165 23.4236C-0.260243 24.5394 1.06163 25.5537 1.97669 25.1479L5.89397 21.1812C5.349 25.3682 5.92255 29.6398 7.57679 33.5564C9.53789 38.1995 12.9178 42.107 17.2351 44.7223C21.5524 47.3375 26.5869 48.5273 31.6217 48.122C36.6564 47.7167 41.4345 45.7371 45.2755 42.4651L46.4383 41.4746L46.4392 41.4756C46.443 41.4719 46.4466 41.4681 46.4503 41.4644L46.5127 41.4112L46.5053 41.4025C46.7075 41.1538 46.7447 40.8423 46.6781 40.5329C46.6051 40.1945 46.4072 39.8495 46.1511 39.5613C45.8949 39.2729 45.5733 39.0333 45.2443 38.9122C44.9545 38.8054 44.6495 38.7881 44.3827 38.9234L44.3663 38.9043L43.1292 39.9582C39.8172 42.7795 35.6971 44.4865 31.3558 44.8359C27.0145 45.1854 22.6734 44.1595 18.9507 41.9044C15.228 39.6494 12.3136 36.28 10.6226 32.2764C8.93158 28.2728 8.55021 23.839 9.53279 19.6065L9.61297 19.2612L15.3988 24.945Z"
      fill="#0F2454"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.6057 17.5688C36.6057 19.1949 36.0415 20.6895 35.0978 21.8686C39.1245 23.8571 41.8932 27.9974 41.8932 32.7828C41.8932 33.333 41.8566 33.8747 41.7856 34.4056H17.5968C17.5259 33.8747 17.4893 33.333 17.4893 32.7828C17.4893 27.9974 20.258 23.8571 24.2847 21.8686C23.341 20.6895 22.7768 19.1949 22.7768 17.5688C22.7768 13.7597 25.8725 10.6718 29.6912 10.6718C33.51 10.6718 36.6057 13.7597 36.6057 17.5688ZM33.3518 17.5688C33.3518 18.9294 32.6058 20.1162 31.4994 20.7443C30.8445 21.1162 30.3056 21.2797 29.6912 21.2797C29.0769 21.2797 28.452 21.0282 27.8831 20.7443C26.7767 20.1162 26.0307 18.9294 26.0307 17.5688C26.0307 15.5522 27.6696 13.9175 29.6912 13.9175C31.7129 13.9175 33.3518 15.5522 33.3518 17.5688ZM20.8907 31.16H38.4918C37.7267 27.0054 34.0775 23.8573 29.6912 23.8573C25.305 23.8573 21.6558 27.0054 20.8907 31.16Z"
      fill="#0F2454"
    />
  </svg>
);

const TagIcon = () => (
  <svg
    width="55"
    height="51"
    viewBox="0 0 55 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="calculator__result-benefits-icon"
  >
    <path
      d="M16.9797 10.8303C15.164 9.38972 15.1628 7.69101 14.8248 6.33686C14.4867 4.98272 13.1299 3.28647 11.4338 2.26907C9.73781 1.25166 7.36334 1.58971 5.66733 2.60643C3.97133 3.62316 2.29855 5.24665 1.936 8.37215C1.57345 11.4976 2.12626 12.6911 3.97022 15.8347C3.97022 15.8347 4.30942 16.5131 6.081 18.2461C7.85257 19.9791 16.2791 26.2432 9.13239 33.81C2.40614 40.5365 7.13429 47.4794 10.077 48.7404C13.7204 50.3016 19.2218 48.7462 20.2507 43.9974C20.8387 41.2837 19.9115 38.9093 19.2218 37.8738"
      stroke="#0F2454"
      strokeWidth="2.37444"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.9133 11.5533C34.614 11.5533 35.5949 11.8335 36.0153 12.2539C36.4357 12.6743 54.0921 30.051 54.0921 30.051C54.6578 30.8692 54.6421 31.3294 54.0921 32.153L39.2383 47.2871C38.4066 48.0157 37.914 47.9529 36.9962 47.147L19.1996 29.3504C18.6013 28.7516 18.5139 28.4084 18.4139 28.0157C18.3968 27.9486 18.3793 27.8799 18.3589 27.8083C18.0786 26.828 17.7983 13.3755 17.7983 12.8144C17.7983 12.2534 18.0786 11.2729 19.3398 10.9933C20.7411 10.8526 33.9133 11.5533 33.9133 11.5533ZM30.7309 26.3202C30.0703 25.6787 29.6386 24.9252 29.436 24.0599C29.2471 23.208 29.3153 22.3115 29.6407 21.3706C29.9798 20.443 30.577 19.5388 31.4324 18.658C32.2877 17.7771 33.1673 17.1604 34.0712 16.808C35.0021 16.4551 35.8895 16.3674 36.7333 16.545C37.6042 16.7221 38.3699 17.1315 39.0306 17.773C39.6912 18.4145 40.116 19.1612 40.3049 20.0132C40.5209 20.8648 40.4594 21.7543 40.1203 22.6819C39.7949 23.6228 39.2112 24.5268 38.3692 25.3939C37.5139 26.2748 36.6207 26.8916 35.6898 27.2445C34.7726 27.6107 33.8785 27.7053 33.0076 27.5281C32.1505 27.3643 31.3916 26.9617 30.7309 26.3202ZM46.1859 25.5233L48.1678 27.4478L27.4712 34.3863L25.4893 32.4617L46.1859 25.5233ZM32.6154 24.3795C32.9182 24.6735 33.3397 24.7352 33.8799 24.5644C34.4334 24.3799 35.1178 23.8679 35.9331 23.0283C37.43 21.4868 37.8343 20.3819 37.1461 19.7137C36.458 19.0454 35.3654 19.482 33.8685 21.0236C33.0533 21.8631 32.5616 22.5623 32.3934 23.121C32.2386 23.666 32.3126 24.0855 32.6154 24.3795ZM35.0274 41.7237C34.3668 41.0822 33.9351 40.3287 33.7325 39.4634C33.5436 38.6115 33.6118 37.715 33.9372 36.7741C34.2763 35.8465 34.8735 34.9423 35.7289 34.0615C36.5842 33.1806 37.4638 32.5639 38.3677 32.2115C39.2986 31.8586 40.186 31.7709 41.0298 31.9485C41.9007 32.1256 42.6664 32.535 43.3271 33.1765C43.9877 33.818 44.4125 34.5647 44.6014 35.4167C44.8174 36.2683 44.7559 37.1578 44.4168 38.0854C44.0914 39.0263 43.5077 39.9303 42.6657 40.7974C41.8104 41.6783 40.9172 42.2951 39.9863 42.648C39.0691 43.0142 38.175 43.1088 37.3041 42.9316C36.447 42.7678 35.6881 42.3652 35.0274 41.7237ZM36.9119 39.783C37.2147 40.077 37.6362 40.1387 38.1764 39.9679C38.7299 39.7834 39.4143 39.2714 40.2296 38.4318C41.7265 36.8903 42.1308 35.7854 41.4426 35.1171C40.7544 34.4489 39.6619 34.8855 38.165 36.4271C37.3498 37.2666 36.8581 37.9658 36.6899 38.5245C36.5351 39.0695 36.6091 39.489 36.9119 39.783ZM24.0016 19.7546C25.5498 19.7546 26.8049 18.4995 26.8049 16.9513C26.8049 15.403 25.5498 14.148 24.0016 14.148C22.4533 14.148 21.1982 15.403 21.1982 16.9513C21.1982 18.4995 22.4533 19.7546 24.0016 19.7546Z"
      fill="#0F2454"
    />
    <path
      d="M36.0153 12.2539L36.2552 12.0141V12.0141L36.0153 12.2539ZM33.9133 11.5533L33.8953 11.892L33.9043 11.8925H33.9133V11.5533ZM54.0921 30.051L54.3712 29.8581L54.3529 29.8318L54.3301 29.8093L54.0921 30.051ZM54.0921 32.153L54.3342 32.3906L54.3565 32.3679L54.3742 32.3414L54.0921 32.153ZM39.2383 47.2871L39.4618 47.5422L39.4714 47.5338L39.4804 47.5247L39.2383 47.2871ZM36.9962 47.147L36.7564 47.3868L36.7641 47.3946L36.7724 47.4018L36.9962 47.147ZM19.1996 29.3504L18.9597 29.5901L18.9598 29.5902L19.1996 29.3504ZM18.4139 28.0157L18.7426 27.932H18.7426L18.4139 28.0157ZM18.3589 27.8083L18.0327 27.9016H18.0327L18.3589 27.8083ZM19.3398 10.9933L19.3059 10.6558L19.2859 10.6578L19.2663 10.6621L19.3398 10.9933ZM29.436 24.0599L29.1048 24.1333L29.1057 24.1373L29.436 24.0599ZM30.7309 26.3202L30.9672 26.0768L30.7309 26.3202ZM29.6407 21.3706L29.322 21.2541L29.3201 21.2597L29.6407 21.3706ZM31.4324 18.658L31.6757 18.8943L31.4324 18.658ZM34.0712 16.808L33.9509 16.4908L33.9479 16.4919L34.0712 16.808ZM36.7333 16.545L36.6634 16.8769L36.6656 16.8774L36.7333 16.545ZM39.0306 17.773L38.7943 18.0163V18.0163L39.0306 17.773ZM40.3049 20.0132L39.9736 20.0867L39.9761 20.0966L40.3049 20.0132ZM40.1203 22.6819L39.8016 22.5654L39.7997 22.571L40.1203 22.6819ZM38.3692 25.3939L38.6126 25.6302L38.3692 25.3939ZM35.6898 27.2445L35.5695 26.9273L35.564 26.9295L35.6898 27.2445ZM33.0076 27.5281L33.0752 27.1957L33.0713 27.1949L33.0076 27.5281ZM48.1678 27.4478L48.2756 27.7694L48.8036 27.5924L48.4041 27.2045L48.1678 27.4478ZM46.1859 25.5233L46.4222 25.2799L46.2739 25.136L46.078 25.2017L46.1859 25.5233ZM27.4712 34.3863L27.2349 34.6297L27.3831 34.7736L27.579 34.7079L27.4712 34.3863ZM25.4893 32.4617L25.3814 32.1401L24.8534 32.3171L25.253 32.7051L25.4893 32.4617ZM33.8799 24.5644L33.9821 24.8879L33.9871 24.8862L33.8799 24.5644ZM32.6154 24.3795L32.3791 24.6229L32.6154 24.3795ZM35.9331 23.0283L35.6897 22.792L35.9331 23.0283ZM37.1461 19.7137L36.9098 19.957L37.1461 19.7137ZM33.8685 21.0236L34.1119 21.2599L33.8685 21.0236ZM32.3934 23.121L32.0686 23.0232L32.0671 23.0283L32.3934 23.121ZM33.7325 39.4634L33.4013 39.5368L33.4022 39.5408L33.7325 39.4634ZM35.0274 41.7237L34.7911 41.967L35.0274 41.7237ZM33.9372 36.7741L33.6185 36.6576L33.6166 36.6632L33.9372 36.7741ZM35.7289 34.0615L35.4855 33.8252L35.7289 34.0615ZM38.3677 32.2115L38.2474 31.8943L38.2444 31.8954L38.3677 32.2115ZM41.0298 31.9485L40.9599 32.2804L40.9621 32.2809L41.0298 31.9485ZM43.3271 33.1765L43.5634 32.9331L43.3271 33.1765ZM44.6014 35.4167L44.2701 35.4902L44.2726 35.5001L44.6014 35.4167ZM44.4168 38.0854L44.0981 37.9689L44.0962 37.9745L44.4168 38.0854ZM42.6657 40.7974L42.9091 41.0337L42.6657 40.7974ZM39.9863 42.648L39.866 42.3308L39.8605 42.333L39.9863 42.648ZM37.3041 42.9316L37.3717 42.5992L37.3678 42.5984L37.3041 42.9316ZM38.1764 39.9679L38.2786 40.2914L38.2836 40.2897L38.1764 39.9679ZM36.9119 39.783L36.6756 40.0264L36.9119 39.783ZM40.2296 38.4318L39.9862 38.1955L40.2296 38.4318ZM41.4426 35.1171L41.6789 34.8738L41.4426 35.1171ZM38.165 36.4271L37.9217 36.1908L38.165 36.4271ZM36.6899 38.5245L36.365 38.4267L36.3636 38.4318L36.6899 38.5245ZM36.2552 12.0141C35.9889 11.7478 35.5785 11.552 35.1723 11.4227C34.7587 11.2911 34.3035 11.2141 33.9133 11.2141V11.8925C34.2239 11.8925 34.6095 11.9556 34.9666 12.0692C35.3311 12.1852 35.6213 12.3396 35.7755 12.4938L36.2552 12.0141ZM54.0921 30.051C54.3301 29.8093 54.33 29.8092 54.3299 29.8091C54.3297 29.809 54.3295 29.8088 54.3293 29.8085C54.3287 29.808 54.3279 29.8072 54.3269 29.8061C54.3247 29.804 54.3215 29.8009 54.3173 29.7967C54.3088 29.7883 54.2961 29.7759 54.2794 29.7594C54.246 29.7265 54.1964 29.6777 54.1317 29.614C54.0023 29.4867 53.8124 29.2998 53.5706 29.0618C53.087 28.5858 52.3956 27.9054 51.5647 27.0876C49.9028 25.452 47.6827 23.2667 45.4493 21.0684C40.9815 16.6705 36.4641 12.223 36.2552 12.0141L35.7755 12.4938C35.9869 12.7052 40.5079 17.1563 44.9734 21.5519C47.2068 23.7502 49.427 25.9355 51.0888 27.5711C51.9197 28.3889 52.6111 29.0694 53.0947 29.5453C53.3365 29.7833 53.5264 29.9702 53.6558 30.0976C53.7205 30.1612 53.7701 30.2101 53.8035 30.2429C53.8203 30.2594 53.8329 30.2719 53.8414 30.2802C53.8457 30.2844 53.8489 30.2875 53.851 30.2896C53.8521 30.2907 53.8529 30.2915 53.8534 30.292C53.8537 30.2923 53.8539 30.2925 53.854 30.2926C53.8541 30.2927 53.8542 30.2928 54.0921 30.051ZM54.3742 32.3414C54.6592 31.9147 54.8471 31.5246 54.8497 31.1021C54.8523 30.6768 54.6671 30.2862 54.3712 29.8581L53.8131 30.244C54.0828 30.634 54.1726 30.8826 54.1713 31.0979C54.17 31.316 54.0751 31.5677 53.8101 31.9646L54.3742 32.3414ZM39.4804 47.5247L54.3342 32.3906L53.8501 31.9154L38.9962 47.0495L39.4804 47.5247ZM36.7724 47.4018C37.2347 47.8078 37.6615 48.0964 38.1245 48.1307C38.6069 48.1665 39.0278 47.9225 39.4618 47.5422L39.0148 47.0319C38.6172 47.3803 38.3759 47.4691 38.1747 47.4542C37.954 47.4378 37.6755 47.292 37.22 46.8921L36.7724 47.4018ZM18.9598 29.5902L36.7564 47.3868L37.2361 46.9071L19.4395 29.1105L18.9598 29.5902ZM18.0852 28.0995C18.135 28.295 18.1897 28.5139 18.319 28.7624C18.4484 29.0109 18.6435 29.2737 18.9597 29.5901L19.4396 29.1106C19.1574 28.8282 19.0098 28.6201 18.9208 28.4492C18.8318 28.2782 18.7929 28.1292 18.7426 27.932L18.0852 28.0995ZM18.0327 27.9016C18.0516 27.9677 18.068 28.0317 18.0852 28.0995L18.7426 27.932C18.7257 27.8654 18.707 27.7922 18.685 27.7151L18.0327 27.9016ZM17.4591 12.8144C17.4591 13.1009 17.5294 16.6095 17.6344 20.1642C17.687 21.9427 17.7484 23.736 17.8142 25.1467C17.8471 25.8517 17.8812 26.4634 17.916 26.9308C17.9334 27.1643 17.9512 27.3643 17.9694 27.5231C17.9867 27.6742 18.0066 27.8101 18.0327 27.9016L18.685 27.7151C18.6761 27.6841 18.661 27.5999 18.6434 27.446C18.6267 27.2998 18.6097 27.1097 18.5926 26.8804C18.5584 26.4223 18.5247 25.8178 18.4919 25.115C18.4263 23.7101 18.3651 21.9214 18.3126 20.1441C18.2074 16.5872 18.1375 13.089 18.1375 12.8144H17.4591ZM19.2663 10.6621C18.5509 10.8208 18.0889 11.1871 17.8117 11.6134C17.5406 12.0305 17.4591 12.484 17.4591 12.8144H18.1375C18.1375 12.5839 18.1963 12.2666 18.3805 11.9832C18.5587 11.7091 18.8675 11.4455 19.4132 11.3245L19.2663 10.6621ZM33.9133 11.5533C33.9314 11.2145 33.9313 11.2145 33.9312 11.2145C33.9311 11.2145 33.931 11.2145 33.9308 11.2145C33.9304 11.2145 33.9297 11.2145 33.9289 11.2144C33.9273 11.2143 33.9249 11.2142 33.9218 11.214C33.9154 11.2137 33.9059 11.2132 33.8934 11.2125C33.8685 11.2112 33.8314 11.2092 33.7829 11.2067C33.686 11.2016 33.5438 11.1941 33.3622 11.1847C32.9992 11.1658 32.479 11.139 31.8504 11.1072C30.5933 11.0437 28.9023 10.9605 27.1674 10.8816C25.4328 10.8028 23.6532 10.7284 22.2189 10.6824C20.7998 10.6369 19.6845 10.6178 19.3059 10.6558L19.3737 11.3308C19.6957 11.2985 20.7525 11.3141 22.1972 11.3604C23.6269 11.4063 25.403 11.4806 27.1367 11.5594C28.87 11.6381 30.5597 11.7213 31.8162 11.7848C32.4444 11.8165 32.9642 11.8433 33.327 11.8622C33.5084 11.8716 33.6505 11.8791 33.7472 11.8842C33.7956 11.8867 33.8327 11.8887 33.8576 11.89C33.8701 11.8906 33.8795 11.8912 33.8858 11.8915C33.889 11.8917 33.8914 11.8918 33.893 11.8919C33.8937 11.8919 33.8943 11.8919 33.8947 11.892C33.8949 11.892 33.8951 11.892 33.8952 11.892C33.8953 11.892 33.8953 11.892 33.9133 11.5533ZM29.1057 24.1373C29.3237 25.0681 29.7892 25.8785 30.4946 26.5635L30.9672 26.0768C30.3514 25.4788 29.9536 24.7823 29.7662 23.9826L29.1057 24.1373ZM29.3201 21.2597C28.9772 22.2514 28.9005 23.2119 29.1048 24.1333L29.7671 23.9865C29.5937 23.204 29.6534 22.3716 29.9613 21.4814L29.3201 21.2597ZM31.189 18.4217C30.3083 19.3287 29.6811 20.2723 29.3221 21.2541L29.9593 21.4871C30.2785 20.6138 30.8458 19.749 31.6757 18.8943L31.189 18.4217ZM33.9479 16.4919C32.9885 16.8661 32.0696 17.5149 31.189 18.4217L31.6757 18.8943C32.5059 18.0393 33.3462 17.4548 34.1944 17.124L33.9479 16.4919ZM36.8031 16.2131C35.8865 16.0202 34.9329 16.1186 33.9509 16.4908L34.1914 17.1251C35.0713 16.7916 35.8924 16.7147 36.6634 16.8769L36.8031 16.2131ZM39.2669 17.5296C38.5615 16.8446 37.7377 16.4032 36.8009 16.2126L36.6656 16.8774C37.4706 17.0411 38.1784 17.4183 38.7943 18.0163L39.2669 17.5296ZM40.6361 19.9398C40.432 19.0195 39.9723 18.2146 39.2669 17.5296L38.7943 18.0163C39.4102 18.6144 39.8 19.303 39.9737 20.0866L40.6361 19.9398ZM40.4388 22.7983C40.7984 21.815 40.8685 20.8555 40.6337 19.9298L39.9761 20.0966C40.1733 20.874 40.1204 21.6937 39.8017 22.5654L40.4388 22.7983ZM38.6126 25.6302C39.4819 24.7349 40.0962 23.7896 40.4408 22.7927L39.7997 22.571C39.4937 23.456 38.9405 24.3187 38.1259 25.1576L38.6126 25.6302ZM35.81 27.5617C36.797 27.1876 37.7305 26.5386 38.6126 25.6302L38.1259 25.1576C37.2973 26.0109 36.4445 26.5957 35.5695 26.9273L35.81 27.5617ZM32.94 27.8605C33.8828 28.0523 34.8441 27.9474 35.8156 27.5595L35.564 26.9295C34.7011 27.274 33.8743 27.3583 33.0752 27.1957L32.94 27.8605ZM30.4946 26.5635C31.2001 27.2485 32.0181 27.6844 32.944 27.8613L33.0713 27.1949C32.2829 27.0443 31.5831 26.6749 30.9672 26.0768L30.4946 26.5635ZM48.4041 27.2045L46.4222 25.2799L45.9496 25.7666L47.9315 27.6912L48.4041 27.2045ZM27.579 34.7079L48.2756 27.7694L48.06 27.1262L27.3634 34.0647L27.579 34.7079ZM25.253 32.7051L27.2349 34.6297L27.7075 34.143L25.7256 32.2184L25.253 32.7051ZM46.078 25.2017L25.3814 32.1401L25.5971 32.7834L46.2937 25.8449L46.078 25.2017ZM33.7776 24.241C33.3096 24.389 33.0345 24.3137 32.8517 24.1362L32.3791 24.6229C32.8019 25.0334 33.3698 25.0814 33.9821 24.8879L33.7776 24.241ZM35.6897 22.792C34.8816 23.6243 34.2447 24.0853 33.7726 24.2426L33.9871 24.8862C34.6222 24.6746 35.3541 24.1115 36.1764 23.2646L35.6897 22.792ZM36.9098 19.957C37.0332 20.0768 37.0994 20.206 37.1225 20.3503C37.1464 20.4997 37.1276 20.6887 37.0405 20.9269C36.8631 21.4116 36.4279 22.0318 35.6897 22.792L36.1764 23.2646C36.9351 22.4833 37.4506 21.7803 37.6775 21.1601C37.7926 20.8458 37.8394 20.537 37.7924 20.2431C37.7445 19.9441 37.6031 19.6846 37.3824 19.4703L36.9098 19.957ZM34.1119 21.2599C34.8501 20.4997 35.4573 20.0464 35.9365 19.8549C36.172 19.7608 36.3604 19.7365 36.5104 19.756C36.6554 19.7749 36.7864 19.8372 36.9098 19.957L37.3824 19.4703C37.1617 19.256 36.8982 19.1223 36.5979 19.0833C36.3028 19.0449 35.9954 19.1008 35.6847 19.225C35.0714 19.4701 34.3839 20.0059 33.6252 20.7873L34.1119 21.2599ZM32.7182 23.2188C32.8616 22.7423 33.3037 22.0922 34.1119 21.2599L33.6252 20.7873C32.8028 21.6341 32.2615 22.3823 32.0686 23.0233L32.7182 23.2188ZM32.8517 24.1362C32.6689 23.9586 32.5856 23.6859 32.7197 23.2137L32.0671 23.0283C31.8916 23.6461 31.9563 24.2123 32.3791 24.6229L32.8517 24.1362ZM33.4022 39.5408C33.6202 40.4716 34.0857 41.282 34.7911 41.967L35.2637 41.4803C34.6479 40.8823 34.25 40.1858 34.0627 39.3861L33.4022 39.5408ZM33.6166 36.6632C33.2737 37.6549 33.197 38.6154 33.4013 39.5368L34.0636 39.39C33.8902 38.6075 33.9499 37.7751 34.2578 36.8849L33.6166 36.6632ZM35.4855 33.8252C34.6048 34.7322 33.9776 35.6758 33.6186 36.6576L34.2558 36.8906C34.575 36.0173 35.1423 35.1525 35.9722 34.2978L35.4855 33.8252ZM38.2444 31.8954C37.285 32.2696 36.3661 32.9184 35.4855 33.8252L35.9722 34.2978C36.8024 33.4428 37.6427 32.8583 38.4909 32.5275L38.2444 31.8954ZM41.0996 31.6165C40.183 31.4237 39.2294 31.5221 38.2474 31.8943L38.4879 32.5286C39.3678 32.1951 40.1889 32.1182 40.9599 32.2804L41.0996 31.6165ZM43.5634 32.9331C42.858 32.2481 42.0342 31.8067 41.0974 31.6161L40.9621 32.2809C41.7671 32.4446 42.4749 32.8218 43.0908 33.4198L43.5634 32.9331ZM44.9326 35.3433C44.7285 34.423 44.2688 33.6181 43.5634 32.9331L43.0908 33.4198C43.7067 34.0179 44.0965 34.7065 44.2702 35.4901L44.9326 35.3433ZM44.7353 38.2018C45.0949 37.2185 45.165 36.259 44.9302 35.3333L44.2726 35.5001C44.4698 36.2775 44.4169 37.0972 44.0982 37.9689L44.7353 38.2018ZM42.9091 41.0337C43.7784 40.1384 44.3927 39.1931 44.7373 38.1962L44.0962 37.9745C43.7902 38.8595 43.237 39.7222 42.4224 40.5611L42.9091 41.0337ZM40.1065 42.9652C41.0935 42.5911 42.027 41.9421 42.9091 41.0337L42.4224 40.5611C41.5938 41.4144 40.741 41.9992 39.866 42.3308L40.1065 42.9652ZM37.2365 43.264C38.1793 43.4558 39.1406 43.3509 40.1121 42.963L39.8605 42.333C38.9976 42.6775 38.1708 42.7618 37.3717 42.5992L37.2365 43.264ZM34.7911 41.967C35.4966 42.652 36.3146 43.0879 37.2405 43.2648L37.3678 42.5984C36.5794 42.4478 35.8796 42.0784 35.2637 41.4803L34.7911 41.967ZM38.0741 39.6445C37.6061 39.7925 37.331 39.7172 37.1482 39.5397L36.6756 40.0264C37.0984 40.4369 37.6663 40.4849 38.2786 40.2914L38.0741 39.6445ZM39.9862 38.1955C39.178 39.0278 38.5412 39.4888 38.0691 39.6461L38.2836 40.2897C38.9187 40.0781 39.6506 39.515 40.4729 38.6681L39.9862 38.1955ZM41.2063 35.3605C41.3297 35.4803 41.3959 35.6095 41.419 35.7538C41.4429 35.9032 41.4241 36.0922 41.337 36.3304C41.1596 36.8151 40.7244 37.4353 39.9862 38.1955L40.4729 38.6681C41.2316 37.8868 41.7471 37.1838 41.974 36.5636C42.0891 36.2493 42.1359 35.9405 42.0889 35.6466C42.041 35.3476 41.8996 35.0881 41.6789 34.8738L41.2063 35.3605ZM38.4084 36.6634C39.1466 35.9031 39.7538 35.4499 40.233 35.2584C40.4685 35.1643 40.6569 35.14 40.8069 35.1595C40.9519 35.1784 41.0829 35.2407 41.2063 35.3605L41.6789 34.8738C41.4582 34.6595 41.1947 34.5258 40.8944 34.4868C40.5993 34.4484 40.2919 34.5043 39.9812 34.6285C39.3679 34.8736 38.6804 35.4094 37.9217 36.1908L38.4084 36.6634ZM37.0147 38.6223C37.1581 38.1458 37.6002 37.4956 38.4084 36.6634L37.9217 36.1908C37.0993 37.0376 36.558 37.7858 36.3651 38.4268L37.0147 38.6223ZM37.1482 39.5397C36.9654 39.3621 36.8821 39.0894 37.0162 38.6172L36.3636 38.4318C36.1881 39.0496 36.2528 39.6158 36.6756 40.0264L37.1482 39.5397ZM26.4657 16.9513C26.4657 18.3122 25.3625 19.4154 24.0016 19.4154V20.0938C25.7371 20.0938 27.1441 18.6868 27.1441 16.9513H26.4657ZM24.0016 14.4872C25.3625 14.4872 26.4657 15.5904 26.4657 16.9513H27.1441C27.1441 15.2157 25.7371 13.8087 24.0016 13.8087V14.4872ZM21.5374 16.9513C21.5374 15.5904 22.6407 14.4872 24.0016 14.4872V13.8087C22.266 13.8087 20.859 15.2157 20.859 16.9513H21.5374ZM24.0016 19.4154C22.6407 19.4154 21.5374 18.3122 21.5374 16.9513H20.859C20.859 18.6868 22.266 20.0938 24.0016 20.0938V19.4154Z"
      fill="#0F2454"
    />
  </svg>
);
