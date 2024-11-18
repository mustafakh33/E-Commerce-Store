import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";

const BrandContainer = ({ data, loading }) => {
  return (
    <Container>
      <div
        className="admin-content-text mt-4"
        style={{
          color: "#272727",
          fontFamily: "Almarai",
          fontWeight: "bold",
          letterSpacing: "0",
          lineHeight: "28px",
          fontSize: "30px",
        }}
      >
        Brands
      </div>
      <Row className="my-2 g-4 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => (
              <BrandCard key={index} img={item.image} />
            ))
          ) : (
            <h4>لايوجد تصنيقات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer;
