export const initialstate = {
  DataArray: [],
  TotalCount: 0,
  AppChosenItems: [],
  WishlistArray: [],
};

export const AppReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "initialArraySet":
      return {
        ...state,
        DataArray: action.temp,
        AppChosenItems: action.temp,
        WishlistArray: action.temp,
      };

    case "AddSubCountHandler":
      let TempArray2 = JSON.parse(JSON.stringify(state.DataArray));
      for (var i = 0; i < TempArray2.length; i++) {
        if (TempArray2[i].id == action.id) {
          TempArray2[i].count = action.temp;
        }
      }

      return { ...state, DataArray: TempArray2 };

    case "CartPlusHandler":
      var temp = state.TotalCount;
      temp = temp + 1;
      return { ...state, TotalCount: temp };

    case "CartMinusHandler":
      var temp = state.TotalCount;
      temp = temp - 1;
      return { ...state, TotalCount: temp };

    case "AddSubCountHandlerBill":
      let TempArray = JSON.parse(JSON.stringify(state.AppChosenItems));
      for (var i = 0; i < TempArray.length; i++) {
        if (TempArray[i].id == action.id) {
          TempArray[i].count = action.countValue;
        }
      }
      return { ...state, AppChosenItems: TempArray };

    case "AddToWishlist":
      let tempWishArray = JSON.parse(JSON.stringify(state.DataArray));
      for (var i = 0; i < tempWishArray.length; i++) {
        if (tempWishArray[i].id == action.id) {
          tempWishArray[i].AddTolist = 1;
        }
      }
      return { ...state, DataArray: tempWishArray };

    default:
      return state;
  }
};
