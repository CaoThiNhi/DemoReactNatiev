//Luu tru gia tri local trong may nguoi dung
//Dang nhap
//Gio hang
//Ngon ngu
import React, {Component} from 'react';
import  {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage
} from 'react-native';

export default class AsynStorage extends Component{

  save = async() => {
    try{
      await AsyncStorage.setItem('@AAA:key', 'FAST & FURIOUS 8');
      console.log("SAVE OK!!!!!!");
    }catch(e){
      console.log(e);
    }
  }

  get = async() => {
    try{
      const value = await AsyncStorage.getItem('@AAA:key');
      if (value !== null){
        // We have data!!
        console.log(value);
      }
    }catch(e){
      console.log(e);
    }
  }

  render(){
    return(
      <View style={ styles.wrapper }>
        <Text>AAAAA</Text>
        <TouchableOpacity style={ styles.button }
          onPress={() => { this.save() }}>
          <Text style={ styles.text }>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button }
          onPress={() => { this.get() }}>
          <Text style={ styles.text }>GET</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "yellow"
  },
  button: {
    borderWidth: 1,
    borderColor: "yellow",
    width: 200,
    padding: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
