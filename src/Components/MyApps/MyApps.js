import React, { Component } from 'react';
import { connect } from 'react-redux';
import { eventAction } from '../../Actions/EventAction';
import { Text, View, TextInput, Button, Alert, Image, StyleSheet, Platform, Dimensions, ScrollView, KeyboardAvoidingView, Icon } from 'react-native';
import ManifoldLogo from '../../ManifoldLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { OffCanvas3D } from 'react-native-off-canvas-menu'

const styles = StyleSheet.create({})

class MyApps extends Component {
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

  displayManifoldApps(directives) {
    var out = [];
    for(var app in directives) {
      let appName = directives[app].options.app.name;
      let icon = directives[app].options.iconURL;
      out.push(
        <View key={appName}>
          <Text>{appName}</Text>
          <Image
            style={{ width: 50, height: 50}}
            source={{ uri: icon}}
            resizeMode='contain'
          />
        </View>
      )
    }

    return out;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.displayManifoldApps(this.props.resp.directives)}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resp: (state.event) ? state.event.response : ""
  };
}

export default connect(mapStateToProps, {eventAction})(MyApps);
