import { Container } from "react-bootstrap";
import ProductDetalis from "./../../Components/Products/ProductDetalis";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../Hooks/products/view-product-details-hook";
import { ToastContainer } from "react-toastify";

const ProductDetalisPage = () => {
  let { id } = useParams();
  const [items, loading, imagesGallery, brandName, categoryName, prod] =
    ViewProductDetailsHook(id);

  return (
    <div style={{ minHeight: "calc(100vh - 72px)" }}>
      <Container>
        <ProductDetalis />
        <CardProductsContainer products={prod} title="Products you may like" />
      </Container>
      <ToastContainer className="Toastify__toast-container"/>
    </div>
  );
};

export default ProductDetalisPage;
