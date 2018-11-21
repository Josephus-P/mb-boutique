import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import '../scss/promo.scss';
import 'typeface-playfair-display';
import 'typeface-poppins';

export const PromoPageTemplate = ({ title, description, content, image }) => {
  return (
    <Layout>
      <Container className="promo-page-container">
        <Row>
          <Col xs="12">
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt="promotion" />
            <div dangerouslySetInnerHTML={{ __html: content }} />
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
        path
        title
      }
    }
  }
`;
