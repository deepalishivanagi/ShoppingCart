
import "./style2.css";
import { useDispatch, useSelector } from "react-redux";

export default function AdderSubtractor(param) {
  const dispatch = useDispatch();
  const state=useSelector((state)=>state.AppState)

  const addedItem= state.CartListItems?.find((item)=>item.id==param.item.id);
  var AddSubCount=addedItem?addedItem.count:0;

  function PlusHandler() {
    var temp = AddSubCount;
    temp = temp + 1;
    dispatch({ type: "AddSubCountHandler", temp: temp, id: param.item.id });
    dispatch({
      type: "AddSubCountHandlerBill",
      countValue: temp,
      id: param.item.id,
    });
  }

  function MinusHandler() {
    var temp = AddSubCount;
    if (temp == 0) {
      return;
    }
    temp--;
    dispatch({ type: "AddSubCountHandler", temp: temp, id: param.item.id });
    dispatch({
      type: "AddSubCountHandlerBill",
      countValue: temp,
      id: param.item.id,
    });
  }

  return (
    <div className="AddSub">
      <button onClick={PlusHandler}>+</button>
      <span> {AddSubCount} </span>
      <button onClick={MinusHandler}>-</button>
    </div>
  );
}
