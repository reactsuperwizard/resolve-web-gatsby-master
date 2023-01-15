import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

import Container from '../components/Container';
import Footer from '../components/Footer';
import SpaceDivider from '../components/SpaceDivider';
import { colors } from '../constants';

import { GatsbySeo } from 'gatsby-plugin-next-seo';

export const pageQuery = graphql`
  query NewsBySlug($slug: String!) {
    news: allContentfulPressRelease(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          title
          subtitle
          createdAt
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default function NewsPage({ data }) {
  const news = data.news.edges[0].node;

  return (
    <Layout>
      <GatsbySeo title="News" description="News" />
      <Container>
        <h1 className="News-page-title">
          <Link to="/newsroom/" className="News-newsroom-link">
            NEWS
          </Link>
          <div className="News-small-divider" />
        </h1>

        <article className="News-post">
          <header className="News-header">
            <h1 className="News-title">{news.title}</h1>
          </header>
          <section className="News-content">
            {news.body?.childMarkdownRemark?.html && (
              <div
                dangerouslySetInnerHTML={{
                  __html: news.body?.childMarkdownRemark?.html,
                }}
              />
            )}
          </section>
        </article>
        <SpaceDivider height={100} />
      </Container>
      <Footer />
      <style jsx global>{`
        .News-page-title {
          color: #738a94;
          letter-spacing: 0.2px;
          font-weight: 400;
          text-transform: uppercase;
          text-align: center;
          font-size: 22px;
          margin: 65px auto 0;
        }

        .News-page-title a {
          color: #738a94;
          letter-spacing: 0.2px;
          font-weight: 400;
          text-transform: uppercase;
          text-align: center;
          font-size: 22px;
          margin: 40px auto 0;
        }

        .News-title {
          color: ${colors.darkSlateBlue};
          font-family: HalyardDisplay, Helvetica, sans-serif;
          font-weight: 600;
          font-size: 3rem;
          line-height: 1.2;
          margin: 0.75rem 0 30px 0;
          padding: 0 60px;
          text-align: center;
        }

        .News-content {
          position: relative;
          margin: 0 auto;
          padding: 0 90px;
          font-size: 1.3rem;
          line-height: 1.6em;
          background: #fff;
        }

        .News-content p {
          margin-bottom: 1.5em;
        }

        .News-small-divider {
          display: block;
          width: 60px;
          height: 2px;
          background-color: ${colors.darkSlateBlue};
          margin: 7px auto 0;
        }

        @media (max-width: 991px) {
          .News-title {
            padding: 0;
            font-size: 2.25rem;
          }

          .News-content {
            padding: 0;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </Layout>
  );
}
