import { Col } from "react-bootstrap";
import "../../style/Category/categoryCard.css";

const CategoryCard = ({ img, title }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="my-4 d-flex">
      <div className="allCard mb-5 mx-auto">
        <div className="categoty-card ">
          <img alt="zcv" src={img} className="categoty-card-img" />
        </div>{" "}
        <p className="categoty-card-text my-2">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
