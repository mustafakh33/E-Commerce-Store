import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetBrandsPages = createAsyncThunk(
  "categories/actGetBrandsPages",
  async (page, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.get(`/api/v1/brands?limit=5&page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetBrandsPages;