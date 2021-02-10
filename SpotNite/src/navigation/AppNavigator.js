import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import LoadNavigator from './LoadNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthNavigator,
  Load: LoadNavigator,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'Auth', //TODO: CHANGE TO AUTH
}
));