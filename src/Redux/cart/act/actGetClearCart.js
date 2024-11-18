import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetClearCart = createAsyncThunk(
  "cart/actGetClearCart",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.delete("/api/v1/cart", {
        headers: { token: localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export default actGetClearCart;
