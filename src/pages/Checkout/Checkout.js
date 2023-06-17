import React from 'react';
import { SmileySad } from 'phosphor-react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className='CheckOut'>
        <h1> <SmileySad size={100} /> </h1>
        <h1>Sorry!</h1>
        <h1>Checkout method isn't ready!</h1>
        <button onClick={()=> navigate("/")} >Back to Shop</button>
    </div>
  );
};

export default Checkout;