import React, { Component } from 'react';
import { Text, View, Button, SectionList, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

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
  backgroundColor: 'rgba(247,247,247,1.0)',
},
item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},
})

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
    console.log(this.props.display);
    this.formatDisplay()
  }

  formatDisplay() {
    let displayFormatted = []
    let display = this.props.display
    let hasDomain = false
    for(var i in display) {
      let testEvent = display[i]
      let domain = testEvent.domain
      let type = testEvent.type
      if(displayFormatted.length !== 0) {
        for(var j in displayFormatted) {
          let obj = displayFormatted[j]
          if(obj.domain === domain) {
            hasDomain = true
            obj.data.push(type)
            break
          }
        }
      }
      if(!hasDomain) {
        let obj = {"domain": domain, "data":[type]}
        displayFormatted.push(obj)
      }
      hasDomain = false
    }
    this.setState({
      displayFormatted: displayFormatted
    })
  }

  openEvent() {
    this.props.navigation.navigate('Event');
  }

  onPress() {
    return this.props.eventAction(this.props.connect.protocol, this.props.connect.host, this.props.connect.port, this.props.connect.eci, this.state.domain, this.state.type);
  }

  renderSectionHeader({section}) {
    return <Text style={styles.sectionHeader}>{section.domain}</Text>
  }

  renderItem({item}) {
    return <Text style={styles.item} onPress={this.openEvent}>{item}</Text>
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, maxHeight: "13%", justifyContent: "center", alignItems: "center" }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Events</Text>
        </View>
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
    display: state.connect ? state.connect.info.events : []
  };
}

export default connect(mapStateToProps)(EventList);
