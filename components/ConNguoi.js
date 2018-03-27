import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

type Props = {};

export default class ConNguoi extends Component{
  constructor(props){
    super(props);
    this.state={
      chieucao:0
    }
  }

  clickMe(){
    console.log("CLICK ME!");
    this.setState({
      chieucao:this.state.chieucao + 1
    });
  }

  render(){
    return(
      <TouchableOpacity onPress={()=>{this.clickMe()}}>
      <View style={styles.instructions}>
        <Text>Toi la: {this.props.hoten}</Text>
        <Text>Chieu cao: {this.state.chieucao}</Text>
      </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    height: 100,
    width: 200,
    backgroundColor: 'yellow'
  }
});
