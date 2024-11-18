import { Col, Row } from "react-bootstrap";
import deleteicon from "../../assets/delete.png";
import DeleteCartHook from "../../Hooks/cart/delete-cart-hook";
import UpdateCartQuantityHook from "../../Hooks/cart/update-cart-quantity-hook";
import "../../style/cart/cartItem.css";

const CartItem = ({ data }) => {
  const [handleDeleteCart, handleDeleteItem] = DeleteCartHook(data);
  const [handleUpdateCartQuantity, onChangeCount, itemCount] = UpdateCartQuantityHook(data);

  return (
    <Col xs={12} className="cart-item-body my-3 p-3">
      <Row className="align-items-center">
        <Col xs={12} md={3} className="text-center">
          <img
            src={data.product.imageCover}
            alt=""
            className="img-fluid rounded"
            style={{ maxHeight: "197px", objectFit: "cover" }}
          />
        </Col>

        <Col xs={12} md={9} className="mt-3 mt-md-0">
          <Row className="justify-content-between align-items-center">
            <Col xs={8} className="d-flex align-items-center">
              <div className="cat-text">{data.product.category.name}</div>
            </Col>
            <Col xs={4} className="text-end">
              <img
                src={deleteicon}
                alt=""
                className="delete-icon"
                onClick={handleDeleteItem}
              />
            </Col>
          </Row>

          <Row className="mt-2">
            <Col xs={12} className="d-flex flex-column flex-sm-row align-items-start">
              <div className="cat-title me-2">{data.product.title}</div>
              <div className="cat-rate">{data.product.ratingsAverage}</div>
            </Col>
          </Row>

          <Row className="mt-1">
            <Col xs={12}>
              <div className="cat-text d-inline">Brand:</div>
              <div className="brand-text d-inline mx-1">{data.product.brand.name}</div>
            </Col>
          </Row>

          <Row className="justify-content-between mt-2 align-items-center">
            <Col xs={12} md={6} className="d-flex align-items-center">
              <div className="cat-text">Quantity</div>
              <input
                value={itemCount}
                onChange={onChangeCount}
                className="mx-2 quantity-input"
                type="number"
              />
              <button className="btn btn-dark apply-btn" onClick={handleUpdateCartQuantity}>Apply</button>
            </Col>
            <Col xs={12} md={6} className="text-end mt-3 mt-md-0">
              <div className="price-text">${data.price}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default CartItem;
