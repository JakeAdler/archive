import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AppInitScreen from '../screens/AppInitScreen';
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import LoadingScreen from '../screens/LoadingScreen';

const AppStack = createStackNavigator({ Main: MainTabNavigator });
const AuthStack = createStackNavigator({ MainAuth: AuthNavigator });

export default createAppContainer(createSwitchNavigator(
  {
    Init: AppInitScreen, // First screen that is loaded upon app bootup
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Init',
  }
));