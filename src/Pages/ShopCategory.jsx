import { useContext } from "react"
import "./CSS/ShopCategory.css"
import dropDownIcon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item"
import { ShopContext } from "../Context/ShopContext"

export default function ShopCategory(props) {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img className="shop-category-banner" src={props.banner} alt="" />
            <div className="category-indexsort">
                <p><span>Showing 1-12</span> out of 36 products</p>
                <div className="category-sort">
                    Sort By <img src={dropDownIcon} alt="" />
                </div>
            </div>
            <div className="category-products">
                {all_product.map((product, I) => {
                    if (props.category === product.category) {
                        return (
                            <Item key={I} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
                        );
                    } else {
                        return (null);
                    }
                })}
            </div>
            <div className="shop-category-loadmore">
                Explore More
            </div>
        </div>
    )
}