import React from 'react';

import RecipesLayout from '../components/layout/recipesLayout';
import Listing from '../components/recipe/listing';
import SEO from '../seo';

const Recipes = ({ location }) => (
  <RecipesLayout location={location}>
    <SEO title="Recipes" />
    <Listing />
  </RecipesLayout>
);

export default Recipes;
