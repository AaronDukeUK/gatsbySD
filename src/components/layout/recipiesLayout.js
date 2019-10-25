import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../footer/footer';
import { StaticQuery, graphql } from 'gatsby'
import Head from '../head/head';
import Header from '../header/header'

import './layout.css'


const RecipiesLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/bg2/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={() => (
      <>
        <Head />
        <Header/>
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
)

RecipiesLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RecipiesLayout
