import React from 'react';
import Query from '../Query/Query';
import Event from '../Event/Event';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Event: Event,
  Query: Query,
});

export default createAppContainer(TabNavigator);
