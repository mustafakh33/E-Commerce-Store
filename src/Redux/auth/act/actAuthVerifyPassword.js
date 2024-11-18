import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actAuthVerifyPassword = createAsyncThunk(
  "createNewUser/actAuthVerifyPassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.post(`/api/v1/auth/verifyResetCode`,data);
      return response.data;
    }catch (error) {
      // استخدام rejectWithValue لإرجاع الخطأ
      return rejectWithValue(error.response.data);
    }
  }
);



export default actAuthVerifyPassword;
