import "./style2.css";
import AdderSubtractor from "./AdderSubtractor.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Item(param) {
  const dispatch = useDispatch();

  function WishlistHandler() {
    dispatch({ type: "AddToWishlist", id: param.SingleItemData.id });
  }

  function RemoveWishlistHandler(){
    dispatch({ type: "RemoveFromWishlist", id: param.SingleItemData.id });
  }

  function RenderMoreIfNeeded() {
    if (!("disableaddbtn" in param) || param.disableaddbtn == false) {
      return (
        <div>
          <AdderSubtractor item={param.SingleItemData}/>
          <br />
          <button id="WishlistBtn" onClick={WishlistHandler}>
            WishList
          </button>
        </div>
      );
    } else if (!("disableaddbtn" in param) || param.disableaddbtn == true) {
      return (
        <div>
          <AdderSubtractor item={param.SingleItemData}/>
          <br />
          <button id="WishlistBtn" onClick={RemoveWishlistHandler}>
            Remove WishList
          </button>
        </div>
      );
    }
  }

  return (
    <div className="Item">
      <Link to={`/ItemDetailPage/${param.SingleItemData.id}`}>
        <div className="item-div1">
          <img src={param.SingleItemData.image} alt="book"></img>
        </div>
        <div className="item-div2">
          <h3>{param.SingleItemData.title}</h3>
        </div>
        <div className="item-div3">
          <h3>Rs.{param.SingleItemData.price}</h3>
        </div>
      </Link>
      {RenderMoreIfNeeded()}
    </div>
  );
}
