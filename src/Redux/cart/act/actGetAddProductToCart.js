import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetAddProductToCart = createAsyncThunk(
  "cart/actGetAddProductToCart",
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.post("/api/v1/cart", body, {
        headers: { token: localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue( error.message);
    }
  }
);

export default actGetAddProductToCart;
