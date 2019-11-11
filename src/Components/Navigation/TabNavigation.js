import React from 'react';
import QueryStackNavigator from './QueryStackNavigator';
import EventStackNavigator from './EventStackNavigator';
import Event from '../Event/Event';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Event: EventStackNavigator,
  Query: QueryStackNavigator
});

export default createAppContainer(TabNavigator);
