import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Typography, Grid, Fade } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

const AboutPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query aboutQuery1 {
        peter: file(relativePath: { regex: "/me2/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <Grid
        container
        className={classes.container}
        justify="center"
        align="center"
      >
        <Fade in timeout={2000}>
          <Grid item xs="12">
            <Typography variant="h2">About Us</Typography>
          </Grid>
        </Fade>
        <Grid item xs="12">
          <div className={classes.imageContainer}>
            <Img
              className={classes.image}
              fluid={data.peter.childImageSharp.fluid}
            />
          </div>
        </Grid>
        <Grid item xs="10">
          <Typography variant="h4">
            Peter Chapman - Owner / Head Chef
          </Typography>
        </Grid>
        <Grid item xs="10">
          <Typography variant="body2">
            My career choice was sparked whilst still at school in the home
            economics department. The passion I had developed and inspiration
            from our top chefs gave me the desire to always create unusual
            dishes. I have always wanted to use fresh local produce and high
            quality ingredients with a simple approach, allowing the natural
            flavours to speak for themselves. That desire developed into
            attempting to create an environment where people could come to
            socialise and enjoy good honest food, in a relaxed environment, with
            friendly, welcoming service.
          </Typography>
        </Grid>
      </Grid>
    )}
  />
);

export default withStyles(styles)(AboutPage);
