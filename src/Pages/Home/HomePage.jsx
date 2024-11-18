import Slider from "./../../Components/Home/Slider";
import HomeCategory from "./../../Components/Home/HomeCategory";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import DiscountSection from "./../../Components/Home/DiscountSection";
import BrandFeatured from "./../../Components/Brand/BrandFeatured";
import ViewHomeProductHook from "../../Hooks/products/view-home-product-hook";
import { ToastContainer } from "react-toastify";
const HomePage = () => {
  const [topRatedItems, bestSellingItems] = ViewHomeProductHook();
  return (
    <div className="font" style={{ minHeight: "calc(100vh - 72px)" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        products={bestSellingItems}
        title="best seller"
        btntitle="More"
      />
      <DiscountSection />
      <CardProductsContainer
        products={topRatedItems}
        title="Top Rated"
        btntitle="More"
      />
      <BrandFeatured title="Most famous brands" btntitle="More" />
      <ToastContainer className="Toastify__toast-container" />
    </div>
  );
};

export default HomePage;
