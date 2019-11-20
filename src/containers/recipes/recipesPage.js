import React from 'react';

import { Typography, Fade } from '@material-ui/core';

import { RecipePost } from 'components';

const RecipesPage = () => (
  <div className="recipies">
    <Fade in timeout={2000}>
      <Typography variant="h2">RECIPES</Typography>
    </Fade>
    <div className="recipieContainer">
      <RecipePost />
    </div>
  </div>
);

export default RecipesPage;
