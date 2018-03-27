import React, {Component} from 'react';
import  {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Home extends Component{
  // static navigationOptions = {
  //   title: 'Trang Chu'
  // }
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
        <Text>Home</Text>
        <TouchableOpacity style={{backgroundColor:'green'}}
          onPress={() => { this.props.navigation.navigate('ManHinh_Detail',{ thamso: 'Hello Nhi'}) }}>
          <Text style={{color:'#fff', fontSize: 20, padding: 10}}>Go to Detail</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor:'red'}}
          onPress={() => { this.props.navigation.navigate('DrawerOpen') }}> // open drawer
          <Text style={{color:'#fff', fontSize: 20, padding: 10}}>Go to Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
