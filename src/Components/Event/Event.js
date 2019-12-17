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
    borderRadius: 5,
    marginTop: 0
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

  displayAttributes() {
    let out = []
    for(let i in passedIn.attrs) {
      let item = passedIn.attrs[i]
      out.push(
        <Attributes title={item} value={this.state[item]} onChange={this.onChange(item)} />
      )
    }

    if (out.length === 0) {
      out.push(
        <Text style={{ flex: 1, fontSize: 20, marginTop: 10, marginTop: 10, fontWeight: 'bold' }}> None </Text>
      )
    }

    return out;
  }

  //<FlatList data={passedIn.attrs} keyExtractor={(item, index) => {return "key"+index}} scrollEnabled={false} renderItem={({ item }) => <Attributes title={item} value={this.state[item]} onChange={this.onChange(item)} />} />

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginTop: 0, padding: 10, width:"auto" }} contentContainerStyle={{ alignItems: "center", flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
          <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: 'bold', width: "85%" }}>Attributes:</Text>

          {this.displayAttributes()}

          <View style={styles.picoButtonBackground}>
            <Text style={styles.picoButton} onPress={this.onPress}>Raise Event</Text>
          </View>
          <View style={{ height: 315, width:"85%", marginTop: 20, marginBottom: 15, borderWidth: 1, backgroundColor: '#e7e7e7', padding:4 }}>
            <ScrollView>
              <Text >{JSON.stringify(this.props.resp, undefined, 4)}</Text>
            </ScrollView>
          </View>
        </ScrollView>
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
