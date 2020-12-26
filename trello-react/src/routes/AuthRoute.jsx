/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = observer(({
  isSignin, path, children, ...rest
}) => (
  <Route
    {...rest}
    render={() => (
      isSignin ? (
        children
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: path } }}
        />
      )
    )}
  />
));

export default AuthRoute;
