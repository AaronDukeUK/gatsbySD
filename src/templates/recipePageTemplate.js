/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-danger */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'components/layout';

import { Typography, Grid, Fade } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const RecipePageTemplate = ({ data, classes, location }) => {
  const { markdownRemark } = data;
  return (
    <>
      <Layout location={location}>
        <Grid
          container
          className={classes.container}
          justify="center"
          align="center"
        >
          <Grid item xs="11">
            <Fade in timeout={2000}>
              <Typography variant="h2" className={classes.title}>
                {markdownRemark.frontmatter.title}
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs="11" m="10" lg="6">
            <div
              className={classes.html}
              dangerouslySetInnerHTML={{
                __html: markdownRemark.html,
              }}
            />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

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

export default withStyles(styles)(RecipePageTemplate);
