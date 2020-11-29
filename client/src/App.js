// import './App.css';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Login from './components/Login/Login';
// import Cart from './components/Cart/Cart'
// import Products from './components/Products/Product'
// import Home from './components/Home/Home'
// import Navbar from './components/Navbar/Navbar'
// import Signup from './components/Login/Signup'
// import { useState } from 'react';

// function App() {
//   const [user, setUser] = useState('');
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <Navbar />
//             <Home />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/register">
//             <Signup />
//           </Route>
//           <Route path="/checkout">
//             <Navbar />
//             <Cart />
//           </Route>
//           <Route path="/products">
//             <Navbar />
//             <Products />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
