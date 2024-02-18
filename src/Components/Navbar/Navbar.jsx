import { Link } from "react-router-dom";
import "./Navbar.css"
import Cart_icon from "../Assets/shopping-cart.png";
import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";


export default function Navbar() {

    const [menu, setMenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext)

    function menuClickHandler(option) {
        setMenu(option);
    }
    return (
        <div className="navbar">
            <div className="nav-logo">
                <p>Ecommerce</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { menuClickHandler("Shop") }}>
                    <Link className="nav-link" to="/">Shop</Link>{menu === "Shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { menuClickHandler("Men") }}>
                    <Link className="nav-link" to="/mens">Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
                <li onClick={() => { menuClickHandler("Women") }}>
                    <Link className="nav-link" to="/women">Women</Link>{menu === "Women" ? <hr /> : <></>}
                </li>
                <li onClick={() => { menuClickHandler("Kids") }}>
                    <Link className="nav-link" to="/kids">Kids</Link>{menu === "Kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem("auth-token") ? <button onClick={() => { localStorage.removeItem("auth-token"); window.location.replace("/") }}>Log Out</button> : <Link to="/login-signup"><button >Login</button></Link>}
                <Link to="/cart"><img src={Cart_icon} alt="Cart-icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div >
    )
}