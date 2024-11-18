import { Carousel, Row, Col } from "react-bootstrap";
import sliderimg from "../../assets/slider1.png";
import slider4 from "../../assets/slider4.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";
import "../../style/home/slider.css"


const Slider = () => {
  return (
    <Carousel>
    <Carousel.Item className="slider-background" interval={2000}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="text-center">
          <img
            className="img-fluid slider-image"
            src={slider4}
            alt="First slide"
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <h3 className="slider-title">There is a big discount.</h3>
          <p className="slider-text">Up to 50% off when you buy</p>
        </Col>
      </Row>
    </Carousel.Item>

    <Carousel.Item className="slider-background2" interval={2000}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="text-center">
          <img
            className="img-fluid slider-image"
            src={sliderimg}
            alt="Second slide"
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <h3 className="slider-title">There is a big discount.</h3>
          <p className="slider-text">Up to 50% off when you buy</p>
        </Col>
      </Row>
    </Carousel.Item>

    <Carousel.Item className="slider-background3" interval={2000}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="text-center">
          <img
            className="img-fluid slider-image"
            src={prod3}
            alt="Third slide"
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <h3 className="slider-title">There is a big discount.</h3>
          <p className="slider-text">Up to 50% off when you buy</p>
        </Col>
      </Row>
    </Carousel.Item>

    <Carousel.Item className="slider-background4" interval={2000}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="text-center">
          <img
            className="img-fluid slider-image"
            src={prod4}
            alt="Fourth slide"
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <h3 className="slider-title">There is a big discount.</h3>
          <p className="slider-text">Up to 50% off when you buy</p>
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
  );
};

export default Slider;
