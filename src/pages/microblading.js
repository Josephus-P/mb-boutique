import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import { Match } from '@reach/router';
import { Container, Row, Col } from 'reactstrap';
import MBAccordian from '../components/mbAccordian';
import 'typeface-playfair-display';
import '../scss/about-mb.scss';

const Microblading = () => (
  <Layout>
    <Helmet title="What is Microblading? | Microblading Boutique">
      <html lang="en" />
      <meta
        name="description"
        content="Beautiful eyebrows done by an expert. Book your appointment online now for a professional microblading session in the Chicagoland area."
      />
    </Helmet>
    <Match path="/microblading">
      {props => (props.match ? console.log('match') : console.log('null'))}
    </Match>
    <Container className="about-mb-page">
      <Row>
        <Col xs="12">
          <h1>What is Microblading?</h1>
          <p>
            Microblading - Also known as eyebrow embroidery or 3D brows, is a
            relatively new method for enhancing eyebrows. It is considered to be
            permanent makeup. It is done using a very fine blade to deposit
            pigment into the epidermis. Because the color is closer to the
            surface, the strokes appear crisp and very fine. There is no
            spilling under the skin.
            <br />
            <br />
            The difference with this and ordinary permanent makeup is that
            Microblading is not done by a machine. The pigment is manually
            placed into the skin. The Microblading manual pen is equipped with
            sterile packaged blades. The blade glides with gentle pressure over
            the skin and causes fine cuts, leaving a trace that can hardly be
            distinguished from real hair. Depending on the drawing technique –
            of which we are experts – it creates an individual look perfect for
            your face and the style you are trying to achieve. Best of all, 3D
            or HD eyebrows absolutely do not appear as a tattoo. Microblading is
            ideal for anyone wanting to enhance the look of their eyebrows. The
            results are natural looking hair-like strokes, regardless of the
            amount of hair you currently have. People suffering from alopecia,
            trigonometrical or any other condition that causes hair loss benefit
            greatly from Microblading, as well as people who simply aren’t happy
            with their eyebrows. <br />
            <br />
          </p>
        </Col>
        <Col xs="12">
          <MBAccordian />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Microblading;
