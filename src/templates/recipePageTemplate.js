/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-danger */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'components/layout';

import './postLayout.css';

export default class RecipePageTemplate extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    return (
      <>
        <Layout location={location}>
          <h1 className="markdownTitle">{markdownRemark.frontmatter.title}</h1>

          <div
            className="markdownContainer"
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </Layout>
      </>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
