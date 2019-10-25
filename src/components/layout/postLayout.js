import React, { Component } from 'react';
import { graphql } from 'gatsby';
import RecipesLayout from './recipesLayout';
import Head from '../head/head';

import './layout.css'

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    return (
      <>
        <Head />
        <RecipesLayout location={location}>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
          />
        </RecipesLayout>
      </>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
