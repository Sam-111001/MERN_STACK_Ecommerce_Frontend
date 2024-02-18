import "./Hero.css"
import RightArrow from "../Assets/straight-right-arrow.png"
import HeroModelImage from "../Assets/hero-image.png"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals!</h2>
                <p>New</p>
                <p>Collection</p>
                <p>For Everyone</p>
                <div className="latest-coll-btn">
                    <div>Latest Collection</div>
                    <img src={RightArrow} alt="Right-Arrow" />
                </div>
            </div>
            <div className="hero-right">
                <img src={HeroModelImage} alt="Model" />
            </div>
        </div>
    )
}