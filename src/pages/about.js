import React from 'react';
import {StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';

import './about.css'

const About = () => (
  <StaticQuery
  query={graphql`
    query aboutQuery {
      main: file(relativePath: { regex: "/me/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  render={(data) => (
  <Layout>
    <div className="aboutContainer">
      <h1>About Me</h1>
      <div className="aboutImgContainer">
      <Img fluid={data.main.childImageSharp.fluid} />
      </div>
      <p>
        I suppose it all started back in my early school years 
        with home economics where I come to realise my true passion and 
        flair for food come about from. 
      </p>
      <p>
        I’ve always looked up through my career to some of the worlds 
        top chefs and aspire to push the boundaries and think outside 
        the box but still keeping that  traditional British food at the 
        back of my mind.
      </p>
      <p>
        I’m a true believer of thinking a good food establishment should 
        bring people together were they can just relax and enjoy an honest 
        meal packet with flavours, almost like your mums cooking and have a 
        nice time with warm friendly service along the way. 
      </p>
      <p>  
        I believe that good quality local ingredient is the key , 
        “a chef saying goes fresh is best” so I take an honest and simple 
        approach to our dishes with nothing to complex and let the natural 
        flavours speak for themselves  with that we are also supporting local 
        small business community around Norfolk.   
      </p>
    </div>
  </Layout>
    )}
    />
  );

export default About;
