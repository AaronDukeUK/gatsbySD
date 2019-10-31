import React from 'react';

import RecipesLayout from '../components/layout/recipesLayout';
import Listing from '../components/recipe/listing';

const Recipes = ({ location }) => (
  <RecipesLayout location={location}>
    <Listing />
  </RecipesLayout>
);

export default Recipes;
