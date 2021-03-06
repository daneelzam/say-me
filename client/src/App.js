import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Account/Login/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header/Header';
import ProtectedRouter from './components/ProtectedRouter';
import Account from './components/Account/Account/Account';
import Calendar from './components/Calendar/Calendar';
import Logout from './components/Account/Logout/Logout';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
      <Router>
        <div>
          {isAuth && <Header/>}
          <Switch>
            <Route exact path="/">{isAuth ? <Calendar/> : <Redirect to='/login'/>}</Route>
            <Route path="/login">{isAuth ? <Redirect to="/"/> : <Login/>}</Route>
            <ProtectedRouter Component={Account} path="/account"/>
            <ProtectedRouter Component={Logout} path="/logout"/>
          </Switch>
          {isAuth && <Footer/>}
        </div>
      </Router>
  );
}

export default App;
