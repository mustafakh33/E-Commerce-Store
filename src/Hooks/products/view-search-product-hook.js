import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import actGetAllProductsSearch from "../../Redux/products/act/actGetAllProductsSearch";

const ViewSearchProductsHook = () => {
  const limit = 12;
  const dispatch = useDispatch();
  
  const [sort, setSort] = useState("");

  // Get products with current sort type
  const getProduct = useCallback(async () => {
    await dispatch(actGetAllProductsSearch(`limit=${limit}&sort=${sort}`));
  }, [dispatch, sort]);

  // Get sort type from localStorage
  useEffect(() => {
    const storedSortType = localStorage.getItem("sortType") || "";
    let sortValue = "";
    switch (storedSortType) {
      case "best seller":
        sortValue = "-sold";
        break;
      case "Top rated":
        sortValue = "-quantity";
        break;
      case "Price from low to high":
        sortValue = "+price";
        break;
      case "Price from high to low":
        sortValue = "-price";
        break;
      default:
        sortValue = "";
    }
    setSort(sortValue);
  }, []);

  // Fetch products when sort changes
  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const { allproducts } = useSelector((state) => state.products);

  const items = allproducts.data ? [...allproducts.data] : [];

  const numberOfPages = allproducts.metadata ? allproducts.metadata.numberOfPages : 0;

  // Fetch products for specific page
  const getPage = async (page) => {
    await dispatch(actGetAllProductsSearch(`page=${page}&limit=${limit}&sort=${sort}`));
  };

  return [items, numberOfPages, getPage, getProduct];
};

export default ViewSearchProductsHook;
