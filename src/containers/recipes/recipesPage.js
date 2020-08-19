import React from 'react';

import { Typography, Grid, Fade } from '@material-ui/core';

import { StaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';
import { SEO } from 'components';
import { RecipePost } from 'components';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const RecipesPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query recipiesImgQuery {
        lemonChicken: file(relativePath: { regex: "/lemonChicken/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        mapleBurg: file(relativePath: { regex: "/mapleBurg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        strawbProfit: file(relativePath: { regex: "/strawbProfit/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        porkRoast: file(relativePath: { regex: "/porkRoast/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Recipies" />
        <div className="recipies">
          <Fade in timeout={2000}>
            <Typography variant="h2">RECIPES</Typography>
          </Fade>
          <div className="recipieContainer">
            <RecipePost />
          </div>
        </div>
        <div className={classes.recipiesAddonContainer}>
          <Grid
            container
            className={classes.sundayContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Typography variant="h4">
              Sunday Lunches Served 1200 - 1600
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
              <Img fluid={data.mapleBurg.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.lemonChicken.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.strawbProfit.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.porkRoast.childImageSharp.fluid} />
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.sloganContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Typography variant="h4">Free Delivery to Local Area</Typography>
          </Grid>
        </div>
      </>
    )}
  />
);

export default withStyles(styles)(RecipesPage);
