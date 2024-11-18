import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import actAuthForgetPassword from "./act/actAuthForgetPassword";
import actAuthVerifyPassword from "./act/actAuthVerifyPassword";
import actAuthResetPassword from "./act/actAuthResetPassword";

const initialState = {
  createUser: [],
  loginUser: [],
  ForgetPassword: [],
  VerifyPassword: [],
  ResetPassword: [],
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "createNewUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // create a new user
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.createUser = action.payload;
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // user login 
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.loginUser = action.payload;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Forget Password 
    builder.addCase(actAuthForgetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actAuthForgetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.ForgetPassword = action.payload;
    });
    builder.addCase(actAuthForgetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Verify Password
    builder.addCase(actAuthVerifyPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actAuthVerifyPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.VerifyPassword = action.payload;
    });
    builder.addCase(actAuthVerifyPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Reset Password
    builder.addCase(actAuthResetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actAuthResetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.ResetPassword = action.payload;
    });
    builder.addCase(actAuthResetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;