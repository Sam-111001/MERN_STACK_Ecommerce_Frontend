import "./Footer.css"

import instagram_img from "../Assets/instagram_icon.png"
import pintrest_img from "../Assets/pintester_icon.png"
import whatsapp_img from "../Assets/whatsapp_icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <h1>Ecommerce</h1>
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="company-socials">
                <div className="instagram">
                    <img src={instagram_img} alt="instagram-icon" />
                </div>
                <div className="pintrest">
                    <img src={pintrest_img} alt="pintrest-icon" />
                </div>
                <div className="whatsapp">
                    <img src={whatsapp_img} alt="whatsapp-icon" />
                </div>
            </div>
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    );
}