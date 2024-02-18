import "./NewsLetter.css"

export default function NewsLetter() {
    return (
        <div className="news-letter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter to stay updated with new trends and offers.</p>
            <div className="news-letter-sub">
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
}