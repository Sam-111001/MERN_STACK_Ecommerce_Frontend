import "./ProductDisplay.css"

import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"


export default function ProductDisplay({ product }) {
    const { addToCart } = useContext(ShopContext)
    return (
        <div className="product-display">
            <div className="display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="product-img" />
                    <img src={product.image} alt="product-img" />
                    <img src={product.image} alt="product-img" />
                    <img src={product.image} alt="product-img" />
                </div>
                <div className="product-display-img">
                    <img className="product-display-main-img" src={product.image} alt="product-img" />
                </div>
            </div>
            <div className="display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price} </div>
                </div>
                <div className="productdisplay-right-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quasi! Doloribus expedita quisquam, quis reiciendis itaque iste dolorem velit recusandae natus unde voluptatem nemo, maxime placeat et veritatis vel ipsum!</div>
                <div className="productdisplay-right-siZe">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category: </span>Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    )
}