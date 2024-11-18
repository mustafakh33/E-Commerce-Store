import { createSlice } from "@reduxjs/toolkit";
import actGetBrands from "./act/actGetBrands";
import actGetBrandsPages from "./act/actGetBrandsPages";



const initialState = {
  brands: [],
  loading: false,
  error: null,
};

const brandsSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get brands from api
    builder.addCase(actGetBrands.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    });
    builder.addCase(actGetBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // get number page brands from api
    builder.addCase(actGetBrandsPages.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetBrandsPages.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    });
    builder.addCase(actGetBrandsPages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default brandsSlice.reducer;