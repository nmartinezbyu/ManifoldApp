import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Tooltip, Text, ListItem, Divider } from 'react-native-elements'
import ManifoldLogo from '../../ManifoldLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {OffCanvas3D} from 'react-native-off-canvas-menu'


class MyAppsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }

  }

  handleMenu() {
    const {menuOpen} = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }


  render() {
    return (
      <Icon name="menu" color="white" size={30}/>
    );
  }
}

export default MyAppsHeader
