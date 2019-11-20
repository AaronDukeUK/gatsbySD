import React from 'react';

import { HomePage } from 'containers';

import { Layout, SEO } from 'components';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
);

export default Home;
