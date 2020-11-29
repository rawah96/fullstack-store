import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

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
    <FormContainer>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader></Loader>}
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer? <Link to={"/register"}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// // import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// // import FormContainer from "../components/FormContainer";
// import { login } from "../actions/userActions";
// import './Login.css'

// const LoginScreen = ({ location, history }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { loading, error, userInfo } = userLogin;

//   const redirect = location.search ? location.search.split("=")[1] : "/";

//   useEffect(() => {
//     if (userInfo) {
//       history.push(redirect);
//     }
//   }, [history, userInfo, redirect]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     dispatch(login(email, password));
//   };

//   return (
//     <div className="login">
//       <div className="login-container">
//       {error && <Message variant="danger">{error}</Message>}
//       {loading && <Loader></Loader>}
//       <h1>Sign In</h1>
//       <form onSubmit={submitHandler}>
//           <label>Email Address</label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} />
//             <div className="login-btns">
//               <button type="submit">
//                 Sign in
//               </button>
//               <button id="second-btn">
//                 <small>New Customer? </small>
//                   <Link to="/register"><strong>Register</strong></Link>
//               </button>
//             </div>

//       </form>
//       </div>
//     </div>
//   );
// };

// export default LoginScreen;