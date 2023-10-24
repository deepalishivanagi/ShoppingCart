import "./style2.css";
import CartImage from "./Images/CartImage.png";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart(param) {
  const state = useSelector((state) => state.AppState);

  return (
    <div className="Cart-div">
      <h2>{state.TotalCount}</h2>
      <div>
        {/* <img src={CartImage} alt="cart"></img> */}
        <ShoppingCartIcon sx={{fontSize:'xxx-large'}}/>
      </div>
      {/* <p>Cart</p> */}
    </div>
  );
}
