import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Cart />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          {/* <Route path="/payment">
            <Payment />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
