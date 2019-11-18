import React, { Component } from 'react';
import { Text, View, Button, ScrollView, FlatList, StyleSheet } from 'react-native';
import LoginTextInput from '../Login/LoginTextInput';
import Attributes from './Attributes';
import { eventAction } from '../../Actions/EventAction';
import { connect } from 'react-redux';

const passedIn = {
  domain: "pico_app",
  type: "say_hello",
  attrs: [ "name" ]
};

const styles = StyleSheet.create({
  picoButtonBackground: {
    backgroundColor: "rgba(15,134,193,.7)",
    borderRadius: 15,
    marginTop: 10
  },
  picoButton: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    color: 'white',
    fontSize: 20
  }
})

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
    console.log("event", this.props.navigation.getParam("event"));
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex:1, width:"80%", marginTop: 20, padding: 10}}>
        <Text style={{ fontSize: 30, marginBottom: 10 }}>Attributes:</Text>

        <FlatList data={passedIn.attrs} keyExtractor={(item, index) => {return "key"+index}} renderItem={({ item }) => <Attributes title={item} value={this.state[item]} onChange={this.onChange(item)} />} />

        </View>
        <View style={styles.picoButtonBackground}>
          <Text style={styles.picoButton} onPress={this.onPress}>Raise Event</Text>
        </View>
        <View style={{ flex: 1, height: 100, width:"80%", marginTop: 20, marginBottom: 10, borderWidth: 2, padding:4}}>
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
