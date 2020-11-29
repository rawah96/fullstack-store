import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import CheckoutSteps from "../CheckoutSteps";
import { createOrder } from "../../actions/orderActions";

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
    <div className="">
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div>
        <div>
          <div>
            <div>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address},{cart.shippingAddress.city},
                {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
                ,
              </p>
            </div>

            <div>
              <h2>Payment Method</h2>
              <strong>Method: :</strong>
              {cart.paymentMethod}
            </div>

            <div>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your card is empty</Message>
              ) : (
                <div>
                  {cart.cartItems.map((item, index) => (
                    <div key={index}>
                      <div>
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </div>
                        <div>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          {item.price} x {item.qty} = ${item.price * item.qty}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <h2>Order Summary</h2>
              </div>
              <div>
                <div>
                  <div>Items</div>
                  <div>${cart.itemsPrice}</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Shipping</div>
                  <div>${cart.shippingPrice}</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Tax</div>
                  <div>${cart.taxPrice}</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Total</div>
                  <div>${cart.totalPrice}</div>
                </div>
              </div>
              <div>
                {error && <Message variant="danger">{error}</Message>}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;