import { Container, Row, Col } from "react-bootstrap";
import UserProfile from "./../../Components/User/UserProfile";

const UserProfilePage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="9" xs="10" md="10">
          <UserProfile />
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfilePage;
