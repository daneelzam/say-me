import { Route, Redirect } from 'react-router-dom';

const AuthRouter = ({ Component, path }) => {
  const isAuth = true;
  return (
      <Route path={path}>
        {isAuth ? <Redirect to='/'/> : <Component/>}
      </Route>
  );
};

export default AuthRouter;
