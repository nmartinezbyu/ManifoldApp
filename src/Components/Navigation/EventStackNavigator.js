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
      EventList: {
        screen: EventList,
        navigationOptions: { headerTitle: "Events", headerStyle: { backgroundColor: "rgba(15,134,193,.7)" }, headerTintColor: '#fff'  }
      },
      Event: {
        screen: Event,
        navigationOptions: { headerTitle: "Event", headerStyle: { backgroundColor: "rgba(15,134,193,.7)" }, headerTintColor: '#fff'   }
      }
    }
  );

export default createAppContainer(EventStackNavigator);
