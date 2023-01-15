import React from 'react';
import { Link } from 'gatsby';

import Container from '../Container';
import { colors, fonts, screen } from '../../constants';
import CrossIcon from '../icons/Cross';

function BlockContentWithImage({
  title,
  description,
  main_image,
  modal_image,
  text_width = 454,
  flex_direction = 'row',
  withButton,
  net_terms,
}) {
  return (
    <section>
      <Container>
        <div className="block-wrapper">
          <div className="block-image">
            <img className="main-image" src={main_image} alt={title} />
            {modal_image && (
              <img className="modal-image" src={modal_image} alt={title} />
            )}
          </div>
          <div className="block-content">
            <h2 className="block-content__title">{title}</h2>
            <ul className="net-terms">
              {net_terms?.map((item, idx) => (
                <li key={idx}>
                  <span className="cross-icon">
                    <CrossIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="block-content__desc">{description}</div>
            {withButton && (
              <Link to={withButton.linkTo} className="request-button">
                {withButton.text}
              </Link>
            )}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-wrapper {
          padding: 80px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: ${flex_direction};
        }
        .block-image {
          position: relative;
          margin-right: ${flex_direction === 'row-reverse' ? '65px' : ''};
        }
        .modal-image {
          position: absolute;
          top: ${flex_direction === 'row-reverse' ? '170px' : '125px'};
          right: -65px;
        }
        .block-content {
          max-width: ${text_width}px;
        }
        .block-content__title {
          font-size: 48px;
          font-weight: 400;
          line-height: 56px;
          color: ${colors.indigo};
          margin-top: 0;
          margin-bottom: 16px;
        }
        .block-content__desc {
          font-weight: 300;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 0.5px;
          color: #5E6677;
        }
        .net-terms {
          margin-bottom: 8px;
          padding-left: 0;
          list-style: none;
        }
        .net-terms li {
          display: flex;
          align-items: center;
          font-size: 18px;
          font-family: ${fonts.halyardDisplay};
          line-height: 28px;
          letter-spacing: 0.5px;
          color: ${colors.lightIndigo};
        }
        .cross-icon {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          background: ${colors.red};
          border-radius: 50%;
        }
        @media (max-width: ${screen.navigationFirstPoint}px) {
          .main-image {
            width: 490px;
          }
          .modal-image {
            width: 210px;
          }
        }
        @media (max-width: 1120px) {
          .main-image {
            width: 430px;
          }
          .modal-image {
            width: 155px;
            right: -40px;
          }
        }
        @media (max-width: ${screen.laptop}px) {
          .block-image {
            margin-right: ${flex_direction === 'row-reverse' ? '25px' : ''};
          }
          .main-image {
            width: 400px;
          }
          .modal-image {
            width: 150px;
            right: -25px;
          }
        }
        @media (max-width: 970px) {
          .main-image {
            width: 370px;
          }
          .modal-image {
            width: 140px;
            top: 120px;
            right: -20px;
          }
          .block-content {
            padding-left: ${flex_direction === 'row-reverse' ? '0' : '30px'};
            padding-right: ${flex_direction === 'row-reverse' ? '30px' : '0'};
          }
          .block-content__title {
            font-size: 28px;
            line-height: 36px;
          }
          .block-content__desc {
            font-weight: 300;
            font-size: 17px;
            line-height: 24px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .block-content__title {
            margin-top: 24px;
          }
          .block-image {
            margin: 0 auto !important;
          }
          .block-wrapper {
            padding: 40px 0;
            flex-wrap: wrap;
          }
          .block-content {
            max-width: 100%;
            padding: 0;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .block-image {
            margin-right: ${flex_direction === 'row-reverse' ? '16px' : ''};
          }
          .main-image {
            width: 320px;
          }
          .modal-image {
            width: 140px;
            top: 80px;
            right: -16px;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-content .request-button {
          padding: 12px 32.5px;
          border-radius: 60px;
          margin-top: 40px;
        }
      `}</style>
    </section>
  );
}

export default BlockContentWithImage;
