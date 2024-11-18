import { Row, Col } from "react-bootstrap";
import DeleteCartHook from "../../Hooks/cart/delete-cart-hook";
import "../../style/cart/CartCheckout.css";

const CartCheckout = ({ totalCartPrice }) => {
  const [handleDeleteCart] = DeleteCartHook();

  // تأكيد عملية تفريغ السلة
  const confirmDeleteCart = () => {
    const confirmMessage = "Are you sure you want to delete all products from the cart?";
    if (window.confirm(confirmMessage)) {
      handleDeleteCart();  // استدعاء الوظيفة بدون إعادة تحميل الصفحة
    }
  };

  return (
    <Row className="my-3 cart-checkout">
      <Col xs="12" className="d-flex flex-column">
        <div className="total-price-label my-3">Total Price:</div>
        <div className="product-price d-inline w-100 my-3 border">
          ${totalCartPrice}
        </div>
        <button
          onClick={confirmDeleteCart}  // استخدام الدالة الجديدة بدون reload
          className="product-cart-clear w-100 px-2 my-2"
        >
          Clear the cart
        </button>
      </Col>
    </Row>
  );
};

export default CartCheckout;
