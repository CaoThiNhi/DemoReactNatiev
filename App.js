/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ConNguoi from "./components/ConNguoi.js";
import { HomeStack } from './components/StackComponent.js';
import { Tabs } from './components/TabComponent.js';
import { SideMenu } from "./components/SideMenuComponent.js";
import FlatListItem from "./components/FlatListItem.js";
import TestWebService from "./components/TestWebService.js";
import DangKi from "./components/DangKi.js";
import AsyncStorage from "./components/AsyncStorage.js";
import Layout from "./components/Layout.js";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // Components
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to My Shop!
      //   </Text>
      //   <ConNguoi hoten="Teo"/>
      //   <ConNguoi hoten="Ti"/>
      //   <ConNguoi hoten="Tun"/>
      // </View>

      //navigation
      //<Tabs />
      <SideMenu />

      //Flatlist
      //<FlatListItem />

      //GET/POST WebService
      //<TestWebService />
      //<DangKi />

      //AsynStorage
      //<AsyncStorage />

      //Layout
      //< Layout/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
