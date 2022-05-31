import "./style2.css";
import AdderSubtractor from "./AdderSubtractor.js";
import { cartWebsiteContext } from "./AppContext";
import { useContext } from "react";
import { AppStateContext } from "./AppProvider";

export default function Item(param) {

  // var ValuesFromContext = useContext(cartWebsiteContext);
  var {AddToWishlist} = useContext(AppStateContext);

  function WishlistHandler() {
    AddToWishlist(param.SingleItemData.id);
    console.log("Inside wishlist handler");
  }

  function RenderMoreIfNeeded() {
    if (!("disableaddbtn" in param) || param.disableaddbtn == false) {
      return (
        <div>
          <AdderSubtractor
            item={param.SingleItemData}
            index={param.index}
            // onPlus={param.onPlus}
            // onMinus={param.onMinus}
            // ASCountHandlerBill={param.ItemCountHandlerBill}
            // ItemCountHandlerItem={param.ItemCountHandlerList}
          />
          <br />
          <button id="WishlistBtn" onClick={WishlistHandler}>WishList</button>
        </div>
      );
    }
  }

  return (
    <div className="Item">
      {/* define class name to return div to assign styles in css file */}
      {/* <div>
        <h3>{param.ItemListsData.title}</h3>
      </div> */}
      <div className="item-div1">
        <img src={param.SingleItemData.image} alt="book"></img>
      </div>
      <div className="item-div2">
        <h3>{param.SingleItemData.title}</h3>
      </div>
      <div className="item-div3">
        <h3>Rs.{param.SingleItemData.price}</h3>
      </div>
      {/* <div>
      <AdderSubtractor
            itemArray={param.ItemListsData}
            index={param.index}
            // onPlus={param.onPlus}
            // onMinus={param.onMinus}
            // ASCountHandlerBill={param.ItemCountHandlerBill}
            // ItemCountHandlerItem={param.ItemCountHandlerList}
          />
          <br />
      </div> */}
      {RenderMoreIfNeeded()}
    </div>
  );
}
