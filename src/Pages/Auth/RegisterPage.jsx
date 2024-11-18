import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterHook from "../../Hooks/auth/register-hook";
import { useSelector } from "react-redux";
import "../../style/auth/auth.css"

const RegisterPage = () => {
  const [name,email,phone, password,confirmPassword,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onChangeConfirmPassword,OnSubmit] = RegisterHook();
  const { loading } = useSelector((state) => state.authentication);
 
  return (
    <Container style={{ minHeight: "calc(100vh - 72px)" }} className="d-flex align-items-center justify-content-center">
      <Row className="py-5 d-flex justify-content-center align-items-center">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">Sign Up</label>
          <form onSubmit={OnSubmit} className="d-flex flex-column">
          <input
              value={name}
              onChange={onChangeName}
              placeholder="User name..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
              autoComplete="name"
              aria-label="Username"
            />
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="Email..."
              type="email"
              className="user-input mt-3 text-center mx-auto"
              autoComplete="email"
              aria-label="Email"
            />
            <input
              value={phone}
              onChange={onChangePhone}
              placeholder="Phone..."
              type="tel"
              className="user-input mt-3 text-center mx-auto"
              autoComplete="tel"
              aria-label="Phone number"
            />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder="Password..."
              type="password"
              className="user-input mt-3 text-center mx-auto"
              autoComplete="new-password"
              aria-label="Password"
            />
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              placeholder="Confirm Password..."
              type="password"
              className="user-input text-center mt-3 mx-auto"
              autoComplete="new-password"
              aria-label="Confirm Password"
            />
            <button type="submit" className="btn-login mx-auto mt-4">
              {loading === false? ("Register"):(<Spinner animation="border" />)}
            </button>
          </form>
          <label className="mx-auto mt-4">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Click here
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer className="Toastify__toast-container"/>
    </Container>
  );
};

export default RegisterPage;
