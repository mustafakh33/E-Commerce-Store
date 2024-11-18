import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import actGetAllProductToCart from "../../Redux/cart/act/actGetAllProductToCart";

const GetAllCartHook = () => {
  const dispatch = useDispatch();
  const { allProduct } = useSelector((state) => state.cart);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPriceCart, setTotalPriceCart] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCartData = useCallback(async () => {
    setLoading(true);
    try {
      await dispatch(actGetAllProductToCart()).unwrap();
    } catch (error) {
      console.error("Error fetching cart data:", error);   
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  useEffect(() => {
    if (!loading && allProduct?.status === "success") {
      setNumberOfCartItems(allProduct.numOfCartItems);
      setCartItems(allProduct.data || []);    
      setTotalPriceCart(allProduct.data?.totalCartPrice || 0); 
    }
  }, [loading, allProduct]);

  return [cartItems, totalPriceCart, numberOfCartItems, loading];
};

export default GetAllCartHook;
