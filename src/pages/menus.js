import React from 'react';

import { MenuPage } from 'containers';

import { Layout, SEO } from 'components';

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <MenuPage />
  </Layout>
);

export default Menu;
