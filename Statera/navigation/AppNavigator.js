import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from '../screens/LoadingScreen';
import MainTabNavigator from '../navigation/MainTabNavigator';

const App = createStackNavigator({
    Loading: LoadingScreen,
    App: MainTabNavigator
}, {
    headerMode: 'none'
})

const AppNavigator = createAppContainer(App);

export default AppNavigator;