import { createStackNavigator } from 'react-navigation';
import LoadDataScreen from '../screens/LoadDataScreen';

export default createStackNavigator({
    LoadData:{
        screen: LoadDataScreen,
        navigationOptions: {
            title: 'LinkAccount',
            header: null //this will hide the header
          }
    }
})