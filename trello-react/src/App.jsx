import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from './stores';

import AuthRoute from './routes/AuthRoute';
import Header from './modules/Header';
import Home from './modules/Home';
import Auth from './modules/Auth';
import NoMatch from './modules/NoMatch';

function App() {
  // 유저 로그인 확인
  const user = useContext(UserContext);
  const { token } = localStorage;
  user.setToken(token);

  return (
    <Switch>
      <Route path="/signin">
        <Auth type="signin" />
      </Route>
      <Route path="/signup">
        <Auth type="signup" />
      </Route>
      <AuthRoute isSignin={user.isSignin()} exact path="/">
        <Header />
        <Home />
      </AuthRoute>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
