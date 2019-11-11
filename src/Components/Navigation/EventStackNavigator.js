import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Event from '../Event/Event';
import EventList from '../EventList/EventList';

const EventStackNavigator =
  createStackNavigator(
    {
      EventList,
      Event
    }
  );

export default createAppContainer(EventStackNavigator);
