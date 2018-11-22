import React from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import '../scss/promo.scss';
import 'typeface-playfair-display';
import 'typeface-poppins';

export const PromoPageTemplate = ({ title, description, content, image }) => {
  return (
    <Layout>
      <Helmet title="Microblading Services, Oak Lawn | Microblading Boutique">
        <html lang="en" />
        <meta
          name="description"
          content="Beautiful eyebrows done by an expert. Book your appointment online now for a professional microblading session in the Chicagoland area."
        />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`${description}`} />
        <meta
          property="og:image"
          content={`https://browsbymonica.com${image}`}
        />
      </Helmet>
      <Container className="promo-page-container">
        <Row>
          <Col xs="12">
            <h1>{title}</h1>
            <img className="img-fluid" src={image} alt="promotion" />
            <p>{description}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <Link to="/appointment">
              <button aria-label="schedule-appointment">
                Book your Appointment!
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

const PromoPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <PromoPageTemplate
      title={frontmatter.title}
      image={frontmatter.image}
      description={frontmatter.description}
      content={html}
    />
  );
};

export default PromoPage;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        description
        image
        path
        title
      }
    }
  }
`;
