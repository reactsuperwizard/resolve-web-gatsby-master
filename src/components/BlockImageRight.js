import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

import { screen, fonts } from '../constants';
import Button from './Button';
import Container from './Container';

function BlockImageRight({
  pretitle,
  title,
  description,
  quote,
  author,
  image,
  image_alt,
  image_width = 413,
  image_width_desktop = 480,
  sub_image,
  sub_image_alt,
  sub_image_width = 303,
  sub_image_position,
  isFixed = false,
  grayBackground = false,
  withButton,
  opacity = 1,
  boxShadow = '',
  borderRadius = '',
  largeTitle = false,
  image_align = 'right',
  text_width = 650,
  flex_direction = 'column-reverse',
}) {
  const defaultPropButton = {
    text: '',
    linkTo: '/',
    primary: true,
    hasArrow: false,
    large: false,
  };

  withButton = Object.assign({}, defaultPropButton, withButton);

  function handleButtonTo(linkTo) {
    navigate(linkTo);
  }

  return (
    <div className="block-image-right">
      <Container>
        <div className="block-image-right__wrap">
          <div className="block-image-right__text">
            <div className="app__pretitle">{pretitle}</div>
            <h2 className="app__title">{title}</h2>
            <div className="block-image-right_desc">{description}</div>
            {quote && <hr className="block-image-right__separator" />}
            {quote && (
              <p className="app__desc block-image-right_quote">{quote}</p>
            )}
            {author && <div className="block-image-right_author">{author}</div>}
            {withButton.text && (
              <Button
                onClick={() => handleButtonTo(withButton.linkTo)}
                {...withButton}
              >
                {withButton.text}
              </Button>
            )}
            {/* {primaryButtonText && (
          <Button
            onClick={() => handleButtonTo(primaryButtonTo)}
            primary
            large
            hasArrow
          >
            {primaryButtonText}
          </Button>
        )}
        {secondaryButtonText && (
          <Button large onClick={() => handleButtonTo(secondaryButtonTo)}>
            {secondaryButtonText}
          </Button>
        )} */}
          </div>
          <div className="app__image-container">
            <div className="app__image-group">
              <div className="app__image block-image-right_image">
                {!isFixed && <GatsbyImage image={image} alt={image_alt} />}
                {isFixed && <GatsbyImage image={image} alt={image_alt} />}
              </div>
              {sub_image && (
                <div className="app__subimage block-image-right_subimage">
                  {!isFixed && (
                    <GatsbyImage image={sub_image} alt={sub_image_alt} />
                  )}
                  {isFixed && (
                    <GatsbyImage image={sub_image} alt={sub_image_alt} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-image-right {
          ${grayBackground
          ? `
            background-color: #f8f9fa;
            padding: ${sub_image ? '105px 0 233px' : '105px 0'};
          `
          : ''
        }
        }

        .block-image-right__wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          ${grayBackground ? '' : `margin-top: 64px;`}
        }

        .block-image-right_desc {
          font-size: 20px;
          line-height: 32px;
          letter-spacing: 0.9px;
          margin-bottom: 45px;
        }

        .block-image-right__text {
          max-width: ${text_width}px;
        }

        .block-image-right__text .app__title {
          font-size: ${largeTitle ? '48px' : '32px'};
          font-weight: 400;
          line-height: 42px;
          font-family: ${fonts.halyardDisplay};
        }

        .block-image-right__separator {
          color: #8f99ae;
          margin-bottom: 45px;
        }

        .block-image-right_quote {
          max-width: 500px;
          font-size: 31px;
          line-height: 1.29;
          letter-spacing: 0;
          margin-bottom: 45px;
        }

        .block-image-right_author {
          font-size: 22px;
          line-height: 36px;
          letter-spacing: 0.8px;
        }

        .block-image-right__wrap .app__image-container {
          width: 619px;
          text-align: ${image_align};
        }
        .block-image-right__wrap .app__image-group {
          display: inline-block;
        }

        .block-image-right_image {
          width: ${image_width}px;
          opacity: ${opacity};
          max-height: 906px;
        }
        .block-image-right_subimage {
          width: ${sub_image_width}px;
          border-radius: 28px;
          opacity: ${opacity};
          ${sub_image_position
          ? Object.keys(sub_image_position)
            .map(
              position =>
                `${position}: ${sub_image_position[position]}px;`
            )
            .join('')
          : ''
        }
        }

        @media (max-width: 1319px) {
          .block-image-right_subimage {
            left: -60px;
          }
        }

        @media (max-width: 1199px) {
          .block-image-right_image {
            width: ${image_width_desktop}px;
          }
          .block-image-right_subimage {
            width: 250px;
          }
        }

        @media (max-width: 1140px) and (min-width: ${screen.tabletMax + 1}px) {
          .block-image-right_image {
            width: 340px;
          }
          .block-image-right_subimage {
            width: 190px;
          }
          .block-image-right_desc {
            max-width: 450px;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-image-right__wrap {
            flex-direction: ${flex_direction};
            margin-top: 0;
            padding-bottom: 0;
          }
          .block-image-right__wrap .app__image-container {
            width: 100%;
            text-align: center;
          }
          .block-image-right_image {
            width: 400px;
          }
          .block-image-right__wrap .app__image-group {
            margin-bottom: 0;
          }
          .block-image-right_desc {
            max-width: initial;
          }
          .block-image-right__text {
            text-align: center;
            padding-top: 50px;
            padding-bottom: 50px;
          }
          .block-image-right_subimage {
            width: 190px;
            bottom: -55px;
            left: -35px;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
          .block-image-right_desc.app__desc {
            font-size: 28px;
            line-height: 1.29;
            letter-spacing: 0;
          }
          .block-image-right_image {
          }
          .block-image-right__wrap .app__image-group {
            margin-bottom: 0;
          }
          .block-image-right_image {
            width: 250px;
          }
          .block-image-right_subimage {
            width: 150px;
          }

          .block-image-right {
            ${grayBackground
          ? `
              padding: ${sub_image ? '0 0 100px' : '0'};
            `
          : ''
        }
          }
        }
      `}</style>
    </div>
  );
}

BlockImageRight.defaultProps = {
  withButton: {
    text: '',
    primary: true,
    hasArrow: false,
    large: false,
    linkto: '',
  },
};

export default BlockImageRight;
