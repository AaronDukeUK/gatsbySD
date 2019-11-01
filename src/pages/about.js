import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';

import './about.css';

const About = () => (
  <StaticQuery
    query={graphql`
    query aboutQuery {
      peter: file(relativePath: { regex: "/me2/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
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
            <Img fluid={data.peter.childImageSharp.fluid} />
          </div>
          <p>Peter Chapman - Owner / Head Chef</p>
          <p>
          My career choice was sparked whilst still at school in the home economics department.
          The passion I had developed and inspiration from our top chefs gave me the desire to always create unusual dishes.
          </p>
          <p>
          I have always wanted to use fresh local produce and high quality ingredients with a simple approach,
          allowing the natural flavours to speak for themselves.
          </p>
          <p>
          That desire developed into attempting to create an environment where people could come to socialise and enjoy good honest food,
          in a relaxed environment, with friendly, welcoming service.
          </p>
        </div>
      </Layout>
    )}
  />
);

export default About;
