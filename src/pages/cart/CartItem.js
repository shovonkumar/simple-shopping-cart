import React from 'react';

const CartItem = (props) => {
  const {id, name, price, image} = props.data;
  return (
    <div className='CartItem'>
      <img src={image} alt="Cart-Item" />
      <div className='ItemDesc' >
        <h4>{name}</h4>
        <p><b>${price}</b></p>
      </div>
    </div>
  );
};

export default CartItem;