import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Login/Login';
import TabNavigation from './TabNavigation';
import QRScanner from '../QRScanner/QRScanner';


export default createAppContainer(
  createSwitchNavigator(
    {
      QRScanner,
      connect: Login,
      TabNavigation
    },
    {
      initialRouteName: 'connect',
    }
  )
);
