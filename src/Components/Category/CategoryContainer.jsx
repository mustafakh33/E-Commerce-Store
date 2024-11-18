import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import Spinner from "react-bootstrap/Spinner";

const CategoryContainer = ({ data, loading }) => {
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
        All Categories
      </div>
      <Row className="my-2 g-4 justify-content-around">
        {loading === false ? (
          data ? (
            data.map((item, index) => (
              <CategoryCard key={index} img={item.image} title={item.name} />
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

export default CategoryContainer;
