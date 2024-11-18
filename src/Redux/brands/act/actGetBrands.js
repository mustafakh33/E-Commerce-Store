import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetBrands = createAsyncThunk(
  "categories/actGetBrands",
  async (limit, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.get(`/api/v1/brands?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetBrands;