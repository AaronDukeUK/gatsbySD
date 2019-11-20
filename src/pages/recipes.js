import React from 'react';

import { RecipesPage } from 'containers';

import { Layout, SEO } from 'components';

const Recipes = ({ location }) => (
  <Layout location={location}>
    <SEO title="Recipes" />
    <RecipesPage />
  </Layout>
);

export default Recipes;
