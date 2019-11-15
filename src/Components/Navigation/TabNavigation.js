import React from 'react';
import QueryStackNavigator from './QueryStackNavigator';
import EventStackNavigator from './EventStackNavigator';
import Event from '../Event/Event';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const TabNavigator = createBottomTabNavigator({
  Event: {
    screen: EventStackNavigator,
    navigationOptions: {
      tabBarOptions: {
        labelStyle: {
          fontSize: 20,
        }
      }
    }
  },
  Query: {
    screen: QueryStackNavigator,
    navigationOptions: {
      tabBarOptions: {
        labelStyle: {
          fontSize: 20,
        }
      }
    }
  }
});

export default createAppContainer(TabNavigator);
