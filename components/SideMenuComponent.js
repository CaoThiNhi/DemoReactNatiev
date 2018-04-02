import React from 'react';
import { View, Text } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
 } from 'react-navigation';
import { Tabs } from './TabComponent.js';
import Menu from './screens/Menu.js';

export const SideMenu = DrawerNavigator({
  TabBar:{
    screen: Tabs,
  }
},
{
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => <Menu {...props}/>
});
