import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../CheckoutSteps";
import { savePaymentMethod } from "../../actions/cartActions";
import './Payment.css'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <div className="payment">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <strong>Payment Method</strong>
      <form onSubmit={submitHandler}>
          <small>Select Method</small>
          <div>
            Paypal or Credit Card <br />
            <input
              type="radio"
              id="Paypal"
              name="paymentMethod"
              value="Paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}/>
          </div>
        <button id="continue" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};

export default PaymentScreen;
