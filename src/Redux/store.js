import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import brandsSlice from "./brands/brandsSlice";
import productsSlice from "./products/productsSlice";
import authSlice from "./auth/authSlice";
import wishlistSlice from "./wishlist/wishlistSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    brands: brandsSlice,
    products: productsSlice,
    authentication: authSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these paths from being checked for serialization
        ignoredActions: ["wishlist/actGetWishList/fulfilled"],
        ignoredPaths: ["payload.headers"],
      },
    }),
});

export default store;
