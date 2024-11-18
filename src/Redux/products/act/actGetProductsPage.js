import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetProductsPage = createAsyncThunk(
  "products/actGetProductsPage",
  async (page,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.get(`/api/v1/products?limit=12&page=${page}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetProductsPage;