import "./style2.css";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate } from "react-router-dom";

export default function Cart(param) {
  const state = useSelector((state) => state.AppState);
  const navigate=useNavigate();

  return (
    <div className="Cart-div" onClick={()=>{navigate("/cart")}}>
      <h2>{state.TotalCount}</h2>
      <div>
        {/* <img src={CartImage} alt="cart"></img> */}
        <ShoppingCartIcon sx={{fontSize:'xxx-large'}}/>
      </div>
      {/* <p>Cart</p> */}
    </div>
  );
}
