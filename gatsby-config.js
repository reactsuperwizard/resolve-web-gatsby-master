require('dotenv').config();

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    siteUrl: `https://resolvepay.com/`,
    title: `Resolve`,
    description: `Resolve helps businesses grow B2B sales, get paid faster, and reduce risk by streamlining their net terms, accounts receivable, and payments processes.`,
    author: `Resolve`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        title: `B2B net terms & credit management solution`,
        titleTemplate: `%s | Resolve`,
        language: `en`,
        description: `Resolve helps merchants grow B2B sales, get paid faster, and reduce risk by streamlining their net terms, accounts receivable, and payments processes.`,
        facebook: {
          appId: 2760451430891303,
        },
        openGraph: {
          type: 'website',
          images: [
            {
              url: `https://resolvepay.com/resolve-logo-open-graph.png`,
              width: 1080,
              height: 1080,
              alt: `Resolve logo`,
            },
          ],
        },
        twitter: {
          handle: `@resolvepay`,
          site: `@resolvepay`,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://resolvepay.com/',
        sitemap: 'https://resolvepay.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT_PROD_KEY,
        devKey: process.env.SEGMENT_DEV_KEY,
        trackPage: true,
        delayLoad: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/resolve-logo-48x48.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-jsx`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        enableTags: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          `/blog/category/*/`,
          `/blog/category/*/*/`,
          `/blog/*/`,
          `/components*`,
          `/customers/vice-golf/`,
          `/demo`,
          `/qbo-disconnected*`,

          // T&Cs don't need to be indexed on Google
          `/privacy/`,
          `/terms/`,
          `/terms/*/`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://resolvepay.com/`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
      },
    },
  ],
};
