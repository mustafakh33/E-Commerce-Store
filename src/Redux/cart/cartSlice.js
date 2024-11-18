import { createSlice } from "@reduxjs/toolkit";
import actGetAddProductToCart from "./act/actGetAddProductToCart";
import actGetAllProductToCart from "./act/actGetAllProductToCart";
import actGetClearCart from "./act/actGetClearCart";
import actGetRemoveItemFromCart from "./act/actGetRemoveItemFromCart";
import actGetUpdateCartProductQuantity from "./act/actGetUpdateCartProductQuantity";

const initialState = {
  addToCart: [],
  allProduct: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add product to cart
    builder.addCase(actGetAddProductToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetAddProductToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.addToCart = action.payload;
    });
    builder.addCase(actGetAddProductToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // get all products in the cart
    builder.addCase(actGetAllProductToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetAllProductToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.allProduct = action.payload;
    });
    builder.addCase(actGetAllProductToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // clear cart
    builder.addCase(actGetClearCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetClearCart.fulfilled, (state) => {
      state.loading = false;
      state.allProduct = [];  // Clear all products from cart
    });
    builder.addCase(actGetClearCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Remove Item From Cart
    builder.addCase(actGetRemoveItemFromCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetRemoveItemFromCart.fulfilled, (state, action) => {
      state.loading = false;
      state.allProduct = action.payload;
    });
    builder.addCase(actGetRemoveItemFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // update cart product quantity
    builder.addCase(actGetUpdateCartProductQuantity.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetUpdateCartProductQuantity.fulfilled, (state, action) => {
      state.loading = false;
      state.allProduct = action.payload;  // Assuming the updated cart is returned
    });
    builder.addCase(actGetUpdateCartProductQuantity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cartSlice.reducer;
