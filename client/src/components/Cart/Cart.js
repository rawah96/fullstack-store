import React, {useState} from 'react'
import './Cart.css'
import Total from './Total'
import { useStateValue } from '../../Context/StateProvider'
import { getCartTotal } from '../../Context/reducer';
import Item from './Item'
function Cart() {
    // const [{cart}, ] = useStateValue();
    // const [total, setTotal] = useState(0);
    // let add = 0;
    // cart.map(e => {
    //     add = add + e.price
    // })

    return (
        <div className="cart">
                <div className="cart-items">
                    <h3>Shopping Cart</h3>
                    <div className="products">
                    {/* {
                        cart.map(e => (
                            <Item 
                            id={e.id}
                            name={e.name}
                            image={e.image}
                            description={e.description}
                            rating={e.rating}
                            price={e.price}
                            />
                        ))
                    } */}
                    </div>
                    
                </div>
                <div className="cart-total">
                    <Total 

                    />
                    <button className="checkout-btn">
                        Checkout
                    </button>
                </div>
        </div>
    )
}

export default Cart
