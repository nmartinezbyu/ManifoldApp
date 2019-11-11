import React, { Component } from 'react';
import { Text, View, Button, FlatList, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

class QueryList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      displayFormatted: []
    }

    this.onPress = this.onPress.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.openQuery= this.openQuery.bind(this);
  }

  onPress() {
    return this.props.eventAction(this.props.connect.protocol, this.props.connect.host, this.props.connect.port, this.props.connect.eci, this.state.domain, this.state.type);
  }

  openQuery() {
    this.props.navigation.navigate('Query');
  }

  renderItem({item}) {
      return <Text style={styles.item} onPress={this.openQuery}>{item.name}</Text>
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, maxHeight: "13%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Queries</Text>
        </View>
        <View styles={styles.container}>
          <FlatList
            data={this.props.display}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => { return index.toString() }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.connect ? state.connect.info.queries : []
  };
}

export default connect(mapStateToProps)(QueryList);
