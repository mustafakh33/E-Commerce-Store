import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "./../Uitily/SubTiltle";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import actGetAllProductToWishList from "../../Redux/wishlist/act/actGetAllProductToWishList";

const CardProductsContainer = ({ products, title, btntitle, onRemove }) => {
  const dispatch = useDispatch();
  const { allWishList } = useSelector((state) => state.wishlist);
  const { loading: productsLoading } = useSelector((state) => state.products);
  const [favProduct, setFavProduct] = useState([]);

  useEffect(() => {
    const getAllWishlist = async () => {
      await dispatch(actGetAllProductToWishList());
    };
    getAllWishlist();
  }, [dispatch]);

  // Update favProduct only when allWishList.data changes
  useEffect(() => {
    if (allWishList.data) {
      // This maps the array of products from the wishlist to an array of their unique IDs
      setFavProduct(allWishList.data.map((item) => item._id));
    }
  }, [allWishList.data]);

  return (
    <Container>
      {products && (
        <SubTiltle  title={title} btntitle={btntitle} pathText="/products" />
      )}
      <Row className="my-2 d-flex g-4">
        {productsLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          products.map((item) => (
            <ProductCard
              key={item._id} // Use unique identifier as key
              data={item}
              favProduct={favProduct}
              onRemove={onRemove} // Pass the onRemove handler
            />
          ))
        )}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
