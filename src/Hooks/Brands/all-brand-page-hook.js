import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actGetBrands from '../../Redux/brands/act/actGetBrands';
import actGetBrandsPages from '../../Redux/brands/act/actGetBrandsPages';

const AllBrandPageHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(actGetBrands(5));
    }, [dispatch]);
    // get state from redux
    const { brands, loading } = useSelector((state) => state.brands);
    // to get page count
    let numberOfPages = 0;
    if (brands.metadata) {
      numberOfPages = brands.metadata.numberOfPages;
    }
    // when press pagination
    const getPage = (page)=>{
      dispatch(actGetBrandsPages(page))
    }
  return [brands,loading,numberOfPages,getPage]
}

export default AllBrandPageHook;
