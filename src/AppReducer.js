export const initialstate = {
  Discount:0.10,
  DataArray: [],
  CartListItems:[],
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
      };

    case "AddSubCountHandler":
      let tempTotal=0;
      let TempArray2 = JSON.parse(JSON.stringify(state.CartListItems));
      if(TempArray2.length==0)
      {
        TempArray2=[...TempArray2,{id:action.id,count:action.temp}]
      }
      else if(action.temp==0)
      {
        TempArray2=TempArray2.filter((item)=>
        {
          if(item.id!==action.id)
          {
            return true;
          }
          else
          return false;
        });
      }
      else if(TempArray2.find((item)=>item.id==action.id)!==undefined)
      {
        for (var i = 0; i < TempArray2.length; i++) {
          if (TempArray2[i].id == action.id) {
            TempArray2[i].count = action.temp;
          }
        }
      }
      else
      {
        TempArray2=[...TempArray2,{id:action.id,count:action.temp}]
      } 
      tempTotal=TempArray2.reduce((sum,item)=>{return sum+item.count},0) ;
      return { ...state, CartListItems: TempArray2 ,TotalCount: tempTotal};


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
        if(state.WishlistArray.includes(action.id))
        {
          return {...state}
        }
        else
        {
          return{...state,WishlistArray: [...state.WishlistArray,action.id]}
        }
    case 'RemoveFromWishlist':
      let filteredList = state.WishlistArray.filter((item)=>item!==action.id);
      return {...state,WishlistArray:filteredList}
    default:
      return state;
  }
};
