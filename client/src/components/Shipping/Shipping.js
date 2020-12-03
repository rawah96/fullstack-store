import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../../components/CheckoutSteps";
import { saveShippingAddress } from "../../actions/cartActions";
import './Shipping.css'
const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <div className="shipping-container">
    <div className="shipping">
      <CheckoutSteps step1 step2></CheckoutSteps>
      <h1 id="shipping">Shipping</h1>
      <form onSubmit={submitHandler}>
        {/* <Form.Group controlId="address"> */}
        <label>Address</label>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>City</label>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <label>Postal Code</label>
          <input
            type="text"
            placeholder="Enter PostalCode"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <label>Country</label>
          <input
            type="text"
            placeholder="Enter Country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        <button type="submit" id="continue">
          Continue
        </button>
      </form>
    </div>
    </div>
  );
};

export default ShippingScreen;