import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import ForgetPasswordHook from "../../Hooks/auth/forget-password-hook";
import "../../style/auth/auth.css"


const ForgetPasswordPage = () => {
  const { loading } = useSelector((state) => state.authentication);
  const [onChangeEmail, onSubmitForm, email] = ForgetPasswordHook();

  return (
    <Container
    style={{ minHeight: "calc(100vh - 72px)" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">Forgot your password</label>
          <form onSubmit={onSubmitForm} className="d-flex flex-column ">
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="Enter your email..."
              type="email"
              className="user-input my-3 text-center mx-auto"
              autoComplete="email"
              aria-label="Email"
            />
            <button type="submit" className="btn-login mx-auto mt-2">
              {loading === false ? "Send code" : <Spinner animation="border" />}
            </button>
          </form>
        </Col>
      </Row>
      <ToastContainer className="Toastify__toast-container" />
    </Container>
  );
};

export default ForgetPasswordPage;
