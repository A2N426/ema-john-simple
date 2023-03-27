import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Order">Order</a>
                <a href="/Review">Review</a>
                <a href='/Inventory'>Inventory</a>
                <a href="/loging">Login</a>
            </div>
        </nav>
    );
};

export default Header;