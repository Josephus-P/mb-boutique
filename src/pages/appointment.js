import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Apppointments = () => (
  <Layout>
    <Helmet title="Book a Microblading Appointment | Microblading Boutique">
      <html lang="en" />
    </Helmet>
    <h1>Hi from the Apppointments page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Apppointments;
