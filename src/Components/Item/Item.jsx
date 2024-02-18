import "./Item.css"
import { Link } from "react-router-dom";

export default function Item(props) {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img onClick={window.scrollTo(0, 0)} src={props.image} alt="Product-img" />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-new-price">
                    <p>${props.new_price}</p>
                </div>
                <div className="item-old-price">
                    <p>${props.old_price}</p>
                </div>
            </div>
        </div>
    );
}