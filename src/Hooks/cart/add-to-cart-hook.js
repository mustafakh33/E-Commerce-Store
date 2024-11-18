import { useCallback } from "react";
import { useDispatch } from "react-redux";
import notify from "../useNotifaction";
import { useNavigate } from "react-router-dom";
import actGetAddProductToCart from "../../Redux/cart/act/actGetAddProductToCart";
import actGetAllProductToCart from "../../Redux/cart/act/actGetAllProductToCart";

const AddToCartHook = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addProductToCart = useCallback(async () => {
    try {
      const resultAction = await dispatch(
        actGetAddProductToCart({ productId: id })
      );
      if (resultAction.payload && resultAction.payload.status === "success") {
        notify("Product added successfully to your cart", "success");
              // Fetch the updated cart data
               dispatch(actGetAllProductToCart());
      } else {
        notify("You need to be logged in to add products to the cart", "error");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      notify("An error occurred while adding the product", "error");
    }
  }, [dispatch, id, navigate]);

  return [addProductToCart];
};

export default AddToCartHook;
