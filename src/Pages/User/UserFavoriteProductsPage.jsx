import { Container, Row, Col } from "react-bootstrap";
import UserFavoriteProduct from "./../../Components/User/UserFavoriteProduct";
import { ToastContainer } from "react-toastify";

const UserFavoriteProductsPage = () => {
  return (
    <Container style={{ minHeight: "calc(100vh - 72px)" }}>
      <Row className="py-3">
        <Col sm="12" xs="12" md="12">
          <UserFavoriteProduct />
        </Col>
      </Row>
      <ToastContainer className="Toastify__toast-container" />
    </Container>
  );
};

export default UserFavoriteProductsPage;
