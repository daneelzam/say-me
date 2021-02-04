import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Login from './components/Account/Login/Login';
import SignUp from './components/Account/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li> */}
            {/*  <Link to="/">Home</Link> */}
            {/* </li> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          {/* <Route path="/"> */}
          {/*  <Home /> */}
          {/* </Route> */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
