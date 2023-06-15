import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <div className="Navtitle">
                    <h1>Simple Shopping Cart</h1>
                </div>
                <div className="links">
                    <Link to="/">Shop</Link>
                    <Link to="/cart"><ShoppingCart size={30}/></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;