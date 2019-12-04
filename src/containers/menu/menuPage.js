import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Typography, Grid, Fade } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const MenuPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query menuImgQuery {
        chicken: file(relativePath: { regex: "/chicken/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        curry: file(relativePath: { regex: "/curry/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icecream: file(relativePath: { regex: "/icecream/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pasta: file(relativePath: { regex: "/pasta/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seabass: file(relativePath: { regex: "/seabass/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        shortbreads: file(relativePath: { regex: "/shortbreads/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tart: file(relativePath: { regex: "/tart/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        truffles: file(relativePath: { regex: "/truffles/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wellington: file(relativePath: { regex: "/wellington/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        salmon: file(relativePath: { regex: "/salmon/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        apple: file(relativePath: { regex: "/apple/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tort: file(relativePath: { regex: "/tort/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Grid
          container
          className={classes.container}
          justify="center"
          align="center"
        >
          <Fade in timeout={2000}>
            <Grid item xs="10">
              <Typography variant="h2">Our Menu</Typography>
            </Grid>
          </Fade>
          <Grid item xs="10">
            <Typography variant="body1">
              GF - Gluten Free on Request / V - Vegetarian
            </Typography>
            <Typography variant="body1">
              Vegan dishes available upon request
            </Typography>
            <Typography variant="body1">Sample Options</Typography>
          </Grid>
          <Grid item xs="10" lg="6">
            <Typography variant="h4" className="menuTitle">
              Starters
            </Typography>
            <Typography variant="body1">
              Rustic oven baked garlic butter and thyme ciabatta bread. V
            </Typography>
            <Typography variant="body1">
              Cream of sweetcorn soup, pancetta crisp, focaccia rosemary crumb.
              GF
            </Typography>
            <Typography variant="body1">
              Deep fried crispy popcorn cockles, sweet chilli and red wine
              vinegar.
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
              Beer battered cod, thrice cooked chunky chips, minted pea
              mayonnaise, tartar sauce. GF
            </Typography>
            <Typography variant="body1">
              Honey baked ham hock, thrice cooked chunky chips, crispy hens egg,
              sweet pea veloute. GF
            </Typography>
            <Typography variant="body1">
              Slow roast belly of pork, wilted cavolo nero, toffee apple
              croquettes, caramelised onion puree, cox apple crisps.
            </Typography>
            <Typography variant="body1">
              Handmade Beef patty, sweet pickle, mature cheddar, toasted bap,
              salad, thrice cooked chunky chips, beer battered onion rings,
              sweet onion and balsamic marmalade. GF
            </Typography>
            <Typography variant="body1">
              Pan seared Norfolk chicken supreme, aged cheddar gnocchi, wilted
              cavolo nero, beurre blanc sauce.
            </Typography>
            <Typography variant="body1">
              Roast honey fig and goats cheese tart, poached sweet cranberry and
              thyme polenta salad, toasted pistachio pesto. V
            </Typography>
            <Typography variant="body1">
              Sous vide Scottish salmon, sautéed pink fir potatoes, wilted
              rainbow chard and fennel seed, sweet tomato consomme. GF
            </Typography>
            <Typography variant="h4">Desserts</Typography>
            <Typography variant="body1">
              Sweet local apple and mixed berry pie with clotted ice cream.
            </Typography>
            <Typography variant="body1">
              White chocolate and raspberry creme brulee, poppy seed tuile
              biscuit. GF
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
            <Typography variant="body1">
              Whiskey and Orange Marmalade
            </Typography>
          </Grid>
          <Grid
            container
            className={classes.imagesContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.chicken.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.curry.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.icecream.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.pasta.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.seabass.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.shortbreads.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.tart.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.truffles.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.wellington.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.salmon.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.apple.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.tort.childImageSharp.fluid} />
            </Grid>
          </Grid>
        </Grid>
      </>
    )}
  />
);

export default withStyles(styles)(MenuPage);
