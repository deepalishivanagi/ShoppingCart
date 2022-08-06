
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const statefilt = useSelector((state) => state.FilterState);
  const dispatch = useDispatch();

  return (
    <form className="main-Sidebar flex-container">
      <div className="Filter-1 Horizontal-wrapper flex-col">
        <div className="Filter-header">
          <p>Filter</p>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "ClearBtnHandler" });
              }}
            >
              Clear All
            </button>
          </p>
        </div>
        <div className="PriceSlider-container ">
          <p>Price</p>
          <p>
            <input
              type="range"
              min="1"
              max="1000"
              step="1"
              value={statefilt.FilterState.highestValue}
              className="Price-slider"
              onChange={(event) => {
                dispatch({
                  type: "PriceRangeHandler",
                  value: event.target.value,
                });
              }}
            ></input>
            <label for="Price-slider">PriceRange</label>
          </p>
        </div>
      </div>
      <div className="Horizontal-wrapper flex-col">
        <div className="Filter-sort">
          <p>Sort By </p>
          <p>Price</p>
        </div>
        <div>
          <ul className="PriceList flex-col">
            <li className="flex-row">
              <input
                type="radio"
                name="price"
                checked={
                  statefilt.FilterState.sortway == "lowtohigh" ? true : false
                }
                onChange={() => {
                  dispatch({ type: "LowtoHighHandler" });
                }}
              ></input>
              low to high
            </li>
            <li className="flex-row">
              <input
                type="radio"
                name="price"
                checked={
                  statefilt.FilterState.sortway == "hightolow" ? true : false
                }
                onChange={() => {
                  dispatch({ type: "HightoLowHandler" });
                }}
              ></input>
              high to low
            </li>
          </ul>
        </div>
      </div>
      <div className="Horizontal-wrapper flex-col">
        <div className=" Filter-sort ">
          <p>Sort By </p>
          <p>Ratings</p>
        </div>
        <div>
          <ul className="PriceList flex-col">
            <li className="flex-row">
              <input
                type="radio"
                name="rates"
                checked={statefilt.FilterState.rate == "high" ? true : false}
                onChange={() => {
                  dispatch({ type: "HighRateHandler" });
                }}
              ></input>
              4* and above
            </li>
            <li className="flex-row">
              <input
                type="radio"
                name="rates"
                checked={statefilt.FilterState.rate == "mid" ? true : false}
                onChange={() => {
                  dispatch({ type: "MidRateHandler" });
                }}
              ></input>
              3* to 4*
            </li>
            <li className="flex-row">
              <input
                type="radio"
                name="rates"
                checked={statefilt.FilterState.rate == "low" ? true : false}
                onChange={() => {
                  dispatch({ type: "LowRateHandler" });
                }}
              ></input>
              3* and below
            </li>
          </ul>
        </div>
      </div>
      <div className="Horizontal-wrapper flex-col">
        <div className=" Filter-sort ">
          <p>Sort By </p>
          <p>Category</p>
        </div>
        <div>
          <form>
            <ul className="PriceList flex-col">
              <li className="flex-row">
                <input
                  type="checkbox"
                  name="Category"
                  checked={
                    statefilt.FilterState.categoryValue.includes(
                      "men's clothing"
                    )
                      ? true
                      : false
                  }
                  value="men's clothing"
                  onChange={(e) => {
                    dispatch({ type: "CategoryHandler", event: e });
                  }}
                ></input>{" "}
                Men's clothing
              </li>
              <li className="flex-row">
                <input
                  type="checkbox"
                  name="Category"
                  checked={
                    statefilt.FilterState.categoryValue.includes("jewelery")
                      ? true
                      : false
                  }
                  value="jewelery"
                  onChange={(e) => {
                    dispatch({ type: "CategoryHandler", event: e });
                  }}
                ></input>{" "}
                Jewelery
              </li>
              <li className="flex-row">
                <input
                  type="checkbox"
                  name="Category"
                  checked={
                    statefilt.FilterState.categoryValue.includes("electronics")
                      ? true
                      : false
                  }
                  value="electronics"
                  onChange={(e) => {
                    dispatch({ type: "CategoryHandler", event: e });
                  }}
                ></input>{" "}
                Electronics
              </li>
              <li className="flex-row">
                <input
                  type="checkbox"
                  name="Category"
                  checked={
                    statefilt.FilterState.categoryValue.includes(
                      "women's clothing"
                    )
                      ? true
                      : false
                  }
                  value="women's clothing"
                  onChange={(e) => {
                    dispatch({ type: "CategoryHandler", event: e });
                  }}
                ></input>{" "}
                Women's clothing
              </li>
            </ul>
          </form>
        </div>
      </div>
    </form>
  );
}
