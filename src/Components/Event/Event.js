import React, { Component } from 'react';
import { Text, View, Button, ScrollView} from 'react-native';
import LoginTextInput from '../Login/LoginTextInput';
import { eventAction } from '../../Actions/EventAction';
import { connect } from 'react-redux';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: "",
      type: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    return this.props.eventAction(this.props.connect.protocol, this.props.connect.host, this.props.connect.port, this.props.connect.eci, this.state.domain, this.state.type);
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
          <LoginTextInput onChangeText={this.onChange("domain")} title="Domain:" placeholder="pico_app" value={this.state.domain} />
          <LoginTextInput onChangeText={this.onChange("type")} title="Type:" placeholder="say_hello" value={this.state.type} />
          <Button disabled={!(this.state.domain && this.state.type)} title="Raise Event" onPress={this.onPress} />
          <View style={{height: 300, width:"80%", marginTop: 40, borderWidth: 2, padding:4}}>
          <ScrollView>
            <Text >{JSON.stringify(this.props.resp, undefined, 4)}</Text>
          </ScrollView>
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resp: (state.event) ? state.event.response : "",
    connect: state.connect
  };
}

export default connect(mapStateToProps, {eventAction})(Event);
