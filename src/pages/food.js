import React from 'react';

import { FoodPage } from 'containers';

import { Layout, SEO } from 'components';

const Food = () => (
  <Layout>
    <SEO title="Food" />
    <FoodPage />
  </Layout>
);

export default Food;
