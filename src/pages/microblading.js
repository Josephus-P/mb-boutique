import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { TweenLite } from 'gsap';
import MBAccordian from '../components/mbAccordian';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'typeface-playfair-display';
import '../scss/microblading.scss';

export default class Microblading extends React.Component {
  constructor(props) {
    super(props);

    this.aboutTxt = null;

    // Set a default img source so Gatsby Image doesn't complain
    this.state = {
      imgModalOn: false,
      img: this.props.data.ba1_1.childImageSharp.fluid
    };
  }

  componentDidMount() {
    this.aboutTxt = document.getElementsByClassName('mb-text').item(0);

    TweenLite.to(this.aboutTxt, 2, { opacity: 1 });
  }

  imgModalOff = () => {
    this.setState({ imgModalOn: false });
  };

  displayImgModal = name => {
    switch (name) {
      case 'ba1_1':
        this.setState({
          img: this.props.data.ba1_1.childImageSharp.fluid,
          imgModalOn: true
        });
        break;
      case 'ba1_2':
        this.setState({
          img: this.props.data.ba1_2.childImageSharp.fluid,
          imgModalOn: true
        });
        break;
      case 'ba6_1':
        this.setState({
          img: this.props.data.ba6_1.childImageSharp.fluid,
          imgModalOn: true
        });
        break;
      case 'ba6_2':
        this.setState({
          img: this.props.data.ba6_2.childImageSharp.fluid,
          imgModalOn: true
        });
        break;
      case 'ba3_1':
        this.setState({
          img: this.props.data.ba3_1.childImageSharp.fluid,
          imgModalOn: true
        });
        break;
      case 'ba3_2':
        this.setState({
          img: this.props.data.ba3_2.childImageSharp.fluid,
          imgModalOn: true
        });
        break;
      case 'ba5_1':
        this.setState({
          img: this.props.data.ba5_1.childImageSharp.fluid,
          imgModalOn: true
        });
        break;
      case 'ba5_2':
        this.setState({
          img: this.props.data.ba5_2.childImageSharp.fluid,
          imgModalOn: true
        });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <Layout>
        <Helmet title="What is Microblading? | Microblading Boutique">
          <html lang="en" />
          <meta
            name="description"
            content="Beautiful eyebrows done by an expert. Book your appointment online now for a professional microblading session in the Chicagoland area."
          />
        </Helmet>
        <Container>
          <Row className="about-mb-page">
            <Col className="mb-text" xs="12">
              <h1>What is Microblading?</h1>
              <p>
                Microblading - Also known as eyebrow embroidery or 3D brows, is
                a relatively new method for enhancing eyebrows. It is considered
                to be permanent makeup. It is done using a very fine blade to
                deposit pigment into the epidermis. Because the color is closer
                to the surface, the strokes appear crisp and very fine. There is
                no spilling under the skin.
                <br />
                <br />
                The difference with this and ordinary permanent makeup is that
                Microblading is not done by a machine. The pigment is manually
                placed into the skin. The Microblading manual pen is equipped
                with sterile packaged blades. The blade glides with gentle
                pressure over the skin and causes fine cuts, leaving a trace
                that can hardly be distinguished from real hair. Depending on
                the drawing technique it creates an individual look perfect for
                your face. Best of all, 3D or HD eyebrows absolutely do not
                appear as a tattoo! Microblading is ideal for anyone wanting to
                enhance the look of their eyebrows. The results are natural
                looking, hair-like strokes regardless of the amount of hair you
                currently have. People suffering from alopecia, trigonometrical
                or any other condition that causes hair loss benefit greatly
                from Microblading, as well as people who simply aren’t happy
                with their eyebrows. <br />
                <br />
              </p>
            </Col>
            <Col className="img-section" xs="12">
              <div className="img-group">
                <p>
                  <span>Before</span> <span>After</span>
                </p>
                <div
                  className="img-container"
                  onClick={() => {
                    this.displayImgModal('ba5_1');
                  }}
                >
                  <Img fluid={this.props.data.ba5_1.childImageSharp.fluid} />
                </div>
                <div
                  className="img-container"
                  onClick={() => {
                    this.displayImgModal('ba5_2');
                  }}
                >
                  <Img fluid={this.props.data.ba5_2.childImageSharp.fluid} />
                </div>
              </div>
              <div className="img-group">
                <p>
                  <span>Before</span> <span>After</span>
                </p>
                <div
                  className="img-container"
                  onClick={() => {
                    this.displayImgModal('ba6_1');
                  }}
                >
                  <Img fluid={this.props.data.ba6_1.childImageSharp.fluid} />
                </div>
                <div
                  className="img-container"
                  onClick={() => {
                    this.displayImgModal('ba6_2');
                  }}
                >
                  <Img fluid={this.props.data.ba6_2.childImageSharp.fluid} />
                </div>
              </div>
              <div className="img-group">
                <p>
                  <span>Before</span> <span>After</span>
                </p>
                <div
                  className="img-container"
                  onClick={() => {
                    this.displayImgModal('ba3_1');
                  }}
                >
                  <Img fluid={this.props.data.ba3_1.childImageSharp.fluid} />
                </div>
                <div
                  className="img-container"
                  onClick={() => {
                    this.displayImgModal('ba3_2');
                  }}
                >
                  <Img fluid={this.props.data.ba3_2.childImageSharp.fluid} />
                </div>
              </div>
              <div className="img-group">
                <p>
                  <span>Before</span> <span>After</span>
                </p>
                <div
                  className="img-container"
                  onClick={() => {
                    this.displayImgModal('ba1_1');
                  }}
                >
                  <Img fluid={this.props.data.ba1_1.childImageSharp.fluid} />
                </div>
                <div
                  className="img-container"
                  onClick={() => {
                    this.displayImgModal('ba1_2');
                  }}
                >
                  <Img fluid={this.props.data.ba1_2.childImageSharp.fluid} />
                </div>
              </div>
            </Col>
            <Col xs="12">
              <MBAccordian />
            </Col>
          </Row>
        </Container>
        <div
          style={{ display: this.state.imgModalOn ? 'block' : 'none' }}
          onClick={this.imgModalOff}
          className="modal"
        >
          <span />
          <Img fluid={this.state.img} />
        </div>
      </Layout>
    );
  }
}

export const mbQuery = graphql`
  query {
    ba1_1: file(relativePath: { eq: "ba1_1.jpg" }) {
      ...fluidImage
    }
    ba1_2: file(relativePath: { eq: "ba1_2.jpg" }) {
      ...fluidImage
    }
    ba6_1: file(relativePath: { eq: "ba6_1.jpg" }) {
      ...fluidImage
    }
    ba6_2: file(relativePath: { eq: "ba6_2.jpg" }) {
      ...fluidImage
    }
    ba3_1: file(relativePath: { eq: "ba3_1.jpg" }) {
      ...fluidImage
    }
    ba3_2: file(relativePath: { eq: "ba3_2.jpg" }) {
      ...fluidImage
    }
    ba5_1: file(relativePath: { eq: "ba5_1.jpg" }) {
      ...fluidImage
    }
    ba5_2: file(relativePath: { eq: "ba5_2.jpg" }) {
      ...fluidImage
    }
  }
`;
