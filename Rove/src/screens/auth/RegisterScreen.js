// @ts-check
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';
import Styles from '../../constants/AuthStyles';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email   : '',
      password: '',
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // If there are no errors passed to this screen, render and empty view as a header.
      // TODO: Make a pretty "Failed to log in component" and render it here!
      header: ((navigation.state.params || {}).error ? <View><Text>{navigation.state.params.error}</Text></View> : null),
    };
  };

  _register = () => {
    this.props.navigation.navigate('Loading', {
      loadFunc: this._registration
    });
  }

  _registration = () => {

      // TODO: Might not even need this screen if we use Google sign in.
      
      // .then(user => {
      //   this.props.navigation.navigate('SignIn', { message: "Thanks for registering! Please verify your email to log in!" });

      //     // TODO: You'll need this full name.
      //     // this.state.fullName

      //     // TODO: Create new document for user...use the user's id and full name to create the document.
      //     //      - This should be moved to it's own file.
      //     // const client = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, MongoDB.CLIENT_NAME);
      //     // const itemsCollection = client.db("store").collection("items");
      // })
      // .catch(err => {
      //   this.props.navigation.navigate('Register', { error: "Failed to register user: " + err });
      // });
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.inputContainer}>
          <Image style={Styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={Styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={Styles.inputContainer}>
          <Image style={Styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={Styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={Styles.inputContainer}>
          <Image style={Styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={Styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[Styles.buttonContainer, Styles.signupButton]} onPress={this._register}>
          <Text style={Styles.signUpText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}