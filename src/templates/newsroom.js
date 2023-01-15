import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

import Container from '../components/Container';
import Footer from '../components/Footer';
import SpaceDivider from '../components/SpaceDivider';
import { colors, screen } from '../constants';

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import BlockText from '../components/BlockText';

export const pageQuery = graphql`
  query NewsByPage($skip: Int!, $limit: Int!) {
    news: allContentfulPressRelease(
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          date(formatString: "MMM DD, YYYY")
        }
      }
    }
  }
`;

export default function NewsroomPage(props) {
  const { data } = props;

  return (
    <Layout>
      <GatsbySeo title="Newsroom" description="Newsroom" />
      <Container>
        <h1 className="Newsroom-page-title">
          <div className="Newsroom-small-divider" />
          News
        </h1>

        <div className="Newsroom-news">
          {data.news.edges.map(news => (
            <Link
              key={news.node.slug}
              to={`/newsroom/news/${news.node.slug}/`}
              className="Newsroom-news-link"
            >
              <div>{news.node.title}</div>
              <div className="date">{news.node.date}</div>
            </Link>
          ))}
          <SpaceDivider height={20} />
          <BlockText
            pretitle="Press Kit"
            maxWidth="650"
            desc={
              <p>
                <a
                  className="link_pink"
                  href="https://drive.google.com/drive/folders/13kzySE3bJywG1HXS2fGtkq3zXmJFNlLH"
                >
                  Download press kit
                </a>
              </p>
            }
            textAlign="left"
          />
        </div>

        <SpaceDivider height={100} />
      </Container>
      <Footer />
      <style jsx global>{`
        .Newsroom-page-title {
          font-weight: 600;
          font-size: 3rem;
          line-height: 1.2;
          margin: 0.75rem 0 0 0;
          text-align: center;
        }

        .Newsroom-news-link {
          margin: 20px 0;
          display: inline-block;
          width: 100%;
          max-width: 650px;
          text-align: left;
          color: ${colors.darkSlateBlue};
        }

        .Newsroom-small-divider {
          display: block;
          width: 60px;
          height: 2px;
          background-color: ${colors.darkSlateBlue};
          margin: 78px auto 11px;
        }

        .Newsroom-news {
          text-align: center;
        }

        .Newsroom-news .Newsroom-news-link div {
          font-size: 22px;
          max-width: 650px;
          line-height: 34px;
          text-decoration: none;
          margin: 0 auto;
        }

        .Newsroom-news .Newsroom-news-link .date {
          font-size: 18px;
        }

        @media (max-width: ${screen.tabletMax}px) {
          .Newsroom-news .block-text__wrap {
            align-items: flex-start;
          }
      `}</style>
    </Layout>
  );
}
