import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 1; index <= 300; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch("http://localhost:4000/allProducts")
            .then((resp) => resp.json())
            .then((data) => setAll_Product(data))

        if (localStorage.getItem("auth-token")) {
            fetch("http://localhost:4000/getCart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem('auth-token')}`,
                    "Content-Type": "application/json"
                },
                body: ""
            }).then((resp) => resp.json()).then((data) => setCartItems(data))
        }
    }, [])

    const addToCart = (itemID) => {
        setCartItems((previous) => ({ ...previous, [itemID]: previous[itemID] + 1 }))
        if (localStorage.getItem("auth-token")) {
            fetch("http://localhost:4000/addToCart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem('auth-token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "itemID": itemID })
            }).then((resp) => resp.json()).then((data) => console.log(data))
        } else {
            console.log("not token");
        }
    };

    const removeFromCart = (itemID) => {
        setCartItems((previous) => ({ ...previous, [itemID]: previous[itemID] - 1 }))
        if (localStorage.getItem("auth-token")) {
            fetch("http://localhost:4000/removeFromCart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem('auth-token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "itemID": itemID })
            }).then((resp) => resp.json()).then((data) => console.log(data))
        } else {
            console.log("not token");
        }
    }

    const getTotalAmount = () => {
        let totalCartAmount = 0
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let product = all_product.find((p) => p.id === Number(item))
                totalCartAmount += cartItems[item] * product.new_price

            }
        }
        return totalCartAmount
    }

    const getTotalCartItems = () => {
        let totalCartItems = 0
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                totalCartItems += cartItems[item]

            }
        }
        return totalCartItems
    }
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );

}

export default ShopContextProvider;