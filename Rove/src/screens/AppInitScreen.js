// @ts-check
import React from 'react';
import Loading from '../components/Loading';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._initializeApp();
  }

  _initializeApp = () => {

    // Will use firebase configuration settings set in each platform specific setup.
    GoogleSignin.configure();
  
    // Will trigger on app boot up (this is how we check if the user is already logged in or not).
    firebase.auth().onAuthStateChanged(user => {
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      if (user) {
        console.log("Already loggged in!");
        console.log(user);
        this.props.navigation.navigate('App');
      } else {
        console.log("Not logged in");
        this.props.navigation.navigate('Auth');
      }
    });
  }

  // TODO: Render some cool app loading screen
  render() {
    return (
      <Loading />
    );
  }
}