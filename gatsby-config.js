module.exports = {
  siteMetadata: {
    title: 'The Squirrels Drey',
    description:
      'The Squirrels Drey Pub & Restaurant in Sporle, Swaffham, Norfolk. Boasting fresh, locally sourced, homemade food in an idyllic location. Vegan and Vegetarians, Gluten Free and Dairy Free, we can cater to any dietary requirement.',
    author: '@AaronDukeUk',
    siteUrl: 'https://squirrelsdrey.co.uk'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          containers: './containers',
          images: './images',
          state: './state',
          styles: './styles',
          utils: './utils',
          static: {
            root: './public',
            alias: './static'
          }
        }
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Squirrels Drey',
        short_name: 'Squirrels Drey',
        start_url: '/',
        background_color: '#fa9200',
        theme_color: '#fa9200',
        display: 'minimal-ui',
        icon: 'src/images/sdlogo.png' // This path is relative to the root of the site.
      }
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
        plugins: []
      }
    },
    'gatsby-image',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-125330449-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      }
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    }
  ]
};
