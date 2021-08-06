import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddService from './components/AddService/AddService';
import Service from './components/Home/Service';
import Login from './components/Login/Login';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addservice">
            <AddService />
          </Route>
          <Route path="/services">
            <Service />
          </Route>
          <Route path = "/service/:_id">
            <ServiceDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
