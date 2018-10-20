import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Questions = () => (
  <Layout>
    <Helmet title="Microblading Questions | Microblading Boutique">
      <html lang="en" />
    </Helmet>
    <h1>Hi from the Questions page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Questions;
