module.exports = {
  siteMetadata: {
    title: 'Microblading Boutique'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-128772733-1',
        head: true,
        siteSpeedSampleRate: 10
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Microblading Boutique',
        short_name: 'MB Boutique',
        start_url: '/',
        background_color: '#00ad9f99',
        theme_color: '#00ad9f99',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: { modulePath: `${__dirname}/src/cms/cms.js` }
    },
    'gatsby-plugin-netlify'
  ]
};
