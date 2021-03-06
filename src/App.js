import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {

  unsubscribeFromAuth = null ;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
              
          });
      });
    }  
      setCurrentUser(userAuth);      
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component= { Homepage } />
          <Route path ='/shop' component = { ShopPage } />
          <Route path ='/signIn' component = { SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
