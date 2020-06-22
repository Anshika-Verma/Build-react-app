import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.js';
import './App.scss';

import Homepage from './pages/homepage/homepage.components';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= { Homepage } />
        <Route path ='/shop' component = { ShopPage } />
      </Switch>
    </div>
  );
}

export default App;
