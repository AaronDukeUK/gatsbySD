import React from 'react';

import { Typography, Grid, Fade } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { SEO } from 'components';
import { StaticQuery, graphql } from 'gatsby';

import Img from 'gatsby-image';

const ContactPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query contactImgQuery {
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
        <SEO title="Contact" />
        <Grid
          container
          className={classes.container}
          justify="center"
          align="center"
        >
          <Fade in timeout={2000}>
            <Grid item xs="10">
              <Typography variant="h2">Contact Us</Typography>
            </Grid>
          </Fade>
          <Grid item xs="10">
            <Typography variant="body2">
              For bookings and general enquiries, please call us on:
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="h4">Phone</Typography>
            <Typography variant="body1">01760 788101</Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="h4">Address</Typography>
            <Typography variant="body1">The Squirrels Drey</Typography>
            <Typography variant="body1">70 The Street</Typography>
            <Typography variant="body1">Sporle</Typography>
            <Typography variant="body1">Kings Lynn</Typography>
            <Typography variant="body1">PE32 2DR</Typography>
          </Grid>
        </Grid>
        <div className={classes.contactAddonContainer}>
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

export default withStyles(styles)(ContactPage);
