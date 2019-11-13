import React, { Component } from 'react';
import { Text, View, Button, ScrollView, FlatList} from 'react-native';
import Arguments from './Arguments';
import { queryAction } from '../../Actions/QueryAction';
import { connect } from 'react-redux';

const passedIn = {
  name: "demo",
  args: [ "name", "game" ]
};

class Query extends Component {
  constructor(props) {
    super(props);

    this.state={};

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    return this.props.queryAction(this.props.connect.host, this.props.connect.eci, this.props.connect.rid, passedIn.name, this.state);
  }

  onChange(key) {
    return (value) => {
      this.setState({
        [key] : value
      });
    };
  }

  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{height: 300, width:"80%", marginTop: 40, padding:4}}>
          <Text>Arguments:</Text>

          <FlatList data={passedIn.args} keyExtractor={(item, index) => {return "key"+index}} renderItem={({ item }) => <Arguments title={item} value={this.state[item]} onChange={this.onChange(item)} />} />

          </View>
          <Button title="Query" onPress={this.onPress} />
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
    resp: (state.query) ? state.query.response : "",
    connect: state.connect
  };
}

export default connect(mapStateToProps, {queryAction})(Query);
