import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../Hooks/products/view-product-details-hook";
import AddToCartHook from "../../Hooks/cart/add-to-cart-hook";
import "../../style/products/productText.css";

const ProductText = () => {
  let { id } = useParams();
  console.log(id);
  const [items, loading, imagesGallery, brandName, categoryName, prod] =
    ViewProductDetailsHook(id);
  const [addProductToCart] = AddToCartHook(items._id);
  console.log(items);
  console.log(items._id);
  return (
    <div className="product-text-container">
      <Row className="mt-2">
        <h5 className="product-category">{categoryName}</h5>
      </Row>
      <Row>
        <Col md="8">
          <h2 className="product-title">
            {items.title}
            <span className="product-rating mx-3">{items.ratingsAverage}</span>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <p className="brand-label">Brand:</p>
          <p className="brand-name">{brandName}</p>
        </Col>
      </Row>
      <Row>
        <h5 className="specifications-title">Specifications:</h5>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <p className="product-description">{items.description}</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col
          md="12"
          className="d-flex justify-content-between align-items-center"
        >
          <div className="product-price">${items.price}</div>
          <button className="add-to-cart-button" onClick={addProductToCart}>
            Add to cart
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
