import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout/layout';

import './menus.css';

const Menus = () => (
  <StaticQuery
    query={graphql`
    query menuQuery {
      main: file(relativePath: { regex: "/bg2/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={() => (
      <Layout>
        <div className="containerMenu">
          <h1>MENU</h1>
          <p className="menuLead">
        We Use Locally Source Produce blah blah We Use Locally Source Produce blah blah We Use Locally Source Produce blah blah
          </p>
          <div className="menuFood">
            <h2 className="menuTitle">Starters</h2>
            <p>Rustic oven baked garlic butter and thyme ciabatta bread. V</p>
            <p>Cream of sweetcorn soup, pancetta crisp, focaccia rosemary crumb. GF</p>
            <p>Deep fried crispy popcorn cockles, sweet chilli and red wine vinegar.</p>
            <p>Roast pumpkin tortellini, chestnut and sage beurre noisette. V</p>
            <h2 className="menuTitle">Mains</h2>
            <p>Slow braised beef and ale pie, shortcrust pastry, wilted kale, caramelised onion mash.</p>
            <p>Beer battered cod, thrice cooked chunky chips, minted pea mayonnaise, tartar sauce. GF</p>
            <p>Honey baked ham hock, thrice cooked chunky chips, crispy hens egg, sweet pea veloute. GF</p>
            <p>Slow roast belly of pork, wilted cavolo nero, toffee apple croquettes, caramelised onion puree, cox apple crisps.</p>
            <p>Handmade Beef patty, sweet pickle, mature cheddar, toasted bap, salad, thrice cooked chunky chips, beer battered onion rings, sweet onion and balsamic marmalade. GF</p>
            <p>Pan seared Norfolk chicken supreme, aged cheddar gnocchi, wilted cavolo nero, beurre blanc sauce.</p>
            <p>Roast honey fig and goats cheese tart, poached sweet cranberry and thyme polenta salad, toasted pistachio pesto. V</p>
            <p>Sous vide Scottish salmon, sautéed pink fir potatoes, wilted rainbow chard and fennel seed, sweet tomato consomme. GF</p>
            <h2 className="menuTitle">Desserts</h2>
            <p>Sweet local apple and mixed berry pie with clotted ice cream.</p>
            <p>White chocolate and raspberry creme brulee, poppy seed tuile biscuit. GF</p>
            <p>Strawberry and elderflower Bakewell tart, vanilla creme anglaise.</p>
            <h2 className="menuTitle">Ice Creams</h2>
            <p>Chocolate Funfair</p>
            <p>Turkish Delight</p>
            <p>Dark Spiced Rum and Raisin</p>
            <p>Liquorice GF</p>
            <p>Norfolk Lavender GF</p>
            <p>Rhubarb and Custard Ripple</p>
            <p>Whiskey and Orange Marmalade</p>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default Menus;
