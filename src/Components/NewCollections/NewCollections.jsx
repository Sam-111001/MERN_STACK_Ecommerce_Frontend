import "./NewCollections.css"

import Item from "../Item/Item";
import { useEffect, useState } from "react";


export default function NewCollections() {
    const [new_collections, setNew_Collections] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/newCollection")
            .then((resp) => resp.json())
            .then((data) => setNew_Collections(data))
    }, [])
    return (
        <div className="new-collections">
            <h2>New Collections</h2>
            <hr />
            <div className="new-collection-item">
                {new_collections.map((product, I) => (
                    <Item key={I} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
                ))}
            </div>
        </div>
    );
}