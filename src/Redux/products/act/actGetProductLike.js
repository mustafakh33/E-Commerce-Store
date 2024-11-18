import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetProductLike = createAsyncThunk(
  "products/actGetProductLike",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.get(`/api/v1/products?category=${id}`);

      // تحقق من حالة الاستجابة
      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetProductLike;
