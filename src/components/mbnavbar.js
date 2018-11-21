import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Icon from 'react-icons-kit';
import { socialInstagram, socialFacebook } from 'react-icons-kit/typicons';
import { yelp } from 'react-icons-kit/fa/yelp';

export default class MBNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            logo: file(relativePath: { eq: "mb_logo.png" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Navbar className="fixed-top" color="light" light expand="lg">
            <Link className="logo-link" to="/">
              <Img className="logo" fluid={data.logo.childImageSharp.fluid} />
            </Link>
            <NavbarToggler onClick={this.toggle} aria-label="menu-button" />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem className="py-2">
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem className="py-2">
                  <Link to="/microblading">What is Microblading?</Link>
                </NavItem>
                <NavItem className="py-2">
                  <Link to="/appointment">Book an Appointment</Link>
                </NavItem>
                <NavItem className="py-2">
                  <Link to="/policy">Policy</Link>
                </NavItem>
              </Nav>
            </Collapse>
            <Nav className="d-none d-lg-flex mx-auto icon-bar">
              <NavItem className="mx-auto">
                <NavLink
                  aria-label="facebook-link"
                  href="https://www.facebook.com/browsbymrs.e/"
                  target="_blank"
                  rel="noopener"
                  className="d-inline"
                >
                  <Icon size={'26'} icon={socialFacebook} />
                </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                <NavLink
                  aria-label="instagram-link"
                  href="https://www.instagram.com/microbladingboutique/"
                  target="_blank"
                  rel="noopener"
                  className="d-inline"
                >
                  <Icon size={'26'} icon={socialInstagram} />
                </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                <NavLink
                  aria-label="yelp-link"
                  href="https://www.yelp.com/biz/microblading-boutique-oak-lawn-3"
                  target="_blank"
                  rel="noopener"
                  className="d-inline"
                >
                  <Icon size={'26'} icon={yelp} />
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        )}
      />
    );
  }
}
