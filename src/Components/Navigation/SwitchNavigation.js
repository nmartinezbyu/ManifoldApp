import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Login/Login';
import TabNavigation from './TabNavigation';


export default createAppContainer(
  createSwitchNavigator(
    {
      connect: Login,
      TabNavigation
    },
    {
      initialRouteName: 'connect',
    }
  )
);
