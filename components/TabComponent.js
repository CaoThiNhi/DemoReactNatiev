import React from 'react';
import { View, Text } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
 } from 'react-navigation';
import { HomeStack } from './StackComponent.js';
import { UserStack } from './StackComponent.js';

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
