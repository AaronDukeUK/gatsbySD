import React from 'react';

import { Typography, Grid, Fade } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

const MenuPage = ({ classes }) => (
  <Grid container className={classes.container} justify="center" align="center">
    <Fade in timeout={2000}>
      <Grid item xs="10">
        <Typography variant="h2">Our Menu</Typography>
      </Grid>
    </Fade>
    <Grid item xs="10">
      <Typography variant="body1">
        GF - Gluten Free on Request / V - Vegetarian
      </Typography>
    </Grid>
    <Grid item xs="10">
      <Typography variant="h4" className="menuTitle">
        Starters
      </Typography>
      <Typography variant="body1">
        Rustic oven baked garlic butter and thyme ciabatta bread. V
      </Typography>
      <Typography variant="body1">
        Cream of sweetcorn soup, pancetta crisp, focaccia rosemary crumb. GF
      </Typography>
      <Typography variant="body1">
        Deep fried crispy popcorn cockles, sweet chilli and red wine vinegar.
      </Typography>
      <Typography variant="body1">
        Roast pumpkin tortellini, chestnut and sage beurre noisette. V
      </Typography>
      <Typography variant="h4">Mains</Typography>
      <Typography variant="body1">
        Slow braised beef and ale pie, shortcrust pastry, wilted kale,
        caramelised onion mash.
      </Typography>
      <Typography variant="body1">
        Beer battered cod, thrice cooked chunky chips, minted pea mayonnaise,
        tartar sauce. GF
      </Typography>
      <Typography variant="body1">
        Honey baked ham hock, thrice cooked chunky chips, crispy hens egg, sweet
        pea veloute. GF
      </Typography>
      <Typography variant="body1">
        Slow roast belly of pork, wilted cavolo nero, toffee apple croquettes,
        caramelised onion puree, cox apple crisps.
      </Typography>
      <Typography variant="body1">
        Handmade Beef patty, sweet pickle, mature cheddar, toasted bap, salad,
        thrice cooked chunky chips, beer battered onion rings, sweet onion and
        balsamic marmalade. GF
      </Typography>
      <Typography variant="body1">
        Pan seared Norfolk chicken supreme, aged cheddar gnocchi, wilted cavolo
        nero, beurre blanc sauce.
      </Typography>
      <Typography variant="body1">
        Roast honey fig and goats cheese tart, poached sweet cranberry and thyme
        polenta salad, toasted pistachio pesto. V
      </Typography>
      <Typography variant="body1">
        Sous vide Scottish salmon, sautéed pink fir potatoes, wilted rainbow
        chard and fennel seed, sweet tomato consomme. GF
      </Typography>
      <Typography variant="h4">Desserts</Typography>
      <Typography variant="body1">
        Sweet local apple and mixed berry pie with clotted ice cream.
      </Typography>
      <Typography variant="body1">
        White chocolate and raspberry creme brulee, poppy seed tuile biscuit. GF
      </Typography>
      <Typography variant="body1">
        Strawberry and elderflower Bakewell tart, vanilla creme anglaise.
      </Typography>
      <Typography variant="h4">Ice Creams</Typography>
      <Typography variant="body1">Chocolate Funfair</Typography>
      <Typography variant="body1">Turkish Delight</Typography>
      <Typography variant="body1">Dark Spiced Rum and Raisin</Typography>
      <Typography variant="body1">Liquorice GF</Typography>
      <Typography variant="body1">Norfolk Lavender GF</Typography>
      <Typography variant="body1">Rhubarb and Custard Ripple</Typography>
      <Typography variant="body1">Whiskey and Orange Marmalade</Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(MenuPage);
