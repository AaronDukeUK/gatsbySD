import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
 Typography, Grid, Fade, Button 
} from '@material-ui/core';

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
              GF - Gluten Free on request / V - Vegetarian
            </Typography>
            <Typography variant="body1">
              Vegan dishes available upon request
            </Typography>
          </Grid>
          <Grid item xs="10" lg="6">
            <Typography variant="h4" className="menuTitle">
              Starters
            </Typography>
            <Typography variant="body1">
              Oven baked ciabatta bread, provencal herbed olives, balsamic oil.
              V
            </Typography>
            <Typography variant="body1">
              Roast chestnut soup, toasted pumpkin seed, smoked bacon. GF
            </Typography>
            <Typography variant="body1">
              Deep fried crispy popcorn cockles, sweet chilli and red wine
              vinegar. GF
            </Typography>
            <Typography variant="body1">
              Roast pumpkin tortellini, chestnut and sage beurre noisette. V
            </Typography>
            <Typography variant="h4">Mains</Typography>
            <Typography variant="body1">
              Slow braised beef and ale pie, shortcrust pastry, caramelised
              onion, wilted kale, horseradish mash.
            </Typography>
            <Typography variant="body1">
              Norfolk lamb and rosemary burger, chunky beef dripping chips,
              winter slaw, spiced cranberry marmalade. GF
            </Typography>
            <Typography variant="body1">
              Beer battered sustainable market fish, chunky beef dripping chips,
              sweet green split peas. GF
            </Typography>
            <Typography variant="body1">
              Smoked Norfolk venison & blackberry sausages, wilted kale, roast
              baby potatoes, sweet port jus. GF
            </Typography>
            <Typography variant="body1">
              Honey roasted fig & goats cheese tart, cranberry & thyme polenta
              salad, toasted pistachio pesto.
            </Typography>
            <Typography variant="body1">
              Almond crusted sea bream, Thai green curry, lemongrass, coconut,
              coriander, spring onion rice noodles.
            </Typography>
            <Typography variant="body1">
              Pan-seared pork loin, winter pulses and lentil bonbons, oven roast
              nips and tatties, smoked pancetta, sweet quince jus.
            </Typography>
            <Typography variant="body1">
              Oven-roasted Norfolk chicken supreme, chorizo and sweet potato
              tagine, cracked pepper parsnip crisps.
            </Typography>

            <Typography variant="h4">Desserts</Typography>
            <Typography variant="body1">
              Sweet local apple and mixed berry pie, cardamom crème anglaise.
            </Typography>
            <Typography variant="body1">
              Walnut baked treacle tart, toasted barley ice cream, dark blossom
              honey.
            </Typography>
            <Typography variant="body1">
              White chocolate bread & butter pudding, brioche, spiced mandarin &
              cranberry compote.
            </Typography>
            <Typography variant="h4">Homemade Ice Creams</Typography>
            <Typography variant="body1">Toasted Almond & Disaronno</Typography>
            <Typography variant="body1"> Banana & Irish Cream</Typography>
            <Typography variant="body1">Dark Spiced Rum and Raisin</Typography>
            <Typography variant="body1">Liquorice GF</Typography>
            <Typography variant="body1">Norfolk Lavender GF</Typography>
            <Typography variant="body1">Rhubarb and Custard Ripple</Typography>
            <Typography variant="body1">
              Whiskey and Orange Marmalade
            </Typography>
            {/* <a href="/files/decmenu.pdf">
              <Button size="large" variant="contained">
                Download Menu
              </Button>
            </a> */}
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
