import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../productInfo';

const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itenId) => {
        setCartItems()
    }
    return (
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContext;