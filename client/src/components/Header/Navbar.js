import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Login from '../Login/Login'
import Cart from '../Cart/Cart'
import Products from '../Products/Products'

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <div><li><Link to="/">Home</Link></li></div>
                <li><Link to="/login"><Login /></Link></li>
                <li><Link to="/cart"><Cart /></Link></li>
                <li><Link to="/products"><Products /></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
