import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage';
import ShopPage from './pages/shop';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
