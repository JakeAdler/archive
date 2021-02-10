import { createStackNavigator } from 'react-navigation';
import LinkAcountScreen from '../screens/auth/LinkAccountScreen'
import ConfrimAccountScreen from '../screens/auth/ConfirmAccountScreen';

export default createStackNavigator({
    LinkAcount: {
        screen: LinkAcountScreen,
        navigationOptions: {
            title: 'LinkAccount',
            header: null //this will hide the header
          }
    },
    ConfrimAccount: {
        screen: ConfrimAccountScreen,
        navigationOptions: {
            title: 'ConfrimAccount',
            header: null //this will hide the header
          }
    }
})