import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetAddProductToWishList = createAsyncThunk(
  "wishlist/actGetAddProductToWishList",
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.post("/api/v1/wishlist", body, {
        headers: { token: localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue( error.message);
    }
  }
);

export default actGetAddProductToWishList;
