import React, { Component } from 'react';
import { Text, View, Button, ScrollView, FlatList, StyleSheet } from 'react-native';
import Arguments from './Arguments';
import { queryAction } from '../../Actions/QueryAction';
import { connect } from 'react-redux';

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

class Query extends Component {
  constructor(props) {
    super(props);

    this.state={};
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

  displayArguments(passedIn) {
    let out = []
    for(let i in passedIn.args) {
      let item = passedIn.args[i]
      out.push(
        <Arguments title={item} value={this.state[item]} key={"key".concat(i)} onChange={this.onChange(item)} />
      )
    }

    if (out.length === 0) {
      out.push(
        <Text style={{ flex: 1, fontSize: 20, marginTop: 10, fontWeight: 'bold' }}> None </Text>
      )
    }

    return out;
  }

// <FlatList data={passedIn.args} keyExtractor={(item, index) => {return "key"+index}} scrollEnabled={false} renderItem={({ item }) => <Arguments title={item} value={this.state[item]} onChange={this.onChange(item)} />} />
  render() {
    let passedIn = this.props.navigation.getParam("query");
    return (
        <View style={{ flex: 1}}>
          <ScrollView style={{ marginTop: 0, padding: 10, width:"auto" }} contentContainerStyle={{ alignItems: "center", flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
            <Text style={{ fontSize: 30, marginBottom: 10, fontWeight: 'bold', width: "80%" }}>Arguments:</Text>

            {this.displayArguments(passedIn)}

            <View style={styles.picoButtonBackground}>
              <Text style={styles.picoButton} onPress={this.onPress(passedIn)}>Query</Text>
            </View>
            <View style={{ height: 315, width:"85%", marginTop: 20, marginBottom: 0, borderWidth: 1, backgroundColor: '#e7e7e7', padding:4}}>
              <ScrollView>
                <Text >{JSON.stringify(this.props.resp[passedIn.name], undefined, 4)}</Text>
              </ScrollView>
            </View>
          </ScrollView>
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
