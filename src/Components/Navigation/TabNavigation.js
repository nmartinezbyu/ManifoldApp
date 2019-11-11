import React from 'react';
import Query from '../Query/Query';
import EventList from '../EventList/EventList';
import QueryList from '../QueryList/QueryList';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Event: EventList,
  Query: QueryList,
});

export default createAppContainer(TabNavigator);
