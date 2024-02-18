import "./Popular.css"

import Item from "../Item/Item";
import { useEffect, useState } from "react";

export default function Popular() {
    const [popularProducts, setPopularProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/popularInWomen")
            .then((resp) => resp.json())
            .then((data) => setPopularProducts(data))
    }, [])

    return (
        <div className="popular">
            <h2>Popular In Women</h2>
            <hr />
            <div className="popular-item">
                {popularProducts.map((product, I) => (
                    <Item key={I} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
                ))}
            </div>
        </div>
    );
}