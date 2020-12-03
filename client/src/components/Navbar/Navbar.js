import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
// import Products from '../Products/Product'
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
            {/* <Link to="/">LOGO IMG</Link>         */}
            <div className="nav-option">
                    <span className="line-2">
                        <Link to="/"><h4>Products</h4></Link>
                    </span>
                </div>
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
                {/* <div className="nav-option">
                    <span className="line-2">
                        <Link to="/"><h4>Products</h4></Link>
                    </span>
                </div> */}
                <div className="nav-option">
                    {/* <span className="line-1">
                        Hello 
                    </span> */}
                    <span className="line-2">
                        <>
                        {userInfo ? (
                            <>
                            <span id="username">
                                <small>Hello</small>{userInfo.name}
                                {/* <Link to="/profile">Profile</Link> */}
                            </span>
                            <button id="logout"
                                onClick={logoutHandler}
                            >
                                Logout
                            </button>
                            </>
                        ) : (
                            <Link to="/login" id="login">
                                Login
                            </Link>
                        )}
                        </>
                    </span>
                    <>
                        {userInfo && userInfo.isAdmin && (
                            <div className="admin-menu">
                            {/* <h5 id="admin">Admin</h5> */}
                            <ul>
                                <li>
                                <Link to="/admin/userlist">
                                    Browse
                                </Link>
                                </li>
                                <li id="second-link">
                                <Link to="/admin/productlist">
                                    Edit
                                </Link>
                                </li>
                            </ul>
                            {/* <Link to="/admin/orderlist">
                                Orders
                            </Link> */}
                            
                            </div>
                        )}
                    </>
                </div>
                <div className="cart">
                    <Link to="/cart"><ShoppingBasketIcon className="cart-icon"/></Link>
                    <h3>Cart</h3>
                    {/* <span className="line-2 cart-count"></span> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar