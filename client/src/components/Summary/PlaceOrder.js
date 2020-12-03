import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import CheckoutSteps from "../CheckoutSteps";
import { createOrder } from "../../actions/orderActions";
import './Order.css'

const PlaceOrder = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 15);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);

  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <div className="place-order">
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <h2 id="shipping">Shipping</h2>
        <span id="address">
          <strong>Address:</strong>
            {cart.shippingAddress.address}, {cart.shippingAddress.city}, {}
             {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
        </span>
        <br />

        <span id="method">
          <h2>Payment Method: </h2>
          {cart.paymentMethod}
        </span>

        <span id="items">
        <h2>Order Items</h2>
          {cart.cartItems.length === 0 ? (
            <h4>Your card is empty</h4>
          ) : (
            <>
              {cart.cartItems.map((item, index) => (
                <div key={index} id="item-img">
                <img
                  src={item.image}
                  alt={item.name}/>

                <Link to={`/product/${item.product}`} id="item">
                 {item.name}
                </Link>
                  {item.price} x {item.qty} = ${item.price * item.qty}  
                </div>
                  ))}
            </>
              )}
        </span>
             <div id="summary">
                <h2>Order Summary</h2>
                <span>
                  Price:
                  <div>${cart.itemsPrice}</div>
                </span>
                <span>
                  Shipping
                  <div>${cart.shippingPrice}</div>
                </span>
                <span>
                  Tax
                  <div>${cart.taxPrice}</div>
                </span>
                <span>
                  Total
                  <div>${cart.totalPrice}</div>
                </span>
                </div>
      
              <div>
                {error && <h4>{error}</h4>}
              </div>
              <div>
                <button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </button>
              </div>
            </div>

  );
};

export default PlaceOrder;