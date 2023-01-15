import React from 'react';
import classNames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { get } from 'lodash';

import { colors, fonts } from '../constants';

export default function PostPreview({ post, featured, className }) {
  return (
    <article
      className={classNames(className, { featured, 'blog-card': !featured })}
    >
      <Link
        to={`/blog/post/${post.slug}/`}
        className={classNames('blog-link', { image: !featured })}
      >
        {post.feature_image && (
          <GatsbyImage
            image={post.feature_image.gatsbyImageData}
            alt={post.title}
            className="blog-image"
            objectPosition="center center"
            style={!featured && { height: '100%' }}
          />
        )}
      </Link>
      <div className="blog-content with-image">
        <Link to={`/blog/post/${post.slug}/`} className="blog-link">
          {post.metadata?.tags?.length > 0 && (
            <ul className="blog-tags">
              {post.metadata.tags.map(tag => (
                <li key={tag.id} className="blog-tag">
                  {tag.name}
                </li>
              ))}
            </ul>
          )}
          <h3 className="blog-title">{post.title}</h3>
          <p>{get(post, 'description', '')}</p>
        </Link>
      </div>
      <style global jsx>{`
        .blog-card {
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          background: #fff;
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transform: translateY(-3px);
        }

        .blog-link {
          display: block;
          color: ${colors.primary};
          text-decoration: none;
          width: 100%;
        }

        .blog-link:hover {
          color: ${colors.primary};
        }

        .blog-link.image {
          height: 200px;
        }

        .blog-content {
          padding: 2rem 2rem 1.5rem 2rem;
        }
        .blog-content p {
          line-height: 1.35;
          margin-bottom: 1.5rem;
        }
        .blog-content.with-image {
          padding-top: 1.5rem;
        }

        .blog-content .blog-title {
          font-family: ${fonts.halyardDisplay};
          font-size: 1.5rem;
          margin-top: 0.3rem;
        }

        .blog-tags {
          padding: unset;
          margin: unset;
          list-style: none;
        }

        .blog-tag {
          display: inline;
          text-transform: uppercase;
          color: ${colors.baliHai};
          font-size: 0.8rem;
          letter-spacing: 0.1px;
          margin-bottom: 0.2rem;
          font-weight: 600;
        }

        .blog-tag + .blog-tag:before {
          content: '•';
          margin: 0 0.5em;
        }

        .featured {
          width: 100%;
          display: flex;
        }

        .featured .blog-image {
          flex-direction: column;
          height: 400px;
        }

        .featured .blog-card-meta {
          position: absolute;
          bottom: 0;
          font-size: 1rem;
        }

        .featured .blog-content {
          flex-direction: column;
          width: 45%;
          position: relative;
          padding: 2rem 2rem 1.5rem 2rem;
        }

        .featured .blog-content p {
          font-size: 1.1rem;
          line-height: 1.35;
          margin-bottom: 1.5rem;
        }

        .featured .blog-content .blog-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          font-family: ${fonts.halyardDisplay};
        }

        .featured .blog-content.with-image {
          padding-top: 0;
        }

        @media (max-width: 991px) {
          .featured {
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          .featured .blog-image {
            flex-direction: row;
            height: 300px;
            width: 100%;
          }
          .featured .blog-content {
            flex-direction: row;
            width: 100%;
            padding: 2rem 0 1.5rem 0;
          }
          .featured .blog-content .blog-title {
            font-size: 2.25rem;
          }

          .featured .blog-content.with-image {
            padding-top: 2rem;
          }

          .blog-card {
            width: 100%;
          }
        }
      `}</style>
    </article>
  );
}
