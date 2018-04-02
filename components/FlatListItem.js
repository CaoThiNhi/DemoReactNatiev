import React, {Component} from 'react';
import  {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
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
          onRefresh = { () => {this.refesh()} }

          onEndReachedThreshold = {0.1}
          onEndReached = { () => {this.loadMore()} }

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
    fetch("http://192.168.1.170/reactNative/flatlist3.php?trang=" + this.state.page)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        mang: responseJson,
        refresh: false,
        page: this.state.page + 1
      });
    })
   .catch((e) => {console.log(e)});
  }

  loadMore(){
    mang1 = []
    fetch("http://192.168.1.170/reactNative/flatlist3.php?trang=" + this.state.page)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.length != 0){
        mang1 = mang1.concat(responseJson);
        this.setState({
          mang: mang1,
          txt:"CAO NHI",
          page: this.state.page + 1
        });
      }else{
        Alert.alert(
          'THONG BAO',
          'Da het du lieu !',
          [
            {text: 'OK', onPress:() => console.log('OK Pressed')},
          ]
        )
      }

    })
   .catch((e) => {console.log(e)});
  }

  componentDidMount(){
      fetch("http://192.168.1.170/reactNative/flatlist3.php?trang=" + this.state.page)
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
