import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actGetAllProductToWishList from '../../Redux/wishlist/act/actGetAllProductToWishList';
import actRemoveFromWishlist from "../../Redux/wishlist/act/actGetRemoveProductToWishList";

const AllWishlistHook = () => {
    const dispatch = useDispatch();
  const { allWishList } = useSelector((state) => state.wishlist);
  const [favProduct, setFavProduct] = useState([]);
  const [count,setCount] = useState(0)

  useEffect(() => {
    const getAllWishlist = async () => {
      await dispatch(actGetAllProductToWishList());
    };
    getAllWishlist();
  }, [allWishList]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (allWishList.data && user) {
      setFavProduct(allWishList.data);
      setCount(allWishList.count)
    }
  }, [allWishList.data,allWishList.count]);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      // Call the action to remove the product from wishlist
      await dispatch(actRemoveFromWishlist(productId));
      // Update local state to remove the product from the list
      setFavProduct(prevFavProducts =>
        prevFavProducts.filter(product => product._id !== productId)
      );
    } catch (error) {
      console.error("Failed to remove product from wishlist:", error);
    }
  };
  return [favProduct,count,handleRemoveFromWishlist]
}

export default AllWishlistHook;
