import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import './Cart.css'
import background from './background.jpg'

const Cart = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div className="cart">
        {cartItems.length === 0 ? (
          <h1>
            Your cart is empty
          </h1>
        ) : (
          <div>
            <h1 id="items-list">Items:</h1>
            {cartItems.map((item) => (
              <div key={item.product} className="items">
                <div id="first">
                  <Link to={`/product/${item.product}`} id="name">{item.name}</Link>
                  <img src={item.image} alt={item.name} className="img"/>
                </div>
                <div className="info">
                  <div>
                    <small>Price: <strong>${item.price}</strong></small>
                  </div>
                  <span><small>Qty:</small>
                  <select
                      id="option"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option id="option" key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </span>
                  <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                      id="remove">
                    Remove
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}
        <div id="subtotal">
          <span id="num-items">
            Subtotal <small>({cartItems.reduce((acc, cur) => acc + cur.qty, 0)})
            items</small> 
          </span>
          <span id="price">
            Price: <small>$
            {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}
            </small>
          </span> 
              
              <button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
          </div>
    </div>
  );
};

export default Cart;