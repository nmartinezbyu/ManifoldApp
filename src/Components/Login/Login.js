import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, Image, StyleSheet, Platform, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import LoginTextInput from './LoginTextInput';
import { connectAction } from '../../Actions/ConnectAction';
import { disconnectAction } from '../../Actions/DisconnectAction'
import PicoLabs from './pico-labs.png'

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === 'ios' ? (Dimensions.get('window').height >= 812 ? 100 : 50) : (Dimensions.get('window').height <= 732 ? 20 : 50),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around"
   },
  logo: Platform.OS === "ios" ? (Dimensions.get('window').height >= 812 ? { width: 200, height: 180 } : { width: 160, height: 143 } ) : (Dimensions.get('window').height <= 732 ? { width: 150, height: 135 } : { width: 200, height: 180 }),
  loginButtons: Platform.OS === "ios" ? { flexDirection: 'row', justifyContent: "space-around"} : { flexDirection: 'row' }
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "",
      port: "",
      eci: "",
      rid: "",
      protocol: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
    this.openScanner = this.openScanner.bind(this);
    this.connectionAttempted = this.connectionAttempted.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }


  connectionAttempted(success, message) {
    if(success) this.props.navigation.navigate('TabNavigation');
    else {
      Alert.alert("Connection Error", message, [{ text: "Ok" }])
    }
  }

  disconnect() {
    this.props.navigation.navigate('connect');
  }

  onPress() {
    let host = this.state.protocol + "://" + this.state.host + ":" + this.state.port;
    this.props.connectAction(host, this.state.eci, this.state.rid, this.connectionAttempted);
    this.props.disconnectAction(this.disconnect);
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

  displayLoginForm() {
    if(Platform.OS === "ios") {
      return (
        <KeyboardAvoidingView style={{ marginBottom: 50 }} behavior="position">
          <View style={{ marginBottom: 10, justifyContent: "center",
              alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={PicoLabs}
              />
          </View>
          <LoginTextInput onChangeText={this.onChange("host")} title="Host:" placeholder="10.0.2.2" value={this.state.host} />
          <LoginTextInput onChangeText={this.onChange("port")} title="Port:" placeholder="8080" value={this.state.port} />
          <LoginTextInput ref="eci" onChangeText={this.onChange("eci")} title="ECI:" placeholder="3FcPg2WL6zbJEaf47HP2CR" value={this.state.eci} />
          <LoginTextInput ref="rid" onChangeText={this.onChange("rid")} title="RID:" placeholder="pico_app" value={this.state.rid} />
          <LoginTextInput ref="protocol" onChangeText={this.onChange("protocol")} title="Protocol:" placeholder="http" value={this.state.protocol} />
        </KeyboardAvoidingView>
      );
    }
    else {
      return [
          <View style={{ marginBottom: 10, alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={PicoLabs}
              />
          </View>,
          <LoginTextInput onChangeText={this.onChange("host")} title="Host:" placeholder="10.0.2.2" value={this.state.host} />,
          <LoginTextInput onChangeText={this.onChange("port")} title="Port:" placeholder="8080" value={this.state.port} />,
          <LoginTextInput ref="eci" onChangeText={this.onChange("eci")} title="ECI:" placeholder="3FcPg2WL6zbJEaf47HP2CR" value={this.state.eci} />,
          <LoginTextInput ref="rid" onChangeText={this.onChange("rid")} title="RID:" placeholder="pico_app" value={this.state.rid} />,
          <LoginTextInput ref="protocol" onChangeText={this.onChange("protocol")} title="Protocol:" placeholder="http" value={this.state.protocol} />
      ];
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.displayLoginForm()}
        <View style={styles.loginButtons}>
          <View style={{margin: 5}}><Button disabled={!(this.state.host && this.state.port && this.state.eci && this.state.rid && this.state.protocol)} title="Connect" onPress={this.onPress} /></View>
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

export default connect(mapStateToProps, { connectAction, disconnectAction })(Login);
