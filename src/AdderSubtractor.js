
import "./style2.css";
import { useDispatch } from "react-redux";

export default function AdderSubtractor(param) {
  const dispatch = useDispatch();
  var AddSubCount = param.item.count;

  function PlusHandler() {
    var temp = AddSubCount;
    temp = temp + 1;

    dispatch({ type: "CartPlusHandler" });
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
    dispatch({ type: "CartMinusHandler" });
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
