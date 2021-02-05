import { Route, Redirect } from 'react-router-dom';

const ProtectedRouter = ({ Component, path, ...rest }) => {
  const isAuth = true;
  return (
      <Route path={path} {...rest}>
        {isAuth ? <Component/> : <Redirect to='/login'/>}
      </Route>
  );
};

export default ProtectedRouter;
