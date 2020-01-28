import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Tooltip, Text, ListItem, Divider } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { OffCanvas3D } from 'react-native-off-canvas-menu'
import MyApps from './MyApps/MyApps'


class Menu extends Component {
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
      <View style={{flex: 1}}>
        <OffCanvas3D
        active={this.state.menuOpen}
        onMenuPress={this.handleMenu.bind(this)}
        backgroundColor={'#222222'}
        menuTextStyles={{color: 'white'}}
        handleBackPress={true}
        menuItems={[
        
        ]}/>
      </View>
    )
  }

}

export default Menu;
