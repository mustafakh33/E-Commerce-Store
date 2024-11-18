import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../../Api/baseURL";

const actAuthLogin = createAsyncThunk(
  "createNewUser/actAuthLogin",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await baseUrl.post(`/api/v1/auth/signin`,data);
      return response.data;
    }catch (error) {
      // Log the error for debugging purposes (optional)
      console.error("Error during login:", error);

      if (error.response) {
        switch (error.response.status) {
          case 401:
            // Handle error 401: Unauthorized (incorrect email or password)
            return rejectWithValue("Incorrect email or password. Please try again.");
          case 500:
            // Handle error 500: Internal Server Error
            return rejectWithValue("Internal server error. Please try again later.");
          default:
            // Handle other status codes
            return rejectWithValue(error.response.data.message || error.response.data);
        }
      }

      // If error does not have a response (network error or other issues)
      return rejectWithValue(error.message);
    }
  }
);

export default actAuthLogin;

