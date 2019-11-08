import React, { Component } from 'react';
import { Text, View, Button, FlatList} from 'react-native';
import { connect } from 'react-redux';

class EventList extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onPress() {
    return this.props.eventAction(this.props.connect.protocol, this.props.connect.host, this.props.connect.port, this.props.connect.eci, this.state.domain, this.state.type);
  }

  renderItem({item}) {
      return <Text >{item.type}</Text>
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Events</Text>
        </View>
        <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
          <FlatList data={this.props.display} renderItem={this.renderItem} keyExtractor={(item, index) => { return index.toString() }} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.connect ? state.connect.info.events : []
  };
}

export default connect(mapStateToProps)(EventList);
