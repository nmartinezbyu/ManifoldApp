import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Event from '../Event/Event';
import EventList from '../EventList/EventList';
import EventListHeader from '../EventList/EventListHeader'
import { Button} from 'react-native';

const EventStackNavigator =
  createStackNavigator(
    {
      EventList: {
        screen: EventList,
        navigationOptions: {
          headerTitle: "Events",
          headerStyle: { backgroundColor: "rgba(15,134,193,.7)" },
          headerRight: () => ( <Button onPress={() => alert('You Have Disconnected')} title="Disconnect" color="#fff"/> ),
          headerTintColor: '#fff'
        }
      },
      Event: {
        screen: Event,
        navigationOptions: {
          headerTitle: "Event",
          headerStyle: { backgroundColor: "rgba(15,134,193,.7)" },
          headerRight: () => ( <Button onPress={() => alert('You Have Disconnected')} title="Disconnect" color="#fff"/> ),
          headerTintColor: '#fff'
        }
      }
    }
  );

export default createAppContainer(EventStackNavigator);
