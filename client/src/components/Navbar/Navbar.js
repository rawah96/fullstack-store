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
                <div className="nav-option">
                <span className="line-1">
                        Shopping
                    </span>
                    <span className="line-2">
                        <Link to="/checkout"><h3>Cart</h3></Link>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


//  <Link to="/"><img src="" alt="logo" /></Link>
// <div className="nav-search">
// <input type="text" className="navbar-input"/>
// <SearchIcon className="navbar-search-icon"/>
// </div>
// <div className="nav-links">
// <div className="nav-options">
//         <Link to="/products">
//             <span className="option2">Products</span>
//         </Link>
// </div>
//     <Link to={!user && "/login"} className="link">
//     <div 
//     // onClick={login}
//     className="nav-options">
//         <span className="option1">Hello {user ? user.email: null}</span>
//         <span className="option2">{user? (<h1>Sign out</h1>) : (<h1>Sign in</h1>)}</span>
//     </div>
// </Link>
// <Link to="/checkout" className="link">
//     <div className="option-basket">                        
//         <ShoppingBasketIcon />
//         <span className="option2 basket-counter">
//             {/* {dataLayer? dataLayer.length : null} */}
//         </span>
//     </div>
// </Link>
// </div>