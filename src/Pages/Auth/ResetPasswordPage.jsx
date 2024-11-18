import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ResetPasswordHook from "../../Hooks/auth/reset-password-hook";
import "../../style/auth/auth.css"

const RsetPasswordPage = () => {
  const [password, confirmPassword, onChangePassword, onChangeConfirmPassword, OnSubmit] = ResetPasswordHook();
  const { loading } = useSelector((state) => state.authentication);
  return (
    <Container
    style={{ minHeight: "calc(100vh - 72px)" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">Enter the new password</label>
          <form onSubmit={OnSubmit} className="d-flex flex-column">
            <input
             value={password}
             onChange={onChangePassword}
              placeholder="Enter your new password..."
              type="password"
              className="user-input my-3 text-center mx-auto"
              autoComplete="new-password"
              aria-label="New Password"
            />
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              placeholder="Confirm your new password..."
              type="password"
              className="user-input my-3 text-center mx-auto"
              autoComplete="new-password"
              aria-label="Confirm Password"
            />
            <button type="submit" className="btn-login mx-auto mt-2">
              {loading === false ? "Save" : <Spinner animation="border" />}
            </button>
          </form>
        </Col>
      </Row>
      <ToastContainer className="Toastify__toast-container"/>
    </Container>
  );
};

export default RsetPasswordPage;
