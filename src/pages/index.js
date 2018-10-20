import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
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

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Oak Lawn Microblading Services | Microblading Boutique">
      <html lang="en" />
      <meta
        name="description"
        content="Beautiful eyebrows done by an expert. Book your appointment online now for a professional microblading session in the Chicagoland area."
      />
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
            Microblading is a relatively new method for enhancing eyebrows that
            is considered to be permanent makeup. It is done by using a very
            fine blade to deposit pigment into the epidermis. Because the color
            is closer to the surface, the strokes appear crisp and very fine.
            There is no spilling under the skin and it creates an individual
            look perfect for your face and the style you are trying to achieve.
            Best of all, your eyebrows will absolutely not appear as a tattoo.
          </p>
          <Link to="/what-is-microblading">
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
            <Card>
              <CardHeader>
                <h2>Salon Info</h2>
              </CardHeader>
              <CardBody>
                <p>
                  <strong>Hours</strong>:<br /> Varies (By Appointment Only)
                </p>
                <span>
                  <strong>Address</strong>:<br />
                </span>
                <address>
                  <a href="https://goo.gl/maps/W24CMHiKQYS2" rel="noopener">
                    4550 W 95th St.
                    <br /> Oak Lawn, IL 60453
                  </a>
                </address>
                <p>
                  <strong>Tel-Phone</strong>:{' '}
                  <a href="tel:+9999999999">999-999-9999</a>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col className="info-img-col my-auto" xs="12" md="4">
            <Img fluid={data.storefront.childImageSharp.fluid} />
          </Col>
          <Col className="info-btn-col" xs="12" md="4">
            <Card>
              <CardHeader>
                <h2>Find Us On</h2>
              </CardHeader>
              <CardBody>
                <div className="info-icons">
                  <a
                    aria-label="facebook-link"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={'40'} icon={socialFacebook} />
                  </a>
                  <a
                    aria-label="instagram-link"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={'40'} icon={socialInstagram} />
                  </a>
                  <a
                    aria-label="twitter-link"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={'40'} icon={socialTwitter} />
                  </a>
                </div>
                <Link to="/appointment">
                  <button aria-label="schedule-appointment">
                    Book your Appointment!
                  </button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container className="meet-monica" fluid>
      <Container>
        <Row>
          <Col xs="12" xl="6">
            <Img fluid={data.monica.childImageSharp.fluid} />
          </Col>
          <Col className="monica-about" xs="12" xl="6">
            <h2>Meet Monica</h2>
            <p>
              With over 15 years of experience as a beauty and skin expert, I'm
              no stranger to the industry. I have trained with the top
              Microblading Academy in the world and have received 3
              certifications in Permanent Makeup. I only use top of the line
              tools and the materials that will be placed under your skin are
              high quality. I am passionate to help you achieve your brow goals
              and to foster a beautiful relationship when we meet for the first
              time.
              <br />
              <br />
            </p>
            <blockquote>
              <em>
                "I believe you are put on this earth to achieve your greatest
                self, to live out your purpose and to do it courageously."
              </em>
            </blockquote>
            <cite>~ Steve Maraboli</cite>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container className="testimonials">
      <Row>
        <Col xs="12">
          <h2>Testimonials</h2>
        </Col>
        <Col xs="12">
          <MBCarousel
            anna={data.anna.childImageSharp.fluid}
            kathryn={data.kathryn.childImageSharp.fluid}
            nina={data.nina.childImageSharp.fluid}
          />
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
    mbHome: file(relativePath: { eq: "eyebrows_home.jpg" }) {
      ...fluidImage
    }
    storefront: file(relativePath: { eq: "salon.jpg" }) {
      ...fluidImage
    }
    monica: file(relativePath: { eq: "monica.jpg" }) {
      ...fluidImage
    }
    anna: file(relativePath: { eq: "anna.jpg" }) {
      ...fluidImage
    }
    kathryn: file(relativePath: { eq: "kathryn.jpg" }) {
      ...fluidImage
    }
    nina: file(relativePath: { eq: "nina.jpg" }) {
      ...fluidImage
    }
  }
`;
