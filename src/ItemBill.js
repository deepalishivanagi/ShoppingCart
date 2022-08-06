
import { useSelector } from "react-redux";

export default function ItemBill() {
  const state = useSelector((state) => state.AppState);

  var SelectedItems = [];
  var sum = 0;

  for (var i = 0; i < state.AppChosenItems.length; i++) {
    if (state.AppChosenItems[i].count !== 0) {
      SelectedItems.push(
        <tr>
          <td>{state.AppChosenItems[i].title}</td>
          <td>{state.AppChosenItems[i].count}</td>
          <td>{state.AppChosenItems[i].price}</td>
          <td>
            {state.AppChosenItems[i].price * state.AppChosenItems[i].count}
          </td>
        </tr>
      );
    }
  }

  function Add() {
    for (var i = 0; i < state.AppChosenItems.length; i++) {
      sum = sum + state.AppChosenItems[i].price * state.AppChosenItems[i].count;
    }
    var finalSum = sum.toFixed(2);
    return finalSum;
  }

  return (
    <div className="MainBill">
      <table>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>TotalPrice</th>
        </tr>
        {SelectedItems}
        <tr>
          <th>GrandTotal</th>
          <td>Rs. {Add()}</td>
        </tr>
      </table>
    </div>
  );
}
