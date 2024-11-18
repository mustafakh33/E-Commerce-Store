import { useMemo } from "react";
import { Card, Col, Button } from "react-bootstrap";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import rate from "../../assets/rate.png";
import AddToCartHook from "../../Hooks/cart/add-to-cart-hook";
import AddWishlistHook from "../../Hooks/wishlist/add-wishlist-hook";
import "../../style/products/productCard.css";

const ProductCard = ({ data, favProduct, onRemove }) => {
  const { _id, title, price, ratingsAverage, imageCover } = data; // Destructuring for better readability
  const [isInWishlist, addWishList, removeWishList] = AddWishlistHook(
    data,
    favProduct,
    onRemove
  ); //wishlist
  const [addProductToCart] = AddToCartHook(_id); // cart

  // Function to get title snippet
  const titleSnippet = useMemo(() => {
    const words = title.split(" ");
    return words.slice(0, 2).join(" ");
  }, [title]);

  return (
    // <Col xs="12" sm="6" md="4" lg="3" className="d-flex">
    //   <Card className="my-2 product-card shadow-sm border-0">
    //     <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
    //       <Card.Img
    //         alt={`Image of ${title}`}
    //         style={{
    //           height: "200px",
    //           width: "100%",
    //           objectFit: "contain",
    //           borderRadius: "0.25rem",
    //         }}
    //         src={imageCover}
    //         loading="lazy"
    //       />
    //     </Link>
    //     <div className="wishlist-icon-container d-flex justify-content-end p-2">
    //       {isInWishlist ? (
    //         <FavoriteIcon
    //           onClick={removeWishList}
    //           className="icon-wishlist text-danger"
    //         />
    //       ) : (
    //         <FavoriteBorderIcon
    //           onClick={addWishList}
    //           className="icon-wishlist text-muted"
    //         />
    //       )}
    //     </div>
    //     <Card.Body className="d-flex flex-column justify-content-between">
    //       <Card.Title className="text-center">
    //         <h5 className="card-title">{titleSnippet}</h5>
    //       </Card.Title>
    //       <Card.Text>
    //         <div className="d-flex justify-content-between align-items-center">
    //           <span className="card-price font-weight-bold">${price}</span>
    //           <div className="d-flex align-items-center">
    //             <img src={rate} alt="Rating" height="16px" width="16px" />
    //             <span className="card-rate mx-2">{ratingsAverage}</span>
    //           </div>
    //         </div>
    //       </Card.Text>
    //       <Button
    //         onClick={addProductToCart}
    //         className="add-to-cart-btn w-100 mt-3"
    //         variant="primary"
    //       >
    //         Add to Cart
    //       </Button>
    //     </Card.Body>
    //   </Card>
    // </Col>
/* <Col xs={12} sm={6} md={4} lg={3} className="d-flex my-5">
  <Card className="product-card shadow-sm border-0 rounded">
    <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
      <Card.Img
        alt={`Image of ${title}`}
        style={{
          width: "100%",
          height: "auto", // السماح للصورة بالتكيف مع ارتفاع البطاقة
          objectFit: "cover",
          borderTopLeftRadius: "0.25rem",
          borderTopRightRadius: "0.25rem",
        }}
        src={imageCover}
        loading="lazy"
      />
    </Link>
    <Card.Body className="d-flex flex-column p-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <Card.Title className="card-title font-weight-bold mb-0">
          {titleSnippet}
        </Card.Title>
        <div className="wishlist-icon-container">
          {isInWishlist ? (
            <FavoriteIcon
              onClick={removeWishList}
              className="icon-wishlist text-danger"
            />
          ) : (
            <FavoriteBorderIcon
              onClick={addWishList}
              className="icon-wishlist text-muted"
            />
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="card-price font-weight-bold">${price}</span>
        <div className="d-flex align-items-center">
          <img
            src={rate}
            alt="Rating"
            style={{ height: "16px", width: "16px", marginRight: "5px" }}
          />
          <span className="card-rate">{ratingsAverage}</span>
        </div>
      </div>
      <Button
        onClick={addProductToCart}
        className="add-to-cart-btn"
        style={{
          padding: "5px 10px",
          fontSize: "14px",
          borderRadius: "20px",
        }} // تصميم الزر
        variant="primary"
      >
        Add to Cart
      </Button>
    </Card.Body>
  </Card>
</Col> */
<Col xs={12} sm={6} md={4} lg={3} className="d-flex my-5">
  <Card className="product-card shadow-sm border-0 rounded">
    <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
      <Card.Img
        alt={`Image of ${title}`}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          borderTopLeftRadius: "0.25rem",
          borderTopRightRadius: "0.25rem",
        }}
        src={imageCover}
        loading="lazy"
      />
    </Link>
    <Card.Body className="d-flex flex-column p-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <Card.Title className="card-title font-weight-bold mb-0">
          {titleSnippet}
        </Card.Title>
        <div className="wishlist-icon-container">
          {isInWishlist ? (
            <FavoriteIcon
              onClick={removeWishList}
              className="icon-wishlist text-danger"
            />
          ) : (
            <FavoriteBorderIcon
              onClick={addWishList}
              className="icon-wishlist text-muted"
            />
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="card-price font-weight-bold">${price}</span>
        <div className="d-flex align-items-center">
          <img
            src={rate}
            alt="Rating"
            style={{ height: "16px", width: "16px", marginRight: "5px" }}
          />
          <span className="card-rate">{ratingsAverage}</span>
        </div>
      </div>
    
      <div className="mt-5" style={{ flexGrow: 1 }} />
      <Button
        onClick={addProductToCart}
        className="add-to-cart-btn"
        style={{
          padding: "5px 10px",
          fontSize: "14px",
          borderRadius: "20px",
          width: "100%",
        }}
        variant="primary"
      >
        Add to Cart
      </Button>
    </Card.Body>
  </Card>
</Col>




  );
};

export default ProductCard;
