import { useContext } from "react"
import "./CSS/Product.css"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox"
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";


export default function Product() {
    const { all_product } = useContext(ShopContext);
    const { productID } = useParams();

    const product = all_product.find((p) => p.id === Number(productID))
    console.log(all_product);
    return (
        <div className="product">
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProduct />
        </div>
    );
}