import React from "react";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Typography, Grid, Fade, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import TakeawayDrinks from "../../files/DrinksMenu.pdf";

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
              Wednesday to Saturday 1730 - 2130 / Sunday (Limited Menu) 1200 -
              1600
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1" className={classes.delivery}>
              Free Delivery - within 3 miles
              <br />
              £1 per mile Delivery Charge - 3 to 10 miles
              <br />
              Minimum Delivery Order - £18
              <br />
              10% Discount for Collections
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1">
              Homemade dishes, using locally sourced produce, to help support
              local businesses.
            </Typography>
          </Grid>
          <Grid item xs="10">
            <Typography variant="body1">
              GF - Gluten Free on request / V - Vegetarian / Vg - Vegan
            </Typography>
          </Grid>
          <Grid item xs="10" lg="6">
            <Img
              className={classes.takeawayImages}
              fluid={data.rawfishtakeaway.childImageSharp.fluid}
            />

            <Typography variant="h4">Chip Shop</Typography>
            <Typography variant="body1" className={classes.additions}>
              All served with thrice-cooked chips
            </Typography>

            <Typography variant="body1">
              Homemade beef and ale pie, rich ale gravy. £9
            </Typography>
            <Typography variant="body1">
              Beer battered cod, minted mushy peas, lemon and caper mayo. GF £9
            </Typography>
            <Typography variant="body1">
              Beer battered pork or vegan sausages, curry sauce. Vg £8.50
            </Typography>

            <Img
              className={classes.takeawayImages}
              fluid={data.burger2takeaway.childImageSharp.fluid}
            />

            <Typography variant="h4">Homemade Burgers</Typography>
            <Typography variant="body1" className={classes.additions}>
              All served with thrice-cooked chips and homemade onion rings
            </Typography>

            <Typography variant="body1">
              Sweet smoked beef, smoked cheddar, streaky bacon, garlic mayo. GF
              £9
            </Typography>
            <Typography variant="body1">
              Southern fried chicken breast, streaky bacon, smoked cheddar,
              tomato salsa. £9
            </Typography>
            <Typography variant="body1">
              Harrisa spiced chickpea, broadbean and sweetcorn, spiced tomato
              salsa. Vg GF £8.50
            </Typography>

            <Img
              className={classes.takeawayImages}
              fluid={data.spicestakeaway.childImageSharp.fluid}
            />

            <Typography variant="h4">Homemade Curries</Typography>
            <Typography variant="body1" className={classes.additions}>
              All served with poppadoms, chapatis and chutneys
            </Typography>

            <Typography variant="body1">
              Slow braised beef masala, chillies, garlic. GF £10
            </Typography>
            <Typography variant="body1">
              Tender chicken jalfrezi, corriander, cumin seed. GF £10
            </Typography>
            <Typography variant="body1">
              Roasted cauliflower, chickpea and potato aloo gobi. Vg GF £9
            </Typography>

            <Img
              className={classes.takeawayImages}
              fluid={data.doughtakeaway.childImageSharp.fluid}
            />

            <Typography variant="h4">Homemade 12" Pizzas</Typography>

            <Typography variant="body1" className={classes.pizzaTitle}>
              The Meat Feast - £10
            </Typography>
            <Typography variant="body1">
              Salami, spicy chorizo, shredded ham hock, smoked chicken,
              mozzarella.
            </Typography>
            <Typography variant="body1">Sticky BBQ base</Typography>

            <Typography variant="body1" className={classes.pizzaTitle}>
              The Italian - £10
            </Typography>
            <Typography variant="body1">
              Parma ham, smoked chicken, rocket pesto, thyme infused sunblushed
              tomatoes.
            </Typography>
            <Typography variant="body1">
              Sweet tomato, garlic and oregano base
            </Typography>

            <Typography variant="body1" className={classes.pizzaTitle}>
              The Vegan - £9
            </Typography>
            <Typography variant="body1">
              Roast caramelised balsamic shallots, fig, rocket. Vg
            </Typography>
            <Typography variant="body1">
              Sweet tomato, garlic and oregano base
            </Typography>

            <Img
              className={classes.takeawayImages}
              fluid={data.vegtakeaway.childImageSharp.fluid}
            />

            <Typography variant="h4">Sides</Typography>
            <Typography variant="body1">
              Thrice-cooked chips. GF V £3
            </Typography>
            <Typography variant="body1">
              Beer battered onion rings. GF V £3
            </Typography>
            <Typography variant="body1">
              Sun blushed tomato and herbed olive salad. Vg GF £3
            </Typography>
            <Typography variant="body1">
              12" homemade garlic pizza bread. V £6
            </Typography>

            <Img
              className={classes.takeawayImages}
              fluid={data.meattakeaway.childImageSharp.fluid}
            />

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

            <Img
              className={classes.takeawayImages}
              fluid={data.desserttakeaway.childImageSharp.fluid}
            />

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

            <Img
              className={classes.takeawayImages}
              fluid={data.boxtakeaway.childImageSharp.fluid}
            />

            <a href={TakeawayDrinks} download>
              <Button
                className={classes.takeawayButton}
                size="large"
                variant="contained"
              >
                Download Drinks Menu
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
