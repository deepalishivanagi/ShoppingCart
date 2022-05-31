import {
    createContext,
    useState
} from "react";


export const AppStateContext = createContext();

export const AppProvider = (props) => {
    // var [Clcount, setClcount] = useState(0);
    var [DataArray, setDataArray] = useState([]);
    var [TotalCount, setTotalCount] = useState(0);
    var [AppChosenItems, setAppChosenItems] = useState([]);
    var [WishlistArray, setWishlistArray] = useState([]);
    // var [PriceVal, setPriceVal] = useState();
    // var [shouldFilter, setshouldFilter] = useState(false);

    // function ClickHandler() {
    //     console.log("inside Clickhandler");
    //     setClcount((prevcount) => prevcount + 1);
    // }

    function AddSubCountHandler(temp, id) {
        let TempArray2 = JSON.parse(JSON.stringify(DataArray));
        for(var i=0;i<TempArray2.length;i++)
        {
            if(TempArray2[i].id==id)
            {
                TempArray2[i].count= temp;
            }

        }
        // TempArray2[index].count = temp;
        setDataArray(TempArray2);
        return;
    }

    function CartPlusHandler() {
        var temp = TotalCount;
        temp = temp + 1;
        setTotalCount((prevcount) => temp);
    }

    function CartMinusHandler() {
        setTotalCount((prevTotalcount) => prevTotalcount - 1);
    }

    function AddSubCountHandlerBill(countValue, id) {
        console.log("App got singal to assign value" + countValue + " to index" + id);
        let TempArray = JSON.parse(JSON.stringify(AppChosenItems));
        //(TempArray[index].count) ? (TempArray[index].count = quant) : ( );
        //(typeof (TempArray[index].count) === 'undefined') ?  : (TempArray[index].count = quant);
        for(var i=0;i<TempArray.length;i++)
        {
            if(TempArray[i].id==id)
            {
                TempArray[i].count = countValue;
              
            }
        }
        // if ("count" in TempArray[index]) {
        //     TempArray[index].count = countValue;
        //     setAppChosenItems(TempArray);
        //     return;
        // }
        setAppChosenItems(TempArray);
        return;
        console.log("Inside CountHandler" + quant);
    }

    function AddToWishlist(id) {
        let tempWishArray = WishlistArray;
        for(var i=0;i<tempWishArray.length;i++)
        {
            if(tempWishArray[i].id==id)
            {
                tempWishArray[i].AddTolist = 1;
            }
        }
        // tempWishArray[index].AddTolist = 1;
        setWishlistArray(tempWishArray);
        console.log("Inside Wishlist Array" + JSON.stringify(WishlistArray));
    }

    // function PriceHandler(price, PriceConditionState) {
    //     setshouldFilter(PriceConditionState);
    //     let temp = price;
    //     console.log(temp + "inApp");
    //     setPriceVal(temp);
    // }

    return ( 
        <AppStateContext.Provider value = {{
            DataArray, setDataArray, TotalCount, setTotalCount,
                AppChosenItems, setAppChosenItems, WishlistArray, setWishlistArray, 
                AddSubCountHandler, CartPlusHandler, CartMinusHandler, AddSubCountHandlerBill, AddToWishlist
            }
        } 
        > 
        {props.children}  
        </AppStateContext.Provider>

    );
}