import React, { Component } from 'react';
import { Text, View} from 'react-native';

class EventListHeader extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <View style={{ flex: 1, maxHeight: "13%", justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Events</Text>
      </View>
    );
  }
}

export default EventListHeader;
