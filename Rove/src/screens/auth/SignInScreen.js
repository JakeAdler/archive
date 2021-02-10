// @ts-check
import React from 'react';
import {
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';
import Styles from '../../constants/AuthStyles';
import firebase from 'react-native-firebase';
import Colors from '../../constants/Colors';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';


export default class SignInScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
      }
    }
    static navigationOptions = ({ navigation }) => {
    
      let navigationComponent = null;
      if (navigation.state.params){
        if (navigation.state.params.message) {
          // TODO: Create a pretty notifcations message for the sign in screen.
          navigationComponent = <View><Text>Message: {navigation.state.params.message}</Text></View>;
        } else if (navigation.state.params.error) {
          // TODO: Make a pretty "Failed to log in component" and render it here!
          navigationComponent = <View><Text>Error: {navigation.state.params.error}</Text></View>;
        }
      }

      return {
        header: navigationComponent,
      };
    };

    _signInAsync = () => {
        this.props.navigation.navigate('Loading', {
        loadFunc: this._logInExecution
      });  
    }

    _logInExecution = async () => {

      try {
        // Retrieve OAuth Google token 
        const data = await GoogleSignin.signIn();
    
        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        // login with credential
        const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    
        console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
        this.props.navigation.navigate('App');

      } catch (error) {

        let friendlyErrorMsg = "";
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            friendlyErrorMsg = "Google auth canceled";
            break;
          case statusCodes.IN_PROGRESS:
            friendlyErrorMsg = "Goolge auth still in progress";
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            friendlyErrorMsg = "Google play services not available";
            break;
          default:
            friendlyErrorMsg = error;
        }
        
        // TEMP for debug
        console.log("FAILED to log in!");
        console.error(error);

        // Navigate back to SignIn screen
        this.props.navigation.navigate('SignIn', { error: friendlyErrorMsg });
      }
    }
    
    _forgotPassword = () => {
      // TODO: Implement later
      console.log("Clicked Forgot password!");
    }
  
    render() {
      return (
        <View style={Styles.container}>
          <StatusBar backgroundColor={Colors.RoveOrange}/>
          <Text style={Styles.title}>Rove</Text>

          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={this._signInAsync}
            disabled={this.state.isSigninInProgress} />
  
          <Button onPress={this._forgotPassword} title="Forgot your password" color="white">
            <Text style={Styles.forgotAndRegister}>Forgot your password</Text>
          </Button>
        </View>
      );
    }
}

