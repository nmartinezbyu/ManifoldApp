import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class Attributes extends Component {
  render() {
    return (
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20}}>
        <Text style={{marginRight: 5, width: 65}}>{this.props.title}</Text>
        <View><TextInput style={{backgroundColor: "#fff", borderWidth: 1, width: 250, padding: 3, borderRadius: 10, color:'black'}} placeholderTextColor={'#cccccc'} onChangeText={this.props.onChange} value={this.props.value} /></View>
      </View>
    );
  }
}
