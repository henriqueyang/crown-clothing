import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/header';

import HomePage from './pages/homepage';
import ShopPage from './pages/shop';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
