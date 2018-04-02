import React, {Component} from 'react';
import  {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class DangKi extends Component{
  constructor(props){
    super(props);
    this.state = {
      HOTEN:"",
      USERNAME:"",
      PASSWORD:"",
      kq:"..."
    }
  }

  clickPlus(){
    fetch('http://192.168.1.99/reactNative/dangki.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "HOTEN": this.state.HOTEN,
        "USERNAME": this.state.USERNAME,
        "PASSWORD": this.state.PASSWORD
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("++++++++");
      console.log(responseJson);
      this.setState({kq: responseJson.id});
    })
    .catch((error) => { console.log(error) });
  }

  render(){
    return(
      <View style={ styles.wapper }>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(HOTEN) => this.setState({HOTEN})}
          placeholder = "Ho Ten"
          value={this.state.HOTEN}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(USERNAME) => this.setState({USERNAME})}
          placeholder = "Username"
          value={this.state.USERNAME}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(PASSWORD) => this.setState({PASSWORD})}
          placeholder = "Password"
          value={this.state.PASSWORD}
        />
        <TouchableOpacity style={ styles.plus } onPress={() => this.clickPlus()}>
          <Text style={ styles.plusText }>Register</Text>
        </TouchableOpacity>
        <View style={ styles.result }>
          <Text>{this.state.kq}</Text>
        </View>
      </View>
    );
  }


}

var styles = StyleSheet.create({
  wapper: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 50
  },
  plus: {
    padding: 30,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: "white",
  },
  result: {
    padding: 30,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  }
});
