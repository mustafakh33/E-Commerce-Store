import { Row } from "react-bootstrap";
import CardProductsContainer from "../Products/CardProductsContainer";
import AllWishlistHook from "./../../Hooks/wishlist/all-wishlist-hook";

const UserFavoriteProduct = () => {
  const [favProduct, count, handleRemoveFromWishlist] = AllWishlistHook();

  return (
    <div>
      <div className="cart-title">Favorites List</div>
      <Row className="justify-content-start">
        {favProduct.length <= 0 ? (
          <h6 style={{ color: "red", textAlign: "center", fontSize: "32px" }}>
            There are no favorite products currently.
          </h6>
        ) : (
          <CardProductsContainer
            products={favProduct}
            title=""
            btntitle=""
            onRemove={handleRemoveFromWishlist} // Pass the handler to child component
          />
        )}
      </Row>
    </div>
  );
};

export default UserFavoriteProduct;
