import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/ShopPage.component';

import './App.css';

function App() {
  return (
    <div>
      {/* What is Swiych for? */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
