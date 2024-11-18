import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actGetUpdateCartProductQuantity from '../../Redux/cart/act/actGetUpdateCartProductQuantity';
import notify from '../useNotifaction';

const UpdateCartQuantityHook = (data) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(data?.count);
  const [totalPrice, setTotalPrice] = useState(data?.product.price * data?.count); // Initialize total price

  // Calculate total price based on item count
  useEffect(() => {
    setTotalPrice(data?.product.price * itemCount);
  }, [itemCount, data?.product.price]);

  const onChangeCount = (e) => {
    const value = Number(e.target.value); // Convert to number

    // Prevent the value from being less than one
    if (value >= 1) {
      setItemCount(value);
    } else {
      notify("Quantity cannot be less than one", "warning");
    }
  };

  const handelUpdateCartQuantity = async () => {
    try {
      await dispatch(
        actGetUpdateCartProductQuantity({
          id: data.product._id,
          body: { count: itemCount },
        })
      );
      notify("Quantity updated successfully", "success");
      // Optionally, you can update any other state here if needed
    } catch (error) {
      notify("Error updating quantity", "error");
    }
  };

  return [handelUpdateCartQuantity, onChangeCount, itemCount, totalPrice]; // Return totalPrice
}

export default UpdateCartQuantityHook;
