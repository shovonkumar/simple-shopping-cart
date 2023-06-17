import React, { useContext } from 'react';
import ShopContext from '../../context/ShopContext';

const CartItem = (props) => {
  const {id, name, price, image} = props.data;
  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
  return (
    <div className='CartItem'>
      <img src={image} alt="Cart-Item" />
      <div className='ItemDesc' >
        <h4>{name}</h4>
        <p><b>${price}</b></p>
        <div className="ItemCount">
          <button onClick={()=> removeFromCart(id)}> - </button>
          <input value ={cartItems[id]} readOnly />
          <button onClick={()=> addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;