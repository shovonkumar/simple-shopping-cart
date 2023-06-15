import React from 'react';

const Product = (props) => {
    const {name, price, image} = props.data;
    return (
        <div className='Product'>
            <img src={image} alt="Product" />
            <div className="description">
                <h4>{name}</h4>
                <p>${price}</p>
            </div>
            <button className='addCart'>Add to Cart</button>
        </div>
    );
};

export default Product;