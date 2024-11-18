import { useEffect } from 'react';
import actGetAllProducts from '../../Redux/products/act/actGetAllProducts';
import { useDispatch, useSelector } from 'react-redux';

const ViewHomeProductHook = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actGetAllProducts());
  }, [dispatch]);

  const { allproducts } = useSelector((state) => state.products);
  let topRatedItems = [];
  let bestSellingItems = [];

  if (allproducts.data) {
    const products = [...allproducts.data];
    
    bestSellingItems = products
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 4);

    topRatedItems = products
      .sort((a, b) => b.ratingsAverage - a.ratingsAverage)
      .slice(0, 4); 

  }

  return [topRatedItems, bestSellingItems];
}

export default ViewHomeProductHook;
