import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import actGetCategoriesPage from "./act/actGetCategoriesPage";


const initialState = {
  categorys: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all category 
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categorys = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // get number page Categories 
    builder.addCase(actGetCategoriesPage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetCategoriesPage.fulfilled, (state, action) => {
      state.loading = false;
      state.categorys = action.payload;
    });
    builder.addCase(actGetCategoriesPage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default categoriesSlice.reducer;