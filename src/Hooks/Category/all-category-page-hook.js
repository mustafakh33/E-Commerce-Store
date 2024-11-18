import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actGetCategories from '../../Redux/categories/act/actGetCategories';
import actGetCategoriesPage from '../../Redux/categories/act/actGetCategoriesPage';

const AllCategoryPageHook = () => {
    const dispatch = useDispatch();
    // when first load
    useEffect(()=>{
      dispatch(actGetCategories(5));
    },[dispatch])
    // to get state from redux
    const {categorys , loading} = useSelector(state => state.categories)
    // to get page count
    let numberOfPages =0 ;
    if (categorys.metadata) {
      numberOfPages = categorys.metadata.numberOfPages;
    }
    // when press pagination
    const getPage = (page)=>{
      dispatch(actGetCategoriesPage(page))
    }
    return [categorys,loading,numberOfPages,getPage]
}

export default AllCategoryPageHook
