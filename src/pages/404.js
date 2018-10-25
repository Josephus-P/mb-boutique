import React from 'react';
import Layout from '../components/layout';
import '../scss/404.scss';

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      The page you tried to reach doesn&#39;t exist... are you sure you got the
      right URL?
    </p>
  </Layout>
);

export default NotFoundPage;
