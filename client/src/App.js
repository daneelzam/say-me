import React from 'react';
import {
  BrowserRouter as Router, Switch, Link
} from 'react-router-dom';
// import Login from './components/Account/Login/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import AuthRouter from './hoc/AuthRouter';
import ProtectedRouter from './hoc/ProtectedRouter';
import Account from './components/Account/Account/Account';
import Calendar from './components/Calendar/Calendar';

function App() {
  const isAuth = true;
  const test3 = () => <div children="logout"/>;
  const renderHeader = () => {
    if (isAuth) {
      return <Header/>;
    }
    return (
        <nav>
          <ul>
            {/* <li> */}
            {/*  <Link to="/">Home</Link> */}
            {/* </li> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/signup">SignUp</Link>
            </li> */}
          </ul>
        </nav>
    );
  };
  return (
      <Router>
        <div>
          {renderHeader()}
          {isAuth && <Footer/>}
          <Switch>
            {/* <AuthRouter Component={Login} path="/login"/> */}
            <ProtectedRouter Component={Account} path="/account"/>
            <ProtectedRouter Component={Calendar} path="/" />
            <ProtectedRouter Component={test3} path="/logout"/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
