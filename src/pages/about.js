import React from 'react';

import { Layout, SEO } from 'components';

import { AboutPage } from 'containers';

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutPage />
  </Layout>
);

export default About;
