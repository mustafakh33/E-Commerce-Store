import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actAuthRegister = createAsyncThunk(
  "createNewUser/actAuthRegister",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.post(`/api/v1/auth/signup`,data);
      return response.data;
    }catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          // التعامل مع خطأ 409: اسم المستخدم أو البريد الإلكتروني موجود بالفعل 
          return rejectWithValue("Username or email already exists.");
        }
        return rejectWithValue(error.response.data.message || error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export default actAuthRegister;

