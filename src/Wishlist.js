import Item from "./Item";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const state = useSelector((state) => state).AppState;

  var WishArray = [];

  for (var i = 0; i < state.DataArray.length; i++) {
    if (state.DataArray[i].AddTolist === 1) {
      WishArray.push(
        <Item
          SingleItemData={state.DataArray[i]}
          disableaddbtn={true}
          index={i}
        />
      );
    }
  }

  return (
    <div className="Wishlits-main">
      <h1>Inside wishlist</h1>
      <ul>
        <li>{WishArray}</li>
      </ul>
    </div>
  );
}
