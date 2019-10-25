import React, { Component } from 'react';
import { graphql } from 'gatsby';
import RecipiesLayout from './recipiesLayout';
import Head from '../head/head';

import './layout.css'

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    return (
      <>
        <Head />
        <RecipiesLayout location={location}>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
          />
        </RecipiesLayout>
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
