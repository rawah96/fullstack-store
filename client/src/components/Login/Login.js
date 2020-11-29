
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import Loader from "../Loader";
import FormContainer from "../FormContainer";
import { login } from "../../actions/userActions";
function Login({location, history}) {
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
            <Link to="/">
                <div className="login-logo">HOME</div>
            </Link>

            <div className="login-container">
                {error && <h3>There's an ERROR</h3>}
                {loading && <h1>LOADER SPINNING</h1>}
                <h1>Sign In</h1>
                <form onSubmit={submitHandler}>
                    <label>Email</label>
                    <input
                        placeholder="Enter your email" 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input 
                        placeholder="Enter your password"
                        type="password" 
                        value ={password}
                        onChange={e => setPassword(e.target.value)}    
                    />

                    <div className="login-btns">
                        <button type="submit">Sign in</button>
                        <Link to="/register">
                            <button
                            >Create Account</button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;
