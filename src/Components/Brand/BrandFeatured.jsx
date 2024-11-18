import { Container, Row } from "react-bootstrap";
import brand1 from "../../assets/brand1.png";
import SubTiltle from "./../Uitily/SubTiltle";
import BrandCard from "./BrandCard";
import Spinner from "react-bootstrap/Spinner";
import HomeBrandHooks from "../../Hooks/Brands/home-brand-hooks";

// eslint-disable-next-line react/prop-types
const BrandFeatured = ({ title, btntitle }) => {
  const [brands, loading] = HomeBrandHooks();

  return (
    <Container className="pb-4">
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brands.data ? (
            brands.data
              .slice(1, 6)
              .map((item, index) => <BrandCard key={index} img={item.image} />)
          ) : (
            <h4>There are no categories.</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
        <BrandCard img={brand1} />
      </Row>
    </Container>
  );
};

export default BrandFeatured;
