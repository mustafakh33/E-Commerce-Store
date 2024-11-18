import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../Hooks/auth/login-hook";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "../../style/auth/auth.css"

const LoginPage = () => {
  const [email, password, onChangeEmail, onChangePassword, OnSubmit] =
    LoginHook();
  const { loading } = useSelector((state) => state.authentication);
  return (
    <Container
    style={{ minHeight: "calc(100vh - 72px)" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">sign in</label>
          <form className="d-flex flex-column" onSubmit={OnSubmit}>
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="Email..."
              type="email"
              className="user-input my-3 text-center mx-auto"
              autoComplete="email"
              aria-label="Email"
            />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder="Password..."
              type="password"
              className="user-input text-center mx-auto"
              autoComplete="new-password"
              aria-label="Password"
            />
            <button type="submit" className="btn-login mx-auto mt-4">
              {loading === false ? "sign in" : <Spinner animation="border" />}
            </button>
          </form>
          <label className="mx-auto my-4">
            Don't have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Click here
              </span>
            </Link>
          </label>
          <label className="mx-auto my-4">
            <Link
              to="/user/forget-password"
              style={{ textDecoration: "none", color: "red" }}
            >
              Forgot your password?
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer className="Toastify__toast-container"/>
    </Container>
  );
};

export default LoginPage;
