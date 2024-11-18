import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actGetAddProductToWishList from '../../Redux/wishlist/act/actGetAddProductToWishList';
import notify from '../useNotifaction';
import actGetRemoveProductToWishList from '../../Redux/wishlist/act/actGetRemoveProductToWishList';

const AddWishlistHook = (data, favProduct, onRemove) => {
  const navigate = useNavigate();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  
  // Optimize effect by ensuring it's run only when needed
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsInWishlist(favProduct?.includes(data._id));
    }
  }, [favProduct, data._id]);
  // Function to handle adding product to wishlist
  const addWishList = async () => {
    try {
      const resultAction = await dispatch(
        actGetAddProductToWishList({ productId: data._id })
      );
      if (resultAction.payload?.status === "success") {
        notify("Product added successfully to your wishlist", "success");
        setIsInWishlist(true);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
    }
  };
  // Function to handle removing product from wishlist
  const removeWishList = async () => {
    try {
      const resultAction = await dispatch(
        actGetRemoveProductToWishList(data._id)
      );
      if (resultAction.payload?.status === "success") {
        notify("Removed Successfully", "success");
        setIsInWishlist(false);
        if (onRemove) {
          onRemove(data._id);
        }
      } else {
        notify("Failed to remove product from wishlist", "error");
      }
    } catch (error) {
      console.error("Error removing product from wishlist:", error);
    }
  };

  return [isInWishlist,addWishList,removeWishList];
}

export default AddWishlistHook;
