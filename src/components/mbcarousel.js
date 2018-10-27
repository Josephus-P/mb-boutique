import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './mbcarousel.scss';

export default class MBCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        interval={8000}
        swipeScrollTolerance={1}
      >
        <Container>
          <Row>
            <Col md="6">
              <Img fluid={this.props.anna} />
            </Col>
            <Col className="text" md="6">
              <blockquote>
                I’ve had the most amazing, absolutely delightful experience
                working with Monica. From the beginning of my first appointment,
                she took ample time to fully explain the process to me and
                answered all my questions, easing any fears or concerns that
                came to mind. She is extremely talented, detailed, and precise.
                Monica took the time to follow up with me via text in between my
                first appointment and my touch-up to make sure the healing was
                going smoothly. On top of all that, she is so kind, funny, and
                easy to talk to. I am really pleased with the finished result. I
                highly recommend Monica to anyone who is considering
                microblading!
              </blockquote>
              <cite>~ Anna</cite>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md="6">
              <Img fluid={this.props.nina} />
            </Col>
            <Col className="text" md="6">
              <blockquote>
                I’m a bit of a perfectionist and lucky for me so is Monica, even
                though we both knew brows are sisters not twins. The shape was
                perfect for my face and the colors she mixed together was the
                color of my hair. My brows looked natural. I couldn’t have asked
                for anything more. I was completely satisfied with the work that
                she had done. Now here we are a year later and my brows still
                look amazing and the color is still what it was last year. I say
                this just to show you that Monica uses the best products to give
                the best results to all her clients. I will be forever grateful
                for my brow angel, Monica. She seriously saved my life!
              </blockquote>
              <cite>~ Nina</cite>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md="6">
              <Img fluid={this.props.kathryn} />
            </Col>
            <Col className="text" md="6">
              <blockquote>
                I was referred to Monica from a friend, I had wanted to have my
                brows done for some time but could never find the one. Monica is
                so relatable, warm, friendly and genuinely concerned with your
                results. To say Monica is simply amazing at her craft in an
                understatement. Every day I receive compliments on my brows and
                everyone wants to know , how to get the same results. Monica is
                a true professional who is dedicated and simply the best !!!!!!!
                Everyone who has had their brows done by her falls in love with
                their results and her.
              </blockquote>
              <cite>~ Kathryn</cite>
            </Col>
          </Row>
        </Container>
      </Carousel>
    );
  }
}
