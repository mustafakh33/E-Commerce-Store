import BrandContainer from "./../../Components/Brand/BrandContainer";
import Pagination from "./../../Components/Uitily/Pagination";
import AllBrandPageHook from "../../Hooks/Brands/all-brand-page-hook";

const AllBrandPage = () => {
  const [brands,loading,numberOfPages,getPage] = AllBrandPageHook();

  return (
    <div style={{minHeight: "calc(100vh - 72px)", display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <BrandContainer data={brands.data} loading={loading} />
      <Pagination getPage={getPage} pageCount={numberOfPages} />
    </div>
  );
};

export default AllBrandPage;
