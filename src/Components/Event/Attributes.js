import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class Attributes extends Component {
  render() {
    return (
      <View style={{ flexGrow: 1, flexDirection: "column", marginBottom: 20 }}>
        <Text style={{ fontSize: 20, color: "#4d4d4d" }}>{this.props.title}:</Text>
        <View><TextInput autoCapitalize="none" style={{ marginBottom: 2.5, marginTop: 2.5, height: 35, width: 300, backgroundColor: '#e7e7e7', borderRadius: 0, paddingHorizontal: 10 }} placeholderTextColor={'#cccccc'} onChangeText={this.props.onChange} value={this.props.value} /></View>
      </View>
      // <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20}}>
      //   <Text style={{ flex: 1, fontSize: 20 }}>{this.props.title}</Text>
      //   <View><TextInput style={{ margin: 10, height: 30, width: 200, borderColor: 'rgba(15,134,193,.7)', borderWidth: 1 }} placeholderTextColor={'#cccccc'} onChangeText={this.props.onChange} value={this.props.value} /></View>
      // </View>
    );
  }
}
