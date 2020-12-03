// order summary
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    <h4>Loading...</h4>
  ) : error ? (
    <h4>{error}</h4>
  ) : (
    <div className="order">
      <h1>Thank you for your Order!</h1>
      <h1>Order {order._id}</h1>
      <div className="order-summary">
        <div>
          <h2 style={{marginBottom: '10px'}}>Order Summary</h2>
          <h2 style={{marginBottom: '10px'}}>Shipping</h2>
            {order.user.name}
          <small>
            {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country},
          </small>

          <span id="payment-method">
            <strong>Payment method:</strong>
            <small>{order.paymentMethod}</small>
            
          </span>
              {order.isPaid ? (
                <h4 style={{marginBottom: '10px'}}> Paid on {order.paidAt}</h4>
              ) : (
                <h4 style={{marginBottom: '10px'}}>Not paid</h4>
              )}
            <>
              <h2 style={{marginBottom: '10px', letterSpacing: '1px', fontWeight: '400'}}>Items</h2>
              {order.orderItems.length === 0 ? (
                <h4>Order is empty</h4>
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
                            style={{marginTop: '15px'}}
                          />
                        </div>
                        <div id="item-name">
                          <Link 
                          style={{marginBottom: '10px', color: 'black'}}
                          to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <span 
                        id="order-price"
                        style={{marginBottom: '10px'}}>
                          {item.price} x {item.qty} = ${item.price * item.qty}
                        </span>
                      </>
                    </div>
                  ))}
                </>
              )}
            </>
        <div>
                
        <span id="final">
                {/* <small>Items $ {order.itemsPrice}</small> */}
                <small>Shipping ${order.shippingPrice}</small>
                <small>Tax ${order.taxPrice}</small>
                <strong>Total ${order.totalPrice}</strong>
        </span>   
 
                  

                  

                  

        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderScreen;