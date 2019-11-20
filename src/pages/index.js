import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';

import './index.css';
import SEO from '../seo';

const IndexPage = () => (
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
      <Layout>
        <SEO title="Home" />
        <div className="front">
          <h1> THE SQUIRRELS DREY </h1>
          <Img
            style={{
              position: 'fixed',
              width: '100vw',
              height: '100vh',
              filter: 'brightness(70%)',
            }}
            fluid={data.hero.childImageSharp.fluid}
          />
        </div>

        <div className="lead">
          <h1> WATERING HOLE AND GARDEN </h1>
          <p> Based in Sporle, near Swaffham. </p>
          <p>
            The Squirrels Drey boasts locally sourced, homemade food in idealic
            location.
          </p>
          <Link to="./menus"> Our Menu </Link>
        </div>

        <div className="info">
          <div className="infoLeft">
            <h2> Homemade Food </h2>

            <Img
              className="infoPicture"
              fluid={data.food.childImageSharp.fluid}
            />

            <p>
              We Pride ourselves on using fresh, locally source produce
              throughout our menu. All of our dishes are made on site and we can
              cater to any dietery requirements you may have. We can accomodate
              large parties for any occasion, taloring your experience to
              whatever your needs may be.
            </p>

            <Link to="./menus"> Read More </Link>
          </div>

          <div className="infoRight">
            <h2> COMFORTABLE SURROUNDINGS </h2>

            <Img
              className="infoPicture"
              fluid={data.dinig.childImageSharp.fluid}
            />

            <p>
              We are a family run, tradition village Pub, situated in the quaint
              village of Sporle. We offer a wide range of specially selected
              beverages within relaxed, acommodating surroundings. A large open
              fireplace to keep you warm in the colder months and a spacious
              beer garden for everyone to enjoy in the warmer ones.
            </p>

            <Link to="./about"> Read More </Link>
          </div>
        </div>

        <div className="news">
          <div className="newsMap">
            <iframe
              title="google maps"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=
                  the%20squirrels%20drey%20sporle
                  &t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />

            <h4> FIND US ON GOOGLE MAPS </h4>
          </div>

          <div className="newsContent">
            <div className="newsMiddle">
              <div className="newsItem">
                <h4> Did you Know? </h4>
                <p>
                  We use a large variety of ingredients in our dishes which is
                  source from our very own organic allotment. It is located only
                  a few miles away and these ingredients get sourced regulary.
                </p>
              </div>

              <div className="newsItem">
                <h4> Gluten Free? </h4>
                <p>
                  Here at the squirrels drey we understand it can be hard to
                  dine out when dietry requirements are conserned. Thats why
                  almost all of our dishes can be adapted to suit your needs.
                </p>
              </div>
            </div>

            <div className="newsRight">
              <div className="newsItem">
                <h4> Beer Garden </h4>
                <p>
                  This year we have been working hard to get a large portion of
                  the garden suitable for you all to enjoy. In the summer of
                  2020 this will be opened for everyone to use! Did someone say
                  BBQ?
                </p>
              </div>
              <div className="newsItem">
                <h4>Functions</h4>
                <p>
                  Need a venue for a gathering you are organising? We can cater
                  to a large variety of requests, please feel free to get in
                  contact with us to discuss your ideas further.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )}
  />
);
export default IndexPage;
