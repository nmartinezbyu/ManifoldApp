import React, { Component } from 'react';
import { Text, View, Button, ScrollView, FlatList, StyleSheet } from 'react-native';
import Arguments from './Arguments';
import { queryAction } from '../../Actions/QueryAction';
import { connect } from 'react-redux';

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

class Query extends Component {
  constructor(props) {
    super(props);

    this.state={};

    this.viewabilityConfig = {
      waitForInteraction: false
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress(passedIn) {
    return() => { return this.props.queryAction(this.props.connect.host, this.props.connect.eci, this.props.connect.rid, passedIn.name, this.state); }
  }

  onChange(key) {
    return (value) => {
      this.setState({
        [key] : value
      });
    };
  }

  render() {
    let passedIn = this.props.navigation.getParam("query");
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ flex: 1, width:"80%", marginTop: 20, padding: 10 }}>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>Arguments:</Text>

          <FlatList data={passedIn.args} viewabilityConfig = {this.viewabilityConfig} keyExtractor={(item, index) => {return "key"+index}} renderItem={({ item }) => <Arguments title={item} value={this.state[item]} onChange={this.onChange(item)} />} />

          </View>
          <View style={styles.picoButtonBackground}>
            <Text style={styles.picoButton} onPress={this.onPress(passedIn)}>Query</Text>
          </View>
          <View style={{ flex: 1, height: 100, width:"80%", marginTop: 20, marginBottom: 10, borderWidth: 2, padding:4}}>
          <ScrollView>
            <Text >{JSON.stringify(this.props.resp[passedIn.name], undefined, 4)}</Text>
          </ScrollView>
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resp: (state.query) ? state.query : {},
    connect: state.connect
  };
}

export default connect(mapStateToProps, {queryAction})(Query);
