import React, { useContext } from 'react';
import { PRODUCTS } from '../../productInfo';
import ShopContext from '../../context/ShopContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const {cartItems} = useContext(ShopContext);
    return (
        <div className="Cart">
            <div>
                <h2>Your Cart Items:</h2>
            </div>
            <div className="Items">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
        </div>
    );
};

export default Cart;