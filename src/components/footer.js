import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import Icon from 'react-icons-kit';
import {
  socialInstagram,
  socialFacebook,
  socialTwitter,
} from 'react-icons-kit/typicons';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: new Date().getFullYear(),
    };
  }

  render() {
    return (
      <Container className="footer" fluid>
        <Container className="footer-ctn">
          <Row>
            <Col>
              <NavLink href="https://facebook.com" target="_blank">
                <Icon size={'20'} icon={socialFacebook} />
              </NavLink>
              <NavLink href="https://instagram.com" target="_blank">
                <Icon size={'20'} icon={socialInstagram} />
              </NavLink>
              <NavLink href="https://twitter.com" target="_blank">
                <Icon size={'20'} icon={socialTwitter} />
              </NavLink>
            </Col>
            <Col xs="12">
              <p>
                Copyright &copy;
                {this.state.year} All rights reserved | Website designed and
                built by <a href="http://josephusdev.com">JosephusDev</a>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
