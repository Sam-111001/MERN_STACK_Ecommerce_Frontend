import { useContext } from "react";
import "./CartItems.css"
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png"

export default function CartItems() {
    const { all_product, cartItems, removeFromCart, getTotalAmount } = useContext(ShopContext)
    const totalAmount = getTotalAmount()
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((item, I) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={I}>
                            <div className="cartitems-format-main cartitems-format">
                                <img src={item.image} alt="product-pic" className="carticon-product-icon" />
                                <p>{item.name}</p>
                                <p>{item.new_price}</p>
                                <button className="cartitems-quatity">
                                    {cartItems[item.id]}
                                </button>
                                <p>
                                    ${item.new_price * cartItems[item.id]}
                                </p>
                                <img className="cart-items-remove-icon"
                                    src={remove_icon} onClick={() => { removeFromCart(item.id) }} alt="" />
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${totalAmount}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${totalAmount}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Enter your promo code" />
                        <button>APPLY</button>
                    </div>
                </div>
            </div>
        </div>
    );
}