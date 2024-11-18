import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./../../Components/Cart/CartItem";
import CartCheckout from "./../../Components/Cart/CartCheckout";
import GetAllCartHook from "../../Hooks/cart/get-all-cart-hook";
import { ToastContainer } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import "../../style/cart/cartPage.css";

const CartPage = () => {
  const [cartItems, totalPriceCart, numberOfCartItems, loading] =
    GetAllCartHook();

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        <Row>
          <Spinner animation="border" variant="primary" />
        </Row>
      </Container>
    );
  } else {
    return (
      <Container style={{ minHeight: "calc(100vh - 72px)" }}>
        <Row>
          <div className="cart-title mt-4 mb-4">Shopping Cart</div>
        </Row>

        <Row className="d-flex justify-content-center">
          {cartItems?.products?.length ? (
            <>
              <Col xs="12" md="9">
                {cartItems.products.map((item) => (
                  <CartItem key={item._id} data={item} />
                ))}
              </Col>

              <Col xs="8" md="3">
                <CartCheckout totalCartPrice={totalPriceCart} />
              </Col>
            </>
          ) : (
            <Col xs="12" className="text-center">
              <h6
                style={{ color: "red", textAlign: "center", fontSize: "32px" }}
              >
                There are no products in the cart.
              </h6>
            </Col>
          )}
        </Row>
        <ToastContainer className="Toastify__toast-container" />
      </Container>
    );
  }
};

export default CartPage;
