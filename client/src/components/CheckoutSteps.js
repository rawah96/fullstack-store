import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav className="checkout-steps">
      {/* <div id="one">
        {step1 ? (
          <Link to="/login">
            <h5>Sign in</h5>
          </Link>
        ) : (
          <h5>Sign In</h5>
        )}
      </div> */}
      <div id="two">
        {step2 ? (
          <Link to="/shipping">
            <button>Shipping</button>
          </Link>) : null
      }
      </div>
      <div id="three">
        {step3 ? (
          <Link to="/payment">
            <button>Payment</button>
          </Link>) : null
        }
      </div>
      <div id="four">
        {step4 ? (
          <Link to="/placeorder">
            <button>Place order</button>
          </Link>) : null}
      </div>
    </nav>
  );
};

export default CheckoutSteps;