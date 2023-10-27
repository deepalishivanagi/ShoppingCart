import Item from "./Item";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const state = useSelector((state) => state).AppState;

  var WishArray = [];

  if (state.WishlistArray.length > 0) {
    for (let i of state.WishlistArray) {
      let matchedData = state.DataArray.find((item) => item.id == i);
      WishArray.push(
        <Item
          SingleItemData={matchedData}
          disableaddbtn={true}
        />
      );
    }

    // for (var i = 0; i < state.DataArray.length; i++) {
    //   console.log(state.DataArray[i],"------")
      // if (state.DataArray[i].AddTolist === 1) {
      //   WishArray.push(
      //     <Item
      //       SingleItemData={state.DataArray[i]}
      //       disableaddbtn={true}
      //       index={i}
      //     />
      //   );
      // }
    // }
  }
  else {
    return (
      <div className="Wishlits-main">
        <h1 style={{ marginTop: "10rem" }}>No items added to wishlist</h1>
      </div>
    )
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
