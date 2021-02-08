import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRouter = ({ Component, path }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
      <Route path={path}>
        {isAuth ? <Redirect to='/'/> : <Component/>}
      </Route>
  );
};

export default AuthRouter;
