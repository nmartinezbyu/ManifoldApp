import React, { Component } from 'react';
import { Text, View, Button, SectionList, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
container: {
 flex: 1,
 paddingTop: 22
},
sectionHeader: {
  paddingTop: 0,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 2,
  fontSize: 20,
  fontWeight: 'bold',
  backgroundColor: 'rgba(240, 240, 240, 1)',
},
item: {
  padding: 10,
  fontSize: 18,
  height: 44,
  flex: 1
},
});

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFormatted: []
    }

    this.onPress = this.onPress.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.openEvent = this.openEvent.bind(this);
  }

  componentDidMount() {
    this.formatDisplay()
  }

  formatDisplay() {
    let displayFormatted = []
    let display = this.props.display
    let hasDomain = false
    for(var i in display) {
      let testEvent = display[i]
      let domain = testEvent.domain
      let attrs = testEvent.attrs
      if(displayFormatted.length !== 0) {
        for(var j in displayFormatted) {
          let obj = displayFormatted[j]
          if(obj.domain === domain) {
            hasDomain = true
            obj.data.push(testEvent)
            break
          }
        }
      }
      if(!hasDomain) {
        let obj = {"domain": domain, "data":[testEvent]}
        displayFormatted.push(obj)
      }
      hasDomain = false
    }
    this.setState({
      displayFormatted: displayFormatted
    })
  }

  openEvent(item) {
    this.props.navigation.navigate('Event', { event: item });
  }

  onPress() {
    return this.props.eventAction(this.props.connect.protocol, this.props.connect.host, this.props.connect.port, this.props.connect.eci, this.state.domain, this.state.type);
  }

  renderSectionHeader({section}) {
    return <Text style={styles.sectionHeader}>{section.domain}</Text>
  }

  renderItem({item}) {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.item} onPress={() => {this.openEvent(item)}}>
            {item.type}
          </Text>
          <View style={{ flex: 1, paddingTop: 15, paddingRight: 5, alignItems: 'flex-end'}}>
            <FontAwesomeIcon style={{ color: 'rgba(15,134,193, 1)' }} icon={ faChevronRight } />
          </View>
        </View>
        <View style={{ backgroundColor: 'rgba(185, 185, 185, .2)', height: 1}}>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View styles={styles.container}>
          <SectionList
            sections={this.state.displayFormatted}
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
            keyExtractor={(item, index) => index}
          />
        </View>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.connect ? state.connect.info.events : [],
    disconnect: state.disconnect
  };
}

export default connect(mapStateToProps)(EventList);
