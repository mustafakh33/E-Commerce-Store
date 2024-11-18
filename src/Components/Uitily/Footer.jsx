import { Container, Row, Col } from "react-bootstrap";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import phone from "../../assets/phone.png";
import "../../style/Uitily/footer.css"

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center"
          >
            <a href="/terms" className="footer-link">
              Terms and Conditions
            </a>
            <a href="/privacy" className="footer-link mx-3">
              Privacy Policy
            </a>
            <a href="tel:0122455346356" className="footer-link">
              Call Us
            </a>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-end align-items-center"
          >
            <div className="d-flex align-items-center mx-3">
              <img width="20" height="20" src={phone} alt="Phone" />
              <p className="mb-0 ms-2">0122455346356</p>
            </div>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="20" height="20" src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img width="20" height="20" src={instagram} alt="Instagram" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="20" height="20" src={twitter} alt="Twitter" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
