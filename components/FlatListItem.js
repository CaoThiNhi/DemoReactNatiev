import React, {Component} from 'react';
import  {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default class FlatListItem extends Component{

  constructor(props){
    super(props);
    this.state={
      mang: [],
      refresh: false,
      txt: "HELLO",
      page : 1
    }
  }

  render(){
    return(

      <View style = {{ flex: 1 }}>
        <View style = {styles.header}>
          <TouchableOpacity onPress={() => {
            //alert(1)
            this.refs.danhsach.scrollToEnd()
          }}>
            <Text>{this.state.txt}</Text>
          </TouchableOpacity>
        </View>

        <FlatList

          ref = "danhsach"

          refreshing = {this.state.refresh}
          onRefresh = { () => { this.refesh()} }

          onEndReachedThreshold = {-0.2}
          onEndReached = {() => {
            this.setState({
              txt:"CAO NHI"
            });
          }}

          data = { this.state.mang }
          renderItem = { ({item}) =>
            <View style = { styles.container }>
              <View style= { styles.left }>
              <Image
                  style={ styles.hinh }
                  source={{
                    uri:
                    item.Hinh
                  }}
              />
              </View>
              <View style= { styles.right }>

              <Text>{item.Ten}</Text>
              <Text>{item.MoTa}</Text>
              <Text style= { styles.key }>{item.key}</Text>
              </View>
            </View>
          }

          //Chia cot
          // horizontal = {false}
          // numColumns = {3}
        />

      </View>

    );
  }

  refesh(){
    this.setState({
      refresh: true
    });
    fetch("http://192.168.1.170/reactNative/flatlist2.php")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        mang: responseJson,
        refresh: false
      });
    })
   .catch((e) => {console.log(e)});
  }
  componentDidMount(){
      fetch("http://192.168.1.170/reactNative/flatlist.php")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          mang: responseJson
        });
      })
     .catch((e) => {console.log(e)});
  }

}

var styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 50,
    flexDirection:"row"
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  left: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hinh: {
    width: 70,
    height: 70,
    resizeMode: Image.resizeMode.contain,
    borderRadius: 50
  },
  key: {
    color: "red",
    margin: 10
  }
});
