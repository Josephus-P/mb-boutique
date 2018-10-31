import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import Icon from 'react-icons-kit';
import { socialInstagram, socialFacebook } from 'react-icons-kit/typicons';
import { yelp } from 'react-icons-kit/fa/yelp';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: new Date().getFullYear()
    };
  }

  render() {
    return (
      <Container className="footer" fluid>
        <Container className="footer-ctn">
          <Row>
            <Col>
              <NavLink
                aria-label="facebook-link"
                href="https://www.facebook.com/browsbymrs.e/"
                target="_blank"
                rel="noopener"
              >
                <Icon size={'22'} icon={socialFacebook} />
              </NavLink>
              <NavLink
                aria-label="instagram-link"
                href="https://www.instagram.com/microbladingboutique/"
                target="_blank"
                rel="noopener"
              >
                <Icon size={'22'} icon={socialInstagram} />
              </NavLink>
              <NavLink
                aria-label="yelp-link"
                href="https://www.yelp.com/biz/microblading-boutique-oak-lawn-3"
                target="_blank"
                rel="noopener"
              >
                <Icon size={'22'} icon={yelp} />
              </NavLink>
            </Col>
            <Col xs="12">
              <p>
                Copyright &copy;
                {this.state.year} All rights reserved | Website built by{' '}
                <a href="https://www.josephusdev.com" rel="noopener">
                  Josue Peralta
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
