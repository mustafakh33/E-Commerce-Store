import CategoryContainer from './../../Components/Category/CategoryContainer';
import Pagination from './../../Components/Uitily/Pagination';
import AllCategoryPageHook from '../../Hooks/Category/all-category-page-hook';


const AllCategoryPage = () => {
  const [categorys,loading,numberOfPages,getPage] = AllCategoryPageHook()
  return (
    <div style={{minHeight: "calc(100vh - 72px)"  , display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <CategoryContainer data={categorys.data} loading={loading}/>
      {numberOfPages>1? (<Pagination pageCount={numberOfPages} getPage={getPage}/>): null}      
    </div>
  )
}

export default AllCategoryPage
