import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import ProductScreen from "./components/Products/ProductScreen";
import PaymentScreen from "./components/Summary/Payment";
import PlaceOrderScreen from "./components/Summary/PlaceOrder";
import Order from "./components/Summary/Order";
import UserListScreen from "./screens/UserListScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import Home from "./components/Home/Home";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import Cart from "./components/Cart/Cart";
import Shipping from './components/Shipping/Shipping'
function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/order/:id" component={Order} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={Shipping} />

          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route exact path="/"><Home /></Route>
        </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
