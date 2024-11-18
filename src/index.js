import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductsPages from "./Pages/Products/ShopProductsPages";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import CartPage from "./Pages/Cart/CartPage";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import ForgetPasswordPage from "./Pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Pages/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import ErrorPage from "./Pages/Error/ErrorPage";
import { Provider } from "react-redux";
import store from "./Redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/allcategory", element: <AllCategoryPage /> },
      { path: "/allbrand", element: <AllBrandPage /> },
      { path: "/products", element: <ShopProductsPages /> },
      { path: "/products/:id", element: <ProductDetalisPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/user/favoriteproducts", element: <UserFavoriteProductsPage /> },
      { path: "/user/profile", element: <UserProfilePage /> },
      { path: "/user/forget-password", element: <ForgetPasswordPage /> },
      { path: "/user/verify-code", element: <VerifyPasswordPage /> },
      { path: "/user/reset-password", element: <ResetPasswordPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
