import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { connectAction } from '../../Actions/ConnectAction';

class QRScanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertOpened: false,
      host: "",
      port: "",
      eci: "",
      rid: "",
      protocol: ""
    }

    this.read = this.read.bind(this);
    this.back = this.back.bind(this);
    this.connect = this.connect.bind(this);
    this.cancel = this.cancel.bind(this);
    this.connectionAttempted = this.connectionAttempted.bind(this);
  }

  connectionAttempted(success, message) {
    if(success) this.props.navigation.navigate('TabNavigation');
    else {
      Alert.alert("Connection Error", message, [{ text: "Ok" }])
    }
  }


  back() {
    this.props.navigation.navigate('connect');
  }

  connect() {
    this.setState({alertOpened: false});
    this.props.connectAction(this.state.host, this.state.port, this.state.eci, this.state.protocol, this.state.rid, this.connectionAttempted);
  }

  cancel() {
    this.setState({alertOpened: false});
  }

  read(qr) {
      if(qr.data) {
        let { host, port, eci, protocol, rid } = JSON.parse(qr.data);
        if(!this.state.alertOpened && host && port && eci && protocol && rid) {
          this.setState({alertOpened: true, host, port, eci, protocol, rid});
          this.alertUser(`Connect to engine at\n${protocol}://${host}:${port}\nwith ruleset id ${rid}?`);

        }
      }
  }

  alertUser(alertMessage) {
    Alert.alert('QR detected',
      alertMessage,
      [
        { text: "Cancel", onPress: this.cancel },
        { text: "Connect", onPress: this.connect }
      ],
      { cancelable: true }
    )
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
              <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: "white", opacity: .9 }} >
                <Text style={{fontSize: 30}}>Scan a QR code</Text>
              </View>
              <View style={{ height:300, flexDirection: 'row' }}>
                <View style={{flex: 1, backgroundColor: "white", opacity: .9}} />
                <View style={{width: 300, borderColor: 'blue', borderWidth: 5}} />
                <View style={{flex: 1, backgroundColor: "white", opacity: .9}} />
              </View>
              <View style={{justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: "white", opacity: .9 }}>
                <Button title="Tap here to go back" onPress={this.back} />
              </View>
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
