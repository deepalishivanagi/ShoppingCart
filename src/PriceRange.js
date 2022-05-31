import { useState } from "react";
import { useContext } from "react/cjs/react.production.min";
import { AppStateContext } from "./AppProvider";

export default function PriceRange(param) {
  var [CurrentPrice, setCurrentPrice] = useState();
  var PriceConditionState = "";

  const {PriceHandler} =useContext(AppStateContext);

  function EnteredPriceVal(e) {
    let GivenPrice = e.target.value;
    setCurrentPrice(GivenPrice);
    // let type = typeof GivenPrice;
    // console.log(type + "inPriceChnage");
    // param.PriceHandler(GivenPrice);
  }

  function SettingPriceRange() {
    let temp = CurrentPrice;
    if (temp == null || temp == "") {
      PriceConditionState = false;
      // param.PriceHandler(temp, PriceConditionState);
      PriceHandler(temp, PriceConditionState);

    } else {
      PriceConditionState = true;
      // param.PriceHandler(temp, PriceConditionState);
      PriceHandler(temp, PriceConditionState);
    }
  }
  return (
    <div className="PriceRange-main">
      <input
        type="number"
        placeholder="Enter the max price"
        onChange={EnteredPriceVal}
      ></input>
      <span>Enter Price</span>
      <button onClick={SettingPriceRange}> Set Pricerange</button>
      <div>
        <p>
          Recently searched for maximun price upto <b>{CurrentPrice}</b>.
        </p>
      </div>
    </div>
  );
}
