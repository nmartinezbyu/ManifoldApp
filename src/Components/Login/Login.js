import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import LoginTextInput from './LoginTextInput';
import { connectAction } from '../../Actions/ConnectAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "",
      port: "",
      eci: "",
      protocol: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
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

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LoginTextInput onChangeText={this.onChange("host")} title="Host:" placeholder="10.0.2.2" value={this.state.host} />
        <LoginTextInput onChangeText={this.onChange("port")} title="Port:" placeholder="8080" values={this.state.port} />
        <LoginTextInput onChangeText={this.onChange("eci")} title="ECI:" placeholder="3FcPg2WL6zbJEaf47HP2CR" />
        <LoginTextInput onChangeText={this.onChange("protocol")} title="Protocol:" placeholder="http" />
        <Button disabled={!(this.state.host && this.state.port && this.state.eci && this.state.protocol)} title="Connect" onPress={this.onPress} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, { connectAction })(Login);
