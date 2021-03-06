import React, { Component } from 'react';
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 15,
    fontSize: 18,
    height: 50,
    flex: 1
  },
  flatList: {
    height: '100%'
  }
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

  openQuery(query) {
    this.props.navigation.navigate('Query', { query: query });
  }

  renderItem({item}) {
      return (
        <TouchableOpacity onPress={() => {this.openQuery(item);}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.item}>
              {item.name}
            </Text>
            <View style={{ flex: 1, paddingTop: 20, paddingRight: 5, alignItems: 'flex-end'}}>
              <FontAwesomeIcon style={{ color: 'rgba(15,134,193, 1)' }} icon={ faChevronRight } />
            </View>
          </View>
          <View style={{ backgroundColor: 'rgba(185, 185, 185, .2)', height: 1}}>
          </View>
        </TouchableOpacity>
      )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View styles={styles.container}>
          <FlatList
            style={styles.flatList}
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
