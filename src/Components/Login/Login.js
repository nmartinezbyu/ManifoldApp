import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { connect } from 'react-redux';
import LoginTextInput from './LoginTextInput';
import { connectAction } from '../../Actions/ConnectAction';
import PicoLabs from './pico-labs.png'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "",
      port: "",
      eci: "",
      protocol: "",
      rid: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
    this.openScanner = this.openScanner.bind(this);
    this.connectionAttempted = this.connectionAttempted.bind(this);
  }

  connectionAttempted(success, message) {
    if(success) this.props.navigation.navigate('TabNavigation');
    else {
      Alert.alert("Connection Error", message, [{ text: "Ok" }])
    }
  }

  onPress() {
    let host = this.state.protocol + "://" + this.state.host + ":" + this.state.port;
    return this.props.connectAction(host, this.state.eci, this.state.rid, this.connectionAttempted);
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
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginTop: 100 }}>
          <Image
            style={{ width: 200, height: 180 }}
            source={PicoLabs}
          />
        </View>

          <LoginTextInput onChangeText={this.onChange("host")} title="Host:" placeholder="10.0.2.2" value={this.state.host} />
          <LoginTextInput onChangeText={this.onChange("port")} title="Port:" placeholder="8080" value={this.state.port} />
          <LoginTextInput onChangeText={this.onChange("eci")} title="ECI:" placeholder="3FcPg2WL6zbJEaf47HP2CR" value={this.state.eci} />
          <LoginTextInput onChangeText={this.onChange("rid")} title="RID:" placeholder="pico_app" value={this.state.rid} />
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
    rid: (state.connect) ? state.connect.rid : ""
  };
}

export default connect(mapStateToProps, { connectAction })(Login);
