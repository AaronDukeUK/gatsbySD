import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Head from '../head/head';
import Header from '../header/header';
import Footer from '../footer/footer';

import './layout.css';

const MainLayout = styled.main`
 {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  z-index: 2;
}
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
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
        <Header />

        <MainLayout>
          {children}
        </MainLayout>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
