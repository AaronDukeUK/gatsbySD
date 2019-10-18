import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header/header'

import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const RecipiesLayout = ({ children, location }) => (
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
    render={data => (
      <>
        <Header/>
        <Spring
          from={{ height: location.pathname === '/' ? 100 : 200 }}
          to={{ height: location.pathname === '/' ? 200 : 100 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        <MainLayout>
          <div>{children}</div>
        </MainLayout>
      </>
    )}
  />
)

RecipiesLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RecipiesLayout
