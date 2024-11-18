import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actAuthForgetPassword = createAsyncThunk(
  "createNewUser/actAuthForgetPassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.post(`/api/v1/auth/forgotPasswords`,data);
      return response.data;
    }catch (error) {
      // استخدام rejectWithValue لإرجاع الخطأ
      return rejectWithValue(error.response.data);
    }
  }
);



export default actAuthForgetPassword
