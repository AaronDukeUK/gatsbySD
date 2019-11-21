import React, { useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
  Typography, Grid, Button, Fade,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Waypoint } from 'react-waypoint';
import { animated, useSpring } from 'react-spring';

import styles from './styles';

const IndexPage = ({ classes }) => {
  const [on1, toggle1] = useState(false);

  const animation1 = useSpring({
    opacity: on1 ? 1 : 0,
  });

  const AnimatedGrid = animated(Grid);

  return (
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
                WATERING HOLE AND GARDEN
              </Typography>
            </Grid>
            <Grid item m="10" sm="10" xs="9">
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
                We Pride ourselves on using fresh, locally source produce
                throughout our menu. All of our dishes are made on site and we
                can cater to any dietery requirements. We can accomodate small
                parties for any occasion, tailored accordingly.
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
                We are a family run, traditional village Pub, situated in the
                quaint village of Sporle. We offer a wide range of specially
                selected beverages within relaxed, acommodating surroundings. A
                large open fire to keep you cosy in the cold and a spacious beer
                garden for everyone to enjoy in the sun.
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
                We use a large variety of organic ingredients in our dishes,
                which are source from our very own allotment. Located only a few
                miles down the road from The Squirrels Drey.
              </Typography>

              <Typography variant="h4"> Gluten Free? </Typography>

              <Typography variant="body2">
                Here at The Squirrels Drey, we understand it can sometimes be
                difficult to dine out when you have dietry requirements. That is
                why almost all of our dishes can be adapted to suit your needs,
                just let us know.
              </Typography>
            </Grid>

            <Grid item xs="11" lg="3" className={classes.newsItem}>
              <Typography variant="h4"> Beer Garden </Typography>

              <Typography variant="body2">
                This year we have been working hard to get a large portion of
                the garden suitable for you all to enjoy. In the summer of 2020
                this will be opened for everyone to use.
              </Typography>

              <Typography variant="h4"> Functions </Typography>

              <Typography variant="body2">
                Need a venue for a gathering you are organising? We can cater to
                a large variety of requests. Please feel free to get in contact
                with us to discuss your ideas further.
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    />
  );
};
export default withStyles(styles)(IndexPage);
