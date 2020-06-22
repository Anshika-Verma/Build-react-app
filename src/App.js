import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.js';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.components';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component= { Homepage } />
        <Route path ='/shop' component = { ShopPage } />
      </Switch>
    </div>
  );
}

export default App;
