import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Products from '../Products/Product'
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import Login from '../Login/Login'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../actions/userActions';

function Navbar() {
    // get user from store
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <nav className="navbar">
            <Link to="/">LOGO IMG</Link>        
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
                        Hello 
                    </span>
                    <span className="line-2">
                        <>
                        {userInfo ? (
                            <>
                            <span id="username">
                                {userInfo.name}
                            </span>
                            <button
                                onClick={logoutHandler}
                            >
                                Logout
                            </button>
                            </>
                        ) : (
                            <Link to="/login">
                                Sign in
                            </Link>
                        )}
                        </>
                    </span>
                    <span>
                        {userInfo && userInfo.isAdmin && (
                            <>
                            <h4 id="admin">Admin</h4>
                            <Link to="/admin/userlist">
                                Users
                            </Link>
                            <Link to="/admin/productlist">
                                Products
                            </Link>
                            <Link to="/admin/orderlist">
                                Orders
                            </Link>
                            </>
                        )}
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
                    <span className="line-2 cart-count"></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar