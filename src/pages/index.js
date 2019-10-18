import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout';

import './index.css';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query imgQuery {
        front: file(relativePath: { regex: "/bg2/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        back: file(relativePath: { regex: "/basket/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        middle: file(relativePath: { regex: "/carrots/" }) {
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
        <div className="front">
          <h1>THE SQUIRRELS DREY</h1>
          <Img style={{ position: 'fixed' }} className="first" fluid={data.front.childImageSharp.fluid} />
          <Img style={{ position: 'fixed' }} className="second" fluid={data.back.childImageSharp.fluid} />
          <Img style={{ position: 'fixed' }} className="third" fluid={data.middle.childImageSharp.fluid} />
          <Img style={{ position: 'fixed' }} className="forth" fluid={data.front.childImageSharp.fluid} />
          <Img style={{ position: 'fixed' }} className="fifth" fluid={data.back.childImageSharp.fluid} />
          <div className="timer" />
        </div>

        <div className="lead">
          <h1>WATERING HOLE & GARDEN</h1>
          <p>Based in Spore, near Swaffham.</p>
          <p>The Squirrels Drey boasts locally sourced, homemade food in idealic location.</p>
          <Link to="./about">Read More</Link>
        </div>

        <div className="info">

          <div className="infoLeft">
            <div className="infoTitle">
              <h4>OUR FOOD</h4>
            </div>
            <div className="infoHeader">
              <h2>HOMEMADE FOOD</h2>
            </div>
            <Img className="infoPicture" fluid={data.front.childImageSharp.fluid} />
            <div className="infoDescription">
              <p>
                If you’re travelling to eat at The Hand and Flowers,
                why not stay with us? We have 11 individually designed bedrooms,
                in three different cottages
                in the centre of Marlow. We’ll even cook.
              </p>
            </div>
            <Link to="./about">Read More</Link>
          </div>

          <div className="infoRight">
            <div className="infoTitle">
              <h4>OUR DRINK</h4>
            </div>
            <div className="infoHeader">
              <h2>SPECIALLY SELECTED</h2>
            </div>
            <Img className="infoPicture" fluid={data.front.childImageSharp.fluid} />
            <div className="infoDescription">
              <p>
                The Shed is our intimate dining room for up to nine people,
                run by The Hand and Flowers team. It is the perfect space for private dining,
                special occasions or business meetings. hjhjkhgkglggl
              </p>
            </div>
            <Link to="./about">Read More</Link>
          </div>

        </div>

        <div className="news">

          <div className="newsMap">

            <iframe title="google maps" id="gmap_canvas" src="https://maps.google.com/maps?q=the%20squirrels%20drey%20sporle&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />

            <h4>FIND US ON GOOGLE MAPS</h4>

          </div>

          <div className="newsMiddle">

            <div className="newsItem">
              <h4>News 1</h4>
              <p>
                Raclette seitan kombucha bushwick, leggings chicharrones fam
                locavore godard knausgaard truffaut bicycle rights.
                Vegan photo booth banjo pop-up,
                messenger bag kogi leggings venmo iPhone 3 wolf moon.
              </p>
            </div>

            <div className="newsItem">
              <h4>News 2</h4>
              <p>
                Raclette seitan kombucha bushwick, leggings chicharrones fam
                locavore godard knausgaard truffaut bicycle rights.
                Vegan photo booth banjo pop-up,
                messenger bag kogi leggings venmo iPhone 3 wolf moon.
              </p>
            </div>

          </div>

          <div className="newsRight">

            <div className="newsItem">
              <h4>News 3</h4>
              <p>
                Raclette seitan kombucha bushwick, leggings chicharrones fam
                locavore godard knausgaard truffaut bicycle rights.
                Vegan photo booth banjo pop-up,
                messenger bag kogi leggings venmo iPhone 3 wolf moon.
              </p>
            </div>

            <div className="newsItem">
              <h4>News 4</h4>
              <p>
                Raclette seitan kombucha bushwick, leggings chicharrones fam
                locavore godard knausgaard truffaut bicycle rights.
                Vegan photo booth banjo pop-up,
                messenger bag kogi leggings venmo iPhone 3 wolf moon.
              </p>
            </div>

          </div>
        </div>
      </Layout>
    )}
  />
);
export default IndexPage;
