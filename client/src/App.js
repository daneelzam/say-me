import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Login from './components/Account/Login/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header/Header';
// import AuthRouter from './hoc/AuthRouter';
import ProtectedRouter from './hoc/ProtectedRouter';
import Account from './components/Account/Account/Account';
import Calendar from './components/Calendar/Calendar';

function App() {
  // const isAuth = useSelector((state) => state.auth.isAuth);

  const Logout = () => <div children="logout"/>;

  return (
      <Router>
        <div>
          {isAuth && <Header/>}
          <Switch>
            <Route path="/login"><Login/></Route>
            <ProtectedRouter Component={Account} path="/account"/>
            <ProtectedRouter Component={Calendar} path="/" />
            <ProtectedRouter Component={Logout} path="auth/logout"/>
          </Switch>
          {isAuth && <Footer/>}
        </div>
      </Router>
  );
}

export default App;
