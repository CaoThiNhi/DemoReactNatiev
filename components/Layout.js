import React, {Component} from 'react';
import  {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Layout extends Component{
  render(){
    return(
      <View style={ styles.wrapper }>
        <View style={ styles.ovuong }>
        
        </View>
        <View style={ styles.ovuong }>
          <View style={ styles.o1 }>
            <Text>Layout</Text>
          </View>
          <View style={ styles.o2 }>
            <Text>Layout</Text>
          </View>
          <View style={ styles.o3 }>
            <Text>Layout</Text>
          </View>
        </View>
        <View style={ styles.ovuong }>

        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
    //flexDirection: "row" // mac dinh la column : hang doc
  },
  ovuong: {
    backgroundColor: 'red',
    borderWidth: 1,
    flex: 1,
    flexDirection: "row"
  },
  o1: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  o2: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  o3: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
