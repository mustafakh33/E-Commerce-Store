import { createSlice } from "@reduxjs/toolkit";
import actGetAllProducts from "./act/actGetAllProducts";
import actGetOneProduct from "./act/actGetOneProductWithId";
import actGetProductLike from "./act/actGetProductLike";
import actGetProductsPage from "./act/actGetProductsPage";
import actGetAllProductsSearch from "./act/actGetAllProductsSearch";


const initialState = {
  allproducts: [],
  oneproduct: [],
  productYouLike: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all products 
    builder.addCase(actGetAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allproducts = action.payload;
    });
    builder.addCase(actGetAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // get product page
    builder.addCase(actGetProductsPage.pending, (state) => {
          state.loading = true;
          state.error = null;
    });
    builder.addCase(actGetProductsPage.fulfilled, (state, action) => {
          state.loading = false;
          state.allproducts = action.payload;
    });
    builder.addCase(actGetProductsPage.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
    });
    // get product search
    builder.addCase(actGetAllProductsSearch.pending, (state) => {
          state.loading = true;
          state.error = null;
    });
    builder.addCase(actGetAllProductsSearch.fulfilled, (state, action) => {
          state.loading = false;
          state.allproducts = action.payload;
    });
    builder.addCase(actGetAllProductsSearch.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
    });
    // get one products 
    builder.addCase(actGetOneProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetOneProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.oneproduct = action.payload;
    });
    builder.addCase(actGetOneProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // get product You Like
    builder.addCase(actGetProductLike.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetProductLike.fulfilled, (state, action) => {
      state.loading = false;
      state.productYouLike = action.payload;
    });
    builder.addCase(actGetProductLike.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  },
});

export default productsSlice.reducer;