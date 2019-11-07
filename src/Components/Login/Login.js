import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import LoginTextInput from './LoginTextInput';
import { connectAction } from '../../Actions/ConnectAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: this.props.host,
      port: this.props.port,
      eci: this.props.eci,
      protocol: this.props.protocol
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
    this.openScanner = this.openScanner.bind(this);
  }

  onPress() {
    this.props.navigation.navigate('TabNavigation');
    return this.props.connectAction(this.state.host, this.state.port, this.state.eci, this.state.protocol);
  }

  onChange(key) {
    return (value) => {
      this.setState({
        [key] : value
      })
    };
  }

  openScanner() {
    this.props.navigation.navigate('QRScanner');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LoginTextInput onChangeText={this.onChange("host")} title="Host:" placeholder="10.0.2.2" value={this.state.host} />
        <LoginTextInput onChangeText={this.onChange("port")} title="Port:" placeholder="8080" value={this.state.port} />
        <LoginTextInput onChangeText={this.onChange("eci")} title="ECI:" placeholder="3FcPg2WL6zbJEaf47HP2CR" value={this.state.eci} />
        <LoginTextInput onChangeText={this.onChange("protocol")} title="Protocol:" placeholder="http" value={this.state.protocol} />
        <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
          <View style={{margin: 5}}><Button disabled={!(this.state.host && this.state.port && this.state.eci && this.state.protocol)} title="Connect" onPress={this.onPress} /></View>
          <View style={{margin: 5}}><Button title="Scan" onPress={this.openScanner} /></View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    host: (state.connect) ? state.connect.host : "",
    port: (state.connect) ? state.connect.port : "",
    eci: (state.connect) ? state.connect.eci : "",
    protocol: (state.connect) ? state.connect.protocol : "",
  };
}

export default connect(mapStateToProps, { connectAction })(Login);
