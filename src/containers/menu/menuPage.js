import React from "react";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Typography, Grid, Fade, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const MenuPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query menuImgQuery {
        jan1: file(relativePath: { regex: "/jan1/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        jan2: file(relativePath: { regex: "/jan2/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        jan3: file(relativePath: { regex: "/jan3/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        jan4: file(relativePath: { regex: "/jan4/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
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
              GF - Gluten Free on request / V - Vegetarian / Vg - Vegan
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
              Roast celeriac and pear soup, toasted walnuts. GF V Vg
            </Typography>
            <Typography variant="body1">
              Popcorn cockles, sweet chilli and red wine vinegar. GF
            </Typography>
            <Typography variant="body1">
              Roast portobello mushroom with rosemary and stilton crumb, smoked
              garlic olive oil. V
            </Typography>
            <Typography variant="h4">Mains</Typography>
            <Typography variant="body1">
              Slow braised beef and ale pie, wilted kale, mustard seed mash.
            </Typography>
            <Typography variant="body1">
              Beer battered sustainable market fish, chunky beef dripping chips,
              crushed peas, minted mayo. GF
            </Typography>
            <Typography variant="body1">
              Sweet BBQ beef burger, smoked cheddar, chorizo, chunky beef
              dripping chips, beer battered onion rings, harissa mayo.
            </Typography>
            <Typography variant="body1">
              Smoked Norfolk venison and blackberry sausages, wilted kale, roast
              baby potatoes, sweet port jus. GF
            </Typography>
            <Typography variant="body1">
              Honey baked ham hock, crispy Norfolk duck egg, thrice cooked beef
              dripping chips, piccalilli.
            </Typography>
            <Typography variant="body1">
              Curried Norfolk chicken kiev, spinach & butternut saag aloo,
              coriander oil.
            </Typography>
            <Typography variant="body1">
              Slow braised Norfolk beef brisket and portobello mushroom
              wellington, smoked bacon bubble and squeak, mustard seed mash,
              sweet madeira jus.
            </Typography>
            <Typography variant="body1">
              Smoked Norfolk venison and blackberry sausages. wilted kale, roast
              baby potatoes, sweet port jus.
            </Typography>
            <Typography variant="h4" className="menuTitle">
              Vegan and Vegetarian
            </Typography>
            <Typography variant="body1">
              Moroccan spiced chickpea and broad bean falafel, toasted pitta,
              sun blushed tomato and thyme quinoa, mint and cucumber yoghurt. GF
              V Vg
            </Typography>
            <Typography variant="body1">
              Indian spiced red lentil, chickpea and potato dhal pithivier,
              crispy kale, cumin cauliflower, onion puree. V Vg
            </Typography>

            <Typography variant="h4">Desserts</Typography>
            <Typography variant="body1">
              Local apple, pear and walnut crumble, lemon thyme ice cream.
            </Typography>
            <Typography variant="body1">
              White chocolate and vanilla creme brulee, roast peach, pistachio
              tuile.
            </Typography>
            <Typography variant="body1">
              Sticky toffee and date pudding, butterscotch sauce, caramelised
              banana.
            </Typography>
            <Typography variant="body1">
              Mrs. Temples Norfolk cheddar, oatmeal biscuits, butter.
            </Typography>
            <Typography variant="h4">Homemade Ice Creams</Typography>
            <Typography variant="body1">
              Chocolate & Hazelnut Praline{" "}
            </Typography>
            <Typography variant="body1">Fennel & Stem Ginger </Typography>
            <Typography variant="body1">
              Peanut Butter & Salted Caramel
            </Typography>
            <Typography variant="body1">
              Gluten-Free Norfolk Lavender{" "}
            </Typography>
            <Typography variant="body1">Turkish Delight </Typography>
            <Typography variant="body1">Rhubarb and Custard Ripple</Typography>
            <Typography variant="body1">Vegan Chocolate Cookie</Typography>
            <Typography variant="body1">Vegan Cinnamon & Toffee</Typography>
            <Typography variant="body1">Vegan Coconut & Blueberry</Typography>
            {/* <a href="/files/decmenu.pdf">
              <Button size="large" variant="contained">
                Download Menu
              </Button>
            </a> */}
          </Grid>
          <Grid
            container
            className={classes.sundayContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Typography variant="h4">
              Sunday Lunches served 1200 to 1500
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
              <Img fluid={data.jan1.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.jan2.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.jan3.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.jan4.childImageSharp.fluid} />
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.sloganContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Typography variant="h4">Homemade, locally sourced food</Typography>
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
