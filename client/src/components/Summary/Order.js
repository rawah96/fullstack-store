// order summary
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { getOrderDetails } from "../../actions/orderActions";
import './Order.css'

const OrderScreen = ({ match }) => {
  const dispatch = useDispatch();
  const orderId = match.params.id;

  const orderDetails = useSelector((state) => state.orderCreate);

  const { order, loading, error } = orderDetails;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId]);

  return loading ? (
    <Loader></Loader>
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div className="order">
      <h1>Order {order._id}</h1>
      <div>
        <div>
              <h2>Shipping</h2>
              {/* <strong>Name: </strong> */}
              {order.user.name}
              <p>
                {/* <strong>Address:</strong> */}
                {order.shippingAddress.address},{order.shippingAddress.city},
                {order.shippingAddress.postalCode},
                {order.shippingAddress.country},
              </p>

              {/* <h2>Payment Method</h2> */}
              <p>
                {/* <strong>Method: :</strong> */}
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success"> Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not paid</Message>
              )}

            <>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <>
                  {order.orderItems.map((item, index) => (
                    <div key={index}>
                      <>
                        <div>
                          <img
                            id="order-img"
                            src={item.image}
                            alt={item.name}
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
                      </>
                    </div>
                  ))}
                </>
              )}
            </>
        <div>
                <h2>Order Summary</h2>
                  Items${order.itemsPrice}
 
                  Shipping ${order.shippingPrice}

                  Tax${order.taxPrice}

                  Total
                  ${order.totalPrice}

        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderScreen;