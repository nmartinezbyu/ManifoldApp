import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Event from '../Event/Event';
import EventList from '../EventList/EventList';
import EventListHeader from '../EventList/EventListHeader'
import { Text, View} from 'react-native';

const EventStackNavigator =
  createStackNavigator(
    {
      EventList: EventList,
      Event: {
        screen: Event,
        navigationOptions: { headerTitle: "Event"  }
      }
    }
  );

export default createAppContainer(EventStackNavigator);
