import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.js';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils'



class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    };
  }

  unsubscribeFromAuth = null ;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (user => {
      this.setState ({ currentUser: user });

      console.log(user);
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render () {
    return (
      <div>
        <Header currentUser = {this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component= { Homepage } />
          <Route path ='/shop' component = { ShopPage } />
          <Route path ='/signIn' component = { SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
