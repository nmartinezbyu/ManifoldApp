import {createAppContainer, NavigationActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Query from '../Query/Query';
import QueryList from '../QueryList/QueryList';
import SwitchNavigation from './SwitchNavigation';
import { Button} from 'react-native';
import Login from '../Login/Login'

const QueryStackNavigator =
  createStackNavigator(
    {
      Login: {
        screen: Login
      },
      QueryList: {
        screen: QueryList,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: "Queries",
            headerStyle: { backgroundColor: "rgba(15,134,193,.7)" },
            headerRight: ( <Button onPress={() => alert('You Have Disconnected')} title="Disconnect" color="#fff"/> ),
            headerTintColor: '#fff'
          }
        }
      },
      Query: {
        screen: Query,
        navigationOptions: {
          headerTitle: "Query",
          headerStyle: { backgroundColor: "rgba(15,134,193,.7)" },
          headerRight: () => ( <Button onPress={() => alert('You Have Disconnected')} title="Disconnect" color="#fff"/> ),
          headerTintColor: '#fff'
        }
      }
    }
  );

export default createAppContainer(QueryStackNavigator);
