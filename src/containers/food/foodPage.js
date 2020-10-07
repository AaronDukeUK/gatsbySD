import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Typography, Grid, Fade } from '@material-ui/core';
import { SEO } from 'components';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const FoodPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query takeawayImgQuery {
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
        vegtakeaway: file(relativePath: { regex: "/vegTakeaway/" }) {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        meattakeaway: file(relativePath: { regex: "/meatTakeaway/" }) {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        spicestakeaway: file(relativePath: { regex: "/spicesTakeaway/" }) {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        doughtakeaway: file(relativePath: { regex: "/doughTakeaway/" }) {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        rawfishtakeaway: file(relativePath: { regex: "/rawFishTakeaway/" }) {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        burger2takeaway: file(relativePath: { regex: "/burger2Takeaway/" }) {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        desserttakeaway: file(relativePath: { regex: "/dessertTakeaway/" }) {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        boxtakeaway: file(relativePath: { regex: "/boxTakeaway/" }) {
          childImageSharp {
            fluid(grayscale: true, maxWidth: 1000, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
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
    render={data => (
      <>
        <SEO title="Menu" />
        <Grid
          container
          className={classes.container}
          justify="center"
          align="center"
        >
          <Fade in timeout={2000}>
            <Grid item xs="10">
              <Typography variant="h2">Homemade Menu</Typography>
            </Grid>
          </Fade>
          <Grid item xs="10">
            <Typography variant="body1" className={classes.delivery}>
              Collection Also Available
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1">
              Homemade dishes, also available for collection, using locally
              sourced produce, to help support local businesses.
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1">
              GF - Gluten Free on request / DF - Dairy Free / V - Vegetarian /
              Vg - Vegan
            </Typography>
          </Grid>
          <Grid item xs="10" lg="6">
            <Typography variant="h4">Starters</Typography>

            <Typography variant="body1">
              Pork belly bonbons, cider apple puree, candied chicory, crab apple jelly
            </Typography>
            <Typography variant="body1">
              Orange and fennel pickled herrings, Red chicory, treacle rye bread GF
            </Typography>
            <Typography variant="body1">
              Honey roasted carrot & thyme soup, toasted pumpkin seeds GF V
            </Typography>

            <Typography variant="h4">Mains</Typography>

            <Typography variant="body1">
              Lamb and quince sausages, braised red cabbage with nutmeg, fondant potato, port jus
            </Typography>
            <Typography variant="body1">
              Pan-seared grey mullet, mediterranean puy lentils, serrano ham crisp, oregano oil
            </Typography>
            <Typography variant="body1">
              Slow-braised Norfolk beef and ale pie, sauteed colcannon
            </Typography>
            <Typography variant="body1">
              Hay baked quail, honey roast heritage carrots, walnut and celeriac croquettes, spiced pear puree
            </Typography>
            <Typography variant="body1">
              Treacle baked pork belly, baked honey and thyme plum, celeriac puree, red chicory, jus GF
            </Typography>

            <Typography variant="h4">Desserts</Typography>

            <Typography variant="body1">
              Allotment apple and berry oat crumble, cardamon creme anglaise GF V
            </Typography>
            <Typography variant="body1">
              Sticky date pudding, butterscotch sauce, toasted hazelnut and banana ice cream V
            </Typography>
            <Typography variant="body1">
              Calvados and apple creme brulee, sesame seed tuile buscuit V
            </Typography>
            <Typography variant="body1">
              Norfolk cheddar, oat crackers, quince jelly GF V
            </Typography>
            <Typography variant="body1">
              Homemade regularly changing icecreams.
            </Typography>

            <div className={classes.sundayText}>
              <Typography variant="h4">Sunday Lunches</Typography>
              <Typography variant="body1">
                Norfolk Beef Sirloin / Norfolk Leg of Lamb / Fruit and Nut Roast V
              </Typography>
              <Typography variant="body1">
                All served with seasonal vegetables, wilted allotment kale,
                roast garlic and rosemary potatoes, Sage Yorkshire pudding,
                sausage and apricot stuffing, homemade jus. GF
              </Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.foodAddonContainer}>
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
            <Typography variant="h4">Collection Also Available</Typography>
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
      </>
    )}
  />
);

export default withStyles(styles)(FoodPage);
