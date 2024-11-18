import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actGetUpdateCartProductQuantity = createAsyncThunk(
  "cart/actGetUpdateCartProductQuantity",
  async ({ id, body }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.put(`/api/v1/cart/${id}`, body, {
        headers: { token: localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetUpdateCartProductQuantity;
