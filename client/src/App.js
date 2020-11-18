import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">HOME</Route>
          <Route path="/login">PRODUCTS</Route>
          <Route path="/products">PRODUCTS</Route>
          <Route path="/cart">CART</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
