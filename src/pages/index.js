import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../index.scss';

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
    <Container>
      <Row>
        <Col />
      </Row>
    </Container>
    <Container>
      <Row>
        <Col />
      </Row>
    </Container>
    <Container>
      <Row>
        <Col />
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
    mbJumbo: file(relativePath: { eq: "eyebrows_jumbotron.png" }) {
      ...fluidImage
    }
    mbHome: file(relativePath: { eq: "microblading-home.jpg" }) {
      ...fluidImage
    }
  }
`;
