import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  return (
    <div className="App">
      <Router>
        {/* { user ? <> */}
      {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Navbar />
            <Cart />
          </Route>
          <Route path="/products">
            <Navbar />
            <Products />
          </Route>
          {/* <Route path="/payment">
            <Payment />
          </Route> */}
        </Switch>
        {/* </>
        :

        <h1>ADMIN</h1> */}
      </Router>
    </div>
  );
}

export default App;
