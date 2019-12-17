import {createAppContainer, StackActions } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Query from '../Query/Query';
import QueryList from '../QueryList/QueryList';
import { Button } from 'react-native';
import Disconnect from './Disconnect'
import { Provider } from 'react-redux';

const QueryStackNavigator =

  createStackNavigator(
    {
      QueryList: {
        screen: QueryList,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Queries",
            headerStyle: { backgroundColor: "rgba(15,134,193,.7)" },
            headerRight: ( <Disconnect /> ),
            headerTintColor: '#fff'
        })
      },
      Query: {
        screen: Query,
        navigationOptions: {
          headerTitle: "Query",
          headerStyle: { backgroundColor: "rgba(15,134,193,.7)" },
          headerRight: () => ( <Disconnect /> ),
          headerTintColor: '#fff'
        }
      }
    }
  );

export default createAppContainer(QueryStackNavigator);
