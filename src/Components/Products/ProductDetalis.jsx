import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetalis = () => {
  return (
    <div>
      <Row className="py-3 align-items-center g-5 ">
        <Col lg="4" className="d-flex justify-content-center">
          <ProductGallery />
        </Col>
        <Col lg="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetalis;
