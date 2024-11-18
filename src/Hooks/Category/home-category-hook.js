import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actGetCategories from '../../Redux/categories/act/actGetCategories';

const HomeCategoryHook = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(actGetCategories());
    },[dispatch])
    // get state from redux
    const {categorys , loading} = useSelector(state => state.categories)

  return [categorys,loading]
}

export default HomeCategoryHook;
