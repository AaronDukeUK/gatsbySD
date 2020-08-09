import React, { useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Typography, Grid, Button, Fade } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Waypoint } from 'react-waypoint';
import { animated, useSpring } from 'react-spring';

import styles from './styles';

const IndexPage = ({ classes }) => {
  const [on1, toggle1] = useState(false);

  const animation1 = useSpring({
    opacity: on1 ? 1 : 0
  });

  const AnimatedGrid = animated(Grid);

  return (
    <StaticQuery
      query={graphql`
        query imgQuery {
          hero: file(relativePath: { regex: "/hero/" }) {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          food: file(relativePath: { regex: "/lemonChicken/" }) {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dining: file(relativePath: { regex: "/rest/" }) {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
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
          <AnimatedGrid
            style={animation1}
            container
            className={classes.container}
            justify="center"
            align="center"
          >
            <Waypoint
              onEnter={() => {
                if (!on1) toggle1(true);
              }}
            />
            <Grid item m="10" sm="11">
              <Typography variant="h2" className={classes.leadTitle}>
                Now Open for Dine In & Takeaway
              </Typography>
            </Grid>
            <Grid item m="10" sm="10" xs="9">
              <Typography variant="body1">
                Homemade, Locally Sourced Food
              </Typography>
              <Typography variant="body1">
                The Squirrels Drey Pub & Restaurant boasts fresh, locally
                sourced, homemade food.
              </Typography>
              <Link to="/food">
                <Button size="large" variant="contained">
                  Our Menu
                </Button>
              </Link>
            </Grid>
          </AnimatedGrid>

          <Grid
            container
            className={classes.container}
            justify="center"
            align="center"
          >
            <Grid item xs="11" lg="5" className={classes.leadSection}>
              <Typography variant="h3"> Homemade Food </Typography>

              <Img
                className={classes.infoImage}
                fluid={data.food.childImageSharp.fluid}
              />

              <Typography variant="body2">
                We Pride ourselves on using fresh, locally sourced produce
                throughout our seasonal menus. All of our dishes are made on
                site so we can cater to any dietary requirements you may have.
              </Typography>

              <Link to="./food">
                <Button size="large" variant="contained">
                  Read More
                </Button>
              </Link>
            </Grid>

            <Grid item xs="11" lg="5" className={classes.leadSection}>
              <Typography variant="h3">Locally Sourced</Typography>

              <Img
                className={classes.infoImage}
                fluid={data.dining.childImageSharp.fluid}
              />

              <Typography variant="body2">
                We are a welcoming and relaxed, family run traditional village
                pub / restaurant, situated in the quaint village of Sporle,
                Norfolk. Offering both dine in and takeaway experiences.
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
            className={classes.container}
            justify="center"
            align="center"
          >
            <Grid item xs="12" lg="5" className={classes.newsItemMap}>
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
                We use a large variety of organic ingredients in our dishes,
                which are sourced from our very own allotment. Located only a
                few miles down the road from The Squirrels Drey.
              </Typography>

              <Typography variant="h4"> Dietary Restrictions? </Typography>

              <Typography variant="body2">
                Here at The Squirrels Drey, we understand it can sometimes be
                difficult to dine out when you have dietary requirements. That
                is why almost all of our dishes can be adapted according to your
                needs, just let us know.
              </Typography>
            </Grid>

            <Grid item xs="11" lg="3" className={classes.newsItem}>
              <Typography variant="h4"> Sunday Roasts </Typography>

              <Typography variant="body2">
                Every Sunday we serve lunches from 1200 until 1600. We have a
                selection of dishes available, including locally sourced Beef,
                Pork and Homemade Nut Roasts.
              </Typography>

              <Typography variant="h4"> Takeaway Service </Typography>

              <Typography variant="body2">
                Due to current events, we understand if you would rather
                takeaway our food. We offer a takeaway service for collection
                and delivery to the local area. Please call the day before
                between 1500 and 1700 to place your order.
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    />
  );
};
export default withStyles(styles)(IndexPage);
