import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../footer/footer';
import Head from '../head/head';
import Header from '../header/header';

import './layout.css';


const RecipesLayout = ({ children }) => (
  <>
    <Head />
    <Header />
    <div>{children}</div>
    <Footer />
  </>


);

RecipesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesLayout;
