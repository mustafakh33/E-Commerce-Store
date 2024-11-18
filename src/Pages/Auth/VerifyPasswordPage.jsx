import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import VerifyPasswordHook from "../../Hooks/auth/verify-password-hook";
import { useSelector } from "react-redux";
import "../../style/auth/auth.css"

const VerifyPasswordPage = () => {
  const [onChangeCode, onSubmitForm, code] = VerifyPasswordHook();
  const { loading } = useSelector((state) => state.authentication);

  return (
    <Container
    style={{ minHeight: "calc(100vh - 72px)" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">
            Enter the code sent to the email
          </label>
          <form onSubmit={onSubmitForm} className="d-flex flex-column ">
            <input
              value={code}
              onChange={onChangeCode}
              placeholder="Enter the code..."
              type="number"
              className="user-input my-3 text-center mx-auto"
              autoComplete="code"
              aria-label="code"
            />
            <button type="submit" className="btn-login mx-auto mt-2">
              {loading === false ? (
                "confirmation"
              ) : (
                <Spinner animation="border" />
              )}
            </button>
          </form>
        </Col>
      </Row>
      <ToastContainer className="Toastify__toast-container"/>
    </Container>
  );
};
export default VerifyPasswordPage;
