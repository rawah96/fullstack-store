import React, {useState} from 'react'
import './Cart.css'
import Total from './Total'
import { useStateValue } from '../../Context/StateProvider'
import { getCartTotal } from '../../Context/reducer';
function Cart() {
    const [{cart}, dispatch] = useStateValue();
    const [total, setTotal] = useState(0);
    let add = 0;
    cart.map(e => {
        add = add + e.price
    })

    return (
        <div className="cart">
                <div className="cart-items">
                    <h3>Shopping Cart</h3>
                </div>
                <div className="cart-total">
                    <Total 
                        value={add}
                        items={cart.length}
                    />
                    <button
                className="checkout-btn"
                >Checkout</button>
                </div>
        </div>
    )
}

export default Cart
