import Item from "./Item";
import { cartWebsiteContext } from "./AppContext";
import { useContext } from "react";
import { AppStateContext } from "./AppProvider";

export default function Wishlist() {
  // var ValuesFromContext=useContext(cartWebsiteContext);
  // var [WishlistArray, setWishlistArray]=useContext(AppStateContext);
  var {WishlistArray, setWishlistArray}=useContext(AppStateContext);

  var WishArray = [];

  for (var i = 0; i < WishlistArray.length; i++) {
    if (WishlistArray[i].AddTolist === 1) {
      WishArray.push(
        <Item
          SingleItemData={WishlistArray[i]}
          disableaddbtn={true}
        />
      );
    }
    console.log("Hello Wishlist");
  }
  console.log("Hello Wishlist");

  return (
    <div className="Wishlits-main">
      <h1>Inside wishlist</h1>
      <ul>
        <li>{WishArray}</li>
      </ul>
    </div>
  );
}
