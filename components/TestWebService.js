import React, {Component} from 'react';
import  {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class TestWebService extends Component{
  constructor(props){
    super(props);
    this.state = {
      so1:"",
      so2:"",
      kq:"..."
    }
  }

  clickPlus(){
    fetch('http://192.168.1.99/reactNative/tinhtong.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstParam: this.state.so1,
        secondParam: this.state.so2
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("++++++++");
      console.log(responseJson);
      this.setState({kq: responseJson.ketqua});
    })
    .catch((error) => { console.log(error) });
  }

  render(){
    return(
      <View style={ styles.wapper }>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(so1) => this.setState({so1})}
          value={this.state.so1}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(so2) => this.setState({so2})}
          value={this.state.so2}
        />
        <TouchableOpacity style={ styles.plus } onPress={() => this.clickPlus()}>
          <Text style={ styles.plusText }>Cong</Text>
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
