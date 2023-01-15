const { chunk } = require('lodash');
const replace = require('replace-in-file');
const path = require('path');

const POSTS_PER_PAGE = 15;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      posts: allContentfulBlogPost {
        distinctTagIds: distinct(field: metadata___tags___contentful_id)
        edges {
          node {
            slug
          }
        }
      }
      tags: allContentfulTag {
        nodes {
          name
          contentful_id
        }
      }
      news: allContentfulPressRelease {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const blogTags = data.posts.distinctTagIds.reduce(
    (agg, id) => [
      ...agg,
      {
        id,
        name: data.tags?.nodes?.find?.(tag => tag.contentful_id === id)?.name,
      },
    ],
    []
  );

  const postsPages = chunk(data.posts.edges, POSTS_PER_PAGE);
  for (let page = 0; page < postsPages.length; page++) {
    createPage({
      path: `/blog${page === 0 ? '' : `/${page + 1}`}/`,
      component: path.resolve('src/templates/blog.js'),
      context: {
        page,
        pageCount: postsPages.length,
        limit: POSTS_PER_PAGE,
        skip: page * POSTS_PER_PAGE,
        blogTags,
        type: 'blog',
      },
    });
  }

  for (let tagId of data.posts.distinctTagIds) {
    const { data: tagPages } = await graphql(`
      {
        posts: allContentfulBlogPost(
          limit: ${POSTS_PER_PAGE}
          filter: {
            metadata: {
              tags: {
                elemMatch: { contentful_id: { eq: "${tagId}" } }
              }
            }
          }
        ) {
          pageInfo {
            pageCount
          }
        }
      }
    `);

    const pageCount = tagPages.posts?.pageInfo?.pageCount;

    for (let page = 0; page < pageCount; page++) {
      createPage({
        path: `/blog/category/${tagId}${page === 0 ? '' : `/${page + 1}`}/`,
        component: path.resolve('src/templates/blog.js'),
        context: {
          page,
          pageCount,
          limit: POSTS_PER_PAGE,
          skip: page * POSTS_PER_PAGE,
          tagId,
          blogTags,
          type: 'category',
        },
      });
    }
  }

  for (const post of data.posts.edges) {
    const slug = post.node.slug.replace('/', '');
    createPage({
      path: `/blog/post/${slug}/`,
      component: path.resolve('src/templates/post.js'),
      context: {
        slug: post.node.slug,
      },
    });
  }

  const newsPages = chunk(data.news.edges, POSTS_PER_PAGE);
  for (let page = 0; page < newsPages.length; page++) {
    createPage({
      path: `/newsroom${page === 0 ? '' : `/${page + 1}`}/`,
      component: path.resolve('src/templates/newsroom.js'),
      context: {
        page,
        pageCount: newsPages.length,
        limit: POSTS_PER_PAGE,
        skip: page * POSTS_PER_PAGE,
      },
    });
  }

  for (const news of data.news.edges) {
    const slug = news.node.slug.replace('/', '');
    createPage({
      path: `/newsroom/news/${slug}/`,
      component: path.resolve('src/templates/news.js'),
      context: {
        slug: news.node.slug,
      },
    });
  }
};

exports.onPostBuild = async function onPostBuild() {
  /*
  Temporary solution for this bug:
  https://github.com/nfl/react-helmet/issues/79
*/
  try {
    await replace({
      files: ['public/*.html', 'public/**/*.html'],
      from: /<title data-react-helmet="true">.*?<\/title>/g,
      to: '',
    });
  } catch (err) {
    console.error(err);
  }
};
