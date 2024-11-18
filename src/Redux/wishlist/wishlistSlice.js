import { createSlice } from "@reduxjs/toolkit";
import actGetRemoveProductToWishList from "./act/actGetRemoveProductToWishList";
import actGetAddProductToWishList from "./act/actGetAddProductToWishList";
import actGetAllProductToWishList from "./act/actGetAllProductToWishList";


const initialState = {
  addWishList: [],
  removeWishList: [],
  allWishList: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add product to wislist
    builder.addCase(actGetAddProductToWishList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetAddProductToWishList.fulfilled, (state, action) => {
      state.loading = false;
      state.addWishList = action.payload;
    });
    builder.addCase(actGetAddProductToWishList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // remove product to wislist
    builder.addCase(actGetRemoveProductToWishList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetRemoveProductToWishList.fulfilled,(state, action) => {
        state.loading = false;
        state.removeWishList = action.payload;
      }
    );
    builder.addCase(actGetRemoveProductToWishList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // get all product to wislist
    builder.addCase(actGetAllProductToWishList.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actGetAllProductToWishList.fulfilled,(state, action) => {
        state.loading = false;
        state.allWishList = action.payload;
      }
    );
    builder.addCase(actGetAllProductToWishList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default wishlistSlice.reducer;
