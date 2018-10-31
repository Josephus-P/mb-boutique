import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Icon from 'react-icons-kit';
import { socialInstagram, socialFacebook } from 'react-icons-kit/typicons';
import { yelp } from 'react-icons-kit/fa/yelp';
import MBCarousel from '../components/mbcarousel';
import { TweenLite } from 'gsap';
import 'typeface-playfair-display';
import 'typeface-poppins';
import 'typeface-milonga';
import '../scss/index.scss';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.fadeIn = this.fadeIn.bind(this);
    this.tHandler = this.throttled(200, this.fadeIn);

    this.jumboTxt = null;
    this.aboutIMG = null;
    this.aboutMBText = null;
    this.monicaIMG = null;
    this.monicaText = null;

    this.rectAbout = null;
    this.rectMonica = null;
    this.rectMonicaIMG = null;
    this.rectAboutIMG = null;

    this.state = {
      animatedAboutTxt: false,
      animatedAboutImg: false,
      animatedMonicaImg: false,
      animatedMonicaTxt: false
    };
  }

  fadeIn = () => {
    //console.log('fade check');

    let wHeight = window.innerHeight;
    this.rectAbout = this.aboutMBText.getBoundingClientRect();
    this.rectMonica = this.monicaText.getBoundingClientRect();
    this.rectMonicaIMG = this.monicaIMG.getBoundingClientRect();
    this.rectAboutIMG = this.aboutIMG.getBoundingClientRect();

    if (
      this.state.animatedAboutTxt === false &&
      wHeight > this.rectAbout.top + this.rectAbout.height / 2
    ) {
      TweenLite.to(this.aboutMBText, 2, { opacity: 1 });
      this.setState({ animatedAboutTxt: true });
    }

    if (
      this.state.animatedAboutImg === false &&
      wHeight > this.rectAboutIMG.top + this.rectAboutIMG.height / 2
    ) {
      TweenLite.fromTo(
        this.aboutIMG,
        1,
        { left: 100 },
        { left: 0, opacity: 1 }
      );
      this.setState({ animatedAboutImg: true });
    }

    if (
      this.state.animatedMonicaTxt === false &&
      wHeight > this.rectMonica.top + this.rectMonica.height / 2
    ) {
      TweenLite.to(this.monicaText, 2, { opacity: 1 });
      this.setState({ animatedMonicaTxt: true });
    }

    if (
      this.state.animatedMonicaImg === false &&
      wHeight > this.rectMonicaIMG.top + this.rectMonicaIMG.height / 2
    ) {
      TweenLite.fromTo(
        this.monicaIMG,
        1,
        { right: 100 },
        { right: 0, opacity: 1 }
      );
      this.setState({ animatedMonicaImg: true });
    }
  };

  throttled = (delay, fn) => {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  };

  componentDidMount() {
    this.aboutIMG = document.getElementsByClassName('about-img').item(0);
    this.monicaIMG = document.getElementsByClassName('monica-img').item(0);

    TweenLite.from(this.jumboTxt, 2, { opacity: 0, delay: 0.5 });

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.tHandler);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.tHandler);
    }
  }

  render() {
    return (
      <Layout>
        <Helmet title="Microblading Services, Oak Lawn | Microblading Boutique">
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
                <h1 ref={h1 => (this.jumboTxt = h1)}>
                  Changing the World One Brow at a Time
                </h1>
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
              <p ref={p => (this.aboutMBText = p)}>
                Microblading is a relatively new method for enhancing eyebrows
                that is considered to be permanent makeup. It is done by using a
                very fine blade to deposit pigment into the epidermis. Because
                the color is closer to the surface, the strokes appear crisp and
                very fine. There is no spilling under the skin and it creates an
                individual look perfect for your face and the style you are
                trying to achieve. Best of all, your eyebrows will absolutely
                not appear as a tattoo!
              </p>
              <Link to="/microblading">
                <button aria-label="schedule-appointment">
                  Learn More About Microblading
                </button>
              </Link>
            </Col>
            <Col className="about-mb-img-col" lg={{ size: 5, offset: 1 }}>
              <Img
                className="about-img"
                fluid={this.props.data.mbHome.childImageSharp.fluid}
              />
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
                      <a href="tel:+17737933269">773-793-3269</a>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col className="info-img-col my-auto" xs="12" md="4">
                <Img fluid={this.props.data.storefront.childImageSharp.fluid} />
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
                        href="https://www.facebook.com/browsbymrs.e/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={'40'} icon={socialFacebook} />
                      </a>
                      <a
                        aria-label="instagram-link"
                        href="https://www.instagram.com/microbladingboutique/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={'40'} icon={socialInstagram} />
                      </a>
                      <a
                        aria-label="yelp-link"
                        href="https://www.yelp.com/biz/microblading-boutique-oak-lawn-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={'40'} icon={yelp} />
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
                <Img
                  className="monica-img"
                  fluid={this.props.data.monica.childImageSharp.fluid}
                />
              </Col>
              <Col className="monica-about" xs="12" xl="6">
                <h2>Meet Monica</h2>
                <p ref={p => (this.monicaText = p)}>
                  With over 15 years of experience as a beauty and skin expert,
                  I'm no stranger to the industry. I have trained with the top
                  Microblading Academy in the world and have received 3
                  certifications in Permanent Makeup. I only use top of the line
                  100% disposable tools and the materials that will be placed
                  under your skin are high quality. I am passionate to help you
                  achieve your brow goals and to foster a beautiful relationship
                  when we meet for the first time.
                  <br />
                  <br />
                </p>
                <blockquote>
                  <em>
                    "I believe you are put on this earth to achieve your
                    greatest self, to live out your purpose and to do it
                    courageously."
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
                anna={this.props.data.anna.childImageSharp.fluid}
                kathryn={this.props.data.kathryn.childImageSharp.fluid}
                nina={this.props.data.nina.childImageSharp.fluid}
                elsie={this.props.data.elsie.childImageSharp.fluid}
                rosa={this.props.data.rosa.childImageSharp.fluid}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

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
    elsie: file(relativePath: { eq: "elsie.jpg" }) {
      ...fluidImage
    }
    rosa: file(relativePath: { eq: "rosa.jpg" }) {
      ...fluidImage
    }
  }
`;
