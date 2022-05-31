import "./style2.css";
import Item from "./Item.js";
import { cartWebsiteContext } from "./AppContext";
import { useContext } from "react";
import Sidebar from "./Sidebar";
import { AppStateContext } from "./AppProvider";
import { FilterStateContext } from "./FilterProvider";
import { useState } from "react/cjs/react.production.min";

export default function ListOfItems() {
  // var ListparentPlusHandler = param.CartPlusHandler;
  // var ValuesFromContext = useContext(cartWebsiteContext);
  // var [shouldFilter,DataArray,PriceVal,] = useContext(AppStateContext);
  // var {DataArray} = useContext(AppStateContext);
  var {shouldFilter,PriceVal,ShowingDataArray} =useContext(FilterStateContext);
  // console.log(DupliDataArray);

  // const[FinalDuplDataArray,setFinalDupliDataArray]=useState(DupliDataArray);

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

//   for (var i = 0; i < FinalDuplDataArray.length; i++) 
//   {
//    indents.push(
//           <Item
//             index={i}
//             ItemListsData={FinalDuplDataArray[i]}
//             disableaddbtn={false}
//           />
//          );
//   }

//    function AddSubCountHandler(temp, index) {
//     let TempArray2 = JSON.parse(JSON.stringify(FinalDuplDataArray));
//     TempArray2[index].count = temp;
//     setFinalDupliDataArray(TempArray2);
// }


  return (
    <div className="ListOfItems-Main">
      <Sidebar/>
      
      {/* <ul style={{ display: "flex", listStyle: "none" }} >{indents}</ul> */}
      {/* <ul  className="items-container-block" style={{ display: "flex", listStyle: "none" }} >{indents.map((item)=>{return <div><li value={item}>{item}</li></div>})}</ul> */}
      <div className="items-container">
        {indents.map((item)=>{return <div className="actual-item" value={item}>{item}</div>})}
      </div>
    </div>
  );
}
