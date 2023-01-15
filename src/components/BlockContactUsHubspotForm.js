import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useLocation } from '@reach/router';
import { find } from 'lodash';

import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Video from '../components/Video';

import { fonts, colors } from '../constants';
import { trackLinkedIn } from '../utils/linkedin';
import { identifySegment, trackSegment } from '../utils/segment';
import { getCampaign } from '../utils/utm';
import { isPublicEmail } from '../utils/email';

const getHubspotContext = () => {
  const hutk = document.cookie.replace(
    /(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  );

  return {
    hutk: hutk || undefined,
    pageUri: `${window.location.origin}${window.location.pathname}`,
    pageName: document.title,
  };
};

const getDefaultHiddenFields = () => {
  const referralCookie = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith('resolve_referral='));
  const referral = referralCookie ? referralCookie.split('=')[1] : undefined;

  return [
    {
      name: 'lead_type__c',
      value: 'Inquiry',
    },
    {
      name: 'inquiry_type__c',
      value: 'Web Contact Form',
    },
    {
      name: 'leadsource',
      value: referral === 'affirm' ? 'Referral' : 'Inbound',
    },
    {
      name: 'lead_source',
      value: referral === 'affirm' ? 'Referral - Affirm' : 'Web Contact Form',
    },
    {
      name: 'lifecyclestage',
      value: 'marketingqualifiedlead',
    },
  ];
};

const campaignFieldToHubspotField = {
  utm_source: 'utm_source_cf_388275__c',
  utm_medium: 'utm_medium_cf_388271__c',
  utm_campaign: 'utm_campaign_cf_388269__c',
  utm_content: 'utm_content_cf_439125__c',
  utm_term: 'utm_term_cf_388278__c',
  referrer: 'referer_url_cf_388277__c',
  landingPage: 'landing_page_url_cf_437468__c',
  gclid: 'gclid',
};

const getCampaignFields = () => {
  const campaign = getCampaign();
  return Object.keys(campaign)
    .filter(key => campaign[key])
    .map(key => ({
      name: campaignFieldToHubspotField[key],
      value: campaign[key],
    }));
};

