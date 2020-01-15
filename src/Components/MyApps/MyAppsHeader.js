import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Tooltip, Text, ListItem, Divider } from 'react-native-elements'
import ManifoldLogo from '../../ManifoldLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

class MyAppsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // <Text>
  //   My Things
  // </Text>
  // <Text>
  //   Feedback
  // </Text>

  displayMenu() {
    return (
      <View>
        <Text>
          My Things
        </Text>
        <Text>
        <Divider style={{ backgroundColor: 'blue' }} />
        </Text>
        <Text>
          Feedback
        </Text>
      </View>
    );
  }

  render() {
    return (
      <Tooltip popover={this.displayMenu()}>
        <Icon name="menu" color="white" size={30} />
      </Tooltip>
    );
  }
}

export default MyAppsHeader
