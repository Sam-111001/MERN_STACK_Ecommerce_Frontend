import "./RelatedProduct.css"

import Item from "../Item/Item"
import data_product from "../Assets/data"


export default function RelatedProducts() {
    return (
        <div className="related-products">
            <h1>Related Products</h1>
            <hr />
            <div className="related-products-item">
                {data_product.map((product, I) => (
                    <Item key={I} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
                ))}
            </div>
        </div>
    )
}