import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import EditScreen from '../screens/EditScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Platform } from 'react-native';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });
  
const HomeStack = createStackNavigator({
    Home: HomeScreen
}, config);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
};

HomeStack.path = '';

const EditStack = createStackNavigator({
    Edit: EditScreen,
}, config);

EditStack.navigationOptions = {
    tabBarLabel: 'Edit',
};

EditStack.path = '';

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
}, config);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
}

SettingsStack.path = '';

const TabNavigator = createBottomTabNavigator({
    HomeStack,
    EditStack,
    SettingsStack
})

TabNavigator.path = '';

export default TabNavigator