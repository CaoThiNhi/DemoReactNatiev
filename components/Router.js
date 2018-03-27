import React from 'react';
import { View, Text } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
 } from 'react-navigation';
import Home from './screens/Home.js';
import Detail from './screens/Detail.js';
import User from './screens/User.js';
import Menu from './screens/Menu.js';

export const HomeStack = StackNavigator({
  ManHinh_Home: {
    screen: Home,
    navigationOptions: {
      title: 'Trang Chu'
    }
  },
  ManHinh_Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Chi Tiet'
    }
  },
});

export const UserStack = StackNavigator({
  ManHinh_User: {
    screen: User,
    navigationOptions: {
      title: 'Tai khoan ca nhan'
    }
  },
});

export const Tabs = TabNavigator({
  Home:{
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'HOME' // giu co dinh ten nut tabbar
    }
  },
  User:{
    screen: UserStack,
    navigationOptions: {
      tabBarLabel: 'USER'
    }
  }
},
{
  //android mac dinh la tabbar top
  // thay doi thanh tabbar bottom
  tabBarPosition: 'bottom',
  //chuc nang co the gat tabbar (ios),
  //android mac dinh co gat chuyen tab
  swipeEnabled: true,

  tabBarOptions:{
    style:{
      backgroundColor: '#dddddd',
    },
    //mau chu tabbar
    activeTintColor: 'red',
    inactiveTintColor: 'green',
  }
});

// export const SideMenu = DrawerNavigator({
//   TabBar:{
//     screen: Tabs,
//   }
// },
// {
//   drawerWidth: 300,
//   drawerPosition: 'left',
//   contentComponent: props => <Menu {...props}/>
// });
