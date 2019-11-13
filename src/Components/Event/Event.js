import React, { Component } from 'react';
import { Text, View, Button, ScrollView, FlatList } from 'react-native';
import LoginTextInput from '../Login/LoginTextInput';
import Attributes from './Attributes';
import { eventAction } from '../../Actions/EventAction';
import { connect } from 'react-redux';

const passedIn = {
  domain: "pico_app",
  type: "say_hello",
  attrs: [ "name" ]
};

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    return this.props.eventAction(this.props.connect.host, this.props.connect.eci, passedIn.domain, passedIn.type, this.state);
  }

  onChange(key) {
    return (value) => {
      this.setState({
        [key] : value
      })
    };
  }

  render() {
    console.log("type", this.props.navigation.getParam("type"));
    console.log("domain", this.props.navigation.getParam("domain"));
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{height: 300, width:"80%", marginTop: 40, padding:4}}>
        <Text>Attributes:</Text>

        <FlatList data={passedIn.attrs} keyExtractor={(item, index) => {return "key"+index}} renderItem={({ item }) => <Attributes title={item} value={this.state[item]} onChange={this.onChange(item)} />} />

        </View>
        <Button title="Raise Event" onPress={this.onPress} />
        <View style={{height: 100, width:"80%", marginTop: 40, borderWidth: 2, padding:4}}>
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
