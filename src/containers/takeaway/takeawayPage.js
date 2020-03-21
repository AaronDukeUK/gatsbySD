import React from "react";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Typography, Grid, Fade, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import TakeawayWeb from "../../files/TakeawayWeb.pdf";

const TakeawayPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query takeawayImgQuery {
        fishtakeaway: file(relativePath: { regex: "/fishtakeaway/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        burgertakeaway: file(relativePath: { regex: "/burgertakeaway/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        kebabtakeaway: file(relativePath: { regex: "/kebabtakeaway/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        cheesecaketakeaway: file(
          relativePath: { regex: "/cheesecaketakeaway/" }
        ) {
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
            <Grid item xs="10">
              <Typography variant="h2">Homemade Takeaway Menu</Typography>
            </Grid>
          </Fade>
          <Grid item xs="10">
            <Typography variant="body1" className={classes.hours}>
              Wednesday to Saturday 1700 - 2200 / Sunday (Limited Menu) 1200 -
              1600
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1" className={classes.delivery}>
              Free Delivery - within 3 miles
              <br />
              £1 per mile Delivery Charge - 3 to 10 miles
              <br />
              Minimum Delivery Order - £20
              <br />
              10% Discount for Collections
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1">
              All of our dishes are homemade, using locally sourced produce, to
              help support local businesses.
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1">
              GF - Gluten Free on request / V - Vegetarian / Vg - Vegan
            </Typography>
          </Grid>
          <Grid item xs="10" lg="6">
            <Typography variant="h4">Main Courses</Typography>
            <Typography variant="body1">
              Slow braised beef and ale pie, thrice-cooked chips, purple stem
              broccoli. £9.00
            </Typography>
            <Typography variant="body1">
              Local beef patty, smoked cheddar, crispy bacon, thrice-cooked
              chips, beer-battered onion rings, garlic mayo. GF £9.00
            </Typography>
            <Typography variant="body1">
              Hand-smoked chicken supreme, poached asparagus, sautéed pink fir
              potatoes, rocket pesto, parma ham crisp. GF £9.50
            </Typography>
            <Typography variant="body1">
              Caramelised sweet onion, red wine poached pear and stilton tarte
              tatin, pomegranate and toasted almond salad, raspberry
              vinaigrette. V £8.00
            </Typography>
            <Typography variant="body1">
              Beer-battered cod, thrice-cooked chips, minted mushy peas, lemon
              zest and caper mayo. GF £9.00
            </Typography>
            <Typography variant="body1">
              Honey baked ham hock, roasted pink fir potatoes, braised leeks,
              sweet pea veloute. GF £9.50
            </Typography>
            <Typography variant="body1">
              Slow braised lamb curry with chillies and spinach, pilau rice,
              handmade sweet onion bhaji, poppadoms. GF £10.50
            </Typography>
            <Typography variant="body1">
              Greek spiced chicken kebab, mint yoghurt, sundried tomato and
              herbed olive salad, smoked garlic and chickpea hummus. GF £8.50
            </Typography>

            <Typography variant="h4">Sides</Typography>
            <Typography variant="body1">
              Thrice-cooked beef dripping chips. GF £3.00
            </Typography>
            <Typography variant="body1">
              Beer-battered onion rings. GF £3.00
            </Typography>
            <Typography variant="body1">
              Rustic garlic ciabatta. £3.00
            </Typography>
            <div className={classes.sundayText}>
              <Typography variant="h4">Sunday Takeaway</Typography>
              <Typography variant="body1">
                Norfolk Beef Sirloin / Norfolk Pork Loin / Fruit and Nut Roast V
                £10.00
              </Typography>
              <Typography variant="body1">
                All served with seasonal vegetables, braised red cabbage, roast
                garlic and rosemary potatoes, Sage Yorkshire pudding, sausage
                and apricot stuffing, homemade jus. GF
              </Typography>
            </div>

            <Typography variant="h4">Desserts</Typography>
            <Typography variant="body1">
              Sweet rhubarb and Gin cheesecake. £4.00
            </Typography>
            <Typography variant="body1">
              Chocolate and Baileys torte, salted caramel sauce. £4.00
            </Typography>
            <Typography variant="body1">
              Warm sticky toffee and date pudding, butterscotch sauce. £4.00
            </Typography>
            <Typography variant="body1">
              Norfolk cheddar, oatmeal biscuits, chutney, butter. GF £4.50
            </Typography>
            <a href={TakeawayWeb} download>
              <Button size="large" variant="contained">
                Download Sample Takeaway Menu
              </Button>
            </a>
          </Grid>
          <Grid
            container
            className={classes.sundayContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Typography variant="h4">Delivery within 10 mile radius</Typography>
          </Grid>
          <Grid
            container
            className={classes.imagesContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.burgertakeaway.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.fishtakeaway.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.kebabtakeaway.childImageSharp.fluid} />
            </Grid>
            <Grid item xs="12" sm="6" md="4" xl="3">
              <Img fluid={data.cheesecaketakeaway.childImageSharp.fluid} />
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.sloganContainer}
            justify="center"
            align="center"
            spacing="1"
          >
            <Typography variant="h4">10% Discount for Collection</Typography>
          </Grid>
        </Grid>
      </>
    )}
  />
);

export default withStyles(styles)(TakeawayPage);
