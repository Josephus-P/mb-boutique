/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Header from './header';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Icon from 'react-icons-kit';
import {
  socialInstagram,
  socialFacebook,
  socialTwitter,
} from 'react-icons-kit/typicons';
import 'bootstrap/dist/css/bootstrap.css';
import './layout.scss';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="lg">
          <NavbarBrand href="/">Microblading Boutique</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem className="py-2">
                <Link className="" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem className="py-2">
                <Link className="" to="/microblading">
                  What is Microblading?
                </Link>
              </NavItem>
              <NavItem className="py-2">
                <Link className="" to="/appointment">
                  Book an Appointment
                </Link>
              </NavItem>
              <NavItem className="py-2">
                <Link className="" to="/questions">
                  Questions?
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav className="d-none d-lg-flex mx-auto">
            <NavItem className="mx-auto">
              <NavLink className="d-inline">
                <Icon icon={socialFacebook} />
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink className="d-inline">
                <Icon icon={socialInstagram} />
              </NavLink>
            </NavItem>
            <NavItem className="mx-auto">
              <NavLink className="d-inline">
                <Icon icon={socialTwitter} />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
