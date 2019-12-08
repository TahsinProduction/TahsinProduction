module.exports = {
  siteMetadata: {
    title: `TahsinProduction`,
    description: `Offical Website Of TahsinProduction`,
    author: `@TahsinProduction`,
    siteUrl: 'https://www.tahsinproduction.com'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName: "TahsinProduction",
        defaultSiteImage: "https://images2.imgbox.com/2b/88/NQSvb5zx_o.png",
        siteUrl: "https://www.tahsinproduction.com/",
        twitterCreator: "@twitterhandle",
        twitterSite: "@twitterhandle",
        globalSchema: `{
            "@type": "WebSite",
            "@id": "https://tahsinproduction.com/#website",
            "url": "https://www.tahsinproduction.com/",
            "name": "TahsinProduction",
            "publisher": {
              "@id": "https://tahsinproduction.com/about/#organization"
            },
            "image": {
              "@type": "ImageObject",
              "@id": "https://tahsinproduction.com/#logo",
              "url": "https://tahsinproduction.com/img/logo.png",
              "caption": "TahsinProduction"
            }
          }`
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5CNMSWD",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/admin`, `/tags/links`]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.tahsinproduction.com`,
        stripQueryString: true,
    },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-147244731-1`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tahsinproduction.com',
        sitemap: 'https://www.tahsinproduction.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TahsinProduction`,
        short_name: `TahsinProduction`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
