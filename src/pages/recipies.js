import React from 'react';

import RecipiesLayout from '../components/layout/recipiesLayout';
import Listing from '../components/recipie/listing';

const Recipies = ({ location }) => (
  <RecipiesLayout location={location}>
    <Listing />
  </RecipiesLayout>
);

export default Recipies;
