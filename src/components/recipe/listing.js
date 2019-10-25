import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import './listing.css'

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: {
    order: DESC,
    fields: [frontmatter___date]
  }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;


const Listing = () => (
  <div className="recipies">
    <h1>RECIPES</h1>
    <div className="recipieContainer">
    <StaticQuery
      query={LISTING_QUERY}
      render={({ allMarkdownRemark }) => (
        allMarkdownRemark.edges.map(({ node }) => (
          <div className="recipieItem" key={node.frontmatter.slug}>
            <div className="recipieItemText">
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link class="read-more" to={`/recipes${node.frontmatter.slug}`}>Read More...</Link>
            </div>
          </div>
        ))
      )}
    />
    </div>
  </div>
);

export default Listing;
