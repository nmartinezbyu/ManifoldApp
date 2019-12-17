import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

export default class LoginTextInput extends Component {


  render() {
    return (
      <View style={{flexDirection: "column", marginBottom: 20 }}>
        <Text style={{ fontSize: 18, color: "#4d4d4d" }}>{this.props.title}</Text>
        <View><TextInput autoCapitalize="none" style={{ marginBottom: 0, marginTop: 5, height: 35, width: 250, fontSize: 15, backgroundColor: '#e7e7e7', borderRadius: 0, paddingHorizontal: 10, paddingBottom: 0, paddingTop:0 }} placeholderTextColor={'#cccccc'} onChangeText={this.props.onChangeText} value={this.props.value} /></View>
      </View>
      // <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
      //   <Text style={{ flex: .5, fontSize: 20 }}>{this.props.title}</Text>
      //   <View><TextInput style={{ margin: 10, height: 30, width: 200, borderColor: 'rgba(15,134,193,.7)', borderWidth: 1 }} placeholderTextColor={'#cccccc'} onChangeText={this.props.onChange} value={this.props.value} /></View>
      // </View>
    );
  }
}
