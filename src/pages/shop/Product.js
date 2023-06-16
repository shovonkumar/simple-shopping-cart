import React, { useContext } from 'react';
import ShopContext from '../../context/ShopContext';


const Product = (props) => {
    const {id, name, price, image} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const numberOfItems = cartItems[id];
    return (
        <div className='Product'>
            <img src={image} alt="Product" />
            <div className="description">
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
            <button className='addCart' onClick={() => addToCart(id)}>Add to Cart {numberOfItems > 0 && <> ({numberOfItems}) </>}</button>
        </div>
    );
};

export default Product;