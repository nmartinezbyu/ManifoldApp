import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class Arguments extends Component {
  render() {
    return (
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ flex: 1, fontSize: 20 }}>{this.props.title}</Text>
        <View><TextInput style={{ margin: 10, height: 30, width: 200, borderColor: 'rgba(15,134,193,.7)', borderWidth: 1 }} placeholderTextColor={'#cccccc'} onChangeText={this.props.onChange} value={this.props.value} /></View>
      </View>
    );
  }
}
