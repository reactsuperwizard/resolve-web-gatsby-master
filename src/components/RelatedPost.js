import React from 'react';
import classNames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import { screen } from '../constants';

export default function RelatedPost({ post, featured }) {
  return (
    <article className="related-post">
      <Link
        to={`/blog/post/${post.slug}/`}
        className={classNames('related-post__link', { image: !featured })}
      >
        {post.feature_image && (
          <GatsbyImage
            image={post.feature_image.gatsbyImageData}
            alt={post.title}
            className="related-post__image"
            objectPosition="center center"
          />
        )}
        <div className="related-post__inner">
          {post.metadata?.tags?.length > 0 && <p className="related-post__desc">{post.metadata?.tags[0].name}</p>}
          <h3 className="related-post__title">{post.title}</h3>
        </div>
      </Link>
      <style jsx global>{`
        .related-post {
          max-width: 372px;
          margin: 0 20px;
        }
        .related-post__image {
          max-width: 372px;
          height: 411px;
          clip-path: polygon(0 13%, 100% 0, 100% 87%, 0% 100%);
        }
        .related-post__desc {
          margin: 16px 0;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          text-decoration-line: underline;
          color: #8B92A3;
        }
        .related-post__title {
          font-size: 24px;
          line-height: 32px;
          font-weight: 400;
          color: #1F325D;
        }
        .cards-wrapper .related-post:nth-child(1) {
          margin-top: 120px;
        }
        .cards-wrapper .related-post:nth-child(2) {
          margin-top: 60px;
        }
        @media (max-width: 1335px) {
          .related-post {
            max-width: 315px;
            margin: 0;
          }
          .related-post__image {
            max-width: 315px;
            height: 265px;
          }
          .cards-wrapper .related-post:nth-child(1) {
            margin-top: 100px;
          }
          .cards-wrapper .related-post:nth-child(2) {
            margin-top: 50px;
          }
        }
        @media (max-width: 1070px) {
          .related-post {
            max-width: 327px;
          }
          .related-post__image {
            max-width: 327px;
          }
        }
        @media (max-width: ${screen.mobileMax}px) {
          .cards-wrapper .related-post:nth-child(1) {
            margin-top: 88px;
          }
        }
        @media (max-width: ${screen.mobileExtraSmall}px) {
          .cards-wrapper .related-post {
            margin-top: 40px !important;
          }
        }
      `}</style>
    </article>
  );
}
