import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class Arguments extends Component {
  render() {
    return (
      <View style={{ flexGrow: 1, flexDirection: "column", marginBottom: 20 }}>
        <Text style={{ fontSize: 20, color: "#4d4d4d" }}>{this.props.title}:</Text>
        <View><TextInput autoCapitalize="none" style={{ marginBottom: 2.5, marginTop: 2.5, height: 35, width: 315, backgroundColor: '#e7e7e7', borderRadius: 0, paddingHorizontal: 10 }} placeholderTextColor={'#cccccc'} onChangeText={this.props.onChange} value={this.props.value} /></View>
      </View>
      //borderColor: 'rgba(15,134,193,.7)'
      // borderWidth: 1
      // <View style={{flexDirection: "row", marginBottom: 20 }}>
      //   <View><TextInput style={{ marginBottom: 10, marginTop: 10, height: 30, width: 300, borderColor: 'rgba(15,134,193,.7)', borderWidth: 1 }} placeholder={this.props.title} placeholderTextColor={'#cccccc'} onChangeText={this.props.onChange} value={this.props.value} /></View>
      // </View>
    );
  }
}
