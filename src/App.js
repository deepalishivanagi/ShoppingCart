import "./style2.css";
import ListOfItems from "./ListOfItems.js";
import Cart from "./cart.js";
import { useState } from "react";
import { items } from "./ItemData";
import ItemBill from "./ItemBill";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wishlist from "./Wishlist";
import PriceRange from "./PriceRange";
import { useEffect } from "react";
import { cartWebsiteContext } from "./AppContext";
import {AppStateContext} from "./AppProvider";
import { FilterStateContext } from "./FilterProvider";
import { useContext } from "react";

export default function App() {

  const {setDataArray, setAppChosenItems, setWishlistArray} = useContext(AppStateContext);
  const {setDupliDataArray}=useContext(FilterStateContext);
 

  async function callServer() {
    const response = await fetch("https://fakestoreapi.com/products?limit=8");
    const data = await response.json();
    var temp = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < data.length; i++) {
      // temp = JSON.parse(JSON.stringify(data));
      const presentVal = data[i];
      temp[i] = { ...presentVal, count: 0, AddTolist: 0 };
    }
    setDataArray(temp);
    // setDupliDataArray(temp);
    setAppChosenItems(temp);
    setWishlistArray(temp);
    const val = data[0].title;
    console.log(val);
    // return data;
  }

  useEffect(() => {
    callServer();
  }, []);

  return (
  <div className="App">
  <Router>
        <nav>
          <h1>Shopping cart</h1>
         
          <Link class="link" to="/ListOfItems">
            {" "}
            ListOfItems{" "}
          </Link>
          <Link class="link" to="/ItemBill">
            {" "}
            TotalItemBill{" "}
          </Link>
          <Link class="link" to="/Wishlist">
            Wishlist
          </Link>
          {/* <Link class="link" to="/PriceRange">
            PriceRange
          </Link> */}
         
          {/* <Cart count={TotalCount} /> */}
          <Cart />
        </nav>
        
        <Routes>
          <Route
            path="/ListOfItems"
            element={
              <ListOfItems
                // ItemList={DataArray}
                // length={DataArray.length}
                // CartPlusHandler={CartPlusHandler}
                // CartMinusHandler={CartMinusHandler}
                // CountHandlerBill={ASCountHandlerBill}
                // AddToWishlist={AddToWishlist}
                // ItemCountHandler={ASCountHandler}
                // PriceVal={PriceVal}
                // shouldFilter={shouldFilter}
              />
            }
          />
           
          <Route
            path="/ItemBill"
            element={
              <ItemBill
                // Itemlist={AppChosenItems}
                // Itemlength={AppChosenItems.length}
              />
            }
          />
          <Route
            path="/Wishlist"
            element={
              <Wishlist 
              // wArray={WishlistArray} 
              // wlength={WishlistArray.length}
               />
            }
          />
          {/* <Route
            path="/PriceRange"
            element={<PriceRange 
              // PriceHandler={PriceHandler} 
              />}
          /> */}
        </Routes>
      </Router>
    </div> 
  );
}
