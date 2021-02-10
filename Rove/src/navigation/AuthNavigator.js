// @ts-check
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SignInScreen from '../screens/auth/SignInScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

export default createStackNavigator({
    SignIn: SignInScreen,
    //Register: RegisterScreen
});