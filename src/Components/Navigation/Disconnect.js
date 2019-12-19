import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  disconnect: Platform.OS === 'ios' ? { color: "#fff", marginRight: 15  } : { color: "#fff", marginRight: 10 }
})

class Disconnect extends Component {
  render() {
    return (
      <View onPress={this.props.disconnect}>
          <FontAwesomeIcon style={styles.disconnect} icon={faSignOutAlt} size={20} onPress={this.props.disconnect}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    disconnect:  state.disconnect
  };
}

export default connect(mapStateToProps)(Disconnect);
