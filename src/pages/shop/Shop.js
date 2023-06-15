import React from 'react';
import { PRODUCTS } from '../../productInfo';
import Product from './Product';
import './Shop.css';

const Shop = () => {
    return (
        <div className='Shop'>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product key={product.id} data={product} />
                ) )}
            </div>
        </div>
    );
};

export default Shop;