export default function BlockContactUsHubspotForm() {
  const [error, setError] = useState(false);
  const [ipAddress, setIpAddress] = useState();
  const [isSecondHubspotFormCreated, setIsSecondHubspotFormCreated] =
    useState(false);

  const { state: locationState } = useLocation();

  useEffect(() => {
    const getIp = async () => {
      try {
        const res = await fetch(
          `https://api.ipstack.com/check?access_key=${process.env.GATSBY_IP_STACK_ACCESS_KEY}`
        );
        const userInfo = await res.json();

        if (userInfo.success === false) {
          throw userInfo.error;
        }

        setIpAddress(userInfo.ip);
      } catch (e) {}
    };

    getIp();
  }, []);

  const formIndex =
    locationState?.formIndex && !isNaN(locationState?.formIndex)
      ? locationState?.formIndex
      : 0;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '8982602',
          formId: '0d89c92b-e587-4d33-b702-719e646b7b07',
          target: '#first-hubspot-form',
        });
      }
    });
  }, []);

  const onSubmitIndex0 = async (values, { setSubmitting }) => {
    setError(false);

    try {
      const res = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/8982602/0d89c92b-e587-4d33-b702-719e646b7b07',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            fields: [
              {
                name: 'firstname',
                value: values.firstName,
              },
              {
                name: 'lastname',
                value: values.lastName,
              },
              {
                name: 'email',
                value: values.email,
              },
              {
                name: 'phone',
                value: values.phone,
              },
              {
                name: 'jobtitle',
                value: values.jobTitle,
              },
              {
                name: 'annual_b2b_revenue',
                value: values.revenue,
              },
              ...getDefaultHiddenFields(),
              ...getCampaignFields(),
            ],
            context: {
              ...getHubspotContext(),
              ipAddress,
            },
          }),
        }
      );
      const response = await res.json();

      if (response.status === 'error') {
        const emailError = find(response.errors, {
          errorType: 'INVALID_EMAIL',
        });

        throw emailError
          ? 'Please enter a different business email address'
          : 'Something went wrong';
      }

      navigate('', { state: { formIndex: 1 } });
      setSubmitting(false);

      identifySegment(values);
      trackSegment('Contact form submitted', {
        ...values,
        context: {
          campaign: getCampaign(),
        },
      });
      trackLinkedIn();
    } catch (error) {
      setError(error);
    }
  };

  const phoneRegExp = /^[a-zA-Z0-9- ]+$/;

  const formikIndex0 = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: '',
      revenue: '',
    },
    validationSchema: object().shape({
      firstName: string().trim().required('Required'),
      lastName: string().trim().required('Required'),
      email: string()
        .trim()
        .lowercase()
        .email('Invalid email')
        .test(
          'publicEmailCheck',
          'Please provide a business email address.',
          email => !isPublicEmail(email)
        )
        .required('Required'),
      phone: string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
      jobTitle: string().trim().required('Required'),
      revenue: string().trim().required('Required'),
    }),
    onSubmit: onSubmitIndex0,
  });

  const onSubmitIndex2 = async (values, { setSubmitting }) => {
    setError(false);

    try {
      const res = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/8982602/af860ba3-c410-47aa-97a1-02f9cba41d57',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            fields: [
              {
                name: 'email',
                value: formikIndex0.values.email,
              },
              {
                name: 'company_industry',
                value: values.industry,
              },
              {
                name: 'company_type',
                value: values.companyType,
              },
              {
                name: 'average_order_size',
                value: values.invoiceSize,
              },
              {
                name: 'how_many_customers_do_you_offer_net_terms_to_',
                value: values.numCustomers,
              },
              {
                name: 'accounting_platform',
                value: values.accountingPlatform,
              },
              {
                name: 'e_commerce_platform',
                value: values.eCommercePlatform,
              },
              {
                name: 'how_did_you_hear_about_resolve_',
                value: values.hearAboutResolve,
              },
              ...getDefaultHiddenFields(),
              ...getCampaignFields(),
            ],
            context: {
              ...getHubspotContext(),
              ipAddress,
            },
          }),
        }
      );
      const response = await res.json();
      if (response.status === 'error') {
        throw 'Something went wrong';
      }

      navigate('', { state: { formIndex: 2 } });
      setSubmitting(false);

      identifySegment(values);
      trackSegment('KYB form submitted', {
        ...values,
        context: {
          campaign: getCampaign(),
        },
      });
    } catch (error) {
      setError(error);
    }
  };

  const formikIndex2 = useFormik({
    initialValues: {
      industry: '',
      companyType: '',
      invoiceSize: '',
      numCustomers: '',
      eCommercePlatform: '',
      accountingPlatform: '',
      hearAboutResolve: '',
    },
    validationSchema: object().shape({
      industry: string().trim().required('Required'),
      companyType: string().trim().required('Required'),
      invoiceSize: string().trim().required('Required'),
      numCustomers: string().trim().required('Required'),
      accountingPlatform: string().trim().required('Required'),
      hearAboutResolve: string().trim(),
    }),
    onSubmit: onSubmitIndex2,
  });

  useEffect(() => {
    if (formIndex !== 0 && !formikIndex0.values.email) {
      navigate('', { state: { formIndex: 0 } });
    }
  });

  useEffect(() => {
    if (formIndex === 1 && window.hbspt && !isSecondHubspotFormCreated) {
      window.hbspt.forms.create({
        portalId: '8982602',
        formId: 'af860ba3-c410-47aa-97a1-02f9cba41d57',
        target: '#second-hubspot-form',
      });
      setIsSecondHubspotFormCreated(true);
    }
  }, [formIndex, isSecondHubspotFormCreated]);

  return (
    <div className="contact_sales__container">
      {error && <div className="contact_sales_error">{error}</div>}
      {formIndex === 0 ? (
        <>
          <div className="contact_sales__title">Request a demo of Resolve!</div>
          <div className="contact_sales__subtitle">
            Tell us about your business so we&#39;re prepared.
          </div>
          <form onSubmit={formikIndex0.handleSubmit}>
            {formikIndex0.isSubmitting ? (
              <div className="contact_sales__form-loading-mask" />
            ) : null}
            <div className="contact_sales__form_row">
              <div className="contact_sales__form_col">
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  error={
                    formikIndex0.touched.firstName
                      ? formikIndex0.errors.firstName
                      : undefined
                  }
                  value={formikIndex0.values.firstName}
                  onChange={formikIndex0.handleChange}
                  onBlur={formikIndex0.handleBlur}
                  label="First name"
                  placeholder="Enter first name"
                />
              </div>
              <div className="contact_sales__form_col">
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  error={
                    formikIndex0.touched.lastName
                      ? formikIndex0.errors.lastName
                      : undefined
                  }
                  value={formikIndex0.values.lastName}
                  onChange={formikIndex0.handleChange}
                  onBlur={formikIndex0.handleBlur}
                  label="Last name"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="contact_sales__form_row">
              <div className="contact_sales__form_col">
                <Input
                  id="email"
                  name="email"
                  type="text"
                  error={
                    formikIndex0.touched.email
                      ? formikIndex0.errors.email
                      : undefined
                  }
                  value={formikIndex0.values.email}
                  onChange={formikIndex0.handleChange}
                  onBlur={formikIndex0.handleBlur}
                  label="Work email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="contact_sales__form_col">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Your phone number"
                  placeholder="555-555-5555"
                  error={
                    formikIndex0.touched.phone
                      ? formikIndex0.errors.phone
                      : undefined
                  }
                  value={formikIndex0.values.phone}
                  onChange={formikIndex0.handleChange}
                  onBlur={formikIndex0.handleBlur}
                />
              </div>
            </div>
            <div className="contact_sales__form_row">
              <div className="contact_sales__form_col">
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  error={
                    formikIndex0.touched.jobTitle
                      ? formikIndex0.errors.jobTitle
                      : undefined
                  }
                  value={formikIndex0.values.jobTitle}
                  onChange={formikIndex0.handleChange}
                  onBlur={formikIndex0.handleBlur}
                  label="Your job title"
                  placeholder="Enter job title"
                />
              </div>
              <div className="contact_sales__form_col">
                <Select
                  id="revenue"
                  name="revenue"
                  label="Annual B2B revenue"
                  firstOptionLabel="Select revenue range"
                  error={
                    formikIndex0.touched.revenue
                      ? formikIndex0.errors.revenue
                      : undefined
                  }
                  value={formikIndex0.values.revenue}
                  onChange={formikIndex0.handleChange}
                  onBlur={formikIndex0.handleBlur}
                  options={[
                    {
                      value: '<$2M',
                      label: '<$2M',
                    },
                    {
                      value: '$2M-$5M',
                      label: '$2M-$5M',
                    },
                    {
                      value: '$5M-$10M',
                      label: '$5M-$10M',
                    },
                    {
                      value: '$10M-$25M',
                      label: '$10M-$25M',
                    },
                    {
                      value: '$25M-$50M',
                      label: '$25M-$50M',
                    },
                    {
                      value: '$50M-$100M',
                      label: '$50M-$100M',
                    },
                    {
                      value: '$100M+',
                      label: '$100M+',
                    },
                  ]}
                />
              </div>
            </div>
            <Button
              primary
              large
              type="submit"
              className="contact_sales__form_button"
              loading={formikIndex0.isSubmitting}
            >
              Submit
            </Button>
          </form>
          <div id="first-hubspot-form" className="contact_sales_hubspot_form" />
        </>
      ) : formIndex === 1 ? (
        <>
          <div className="contact_sales__title">
            Help us process your request even faster
          </div>
          <div className="contact_sales__subtitle">
            Answer a few more questions to better prepare our team for your
            specific business needs.
          </div>
          <form onSubmit={formikIndex2.handleSubmit}>
            {formikIndex2.isSubmitting ? (
              <div className="contact_sales__form-loading-mask" />
            ) : null}
            <div className="contact_sales__form_row">
              <div className="contact_sales__form_col">
                <Select
                  id="industry"
                  name="industry"
                  label="Industry"
                  firstOptionLabel="Select industry"
                  error={
                    formikIndex2.touched.industry
                      ? formikIndex2.errors.industry
                      : undefined
                  }
                  value={formikIndex2.values.industry}
                  onChange={formikIndex2.handleChange}
                  onBlur={formikIndex2.handleBlur}
                  options={[
                    {
                      value: 'Agriculture, Forestry, and Fishing',
                      label: 'Agriculture, Forestry, and Fishing',
                    },
                    { value: 'Apparel', label: 'Apparel' },
                    { value: 'Auto', label: 'Auto' },
                    { value: 'Banking', label: 'Banking' },
                    { value: 'Biotechnology', label: 'Biotechnology' },
                    { value: 'Chemicals', label: 'Chemicals' },
                    { value: 'Communications', label: 'Communications' },
                    { value: 'Construction', label: 'Construction' },
                    { value: 'Consulting', label: 'Consulting' },
                    { value: 'Education', label: 'Education' },
                    { value: 'Electronics', label: 'Electronics' },
                    { value: 'Energy', label: 'Energy' },
                    { value: 'Engineering', label: 'Engineering' },
                    { value: 'Entertainment', label: 'Entertainment' },
                    { value: 'Environmental', label: 'Environmental' },
                    {
                      value: 'Fashion & Beauty',
                      label: 'Fashion & Beauty',
                    },
                    { value: 'Finance', label: 'Finance' },
                    {
                      value: 'Financial Services',
                      label: 'Financial Services',
                    },
                    {
                      value: 'Fitness & Sporting Goods',
                      label: 'Fitness & Sporting Goods',
                    },
                    { value: 'Food & Beverage', label: 'Food & Beverage' },
                    { value: 'Furniture', label: 'Furniture' },
                    { value: 'Government', label: 'Government' },
                    { value: 'Healthcare', label: 'Healthcare' },
                    { value: 'Hospitality', label: 'Hospitality' },
                    {
                      value: 'Industrial Tools & Equipment',
                      label: 'Industrial Tools & Equipment',
                    },
                    { value: 'Insurance', label: 'Insurance' },
                    { value: 'Machinery', label: 'Machinery' },
                    {
                      value: 'Maintenance, Repair, and Operations (MRO)',
                      label: 'Maintenance, Repair, and Operations (MRO)',
                    },
                    { value: 'Manufacturing', label: 'Manufacturing' },
                    { value: 'Media', label: 'Media' },
                    { value: 'Not For Profit', label: 'Not For Profit' },
                    { value: 'Other', label: 'Other' },
                    {
                      value: 'Professional Services',
                      label: 'Professional Services',
                    },
                    { value: 'Recreation', label: 'Recreation' },
                    { value: 'Restaurant', label: 'Restaurant' },
                    { value: 'Retail', label: 'Retail' },
                    { value: 'Shipping', label: 'Shipping' },
                    { value: 'Software', label: 'Software' },
                    { value: 'Technology', label: 'Technology' },
                    {
                      value: 'Telecommunications',
                      label: 'Telecommunications',
                    },
                    { value: 'Transportation', label: 'Transportation' },
                    { value: 'Travel', label: 'Travel' },
                    { value: 'Utilities', label: 'Utilities' },
                  ]}
                />
              </div>
              <div className="contact_sales__form_col">
                <Select
                  id="companyType"
                  name="companyType"
                  label="Company type"
                  firstOptionLabel="Select a description"
                  error={
                    formikIndex2.touched.companyType
                      ? formikIndex2.errors.companyType
                      : undefined
                  }
                  value={formikIndex2.values.companyType}
                  onChange={formikIndex2.handleChange}
                  onBlur={formikIndex2.handleBlur}
                  options={[
                    {
                      value: 'Manufacturer',
                      label: 'Manufacturer',
                    },
                    {
                      value: 'Distributor',
                      label: 'Distributor',
                    },
                    {
                      value: 'Wholesaler',
                      label: 'Wholesaler',
                    },
                    {
                      value: 'Marketplace',
                      label: 'Marketplace',
                    },
                    {
                      value: 'Services',
                      label: 'Services',
                    },
                    {
                      value: 'Other',
                      label: 'Other',
                    },
                  ]}
                />
              </div>
            </div>
            <div className="contact_sales__form_row">
              <div className="contact_sales__form_col">
                <Select
                  id="invoiceSize"
                  name="invoiceSize"
                  label="Average order size"
                  firstOptionLabel="Select order size"
                  error={
                    formikIndex2.touched.invoiceSize
                      ? formikIndex2.errors.invoiceSize
                      : undefined
                  }
                  value={formikIndex2.values.invoiceSize}
                  onChange={formikIndex2.handleChange}
                  onBlur={formikIndex2.handleBlur}
                  options={[
                    {
                      value: 'Less than $1,000',
                      label: 'Less than $1,000',
                    },
                    {
                      value: '$1,000 - $5,000',
                      label: '$1,000 - $5,000',
                    },
                    {
                      value: '$5,000 - $20,000',
                      label: '$5,000 - $20,000',
                    },
                    {
                      value: '$20,000 - $100,000',
                      label: '$20,000 - $100,000',
                    },
                    {
                      value: '$100,000+',
                      label: '$100,000+',
                    },
                  ]}
                />
              </div>
              <div className="contact_sales__form_col">
                <Select
                  id="numCustomers"
                  name="numCustomers"
                  label="How many customers are on net terms?"
                  firstOptionLabel="Select number"
                  error={
                    formikIndex2.touched.numCustomers
                      ? formikIndex2.errors.numCustomers
                      : undefined
                  }
                  value={formikIndex2.values.numCustomers}
                  onChange={formikIndex2.handleChange}
                  onBlur={formikIndex2.handleBlur}
                  options={[
                    {
                      value: '1-10',
                      label: '1-10',
                    },
                    {
                      value: '10-25',
                      label: '10-25',
                    },
                    {
                      value: '25-50',
                      label: '25-50',
                    },
                    {
                      value: '50-100',
                      label: '50-100',
                    },
                    {
                      value: '100+',
                      label: '100+',
                    },
                  ]}
                />
              </div>
            </div>
            <div className="contact_sales__form_row">
              <div className="contact_sales__form_col">
                <Select
                  id="accountingPlatform"
                  name="accountingPlatform"
                  label="Accounting platform"
                  firstOptionLabel="Select platform"
                  error={
                    formikIndex2.touched.accountingPlatform
                      ? formikIndex2.errors.accountingPlatform
                      : undefined
                  }
                  value={formikIndex2.values.accountingPlatform}
                  onChange={formikIndex2.handleChange}
                  onBlur={formikIndex2.handleBlur}
                  options={[
                    {
                      value: 'Freshbooks',
                      label: 'Freshbooks',
                    },
                    {
                      value: 'Microsoft Dynamics 365',
                      label: 'Microsoft Dynamics 365',
                    },
                    {
                      value: 'Netsuite',
                      label: 'Netsuite',
                    },
                    {
                      value: 'Odoo',
                      label: 'Odoo',
                    },
                    {
                      value: 'Quickbooks Desktop',
                      label: 'Quickbooks Desktop',
                    },
                    {
                      value: 'Quickbooks Enterprise',
                      label: 'Quickbooks Enterprise',
                    },
                    {
                      value: 'Quickbooks Online',
                      label: 'Quickbooks Online',
                    },
                    {
                      value: 'Sage',
                      label: 'Sage',
                    },
                    {
                      value: 'SAP',
                      label: 'SAP',
                    },
                    {
                      value: 'Wave',
                      label: 'Wave',
                    },
                    {
                      value: 'Xero',
                      label: 'Xero',
                    },
                    {
                      value: 'Zoho',
                      label: 'Zoho',
                    },
                    {
                      value: 'Other',
                      label: 'Other',
                    },
                    {
                      value: 'Custom',
                      label: 'Custom',
                    },
                  ]}
                />
              </div>
              <div className="contact_sales__form_col">
                <Select
                  id="eCommercePlatform"
                  name="eCommercePlatform"
                  label="E-commerce platform"
                  firstOptionLabel="Select platform"
                  error={
                    formikIndex2.touched.eCommercePlatform
                      ? formikIndex2.errors.eCommercePlatform
                      : undefined
                  }
                  value={formikIndex2.values.eCommercePlatform}
                  onChange={formikIndex2.handleChange}
                  onBlur={formikIndex2.handleBlur}
                  options={[
                    {
                      value: 'None',
                      label: 'None',
                    },
                    {
                      value: 'Shopify',
                      label: 'Shopify',
                    },
                    {
                      value: 'Shopify Plus',
                      label: 'Shopify Plus',
                    },
                    {
                      value: 'Magento 1',
                      label: 'Magento 1',
                    },
                    {
                      value: 'Magento 2',
                      label: 'Magento 2',
                    },

                    {
                      value: 'WooCommerce',
                      label: 'WooCommerce',
                    },
                    {
                      value: 'BigCommerce',
                      label: 'BigCommerce',
                    },

                    {
                      value: '3dCart',
                      label: '3dCart',
                    },
                    {
                      value: 'Custom',
                      label: 'Custom',
                    },
                    {
                      value: 'Hybris',
                      label: 'Hybris',
                    },
                    {
                      value: 'Insite',
                      label: 'Insite',
                    },

                    {
                      value: 'Netsuite',
                      label: 'Netsuite',
                    },
                    {
                      value: 'NuOrder',
                      label: 'NuOrder',
                    },
                    {
                      value: 'Odoo',
                      label: 'Odoo',
                    },
                    {
                      value: 'Oro Commerce',
                      label: 'Oro Commerce',
                    },
                    {
                      value: 'SquareSpace',
                      label: 'SquareSpace',
                    },
                    {
                      value: 'Volusion',
                      label: 'Volusion',
                    },
                    {
                      value: 'Other',
                      label: 'Other',
                    },
                  ]}
                />
              </div>
            </div>
            <div className="contact_sales__form_row">
              <div className="contact_sales__form_col">
                <TextArea
                  id="hearAboutResolve"
                  name="hearAboutResolve"
                  label="How did you hear about Resolve?"
                  value={formikIndex2.values.hearAboutResolve}
                  onChange={formikIndex2.handleChange}
                  onBlur={formikIndex2.handleBlur}
                />
              </div>
            </div>
            <Button
              primary
              large
              type="submit"
              className="contact_sales__form_button"
              loading={formikIndex2.isSubmitting}
            >
              Submit
            </Button>
          </form>
          <div
            id="second-hubspot-form"
            className="contact_sales_hubspot_form"
          />
        </>
      ) : formIndex === 2 ? (
        <>
          <div className="contact_sales__title">
            Thanks, we'll be in touch soon!
            <br />
            Watch our demo video while you&#39;re here...
          </div>
          <p className="contact_sales__subtitle contact_sales__text">
            We&#39;ll walk through the Resolve product basics, including how to
            get a customer approved for our risk-free net terms.
          </p>
          <Video
            title="Resolve demo video"
            src="https://player.vimeo.com/video/514420526?autoplay=1"
            thumbnail="https://i.vimeocdn.com/video/1065109921-701cbf681525eb73c427035c7adf07d6a5cde00105c8866e6b841828c84b672f-d_640x360?r=pad"
            width="100%"
            className="contact_sales__video"
            ratio={640 / 360}
          />
        </>
      ) : null}
      <style jsx>{`
        .contact_sales__container {
          max-width: 616px;
          width: 100%;
          margin: 65px auto;
          position: relative;
        }
        .contact_sales__container * {
          box-sizing: border-box;
        }
        .contact_sales__form-loading-mask {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: ${colors.white};
          opacity: 0.3;
          z-index: 10000;
        }
        .contact_sales_error {
          font-family: ${fonts.halyardText};
          font-size: 17px;
          font-weight: 400;
          background-color: ${colors.redRibbon};
          color: ${colors.white};
          margin-bottom: 48px;
          padding: 16px;
          border-radius: 4px;
        }
        .contact_sales__title {
          font-family: ${fonts.gilroy};
          font-size: 30px;
          font-weight: 600;
          letter-spacing: 0;
          margin-bottom: 16px;
          line-height: 1.4;
        }
        .contact_sales__subtitle {
          font-size: 22px;
          color: ${colors.primary};
          font-family: ${fonts.halyardDisplay};
          font-weight: 300;
          margin-bottom: 32px;
        }
        .contact_sales__text {
          margin-bottom: 16px;
        }
        .contact_sales__form_row {
          width: 100%;
          display: flex;
        }
        @media (max-width: 480px) {
          .contact_sales__form_row {
            flex-direction: column;
          }
        }
        .contact_sales__form_col {
          width: 100%;
        }
        .contact_sales__form_col:not(:first-of-type) {
          margin-left: 24px;
        }
        @media (max-width: 480px) {
          .contact_sales__form_col:not(:first-of-type) {
            margin-left: 0;
          }
        }
        .contact_sales_hubspot_form {
          display: none;
        }
      `}</style>
      <style jsx global>{`
        .contact_sales__form_button {
          margin-top: 48px;
          margin-right: 0;
          margin-left: auto;
          width: 100%;
          max-width: 280px;
          display: block;
        }
        @media (max-width: 480px) {
          .contact_sales__form_button {
            margin-right: auto;
          }
        }
        .contact_sales__video {
          margin-top: 32px;
        }
      `}</style>
    </div>
  );
}
