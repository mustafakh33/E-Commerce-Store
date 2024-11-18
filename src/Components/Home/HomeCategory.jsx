import { Container, Row } from "react-bootstrap"
import SubTiltle from './../Uitily/SubTiltle';
import CategoryCard from './../Category/CategoryCard';
import Spinner from 'react-bootstrap/Spinner';
import HomeCategoryHook from "../../Hooks/Category/home-category-hook";

const HomeCategory = () => {
  const [categorys,loading] = HomeCategoryHook();
  
  return (
    <Container>
      <SubTiltle title="Categories" btntitle="More" pathText="/allcategory" />
      <Row className='my-2 d-flex justify-content-between'>
        {
          loading===false?(
            categorys.data? (
              categorys.data.slice(1,6).map((item,index)=>(
                <CategoryCard key={index} img={item.image} title={item.name} />
              )
              )
            ):<h4>There are no categories.</h4>
          ):(<Spinner animation="border" variant="primary"/>)
        
        }
            </Row>
    </Container>
  )
}

export default HomeCategory
