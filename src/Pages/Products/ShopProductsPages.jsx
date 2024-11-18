import { Col, Container, Row } from "react-bootstrap";
import SearchCountResult from "./../../Components/Uitily/SearchCountResult";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import Pagination from "./../../Components/Uitily/Pagination";
import ViewSearchProductsHook from './../../Hooks/products/view-search-product-hook';
import { ToastContainer } from "react-toastify";

const ShopProductsPages = () => {
  const [items,numberOfPages,getPage,getProduct] = ViewSearchProductsHook();

  return (
    <div style={{ minHeight: "calc(100vh - 72px)"}}>
      <Container>
        <SearchCountResult getProduct={getProduct} title={`There are ${items?.length} search results`}/>
        <Row className="d-flex flex-row">
          <Col sm="12" xs="12" md="12">
            <CardProductsContainer products={items}  />
          </Col>
        </Row>
        <Pagination  pageCount={numberOfPages} getPage={getPage} />
      </Container>
      <ToastContainer className="Toastify__toast-container"/>
    </div>
  );
};

export default ShopProductsPages;
