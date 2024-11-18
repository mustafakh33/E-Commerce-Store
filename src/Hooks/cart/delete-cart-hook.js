import { useDispatch } from "react-redux";
import actGetClearCart from "../../Redux/cart/act/actGetClearCart";
import notify from "../useNotifaction";
import actGetRemoveItemFromCart from "../../Redux/cart/act/actGetRemoveItemFromCart";
import actGetAllProductToCart from "../../Redux/cart/act/actGetAllProductToCart"; // استيراد الـ action لتحديث البيانات بعد الحذف

const DeleteCartHook = (data) => {
  const dispatch = useDispatch();

  const handleDeleteCart = async () => {
    try {
      await dispatch(actGetClearCart()).unwrap();  // تفريغ السلة
      await dispatch(actGetAllProductToCart()).unwrap();  // جلب المنتجات المحدثة بعد التفريغ
      notify("Deleted all items from cart", "success");
    } catch (error) {
      notify("Error clearing cart", "error");
    }
  };

  const handleDeleteItem = async () => {
    try {
      await dispatch(actGetRemoveItemFromCart(data.product._id)).unwrap();
      await dispatch(actGetAllProductToCart()).unwrap();  // جلب المنتجات المحدثة بعد حذف المنتج
      notify("Item removed successfully", "success");
    } catch (error) {
      notify("Error removing item", "error");
    }
  };

  return [handleDeleteCart, handleDeleteItem];
};

export default DeleteCartHook;
