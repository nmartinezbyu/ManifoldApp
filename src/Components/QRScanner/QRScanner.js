import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { connectAction } from '../../Actions/ConnectAction';

class QRScanner extends Component {
  constructor(props) {
    super(props);
    this.read = this.read.bind(this);
  }

  read(qr) {
      if(qr.data) {
        let { host, port, eci, protocol, rid } = JSON.parse(qr.data);
        if(host && port && eci && protocol && rid) {
          this.props.connectAction(host, port, eci, protocol);
          this.props.navigation.navigate('connect');
        }
      }
  }

  render() {
       return (
         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              flex: 1,
              width: '100%',
            }}
            onBarCodeRead={this.read}
          >
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
              <Text>Camera</Text>
            </View>
          </RNCamera>
         </View>
       );
     }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, { connectAction })(QRScanner);
