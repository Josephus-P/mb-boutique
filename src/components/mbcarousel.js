import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import Img from 'gatsby-image';
import './mbcarousel.scss';

export default class MBCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next(items) {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous(items) {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const items = [
      {
        src: this.props.anna,
        text: `I’ve had the most amazing, absolutely delightful experience
          working with Monica. From the beginning of my first
          appointment, she took ample time to fully explain the process
          to me and answered all my questions, easing any fears or
          concerns that came to mind. She is extremely talented,
          detailed, and precise. Monica took the time to follow up with
          me via text in between my first appointment and my touch-up to
          make sure the healing was going smoothly. On top of all that,
          she is so kind, funny, and easy to talk to. I am really
          pleased with the finished result -I highly recommend Monica to
          anyone who is considering microblading!`,
        altText: 'anna'
      },
      {
        src: this.props.kathryn,
        text: `I was referred to Monica from a friend, I had wanted to have my brows done for some time but could never find the one. Monica is so relatable, warm, friendly and genuinely concerned with your results. To say Monica is simply amazing at her craft in an understatement. Every day I receive compliments on my brows and everyone wants to know , how to get the same results. Monica is a true professional who is dedicated and simply the best !!!!!!! Everyone who has had their brows done by her falls in love with their results and her.`,
        altText: 'kathryn'
      },
      {
        src: this.props.nina,
        text: `I’m a bit of a perfectionist and lucky for me so is Monica, even though we both knew brows are sisters not twins. The shape was perfect for my face and the colors she mixed together was the color of my hair. My brows looked natural. I couldn’t have asked for anything more. I was completely satisfied with the work that she had done. Now here we are a year later and my brows still look amazing and the color is still what it was last year. I say this just to show you that Monica uses the best products to give the best results to all her clients. I will be forever grateful for my brow angel, Monica. She seriously saved my life! `,
        altText: 'nina'
      }
    ];

    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <Container>
            <Row>
              <Col xs="12" md="6">
                <Img
                  className="align-center"
                  fluid={item.src}
                  alt={item.altText}
                />
              </Col>
              <Col xs="12" md="6">
                <p>{item.text}</p>
              </Col>
            </Row>
          </Container>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={() => this.next(items)}
        previous={() => this.previous(items)}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={() => this.previous(items)}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={() => this.next(items)}
        />
      </Carousel>
    );
  }
}
