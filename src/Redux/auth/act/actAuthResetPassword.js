import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actAuthResetPassword = createAsyncThunk(
  "createNewUser/actAuthResetPassword",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.put("/api/v1/auth/resetPassword", data);
      return response.data;
    } catch (error) {
      // Logging the error response for better debugging
      console.error("Error response:", error.response);
      // Use rejectWithValue to return the error
      return rejectWithValue(error.response.data);
    }
  }
);

export default actAuthResetPassword;
