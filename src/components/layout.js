import React from 'react';
import PropTypes from 'prop-types';
import MBNavbar from './mbnavbar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.css';
import './layout.scss';
import 'typeface-playfair-display';
import 'typeface-poppins';
import 'typeface-milonga';

const Layout = ({ children }) => (
  <div>
    <MBNavbar />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
