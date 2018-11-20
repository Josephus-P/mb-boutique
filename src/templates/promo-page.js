import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import '../scss/promo.scss';
import 'typeface-playfair-display';
import 'typeface-poppins';

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Container className="promo-page-container">
        <Row>
          <Col xs="12">
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.description}</p>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

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
