import "./Breadcrum.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

export default function Breadcrum({ product }) {

    return (
        <div className="breadcrumb">
            Home <img src={arrow_icon} alt="arrow_icon" /> Shop <img src={arrow_icon} alt="arrow_icon" /> {product.category} <img src={arrow_icon} alt="arrow_icon" /> {product.name}
        </div>
    );
}