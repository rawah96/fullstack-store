import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart'
import Products from './components/Products/Products'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Login /></Route>
          {/* <Route path="/login"></Route> */}
          <Route path="/products"><Products /></Route>
          <Route path="/cart"><Cart /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
