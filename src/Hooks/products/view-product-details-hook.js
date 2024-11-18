import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actGetOneProduct from './../../Redux/products/act/actGetOneProductWithId';
import mobile from '../../assets/mobile.png';
import actGetProductLike from '../../Redux/products/act/actGetProductLike';

const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();

  // Fetch product details on component mount
  useEffect(() => {
    dispatch(actGetOneProduct(id));
  }, [dispatch, id]);

  const { oneproduct, productYouLike, loading } = useSelector((state) => state.products);

  // Memoize items, categoryName, categoryId, and brandName to avoid unnecessary recalculations
  const { items, categoryName, categoryId, brandName } = useMemo(() => {
    const data = oneproduct?.data || {};
    return {
      items: data,
      categoryName: data.category?.name || '',
      categoryId: data.category?._id || null,
      brandName: data.brand?.name || ''
    };
  }, [oneproduct]);

  // Fetch related products when categoryId changes
  useEffect(() => {
    if (categoryId) {
      dispatch(actGetProductLike(categoryId));
    }
  }, [dispatch, categoryId]);

  // Prepare images gallery for rendering
  const imagesGallery = useMemo(() => {
    if (items.images && items.images.length > 0) {
      return items.images.map((img) => ({ original: img }));
    }
    return [{ original: mobile }];
  }, [items.images]);

  // Check if `productYouLike` contains valid data and prepare the products
  const prod = useMemo(() => {
    if (productYouLike && productYouLike.data) {
      console.log('Product you like data:', productYouLike.data); // Log to verify data
      return productYouLike.data.slice(0, 4);
    }
    return []; // Return an empty array if there's no data
  }, [productYouLike]);

  return [items, loading, imagesGallery, brandName, categoryName, prod];
};

export default ViewProductDetailsHook;
