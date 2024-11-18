import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GetAllCartHook from "../../Hooks/cart/get-all-cart-hook";
import AllWishlistHook from "../../Hooks/wishlist/all-wishlist-hook";
import "../../style/Uitily/navbarLogin.css";

const NavbarLogin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };
  // number of wishlist
  const [favProduct, count, handleRemoveFromWishlist] = AllWishlistHook();
  // number of cart
  const [cartItems, totalCartPrice, numberOfCartItems] = GetAllCartHook();
  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ padding: "5px 0px" }}>
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-white text-center">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/allcategory"
                className="text-white text-center"
              >
                Categories
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products"
                className="text-white text-center"
              >
                Products
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/allbrand"
                className="text-white text-center"
              >
                Brands
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/cart"
                    className="text-white position-relative text-center"
                  >
                    <ShoppingCartIcon />
                    <span className="badge">{numberOfCartItems || 0}</span>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/user/favoriteproducts"
                    className="text-white position-relative text-center"
                  >
                    <FavoriteBorderOutlinedIcon />
                    <span className="badge">{count}</span>
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/login"
                    className="text-white text-center"
                    onClick={logOut}
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-white text-center"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLogin;
