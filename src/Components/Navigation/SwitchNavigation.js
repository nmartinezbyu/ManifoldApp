import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Login/Login';
import TabNavigation from './TabNavigation';
import QRScanner from '../QRScanner/QRScanner';
import Query from '../Query/Query';


const SwitchNavigation =
  createSwitchNavigator(
    {
      QRScanner,
      connect: Login,
      TabNavigation
    },
    {
      initialRouteName: 'connect',
    }
  );

export default createAppContainer(SwitchNavigation);
