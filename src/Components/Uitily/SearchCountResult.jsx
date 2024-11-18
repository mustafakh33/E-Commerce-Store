import UnopDropdown from "unop-react-dropdown";
import sort from "../../assets/sort.png";
import "../../style/products/searchCountResult.css";

const SearchCountResult = ({ title, getProduct }) => {
  const handler = () => {};
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    getProduct();
  };
  
  return (
    <div className="justify-content-between pt-4 px-2 content--title">
      <div className="sub-tile mb-3" style={{ fontSize: "30px" }}>{title}</div>
      <div className="search-count-text d-flex align-items-center">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1" style={{ fontSize: "22px" }}>
              <img
                width="22px"
                height="22px"
                className="ms-1"
                src={sort}
                alt=""
              />
              sort by
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div
              onClick={() => clickMe("best seller")}
              className="border-bottom card-filter-item"
            >
              best seller
            </div>
            <div
              onClick={() => clickMe("Top rated")}
              className="border-bottom card-filter-item"
            >
              Top rated
            </div>
            <div
              onClick={() => clickMe("Price from low to high")}
              className="border-bottom card-filter-item"
            >
              Price from low to high
            </div>
            <div
              onClick={() => clickMe("Price from high to low")}
              className="card-filter-item"
            >
              Price from high to low
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
