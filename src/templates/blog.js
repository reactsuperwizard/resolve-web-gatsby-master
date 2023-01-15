import React from 'react';
import classNames from 'classnames';
import { graphql, navigate } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { chunk } from 'lodash';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import BlogSearch from '../components/BlogSearch';
import HubspotContactForm from '../components/HubSpotForm';
import Notice from '../components/Notice';
import PostPreview from '../components/PostPreview';
import ReduceFinancialRiskIcon from '../components/icons/ReduceFinancialRisk';

import { colors, fonts } from '../constants';

export const pageQuery = graphql`
  query PostsByPage($skip: Int!, $limit: Int!, $tagId: String) {
    posts: allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: { fields: published_at, order: DESC }
      filter: {
        metadata: { tags: { elemMatch: { contentful_id: { eq: $tagId } } } }
      }
    ) {
      edges {
        node {
          title
          slug
          published_at
          metadata {
            tags {
              id
              name
            }
          }
          feature_image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
          description
        }
      }
    }
    trending: allContentfulBlogPost(filter: { trendingPost: { eq: true } }) {
      edges {
        node {
          id
          title
          slug
          description
        }
      }
    }
    notice: contentfulAlertBanner(contexts: { eq: "Blog" }) {
      hidden
      dismissable
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default function BlogPage(props) {
  const { data, pageContext } = props;
  const { page, pageCount, limit, tagId, blogTags, type } = pageContext;

  const trending = data.trending?.edges;

  function onPageChange({ selected }) {
    if (selected !== page) {
      navigate(hrefBuilder(selected + 1));
    }
  }

  function hrefBuilder(p) {
    const tagPath = tagId ? `category/${tagId}/` : '';
    return p === 1 ? `/blog/${tagPath}` : `/blog/${tagPath}${p}/`;
  }

  function pathBuilder(type, tag) {
    const pathType = type === 'blog' ? '/blog/' : `/blog/category/${tag}/`;
    return pathType;
  }

  return (
    <>
      {pageCount > 1 && (
        <Helmet>
          {page !== 0 && (
            <link
              rel="prev"
              href={
                pathBuilder(type, tagId) + `${page === 1 ? '' : page + '/'}`
              }
            />
          )}

          {pageCount > page + 1 && (
            <link rel="next" href={pathBuilder(type, tagId) + `${page + 2}/`} />
          )}
        </Helmet>
      )}

      <Notice {...data.notice} />
      {/* remove hidden overflow so we can use sticky notice */}
      <Layout onType="article" removeOverflowHidden>
        <GatsbySeo title="Blog" />
        <Container>
          <section className="blog-grid">
            <div
              className={classNames('row', {
                'row--trending': !!trending?.length,
              })}
            >
              <PostPreview
                featured
                post={data.posts.edges[0].node}
                className={classNames('intro-card', {
                  'intro-card--trending': !!trending?.length,
                })}
              />
              {trending?.length > 0 && (
                <div className="trending-posts">
                  <h3 className="trending-posts-heading">
                    Trending Posts
                    <ReduceFinancialRiskIcon />
                  </h3>
                  <ol className="trending-posts-list">
                    {trending.map(({ node }) => (
                      <li key={node.id} className="trending-post">
                        <a href={`/blog/post/${node.slug}`}>{node.title}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
            <BlogSearch />
            <ul className="tag-filters">
              <li className={classNames({ active: !tagId })}>
                <a href="/blog/">All</a>
              </li>
              {blogTags.map?.(({ id, name }) => (
                <li key={id} className={classNames({ active: id === tagId })}>
                  <a href={`/blog/category/${id}/`}>{name}</a>
                </li>
              ))}
            </ul>
            <div className="blog-section-sublabel">
              <h4 className="blog-sublabel">LATEST POSTS</h4>
            </div>
            {chunk(data.posts.edges.slice(1), 3).map((row, index) => (
              <div key={index} className="row row-3-cols">
                {row.map(column => (
                  <PostPreview key={column.node.slug} post={column.node} />
                ))}
              </div>
            ))}
          </section>
          <Pagination
            initialPage={page}
            pageCount={pageCount}
            perPage={limit}
            onPageChange={onPageChange}
            hrefBuilder={hrefBuilder}
          />
          <HubspotContactForm />
        </Container>
        <Footer darkSkin />
        <style jsx global>
          {`
            .blog-index-title {
              color: ${colors.darkSlateBlue};
              font-family: ${fonts.halyardDisplay};
              font-size: 44px;
              font-weight: 600;
              line-height: 75px;
            }

            .intro-card,
            .trending-posts {
              margin-top: 5rem;
            }

            .intro-card.intro-card--trending {
              width: 80%;
            }

            .trending-posts {
              width: 20%;
              height: 100%;
              margin-left: 2rem;
              margin-bottom: 0;
              display: flex;
              flex-direction: column;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              background: #fff;
              border-radius: 4px;
            }

            .trending-posts-heading {
              color: ${colors.primary};
              background: ${colors.brightGray};
              margin: 0;
              padding: 1rem;
              border-radius: 4px 4px 0 0;
              position: relative;
            }

            .trending-posts-heading :global(svg) {
              top: 50%;
              position: absolute;
              padding: 1rem 1px 0 0;
              transform: translateY(-50%) rotate(-90deg);
            }

            .trending-posts-list {
              padding: 1rem 0;
              margin: 0;
              flex: 1 0 0;
              display: grid;
              list-style: none;
              grid-auto-rows: 1fr;
              grid-template-columns: 1fr;
              grid-row-gap: 1rem;
            }

            .trending-post {
              padding: 0 1rem;
              font-size: 1rem;
              line-height: 1.6rem;
              max-height: calc(1.6rem * 2);
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .trending-post a {
              color: ${colors.primary};
            }

            .trending-post a:hover {
              text-decoration: underline;
            }

            .blog-grid .row {
              margin-bottom: 4rem;
              display: flex;
              flex-wrap: wrap;
            }

            .blog-grid .row.row--trending {
              flex-wrap: nowrap;
            }

            @media (max-width: 991px) {
              .blog-grid .row.row--trending {
                flex-direction: column;
              }

              .intro-card.intro-card--trending {
                width: 100%;
              }

              .trending-posts {
                width: 100%;
                margin: 0 0 1rem;
              }

              .trending-posts-list {
                grid-auto-rows: unset;
                padding-bottom: 1rem;
              }
            }

            .blog-grid .row .blog-card.main {
              width: 100%;
              margin: 0;
            }

            .blog-grid .row-3-cols .blog-card {
              margin: 0 2%;
              width: 30.66667%;
            }

            .blog-grid .row-3-cols .blog-card:first-child {
              margin-left: 0;
            }

            .blog-grid .row-3-cols .blog-card:last-child {
              margin-right: 0;
            }

            .tag-filters {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              padding: 0;
              margin-bottom: 1rem;
              list-style: none;
            }

            .tag-filters li {
              padding: 1em 0.6em;
              margin-bottom: 1rem;
              border-radius: 5px;
              line-height: 0;
            }

            .tag-filters li {
              margin-left: 1rem;
              margin-right: 1rem;
            }

            .tag-filters a {
              color: ${colors.primary};
            }

            .tag-filters li.active {
              background-color: ${colors.brightGray};
            }

            .tag-filters li.active a {
              text-decoration: none;
              font-weight: 400;
            }

            .blog-section-sublabel {
              letter-spacing: 3px;
              position: relative;
              overflow: hidden;
            }

            .blog-sublabel {
              color: lighten(${colors.primary}, 60%);
            }

            .blog-sublabel::after {
              content: ' ';
              position: absolute;
              top: 50%;
              left: 160px;
              background: lighten(${colors.primary}, 70%);
              width: 100%;
              height: 1px;
            }

            @media (max-width: 991px) {
              .blog-grid .row-3-cols .blog-card {
                margin: 0 0 2rem 0;
                width: 100%;
              }
              .blog-grid .row {
                margin-bottom: 0;
              }
            }
          `}
        </style>
      </Layout>
    </>
  );
}
