import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Header, Icon} from 'react-native-elements';
import React from 'react';
import MyApps from '../MyApps/MyApps'
import MyAppsHeader from '../MyApps/MyAppsHeader'
import { Button} from 'react-native';
import Disconnect from './Disconnect'

const ManifoldStackNavigator =
  createStackNavigator(
    {
      MyApps: {
        screen: MyApps,
        navigationOptions: {
          header: (<Header
                    leftComponent={<MyAppsHeader/>}
                    centerComponent={{ text: 'My Apps', style: { color: '#fff', fontSize: 20, fontWeight: "bold" } }}
                  />)
        }
      }
    }
  );

export default createAppContainer(ManifoldStackNavigator);
