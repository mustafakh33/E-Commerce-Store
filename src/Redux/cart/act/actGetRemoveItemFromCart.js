import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetRemoveItemFromCart = createAsyncThunk(
  "cart/actGetRemoveItemFromCart",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.delete(`/api/v1/cart/${id}`, {
        headers: { token: localStorage.getItem("token") },
      });
      
      // قم بإرجاع البيانات المحدثة
      return response.data; // تأكد أن هذا يحتوي على بيانات السلة المحدثة
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetRemoveItemFromCart;
