import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Container from './Container';
import GetDemoButton from './GetDemoButton';
import Button from './Button';
import Video from './Video';

import { colors, screen } from '../constants';

export default function BlockHeaderWithImage({
  title = '',
  desc = '',
  image,
  imageWidth,
  icon,
  subtitle = '',
  bigCover = false,
  bigCoverImageHeight = 0,
  sub_image,
  sub_image_alt = '',
  sub_image_width = 0,
  sub_image_box_shadow = '',
  sub_image_border_radius = '',
  secondaryButtonText = '',
  secondaryButtonTo = '/',
  primaryButtonText = '',
  primaryButtonTo = '/',
  backgroundImage,
  boxShadow = '',
  borderRadius = '',
  opacity = 1,
  video,
  videoRatio,
  videoThumbnail = '',
}) {
  useEffect(() => {
    // @bnguyen06 commenting this code out since it's causing issues
    // https://resolvepay.atlassian.net/browse/RSLV3-438
    //
    // const srcPlugins = ['//player.vimeo.com/api/player.js'];
    // srcPlugins.forEach(src => {
    //   const script = document.createElement('script');
    //   script.async = false;
    //   script.src = src;
    //   document.body.appendChild(script);
    // });
    //
    // if (window.Vimeo && window.analytics.plugins) {
    //   const player = new window.Vimeo.Player('#videoFrame');
    //   const VimeoAnalytics = window.analytics.plugins.VimeoAnalytics;
    //   const vimeoAnalytics = new VimeoAnalytics(
    //     player,
    //     '8cf37e596725264d4ace7a66e004fe4d'
    //   );
    //   vimeoAnalytics.initialize();
    // }
  }, []);

  function handleSecondaryButtonTextClick() {
    navigate(secondaryButtonTo);
  }

  return (
    <section className="block-header-with-image">
      <Container>
        <div className="block-header-with-image__wrap">
          <div className="block-header-with-image__content">
            <div className="block-header-with-image__content_container">
              <span className="block-header-with-image__subtitle app__pretitle">
                {subtitle}
              </span>
              <h1 className="app-hero__title">{title}</h1>
              <p className="app-hero__desc">{desc}</p>
              <div className="app__actions">
                {primaryButtonText && (
                  <GetDemoButton
                    text={primaryButtonText}
                    to={primaryButtonTo}
                  />
                )}
                {secondaryButtonText && (
                  <Button large onClick={handleSecondaryButtonTextClick}>
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            </div>
            <div
              className={`block-header-with-image__image_container ${
                video ? 'block-header-with-image__video_container' : ''
              }`}
            >
              {video ? (
                <div className="block-header-with-image__image_wrap">
                  <Video
                    title="Intro Video"
                    className="block-header-with-image__video"
                    width="100%"
                    ratio={videoRatio}
                    src={video}
                    thumbnail={videoThumbnail}
                  />
                </div>
              ) : (
                <div className="block-header-with-image__image_wrap">
                  {icon ? (
                    <div
                      className={`app__image block-header-with-image__image ${
                        bigCover
                          ? 'block-header-with-image__image_cover_big'
                          : ''
                      }`}
                    >
                      {icon}
                    </div>
                  ) : (
                    <GatsbyImage
                      image={image}
                      alt="block how header"
                      className={`app__image block-header-with-image__image ${
                        bigCover
                          ? 'block-header-with-image__image_cover_big'
                          : ''
                      } `}
                    />
                  )}
                  {sub_image && (
                    <div className="app__image block-header-with-image__subimage">
                      <GatsbyImage image={sub_image} alt={sub_image_alt} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .block-header-with-image {
          ${backgroundImage
            ? `background-image: url('${backgroundImage}');`
            : ''}
          background-repeat: no-repeat;
          background-position: 50% 0;
          background-size: auto;
          padding: 40px 0;
        }

        .block-header-with-image__subimage {
          width: ${sub_image_width}px;
          box-shadow: ${sub_image_box_shadow
            ? sub_image_box_shadow
            : '0px 44.159px 88.3179px -44.159px rgba(0, 0, 0, 0.3), 0 73.5983px 147.197px -29.4393px rgba(50, 50, 93, 0.25), inset 0 1.47197px 1.47197px rgba(143, 153, 174, 0.05)'};
          border-radius: ${sub_image_border_radius}px;
          opacity: ${opacity};
          position: absolute;
          top: 155px;
          right: -130px;
        }

        .block-header-with-image__video {
          display: block;
          opacity: ${opacity};
        }

        .block-header-with-image__subtitle {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 500;
          line-height: 2.5;
          letter-spacing: 1.3px;
          color: ${colors.title};
        }
        .block-header-with-image__content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 64px;
          line-height: 72px;
          letter-spacing: 0.5px;
        }
        .block-header-with-image__content
          .block-header-with-image__content_container {
          margin-right: 85px;
        }
        .block-header-with-image__content
          .block-header-with-image__image_container {
          flex: 1;
        }
        .block-header-with-image__content .app-hero__desc,
        .block-header-with-image__content .app-hero__title {
          max-width: 648px;
        }

        @media (max-width: 1199px) and (min-width: 991px) {
          .block-header-with-image__content
            .block-header-with-image__content_container {
            flex: 1;
          }
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-header-with-image__content {
            display: block;
            flex-wrap: wrap;
          }
          .block-header-with-image__content
            .block-header-with-image__content_container {
            width: auto;
            flex: auto;
            margin-right: 0;
            text-align: center;
          }
          .block-header-with-image__content .app-hero__desc,
          .block-header-with-image__content .app-hero__title {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
      <style jsx global>{`
        .block-header-with-image__image_wrap {
          position: relative;
          ${bigCover ? `height: ${bigCoverImageHeight}px;` : ''}
        }
        .block-header-with-image__image {
          max-width: ${imageWidth ? imageWidth : '480px'};
          width: ${imageWidth ? imageWidth : '100%'};
          margin: 0 auto;
          box-shadow: ${
            boxShadow
              ? boxShadow
              : '0px 42.4071px 84.8142px -42.4071px rgba(0, 0, 0, 0.3), 0 70.6785px 141.357px -28.2714px rgba(50, 50, 93, 0.25), inset 0 1.41357px 1.41357px rgba(143, 153, 174, 0.05);'
          }
          border-radius: ${borderRadius ? borderRadius : 28}px;
          opacity: ${opacity};
        }

        .block-header-with-image__image_cover_big {
          height: 100%;
          position: absolute !important;
          left: 0;
          top: 0;
          overflow: visible !important;
          box-shadow: none;
        }

        .block-header-with-image__image_cover_big > div {
          padding-bottom: 0 !important;
        }
        
        .block-header-with-image__image_cover_big picture img {
          width: auto !important;
          box-shadow: 0 42.4071px 84.8142px -42.4071px rgba(0, 0, 0, 0.3),
            0 70.6785px 141.357px -28.2714px rgba(50, 50, 93, 0.25),
            inset 0 1.41357px 1.41357px rgba(143, 153, 174, 0.05);
          border-radius: 28.2714px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .block-header-with-image__image_container {
            display: none;
          }
          .block-header-with-image__image_container.block-header-with-image__video_container {
            display: block;
            margin-top: 50px;
          }
        }

        @media (max-width: ${screen.mobileMax}px) {
        }
      `}</style>
    </section>
  );
}
