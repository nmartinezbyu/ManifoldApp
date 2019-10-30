import React, { Component } from 'react';
import { Text, View, Button, ScrollView} from 'react-native';
import LoginTextInput from '../Login/LoginTextInput';
import { queryAction } from '../../Actions/QueryAction';
import { connect } from 'react-redux';

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rid: "",
      func: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    return this.props.queryAction(this.props.connect.protocol, this.props.connect.host, "8080", "3FcPg2WL6zbJEaf47HP2CR", this.state.rid, this.state.func);
  }

  onChange(key) {
    return (value) => {
      this.setState({
        [key] : value
      })
    };
  }

  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <LoginTextInput onChangeText={this.onChange("rid")} title="RID:" placeholder="pico_app" value={this.state.rid} />
          <LoginTextInput onChangeText={this.onChange("func")} title="Function:" placeholder="getMessage" value={this.state.func} />
          <Button disabled={!(this.state.rid && this.state.func)} title="Query" onPress={this.onPress} />
          <View style={{height: 300, width:"80%", marginTop: 40, borderWidth: 2, padding:4}}>
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
