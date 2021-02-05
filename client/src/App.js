import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Login from './components/Account/Login/Login';
import SignUp from './components/Account/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
       <Header/>
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
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
