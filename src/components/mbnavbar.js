import React from 'react';
import { Link } from 'gatsby';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Icon from 'react-icons-kit';
import {
  socialInstagram,
  socialFacebook,
  socialTwitter
} from 'react-icons-kit/typicons';

export default class MBNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  removeIframe = () => {
    let element = document.getElementsByTagName('IFRAME');

    if (element != null && element.length > 0)
      element.parentNode.removeChild(element);
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="fixed-top" color="light" light expand="lg">
        <NavbarBrand href="/">Microblading Boutique</NavbarBrand>
        <NavbarToggler onClick={this.toggle} aria-label="menu-button" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="py-2">
              <Link onClick={this.removeIframe} to="/">
                Home
              </Link>
            </NavItem>
            <NavItem className="py-2">
              <Link onClick={this.removeIframe} to="/microblading">
                What is Microblading?
              </Link>
            </NavItem>
            <NavItem className="py-2">
              <Link to="/appointment">Book an Appointment</Link>
            </NavItem>
            <NavItem className="py-2">
              <Link onClick={this.removeIframe} to="/questions">
                Questions?
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav className="d-none d-lg-flex mx-auto icon-bar">
          <NavItem className="mx-auto">
            <NavLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              className="d-inline"
            >
              <Icon size={'26'} icon={socialFacebook} />
            </NavLink>
          </NavItem>
          <NavItem className="mx-auto">
            <NavLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              className="d-inline"
            >
              <Icon size={'26'} icon={socialInstagram} />
            </NavLink>
          </NavItem>
          <NavItem className="mx-auto">
            <NavLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              className="d-inline"
            >
              <Icon size={'26'} icon={socialTwitter} />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
