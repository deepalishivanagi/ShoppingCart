import "./style2.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ItemBill from "./ItemBill";

export default function Navbar(param) {
  return (
    <div className="Main-navbar">
      <h1 style={{ display: "inline" }}>Shopping cart</h1>
      <Router>
        <nav>
          <Link to="/ItemBill"> TotalItemBill</Link>
        </nav>

        <Routes>
          <Route path="/ItemBill" element={<ItemBill />} />
        </Routes>
      </Router>
    </div>
  );
}
