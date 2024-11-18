import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetAllProductToWishList = createAsyncThunk(
  "wishlist/actGetAllProductToWishList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.get('/api/v1/wishlist',{
        headers: { token: localStorage.getItem("token") },
      })
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default actGetAllProductToWishList;
