import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actGetBrands from '../../Redux/brands/act/actGetBrands';

const HomeBrandHooks = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(actGetBrands(5));
    },[dispatch])
    // get state from redux
    const {brands,loading} = useSelector(state => state.brands)
  return [brands,loading]
}

export default HomeBrandHooks;
