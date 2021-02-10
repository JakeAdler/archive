// @ts-check
import React from 'react';
import { View, Button } from 'react-native';
import firebase from 'react-native-firebase';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  _signOutAsync = async () => {
    firebase.auth().signOut()
      .then(() => {
        this.props.navigation.navigate('Auth');
      })
      .catch(err => console.log(err));
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }
}