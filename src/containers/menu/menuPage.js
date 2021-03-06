import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Typography, Grid, Fade, Button } from '@material-ui/core';
import { SEO } from 'components';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import NYE from '../../files/NYE.pdf';
import XMAS from '../../files/Xmas.pdf';

const MenuPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query menuImgQuery {
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
        <SEO title="Events" />
        <Grid
          container
          className={classes.container}
          justify="center"
          align="center"
        >
          <Fade in timeout={2000}>
            <Grid item xs="10">
              <Typography variant="h2">
                Xmas & NYE Menus
              </Typography>
            </Grid>
          </Fade>

          <Grid item xs="10">
            <Typography variant="body1" className={classes.event}>
              Christmas Day
            </Typography>
            <a href={XMAS} download>
              <Button size="large" variant="contained">
                Christmas Day
              </Button>
            </a>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1" className={classes.event}>
              New Years Eve
            </Typography>
            <a href={NYE} download>
              <Button size="large" variant="contained">
                New Years Eve
              </Button>
            </a>
          </Grid>
          <div className={classes.eventsAddonContainer}>
            <Grid
              container
              className={classes.sundayContainer}
              justify="center"
              align="center"
              spacing="1"
            >
              <Typography variant="h4">
                Sunday Lunches Served 1200 - 1500
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
                <Img fluid={data.lemonChicken.childImageSharp.fluid} />
              </Grid>
              <Grid item xs="12" sm="6" md="4" xl="3">
                <Img fluid={data.mapleBurg.childImageSharp.fluid} />
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
              <Typography variant="h4">
                Homemade & Locally Sourced Food
              </Typography>
            </Grid>
          </div>
        </Grid>
      </>
    )}
  />
);

export default withStyles(styles)(MenuPage);
