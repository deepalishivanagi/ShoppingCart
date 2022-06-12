import "./style2.css";
import Item from "./Item.js";
import { cartWebsiteContext } from "./AppContext";
import { useContext } from "react";
import Sidebar from "./Sidebar";
import { AppStateContext } from "./AppProvider";
import { FilterStateContext } from "./FilterProvider";
import { useState } from "react/cjs/react.production.min";

export default function ListOfItems() {
  var {shouldFilter,PriceVal,ShowingDataArray} =useContext(FilterStateContext);
  var indents = [];

  for (var i = 0; i < ShowingDataArray.length; i++) 
   {
    indents.push(
           <Item
             index={i}
             SingleItemData={ShowingDataArray[i]}
             disableaddbtn={false}
           />
          );
   }

  return (
    <div className="ListOfItems-Main">
      <Sidebar/>
      <div className="items-container">
        {indents.map((item)=>{return <div className="actual-item" value={item}>{item}</div>})}
      </div>
    </div>
  );
}
