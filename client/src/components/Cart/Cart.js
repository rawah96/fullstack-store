import React from 'react'
import './Cart.css'
import Total from './Total'
function Cart() {
    return (
        <div className="cart">
                <div className="cart-items">
                    <h3>Shopping Cart</h3>
                </div>
                <div className="cart-total">
                    <Total />
                    <button
                className="checkout-btn"
                >Checkout</button>
                </div>
        </div>
    )
}

export default Cart
