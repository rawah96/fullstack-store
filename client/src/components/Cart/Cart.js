import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import {
//   Row,
//   Col,
//   ListGroup,
//   Image,
//   Form,
//   Button,
//   Card,
// } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Message from "../../components/Message";
// import Loader from "../../components/Loader";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import './Cart.css'

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
            Your cart is empty {/*<Link to="/">Go back</Link>*/}
          </h1>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.product} className="items">
                <div id="first">
                  <Link to={`/product/${item.product}`} id="name">{item.name}</Link>
                  <img src={item.image} alt={item.name} className="img"/>
                </div>
                    <div id="options">
                      <div>
                    {/* <span id="first"> */}
                      <small>
                        Price: <strong>${item.price}</strong>
                      </small>
                  {/* </span> */}
                  {/* <span id="second"> */}
                  <span id="qty">
                    <h5>Qty:</h5>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                      id="remove"
                    >
                      remove
                    </button>
                    {/* </span> */}
                    </div>
{/* 
              <div clasName="checkout">
              <h2>
                Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              <button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
          </div> */}
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