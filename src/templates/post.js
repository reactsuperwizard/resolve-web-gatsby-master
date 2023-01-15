import React, { useMemo, useLayoutEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Notice from '../components/Notice';
import RelatedPost from "../components/RelatedPost";
// import HubspotContactForm from '../components/HubSpotForm';

import { colors, fonts, screen } from '../constants';

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      description
      slug
      disclaimer
      feature_image {
        description
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      ogFeatureImage: feature_image {
        gatsbyImageData(
          layout: FIXED
          width: 1200
          aspectRatio: 1.91
          formats: [JPG]
          quality: 80
          placeholder: NONE
          resizingBehavior: FILL
        )
      }
      body {
        childMarkdownRemark {
          html
          headings {
            depth
            id
            value
          }
        }
      }
      relatedPosts {
        id
        slug
        title
        description
        metadata {
          tags {
            id
            name
          }
        }
        feature_image {
          description
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    notice: contentfulAlertBanner(contexts: { eq: "Posts" }) {
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

export default function PostPage({ data }) {
  const { post, notice } = data;
  const [selected, setSelect] = useState('')

  const [postContent, postTableOfContent] = useMemo(() => {
    if (post.body?.childMarkdownRemark?.html) {
      const content = (
        <div
          dangerouslySetInnerHTML={{
            __html: post.body?.childMarkdownRemark?.html,
          }}
        />
      );
      const toc = (post.body?.childMarkdownRemark?.headings || []).filter(
        heading => heading.depth === 2
      );
      return [content, toc];
    }
    return [];
  }, [post]);

  // const navigateToDemo = () => {
  //   window.location = 'https://b2b.resolvepay.com/watch-demo-video/';
  // };

  useLayoutEffect(() => {
    if (!document.documentElement.style.scrollBehavior) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return () => {
        document.documentElement.style.scrollBehavior = '';
      };
    }
  }, []);

  return (
    <>
      <Notice {...notice} />
      {/* Sticky headers don't work when the overflow on a parent is hidden */}
      <Layout onType="article" removeOverflowHidden>
        <GatsbySeo
          title={post.title}
          description={post.description}
          openGraph={{
            url: `${data.site.siteMetadata.siteUrl}/blog/post/${post.slug}/`,
            title: post.title,
            description: post.description,
            type: 'article',
            images: [
              {
                url: getSrc(post.ogFeatureImage?.gatsbyImageData),
                alt: post.feature_image?.description,
                width: post.ogFeatureImage?.gatsbyImageData.width,
                height: post.ogFeatureImage?.gatsbyImageData.height,
              },
            ],
          }}
        />
        <section className="blog-post-hero">
          <Container>
            <div className="blog-post-hero__inner">
              <div className="blog-post-meta">
                {/* <p className="blog-post-meta-tag">{post.tag}</p> */}
                <h1 className="blog-post-title">{post.title}</h1>
              </div>

              <GatsbyImage
                image={post.feature_image?.gatsbyImageData}
                alt={post.feature_image?.description}
                className="blog-post-image"
                objectPosition="center center"
              />
            </div>
          </Container>
        </section>
        <Container>
          <article className="blog-post">
            <section className="blog-post-container">
              <div className="blog-post-content">
                {postContent}
                {post.disclaimer && (
                  <>
                    <hr className="blog-post-disclaimer__hr " />
                    <aside className="blog-post-disclaimer">
                      This post is to be used for informational purposes only
                      and does not constitute formal legal, business, or tax
                      advice. Each person should consult his or her own
                      attorney, business advisor, or tax advisor with respect to
                      matters referenced in this post. Resolve assumes no
                      liability for actions taken in reliance upon the
                      information contained herein.
                    </aside>
                  </>
                )}
              </div>
              <nav className="blog-post-toc-nav">
                <div className="blog-post-toc">
                  <h5 className="blog-post-toc__title">Contents</h5>
                  {
                    <ul className="blog-post-toc__list">
                      {(postTableOfContent || []).map(link => (
                        <li className={`blog-post-toc__list-item ${selected === link.id ? "active" : ""}`}>
                          <a href={`#${link.id}`} onClick={() => { setSelect(link.id) }}>{link.value}</a>
                        </li>
                      ))}
                    </ul>
                  }
                  {/* HubSpot Call-to-Action Code */}
                  {/* <div className="blog-post-toc-cta">
                    <p className="blog-post-toc-cta-text">
                      Want to see how Resolve Pay helps you offer smarter net
                      terms?
                    </p>
                    <span
                      class="hs-cta-wrapper"
                      id="hs-cta-wrapper-bd9a95e9-74e7-4a7e-be50-9ad024942671"
                    >
                      <span
                        class="hs-cta-node hs-cta-bd9a95e9-74e7-4a7e-be50-9ad024942671"
                        id="hs-cta-bd9a95e9-74e7-4a7e-be50-9ad024942671"
                      >
                        <a href="https://cta-redirect.hubspot.com/cta/redirect/8982602/bd9a95e9-74e7-4a7e-be50-9ad024942671">
                          <img
                            class="hs-cta-img"
                            id="hs-cta-img-bd9a95e9-74e7-4a7e-be50-9ad024942671"
                            style={{ borderWidth: '0px' }}
                            src="https://no-cache.hubspot.com/cta/default/8982602/bd9a95e9-74e7-4a7e-be50-9ad024942671.png"
                            alt="Watch demo video"
                          />
                        </a>
                      </span>
                      <script
                        charset="utf-8"
                        src="https://js.hscta.net/cta/current.js"
                      ></script>
                      <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                          __html: `
                        hbspt.cta.load(8982602, 'bd9a95e9-74e7-4a7e-be50-9ad024942671', {"useNewLoader":"true","region":"na1"});
                      `,
                        }}
                      />
                    </span>
                  </div> */}
                  {/* end HubSpot Call-to-Action Code */}
                </div>
              </nav>
            </section>
          </article>
          {/* <HubspotContactForm /> */}
        </Container>
        {post.relatedPosts && (
          <section className="blog-related-posts">
            <Container>
              <h2 className="block__title">
                Discover more valuable content from Resolve
              </h2>
              <aside className="cards-wrapper">
                {post.relatedPosts.map(relatedPost => (
                  <RelatedPost
                    key={relatedPost.id}
                    post={relatedPost}
                  />
                ))}
              </aside>
            </Container>
          </section>
        )}
        <Footer graySkin />
        <style jsx global>{`
          b,
          strong {
            font-weight: bold;
          }
          .blog-related-posts {
            padding: 250px 0 0;
            background: linear-gradient(-8deg, #F7F8FA 85%, #fff 85.1%);
          }
          .blog-related-posts .cards-wrapper {
            justify-content: space-around;
          }
          .blog-related-posts .block__title {
            max-width: 700px;
            margin: 0 auto;
            font-weight: 400;
            font-size: 44px;
            line-height: 52px;
            text-align: center;
            color: #1F325D;
          }
          @media (max-width: ${screen.mobileMax}px) {
            .blog-related-posts {
              padding: 120px 0;
              background: linear-gradient(-8deg, #F7F8FA 93%, #fff 93.1%);
            }
            .blog-related-posts .block__title {
              font-size: 24px;
              line-height: 32px;
            }
          }
          @media (max-width: ${screen.mobileExtraSmall}px) {
            .blog-related-posts {
              background: linear-gradient(-8deg,#F7F8FA 96%,#fff 96.1%);
            }
          }
          .blog-post-hero {
            padding: 200px 0 300px;
            background: linear-gradient(-8deg,#fff 28.3%,#F4F5F8 28.4%);
          }
          .blog-post-hero__inner {
            display: flex;
            justify-content: space-between;
          }

          .blog-post-meta {
            max-width: 714px;
            margin-right: 12px;
          }
          .blog-post-meta-tag {
            margin-bottom: 16px;
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            text-decoration-line: underline;
            color: #1F325D;
          }
          .blog-post-title {
            font-weight: 400;
            font-size: 48px;
            line-height: 56px;
            color: #1F325D;
            margin: 0;
          }

          .blog-post-image {
            background-size: cover;
            width: 100%;
            max-width: 615px;
            height: 344px;
          }

          .blog-post-container {
            margin: 0 auto;
            min-height: 230px;
            background: #fff;
            position: relative;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            column-gap: 60px;
          }
          @media (max-width: 1120px) {
            .blog-post-hero {
              padding: 150px 0 300px;
            }
            .blog-post-hero__inner {
              flex-direction: column-reverse;
            }
            .blog-post-image {
              max-width: 100%;
              height: 394px;
            }
            .blog-post-meta {
              max-width: 522px;
              margin: 0 auto;
              margin-top: 32px;
            }
            .blog-post-title {
              font-size: 24px;
              line-height: 32px;
            }
          }
          @media (max-width: 1040px) {
            .blog-post-container {
              column-gap: 30px;
            }

            .related-posts {
              flex-direction: column;
            }
            .related-post + .related-post {
              margin-top: 4rem;
              margin-left: 0;
            }
          }

          @media (max-width: 925px) {
            .blog-post-container {
              display: block;
            }
          }

          .blog-post-content {
            position: relative;
            font-weight: 300;
            font-size: 16px;
            line-height: 22px;
            color: #1F325D;
            grid-column: span 2 / span 2;
          }

          .blog-post-content hr.blog-post-disclaimer__hr {
            margin: 2rem 0;
            border-color: ${colors.brightGray};
            background-color: ${colors.brightGray};
            height: 2px;
          }

          .blog-post-disclaimer {
            font-size: 1rem;
            line-height: 1.6;
            color: ${colors.baliHai};
          }

          @media (max-width: 1040px) {
            .blog-post-content {
              font-size: 1.1rem;
              line-height: 1.6em;
            }
          }

          .blog-post-content * {
            box-sizing: border-box;
          }

          .blog-post-content a {
            text-decoration-line: underline;
            color: #004EFF;
          }

          .kg-card-markdown {
            color: ${colors.darkSlateBlue};
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 820px;
            margin: 0 auto;
          }

          .blog-post-content h1,
          .blog-post-content h2,
          .blog-post-content h3,
          .blog-post-content h4,
          .blog-post-content h5,
          .blog-post-content h6 {
            line-height: 130%;
          }

          .blog-post-content h1,
          .blog-post-content h2,
          .blog-post-content h3,
          .blog-post-content h4,
          .blog-post-content h5,
          .blog-post-content h6,
          .blog-post-content p,
          .blog-post-content ul,
          .blog-post-content ol,
          .blog-post-content dl,
          .blog-post-content pre,
          .blog-post-content blockquote,
          .blog-post-comments,
          .footnotes {
            min-width: 100%;
          }

          .blog-post-content li {
            word-break: break-word;
            padding-left: 0.75rem;
          }

          .blog-post-content p {
            margin-bottom: 1rem;
          }

          .blog-post-content li p {
            margin: 0;
          }

          .kg-card-markdown > p:first-child {
            font-size: 1.25em;
            line-height: 1.5em;
          }

          .blog-post-content a {
            color: lighten(${colors.salmon}, 5%);
            text-decoration: underline;
          }

          .blog-post-content a:hover {
            text-decoration: none;
          }

          .blog-post-content strong,
          .blog-post-content em {
            color: color(${colors.darkSlateBlue} l(-5%));
          }

          .blog-post-content small {
            display: inline-block;
            line-height: 1.6em;
          }

          .blog-post-content li:first-child {
            margin-top: 0;
          }

          .blog-post-content img,
          .blog-post-content video {
            display: block;
            margin: 1.5em auto;
            max-width: 100%;
          }

          @media (max-width: 1040px) {
            .blog-post-content img,
            .blog-post-content video {
              width: 100%;
            }
          }

          .blog-post-content img[src$='#full'] {
            max-width: none;
            width: 100vw;
          }

          .blog-post-content img + br + small {
            display: block;
            margin-top: -3em;
            margin-bottom: 1.5em;
          }

          .blog-post-content iframe {
            margin: 0 auto;
          }

          .blog-post-content blockquote {
            background: rgba(0, 0, 0, 0.015);
            border: lighten(${colors.darkSlateBlue}, 65%) 1px solid;
            border-left: lighten(${colors.darkSlateBlue}, 35%) 4px solid;
            margin: 0 0 1.5rem;
            padding: 1.3rem 1.5rem 1.4rem 1.5rem;
          }

          .blog-post-content blockquote p strong {
            font-weight: bold;
          }

          .blog-post-content blockquote p {
            margin: 0 0 1em 0;
            color: ${colors.darkSlateBlue};
            font-size: inherit;
            line-height: inherit;
            font-style: italic;
          }

          .blog-post-content blockquote p:last-child {
            margin-bottom: 0;
          }

          .blog-post-content code {
            padding: 0 5px 2px;
            font-size: 0.8em;
            line-height: 1em;
            font-weight: 400 !important;
            background: var(--whitegrey);
            border-radius: 3px;
          }

          .blog-post-content pre {
            overflow-x: auto;
            margin: 1.5em 0 3em;
            padding: 20px;
            max-width: 100%;
            border: color(var(--darkgrey) l(-10%)) 1px solid;
            color: var(--whitegrey);
            font-size: 1.4rem;
            line-height: 1.5em;
            background: color(var(--darkgrey) l(-3%));
            border-radius: 5px;
          }

          .blog-post-content pre code {
            padding: 0;
            font-size: inherit;
            line-height: inherit;
            background: transparent;
          }

          .blog-post-content pre code * {
            color: inherit;
          }

          .blog-post-content .fluid-width-video-wrapper {
            margin: 1.5em 0 3em;
          }

          .blog-post-content hr {
            margin: 4vw 0;
          }

          .blog-post-content hr:after {
            content: '';
            position: absolute;
            top: -15px;
            left: 50%;
            display: block;
            margin-left: -10px;
            width: 1px;
            height: 30px;
            background: color(var(--lightgrey) l(+10%));
            box-shadow: #fff 0 0 0 5px;
            transform: rotate(45deg);
          }

          .blog-post-content h1,
          .blog-post-content h2,
          .blog-post-content h3,
          .blog-post-content h4,
          .blog-post-content h5,
          .blog-post-content h6 {
            color: #1F325D;
            font-weight: 400;
            font-family: ${fonts.halyardDisplay};
          }

          .blog-post-content h1 {
            margin: 1.2em 0 0.6em 0;
            font-size: 3.25rem;
            font-weight: 600;
          }

          @media (max-width: 500px) {
            .blog-post-content h1 {
              font-size: 2.6rem;
            }
          }

          .blog-post-content h2 {
            font-size: 24px;
            line-height: 32px;
          }

          .blog-post-content h2:first-of-type {
            margin-top: 0;
          }

          .blog-post-content h3 {
            font-size: 22px;
            line-height: 28px;
          }

          .blog-post-content h4 {
            font-size: 20px;
            line-height: 24px;
          }

          .blog-post-content h5 {
            margin: 0.5em 0;
            font-size: 1.3rem;
            font-weight: 500;
          }

          @media (max-width: 500px) {
            .blog-post-content h5 {
              padding: 0 0 0.5em;
            }
          }

          .blog-post-content h6 {
            margin: 0.5em 0 0.2em 0;
            font-size: 1.3rem;
            font-weight: 500;
          }

          .footnotes-sep {
            margin-bottom: 30px;
          }

          .footnotes {
            font-size: 1.5rem;
          }

          .footnotes p {
            margin: 0;
          }

          .footnote-backref {
            color: var(--blue) !important;
            font-size: 1.2rem;
            font-weight: bold;
            text-decoration: none !important;
            box-shadow: none !important;
          }

          /* Some grouped styles for smaller viewports */
          @media (max-width: ${screen.mobileExtraSmall}px) {
            .blog-post-hero {
              padding: 100px 0;
              margin-bottom: 24px;
              background: linear-gradient(-8deg,#fff 15.3%,#F4F5F8 15.4%);
            }
            .blog-post-meta {
              margin-top: 24px;
            }
            .blog-post-content {
              font-size: 1.1rem;
              padding: 0;
            }
            .blog-post-image {
              height: 210px;
              width: 100%;
            }
            .blog-post-content:before,
            .blog-post-content:after {
              display: none;
            }

            .blog-post-content h2 {
              font-size: 1.5rem;
            }

            .blog-post-content ul,
            .blog-post-content ol {
              padding-inline-start: 32px;
            }
          }

          /* Tables */
          .blog-post-content table {
            display: inline-block;
            overflow-x: auto;
            margin: 0.5em 0 2.5em;
            max-width: 100%;
            width: auto;
            border-spacing: 0;
            border: solid 1px rgba(0, 0, 0, 0.2);
            border-collapse: collapse;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            white-space: nowrap;
            vertical-align: top;
          }

          .blog-post-content table {
            -webkit-overflow-scrolling: touch;
            background-attachment: scroll, scroll;
            background-size: 10px 100%, 10px 100%;
            background-repeat: no-repeat;
          }

          .blog-post-content table td:first-child {
            background-size: 20px 100%;
            background-repeat: no-repeat;
          }

          .blog-post-content table td:last-child {
            background-position: 100% 0;
            background-size: 20px 100%;
            background-repeat: no-repeat;
          }

          .blog-post-content table th {
            color: var(--darkgrey);
            font-size: 1.2rem;
            font-weight: 600;
            letter-spacing: 0.2px;
            text-align: left;
            text-transform: uppercase;
            background-color: color(var(--whitegrey) l(+4%));
          }

          .blog-post-content table th,
          .blog-post-content table td {
            padding: 6px 12px;
            border: solid 1px rgba(0, 0, 0, 0.1);
          }

          .blog-post-toc-nav {
            max-width: 330px;
          }
          .blog-post-toc {
            position: sticky;
            top: 150px;
            overflow: auto;
            /* max-height: calc(100vh - 110px); */
          }
          @media (max-width: 1040px) {
            .blog-post-toc {
              padding: 1rem 1.5rem;
            }
          }
          @media (max-width: 925px) {
            .blog-post-toc-nav {
              display: none;
            }
          }
          @media (max-width: 800px) {
            .blog-post-toc {
              padding: 1rem;
            }
          }


          .blog-post-toc__title {
            margin: 0 0 16px;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            color: #1F325D;
          }
          .blog-post-toc__list {
            list-style-type: none;
            padding-left: 24px;
            margin: 0;
          }
          .blog-post-toc__list-item {
            position: relative;
            margin-bottom: 12px;
          }
          .blog-post-toc__list-item::before {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            top: 9px;
            left: -24px;
            border-radius: 50%;
            background: #DCDCDC;
          }
          .blog-post-toc__list-item.active::before {
            background: #FB835E;
            transition: all .1s ease-in-out;
          }
          .blog-post-toc__list-item a {
            font-weight: 300;
            font-size: 18px;
            line-height: 24px;
            color: #1F325D;
            opacity: 0.8;
          }
          .blog-post-toc__list-item.active a {
            font-weight: 400;
            opacity: 1;
          }
          .blog-post-toc__list-item a:hover {
            text-decoration: underline;
            transition: all .1s ease-in-out;
          }

          @media (max-width: 800px) {
            .blog-post-toc a {
              font-size: 0.9rem;
            }
          }

          .blog-post-toc-cta {
            border-top: 1px solid ${colors.baliHai};
            padding-top: 25px;
            margin-top: 20px;
            text-align: center;
          }

          .blog-post-toc-cta-text {
            font-size: 1rem;
            line-height: 1.4;
            margin-bottom: 25px;
          }

          @media (max-width: 800px) {
            .blog-post-toc-cta-text {
              font-size: 1rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
