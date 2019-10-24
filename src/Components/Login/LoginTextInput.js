import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class LoginTextInput extends Component {
  render() {
    return (
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20}}>
        <Text style={{marginRight: 5, width: 65}}>{this.props.title}</Text>
        <View><TextInput style={{backgroundColor: "#fff", borderWidth: 1, width: 250, padding: 3, borderRadius: 10}} placeholder={this.props.placeholder} onChangeText={this.props.onChangeText} value={this.props.value} /></View>
      </View>
    );
  }
}
