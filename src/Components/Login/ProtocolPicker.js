import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';

export default class ProtocolPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "",
      port: "",
      eci: ""
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(key) {
    return (value) => {
      this.setState({
        [key] : value
      })
    };
  }

  render() {
    return (
      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20}}>
        <Text style={{flex: .3}}>{this.props.title}</Text>
        <View style={{flex: .7}}>
          <Picker selectedValue="http">
            <Picker.Item label="http" value="http" />
            <Picker.Item label="https" value="https" />
          </Picker>
        </View>
      </View>
    );
  }
}
