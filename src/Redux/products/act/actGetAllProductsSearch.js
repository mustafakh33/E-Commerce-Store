import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetAllProductsSearch = createAsyncThunk(
  "products/actGetAllProductsSearch",
  async (queryString, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.get(`/api/v1/products?${queryString}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetAllProductsSearch;