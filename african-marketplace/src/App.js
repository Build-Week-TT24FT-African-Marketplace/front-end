// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MarketPage from './components/MarketPage';
import NewUserForm from './components/NewUserForm';
import Nav from './components/Nav'
// import { axiosWithAuth } from './utils/axiosWithAuth';


function App() {


  return (

  <div className="App">
    <Router>
    <Nav/>
    <Switch>
      
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={NewUserForm} />
      <Route path="/" component={MarketPage} />
    </Switch>
    </Router>
  </div>

  );
}

export default App;
