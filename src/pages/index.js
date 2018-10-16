import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Icon from 'react-icons-kit';
import {
  socialInstagram,
  socialFacebook,
  socialTwitter
} from 'react-icons-kit/typicons';
import MBCarousel from '../components/mbcarousel';
import 'typeface-playfair-display';
import 'typeface-poppins';
import 'typeface-milonga';
import '../index.scss';

const items = [];
const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Microblading Services | Microblading Boutique">
      <html lang="en" />
    </Helmet>
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col />
        </Row>
        <Row className="jumbo-row">
          <Col xs="12">
            <h1>Changing the World One Brow at a Time</h1>
          </Col>
          <Col xs="12" sm="6" className="btn-col">
            <Link to="/appointment">
              <button aria-label="schedule-appointment">
                Book your Appointment!
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container className="about-mb">
      <Row>
        <Col className="about-mb-desc" lg="6">
          <h2>What is Eyebrow Microblading?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            fugiat amet iusto, voluptatem repellat corrupti suscipit facere
            blanditiis, unde nemo ratione accusantium nobis debitis sed vitae
            commodi. Vitae, ipsa aut.Reprehenderit eveniet atque, ipsa nulla ea
            at id velit eius rerum illum iste quae aliquam perferendis nihil non
            vitae ratione maiores incidunt vel accusamus dolores, itaque quod,
            rem fuga. Ex.
          </p>
          <Link to="/microblading">
            <button aria-label="schedule-appointment">Learn More</button>
          </Link>
        </Col>
        <Col className="about-mb-img-col" lg={{ size: 5, offset: 1 }}>
          <Img fluid={data.mbHome.childImageSharp.fluid} />
        </Col>
      </Row>
    </Container>
    <Container className="shop-info-fluid" fluid>
      <Container className="shop-info">
        <Row>
          <Col className="info-col" xs="12" md="4">
            <h2>Shop Info</h2>
            <p>
              <strong>Hours</strong>:<br /> Varies (By Appointment Only)
            </p>
            <span>
              <strong>Address</strong>:<br />
            </span>
            <address>
              <a href="https://goo.gl/maps/W24CMHiKQYS2" rel="noopener">
                4550 W 95th St.
                <br /> OakLawn, IL 60453
              </a>
            </address>
            <p>
              <br />
              <strong>Tel-Phone</strong>:{' '}
              <a href="tel:+9999999999">999-999-9999</a>
            </p>
          </Col>
          <Col className="info-img-col" xs="12" md="4 ">
            <Img fluid={data.storefront.childImageSharp.fluid} />
          </Col>
          <Col className="info-btn-col" xs="12" md="4">
            <Link to="/appointment">
              <button aria-label="schedule-appointment">
                Book your Appointment!
              </button>
            </Link>
            <h2>Find Us On</h2>
            <div className="info-icons">
              <a
                aria-label="facebook-link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
              >
                <Icon size={'40'} icon={socialFacebook} />
              </a>
              <a
                aria-label="instagram-link"
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
              >
                <Icon size={'40'} icon={socialInstagram} />
              </a>
              <a
                aria-label="twitter-link"
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
              >
                <Icon size={'40'} icon={socialTwitter} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container className="meet-monica" fluid>
      <Container>
        <Row>
          <Col xs="12" md="6">
            <Img fluid={data.monica.childImageSharp.fluid} />
          </Col>
          <Col className="monica-about" xs="12" md="6">
            <h2>Meet Monica</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis repellat possimus, excepturi harum aliquid perspiciatis
              impedit rerum, molestiae, atque accusantium iure esse neque quis
              consequatur placeat cumque tenetur ducimus libero?Fugiat, ea quae!
              Voluptates assumenda consectetur unde blanditiis quia id nesciunt
              facilis nihil voluptatem necessitatibus modi expedita maiores,
              ratione recusandae autem dolore veritatis aperiam cumque, eos
              inventore. Iure, incidunt facilis.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container className="testimonials">
      <Row>
        <Col xs="12">
          <h2>Testimonials</h2>
        </Col>
        <Col xs="12" md="8" className="offset-md-2">
          <MBCarousel />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    mbHome: file(relativePath: { eq: "microblading-home.jpg" }) {
      ...fluidImage
    }
    storefront: file(relativePath: { eq: "salon.jpg" }) {
      ...fluidImage
    }
    monica: file(relativePath: { eq: "monica.jpg" }) {
      ...fluidImage
    }
  }
`;
