module.exports = {
  siteMetadata: {
    title: 'Squirrels Drey',
    description:
      'The Squirrels Drey boasts locally sourced, homemade food in idealic location.',
    author: '@ADuke_Design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'squirrels-drey',
        short_name: 'SD-Sporle',
        start_url: '/',
        background_color: '#fa9200',
        theme_color: '#fa9200',
        display: 'minimal-ui',
        icon: 'src/images/sdlogo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    'gatsby-image',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
  ],
};
