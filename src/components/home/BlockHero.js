import React from 'react';
import { navigate } from 'gatsby';

import Container from '../Container';
import {
  colors,
  CustomerApprove,
  fonts,
  HeroImg1,
  HeroImg2,
  HeroLine,
  HeroMobImage,
  Metric,
  screen,
} from '../../constants';

export default function BlockHero() {
  // const [email, setEmail] = useState('');

  return (
    <section className="block-hero">
      <Container style={{ width: '100%' }}>
        <div className="block-hero__wrapper">
          <div className="block-hero__content">
            <h1 className="block-hero__title">
              Fuel growth with{' '}
              <span style={{ color: colors.orange2 }}>
                embedded B2B payment terms
              </span>
            </h1>
            <p className="block-hero__desc">
              Unify your B2B checkout and invoicing experience to scale your
              business.
            </p>
            <div className="block-hero__actions">
              {/* <input className="email-input" type='email' value={email} onChange={(e) => setEmail(e.value)} placeholder="Email address" disabled={true} /> */}
              <button
                className="request-button"
                onClick={() => navigate('/contact-sales')}
              >
                Request demo
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="block-hero__image">
        <img className="hero-image" src={HeroImg1} alt="hero img" />
        <img className="hero-line" src={HeroLine} alt="hero line" />
        <img
          className="customer-approve__img"
          src={CustomerApprove}
          alt="customer approve"
        />
        <img className="bottom-image" src={HeroImg2} alt="hero img" />
        <img className="metric__img" src={Metric} alt="metric" />
      </div>
      <div className="block-hero-mov__image">
        <img src={HeroMobImage} alt="hero img" />
      </div>
      <style jsx>{`
        .block-hero {
          position: relative;
          display: flex;
          margin-top: 92px;
          background: linear-gradient(-8.7deg, #fff 28.3%, #f7f8fa 28.4%);
        }
        .block-hero__wrapper {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .block-hero__content {
          max-width: 448px;
          margin-right: auto;
          padding-top: 100px;
          padding-bottom: 410px;
          z-index: 1;
        }
        .block-hero__title {
          margin-bottom: 24px;
          font-weight: 400;
          font-size: 64px;
          line-height: 72px;
          color: ${colors.indigo};
        }
        .block-hero__desc {
          margin-bottom: 48px;
          font-weight: 300;
          font-size: 20px;
          line-height: 30px;
          color: ${colors.lightIndigo};
        }
        .block-hero__image {
          position: absolute;
          top: -100px;
          right: 0;
          z-index: 0;
        }
        .hero-image {
          position: absolute;
          margin-top: 215px;
          right: 310px;
        }
        .bottom-image {
          position: absolute;
          top: 670px;
          right: 210px;
        }
        .customer-approve__img {
          position: absolute;
          top: 155px;
          right: 105px;
        }
        .metric__img {
          position: absolute;
          top: 700px;
          right: 495px;
        }
        .hero-line {
          position: absolute;
          right: 0;
        }
        .block-hero-mov__image {
          display: none;
        }
        .block-hero__actions {
          position: relative;
          width: 424px;
          cursor: pointer;
        }
        .email-input {
          width: 100%;
          background: #ffffff;
          border: 1px solid #b7b7b7;
          border-radius: 36px;
          color: #5e6677;
          padding: 20px 165px 20px 20px;
          line-height: 1;
          box-sizing: border-box;
          outline: none;
          font-weight: 300;
          font-size: 18px;
          font-family: ${fonts.halyardDisplay};
          line-height: 24px;
          letter-spacing: 0.2px;
        }
        .email-input::placholder {
          color: #5e6677;
          opacity: 0.6;
        }
        .request-button {
          margin: 0;
          padding: 15px 39px;
        }
        @media (max-width: ${screen.desktop}px) {
          .hero-image {
            right: 270px;
            width: 500px;
          }
          .bottom-image {
            top: 615px;
            right: 180px;
            width: 300px;
          }
          .customer-approve__img {
            top: 155px;
            right: 70px;
            width: 250px;
          }
          .metric__img {
            top: 670px;
            right: 440px;
            width: 190px;
          }
          .hero-line {
            width: 850px;
          }
          .block-hero__content {
            padding-bottom: 250px;
          }
        }
        @media (max-width: 1280px) {
          .hero-image {
            right: 235px;
            width: 450px;
          }
          .bottom-image {
            top: 580px;
            right: 150px;
            width: 250px;
          }
          .customer-approve__img {
            top: 155px;
            right: 45px;
            width: 230px;
          }
          .metric__img {
            top: 615px;
            right: 360px;
            width: 190px;
          }
          .hero-line {
            width: 860px;
          }
        }
        @media (max-width: 1200px) {
          .hero-image {
            right: 200px;
            width: 425px;
          }
          .bottom-image {
            top: 555px;
            right: 130px;
            width: 230px;
          }
          .customer-approve__img {
            top: 155px;
            right: 45px;
            width: 200px;
          }
          .metric__img {
            top: 585px;
            right: 325px;
            width: 160px;
          }
          .hero-line {
            width: 850px;
          }
        }
        @media (max-width: 1130px) {
          .hero-image {
            right: 130px;
            width: 400px;
          }
          .bottom-image {
            top: 545px;
            right: 100px;
            width: 200px;
          }
          .customer-approve__img {
            top: 155px;
            right: 30px;
            width: 170px;
          }
          .metric__img {
            top: 570px;
            right: 270px;
            width: 145px;
          }
          .hero-line {
            width: 850px;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .hero-image {
            right: 190px;
            width: 370px;
          }
          .bottom-image {
            top: 515px;
            right: 115px;
            width: 200px;
          }
          .customer-approve__img {
            top: 155px;
            right: 45px;
            width: 185px;
          }
          .metric__img {
            top: 540px;
            right: 280px;
            width: 150px;
          }
          .hero-line {
            width: 780px;
          }
          .block-hero__title {
            margin-bottom: 20px;
            font-size: 40px;
            line-height: 44px;
          }
          .block-hero__desc {
            margin-bottom: 40px;
            font-size: 18px;
            line-height: 28px;
          }
          .block-hero__content,
          .block-hero__actions {
            max-width: 344px;
          }
        }
        @media (max-width: 923px) {
          .block-hero__content {
            padding-top: 50px;
          }
          .hero-image {
            margin-top: 165px;
            right: 150px;
            width: 350px;
          }
          .bottom-image {
            top: 450px;
            right: 100px;
            width: 170px;
          }
          .customer-approve__img {
            top: 155px;
            right: 30px;
            width: 160px;
          }
          .metric__img {
            top: 475px;
            right: 250px;
            width: 125px;
          }
          .hero-line {
            width: 730px;
          }
        }
        @media (max-width: 865px) {
          .block-hero__image {
            display: none;
          }
          .block-hero-mov__image {
            display: block;
            position: absolute;
            right: 0;
            top: -30px;
          }
          .block-hero__content {
            padding-top: 0;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-hero {
            background: linear-gradient(-8.7deg, #fff 10.3%, #f7f8fa 10.4%);
          }
          .block-hero-mov__image {
            display: block;
            position: absolute;
            top: 415px;
          }
          .block-hero__content,
          .block-hero__actions {
            width: 100%;
          }
          .block-hero__content {
            padding-bottom: 500px;
          }
          .block-hero__actions {
            display: flex;
            flex-direction: column;
          }
          .email-input {
            padding: 16px 32px;
          }
          .request-button {
            position: relative;
            right: 0;
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
