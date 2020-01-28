import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, Image, StyleSheet, Platform, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import LoginTextInput from './LoginTextInput';
import { connectAction } from '../../Actions/ConnectAction';
import { disconnectAction } from '../../Actions/DisconnectAction';
import { eventAction } from '../../Actions/EventAction';
import ManifoldLogo from '../../ManifoldLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faRss, faCogs, faCompass } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === 'ios' ? (Dimensions.get('window').height >= 812 ? 100 : 50) : (Dimensions.get('window').height <= 732 ? 20 : 50),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around"
   },
  logo: Platform.OS === "ios" ? (Dimensions.get('window').height >= 812 ? { width: 200, height: 125 } : { width: 160, height: 143 } ) : (Dimensions.get('window').height <= 732 ? { width: 150, height: 135 } : { width: 200, height: 180 }),
  loginButtons: Platform.OS === "ios" ? { flexDirection: 'column', justifyContent: "space-around" } : { flexDirection: 'column' },
  info: {
    justifyContent: "space-around",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: "150%"
  },
  infoText: {
    textAlign: "left",
     flex: 1
  },
  GoogleButton: {
    justifyContent: "space-around",
    backgroundColor: "#1a73e8",
    flexDirection: 'row',
    alignItems: "center",
    padding: 5,
    margin: 3,
     marginBottom: 10
  },
  GithubButton: {
    justifyContent: "space-around",
    backgroundColor: "rgb(36, 41, 46)",
    flexDirection: 'row',
    alignItems: "center",
    padding: 5,
    margin: 3,
    marginBottom: 10
  },
  Github: {
    color: "#ffff",
    margin: 5
  },
  Google: {
    color: "#ffff",
    margin: 5
  },
  infoIcon: {
    color: "rgba(15,134,193,.7)",
    marginRight: 30,
    flex: 1
  }
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "localhost",
      port: "8080",
      eci: "eWksBdNnoSxFnMDtZQ215",
      rid: "org.sovrin.manifold_agent",
      protocol: "http"
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
    this.loginGithub = this.loginGithub.bind(this);
    this.connectionAttempted = this.connectionAttempted.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }


  connectionAttempted(success, message) {
    if(success) this.props.navigation.navigate('TabNavigation');
    else {
      Alert.alert("Connection Error", message, [{ text: "Ok" }])
    }
  }

  disconnect() {
    this.props.navigation.navigate('connect');
  }

  onPress() {
    let host = this.state.protocol + "://" + this.state.host + ":" + this.state.port;
    this.props.connectAction(host, this.state.eci, this.state.rid, this.connectionAttempted);
    this.props.disconnectAction(this.disconnect);
  }

  onChange(key) {
    return (value) => {
      this.setState({
        [key] : value
      })
    };
  }

  loginGithub() {
    this.props.eventAction(this.state.protocol+"://"+this.state.host+":"+this.state.port, this.state.eci, "manifold", "apps", {});
    this.props.disconnectAction(this.disconnect);
    this.props.navigation.navigate('ManifoldStackNavigator');
  }

  displayLoginBody() {
    return (
      <View style={{ marginBottom: 50 }}>
        <View style={{ marginBottom: 10, justifyContent: "center",
            alignItems: "center" }}>
            <Image
              style={styles.logo}
              source={ManifoldLogo}
            />
            <View style={styles.info}><FontAwesomeIcon style={styles.infoIcon} icon={faRss} size={50}/><Text style={styles.infoText}>Manifold is a platform that allows you to connect and interact with your things</Text></View>
            <View style={styles.info}><FontAwesomeIcon style={styles.infoIcon} icon={faCogs} size={50}/><Text style={styles.infoText}>From car keys to smarthome devices, Manifold offers control</Text></View>
            <View style={styles.info}><FontAwesomeIcon style={styles.infoIcon} icon={faCompass} size={50}/><Text style={styles.infoText}>Discover new ways to make your things smart</Text></View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.displayLoginBody()}
        <View style={styles.loginButtons}>
          <View style={styles.GoogleButton}><FontAwesomeIcon style={styles.Google} icon={faGoogle} size={30}/><Button disabled={!(this.state.host && this.state.port && this.state.eci && this.state.rid && this.state.protocol)} onPress={this.onPress} title="Sign in with Google" color="#ffff" /></View>
          <View style={styles.GithubButton}><FontAwesomeIcon style={styles.Github} icon={faGithub} size={30}/><Button title="Sign in with Github" color="#ffff" onPress={this.loginGithub}/></View>
        </View>
        <Text style={{color: "rgba(15,134,193,.7)", alignItems: "center", textAlign:"center", width: "100%", marginTop: 20}}>Manifold is currently under heavy development. Many apps and features are still forthcoming</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    host: (state.connect) ? state.connect.host : "",
    port: (state.connect) ? state.connect.port : "",
    eci: (state.connect) ? state.connect.eci : "",
    protocol: (state.connect) ? state.connect.protocol : "",
    rid: (state.connect) ? state.connect.rid : "",
    resp: (state.event) ? state.event.response : ""
  };
}

export default connect(mapStateToProps, { connectAction, disconnectAction, eventAction })(Login);
