import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../Hooks/products/view-product-details-hook";
import "../../style/products/productGallery.css";

const ProductGallery = () => {
  let { id } = useParams();
  const [items, loading, imagesGallery, brandName, categoryName, prod] =
    ViewProductDetailsHook(id);

  return (
    <div className="product-gallary-card d-flex justify-content-center align-items-center pt-2">
      {!loading && (
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <ImageGallery
            items={imagesGallery}
            showFullscreenButton={false}
            isRTL={true}
            showPlayButton={false}
            showThumbnails={false}
            renderRightNav={(onClick, disabled) => (
              <RightButton onClick={onClick} disabled={disabled} />
            )}
            renderLeftNav={(onClick, disabled) => (
              <LeftButton onClick={onClick} disabled={disabled} />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
