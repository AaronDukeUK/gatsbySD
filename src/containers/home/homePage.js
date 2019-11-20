import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
 Typography, Grid, Button, Fade 
} from '@material-ui/core';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

const IndexPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query imgQuery {
        hero: file(relativePath: { regex: "/indoor/" }) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        food: file(relativePath: { regex: "/shortbreads/" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        dinig: file(relativePath: { regex: "/dining/" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Img
          className={classes.backgroundImg}
          style={{ position: 'fixed' }}
          fluid={data.hero.childImageSharp.fluid}
        />
        <Fade in timeout={2000}>
          <Typography className={classes.heroText} variant="h1">
            The Squirrels Drey
          </Typography>
        </Fade>
        <Grid
          container
          className={classes.container}
          justify="center"
          align="center"
        >
          <Grid item m="10" sm="11">
            <Typography variant="h2" className={classes.leadTitle}>
              WATERING HOLE AND GARDEN
            </Typography>
          </Grid>
          <Grid item m="10" sm="10">
            <Typography variant="body1">
              Based in Sporle, near Swaffham.
            </Typography>
            <Typography variant="body1">
              The Squirrels Drey boasts locally sourced, homemade food in
              idealic location.
            </Typography>
            <Link to="/menus">
              <Button size="large" variant="contained">
                Our Menu
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.container}
          justify="space-around"
          align="center"
        >
          <Grid item xs="11" lg="5" className={classes.leadSection}>
            <Typography variant="h3"> Homemade Food </Typography>

            <Img
              className={classes.infoImage}
              fluid={data.food.childImageSharp.fluid}
            />

            <Typography variant="body2">
              We Pride ourselves on using fresh, locally source produce
              throughout our menu. All of our dishes are made on site and we can
              cater to any dietery requirements you may have. We can accomodate
              large parties for any occasion, taloring your experience to
              whatever your needs may be.
            </Typography>

            <Link to="./menus">
              <Button size="large" variant="contained">
                Read More
              </Button>
            </Link>
          </Grid>

          <Grid item xs="11" lg="5" className={classes.leadSection}>
            <Typography variant="h3">Relaxed Dining</Typography>

            <Img
              className={classes.infoImage}
              fluid={data.dinig.childImageSharp.fluid}
            />

            <Typography variant="body2">
              We are a family run, tradition village Pub, situated in the quaint
              village of Sporle. We offer a wide range of specially selected
              beverages within relaxed, acommodating surroundings. A large open
              fireplace to keep you warm in the colder months and a spacious
              beer garden for everyone to enjoy in the warmer ones.
            </Typography>

            <Link to="./about">
              <Button size="large" variant="contained">
                Read More
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.containerOrange}
          justify="center"
          align="center"
        >
          <Grid item xs="12" lg="5" className={classes.newsItem}>
            <iframe
              title="google maps"
              className={classes.gmap}
              src="https://maps.google.com/maps?q=
                  the%20squirrels%20drey%20sporle
                  &t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
            <Typography variant="h4">FIND US ON GOOGLE MAPS </Typography>
          </Grid>

          <Grid item xs="11" lg="3" className={classes.newsItemBorder}>
            <Typography variant="h4"> Did you Know? </Typography>

            <Typography variant="body2">
              We use a large variety of ingredients in our dishes which is
              source from our very own organic allotment. It is located only a
              few miles away and these ingredients get sourced regulary.
            </Typography>

            <Typography variant="h4"> Gluten Free? </Typography>

            <Typography variant="body2">
              Here at the squirrels drey we understand it can be hard to dine
              out when dietry requirements are conserned. Thats why almost all
              of our dishes can be adapted to suit your needs.
            </Typography>
          </Grid>

          <Grid item xs="11" lg="3" className={classes.newsItem}>
            <Typography variant="h4"> Beer Garden </Typography>

            <Typography variant="body2">
              This year we have been working hard to get a large portion of the
              garden suitable for you all to enjoy. In the summer of 2020 this
              will be opened for everyone to use! Did someone say BBQ?
            </Typography>

            <Typography variant="h4"> Functions </Typography>

            <Typography variant="body2">
              Need a venue for a gathering you are organising? We can cater to a
              large variety of requests, please feel free to get in contact with
              us to discuss your ideas further.
            </Typography>
          </Grid>
        </Grid>
      </>
    )}
  />
);
export default withStyles(styles)(IndexPage);
