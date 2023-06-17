import React, { useContext } from 'react';
import { PRODUCTS } from '../../productInfo';
import ShopContext from '../../context/ShopContext';
import CartItem from './CartItem';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {cartItems, getTotalAmount} = useContext(ShopContext);
    const subTotal = getTotalAmount();
    const navigate = useNavigate();

    return (
        <div className="Cart">
            {
                subTotal > 0 ?

                <>
                    <div>
                        <h2>Your Cart Items</h2>
                    </div>
                    <div className="Items">
                        {PRODUCTS.map( (product) => {
                            if (cartItems[product.id] !== 0) {
                                return <CartItem data={product} />
                            }
                        })}
                    </div>

                    <div className='Checkout'>
                        <p>Subtotal : ${subTotal}</p>
                        <button onClick={()=> navigate("/")}>Continue Shopping</button>
                        <button onClick={()=> navigate("/checkout")} >Checkout</button>
                    </div> 
                </>

            : <h1>Your Cart is Empty</h1>
            }
        </div>
    );
};

export default Cart;