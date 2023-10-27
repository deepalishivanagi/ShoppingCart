import "./style2.css";
import ListOfItems from "./ListOfItems.js";
import Cart from "./cart.js";
import ItemBill from "./ItemBill";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Wishlist from "./Wishlist";
import { useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ItemDetailPage from "./ItemDetailPage";
import { useSelector, useDispatch } from "react-redux";
import CartPage from "./Components/CartPage";

export default function App() {
  const dispatch = useDispatch();

  async function callServer() {
    const response = await fetch("https://fakestoreapi.com/products?limit=8");
    const data = await response.json();
    var temp = JSON.parse(JSON.stringify(data));
    //don't try to maintain duplicate data by modifying it instead use id's and wherever needed try to filter out & use it
    // for (let i = 0; i < data.length; i++) {
    //   const presentVal = data[i];
    //   temp[i] = { ...presentVal, count: 0, AddTolist: 0 };
    // }
    dispatch({ type: "initialArraySet", temp: temp });
  }

  useEffect(() => {
    callServer();
  }, []);

  return (
    <div className="App">
      <Router>
        <nav>
          <div>
            <Link class="link" to="/">
            <h1>ShopNow</h1>
            </Link>
            {/* <Link class="link" to="/ItemBill">
              {" "}
              TotalItemBill{" "}
            </Link> */}
          </div>
          <div>
            <Link to="/Wishlist">
              <FavoriteBorderIcon sx={{ fontSize: "xxx-large",color:"white" }} />
            </Link>
            <Cart />
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ListOfItems />} />
          <Route path="/ItemBill" element={<ItemBill />} />
          <Route path="/ItemBill2" element={<ItemBill />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Wishlist2" element={<Wishlist />} />
          <Route path="/ItemDetailPage/:Item_id" element={<ItemDetailPage />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="*" element={<ListOfItems />} />
        </Routes>
      </Router>
    </div>
  );
}
