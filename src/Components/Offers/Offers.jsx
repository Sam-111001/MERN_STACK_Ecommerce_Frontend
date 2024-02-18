import "./Offers.css"
import Exclusice_Image from "../Assets/exclusive_image.png"

export default function Offers() {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON THE BESTSELLERS PRODUCT</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={Exclusice_Image} alt="Exclusive-Product" />
            </div>
        </div>
    );
}