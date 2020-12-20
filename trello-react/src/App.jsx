import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './modules/Header';
import Home from './modules/Home';
import Auth from './modules/Auth';
import NoMatch from './modules/NoMatch';

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <Auth type="signin" />
      </Route>
      <Route path="/signup">
        <Auth type="signup" />
      </Route>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
