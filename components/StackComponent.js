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
