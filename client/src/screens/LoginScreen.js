import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import './Login.css'
import background from './background.jpg'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <div className="login-container">
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader></Loader>}
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <div className="login-btns">
              <button type="submit">
                Sign in
              </button>
              <button id="second-btn">
                <small>New Customer? </small>
                  <Link to="/register"><strong>Register</strong></Link>
              </button>
            </div>

      </form>
      </div>
    </div>
  );
};

export default LoginScreen;