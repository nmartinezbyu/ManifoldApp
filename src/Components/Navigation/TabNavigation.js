import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import QueryStackNavigator from './QueryStackNavigator';
import EventStackNavigator from './EventStackNavigator';
import Event from '../Event/Event';
import queryIcon from '../../queryIcon.png'
import eventIcon from '../../eventIcon.png'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const smallScreenTabStyle = { labelStyle: { fontSize: 15, marginBottom: 15 }, style:{ borderTopWidth: 2, borderTopColor:'#D3D3D3', height: 65 } }

const biggerScreenTabStyle = { labelStyle: { fontSize: 15 }, style:{ borderTopWidth: 2, borderTopColor:'#D3D3D3', height: 60 }}

const TabNavigator = createBottomTabNavigator({
  Event: {
    screen: EventStackNavigator,
    navigationOptions: {
      title: "Event",
      tabBarIcon: ({tintColor})=>(<View ><Image style={{ flex: 1, resizeMode: 'contain', tintColor: tintColor, marginTop: 5 }} source={eventIcon}/></View>),
      tabBarOptions: Dimensions.get('window').height >= 812 ? biggerScreenTabStyle : smallScreenTabStyle
    }
  },
  Query: {
    screen: QueryStackNavigator,
    navigationOptions: {
      title: "Query",
      tabBarIcon: ({tintColor})=>(<View style={{color: 'red'}}><Image style={{ flex: 1, resizeMode: 'contain', tintColor: tintColor, marginTop: 5 }} source={queryIcon}/></View>),
      tabBarOptions: Dimensions.get('window').height >= 812 ? biggerScreenTabStyle : smallScreenTabStyle
    }
  }
});

export default createAppContainer(TabNavigator);
