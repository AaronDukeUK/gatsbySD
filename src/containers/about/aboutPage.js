import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Typography, Grid, Fade } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
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
        allotmentOne: file(relativePath: { regex: "/allotmentOne/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        allotmentTwo: file(relativePath: { regex: "/allotmentTwo/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        allotmentThree: file(relativePath: { regex: "/allotmentThree/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        allotmentFour: file(relativePath: { regex: "/allotmentFour/" }) {
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
            <div className={classes.imageContainerAbout}>
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
          <Grid item xs="10" lg="6">
            <Typography variant="body2">
              My career choice was sparked whilst still at school in the home
              economics department. The passion I developed together with
              inspiration from our top chefs gave me the desire to always create
              unusual dishes. I have always wanted to use fresh local produce
              and high quality ingredients with a simple approach, allowing the
              natural flavours to speak for themselves. That desire developed
              into the creation of an environment where people could come to
              socialise and enjoy good honest food, in a relaxed, with friendly,
              welcoming surroundings.
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.aboutAddonContainer}>
          <Grid
            container
            className={classes.sundayContainer}
            justify="center"
            align="center"
          >
            <Typography variant="h4">Organic Allotment Ingredients</Typography>
          </Grid>
          <Grid
            container
            className={classes.imagesContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.allotmentOne.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.allotmentTwo.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.allotmentThree.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.allotmentFour.childImageSharp.fluid} />
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.sloganContainer}
            justify="center"
            align="center"
          >
            <Typography variant="h4">Located a Few Miles Away</Typography>
          </Grid>
        </div>
      </>
    )}
  />
);

export default withStyles(styles)(AboutPage);
