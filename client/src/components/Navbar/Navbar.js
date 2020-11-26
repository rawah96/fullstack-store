import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Products from '../Products/Products'
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import Login from '../Login/Login'

function Navbar() {
    // get user from store
    const [user, setUser] = useState('')
    return (
        <nav className="navbar">
            <Link to="/">{/*<img 
            className="logo"
            src="" alt="logo" />*/}LOGO</Link>        
            <div className="nav-search">
                <input 
                    className="search-input"
                    type="text"
                />
                <SearchIcon className="search-icon" />
            </div>    
            <div
                className="navigation"
            >
                <div className="nav-option">
                    <span className="line-1">
                        Hello {user ? user.email: null}
                    </span>
                    <span className="line-2">
                        {user? (<h1>Sign out</h1>) : (
                        <Link to="/login">
                        <h3>Sign in</h3></Link>)}
                    </span>
                </div>
                <div className="nav-option">
                <span className="line-1">
                        Browse
                    </span>
                    <span className="line-2">
                        <Link to="/products"><h3>Products</h3></Link>
                    </span>
                </div>
                <div className="cart">
                    <Link to="/checkout"><ShoppingBasketIcon /></Link>
                    <span className="line-2 cart-count">0</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar