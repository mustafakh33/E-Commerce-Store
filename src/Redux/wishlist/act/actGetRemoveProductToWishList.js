import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetRemoveProductToWishList = createAsyncThunk(
  "wishlist/actGetRemoveProductToWishList",
  async (productID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.delete (`/api/v1/wishlist/${productID}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export default actGetRemoveProductToWishList;
