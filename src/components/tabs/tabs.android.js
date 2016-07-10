import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  ActivityIndicator,
  ToolbarAndroid,
  ViewPagerAndroid
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import DashboardView from '../dashboard/dashboardView';
import HeroesView from '../heroes/heroesView';

class Tabs extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return null;
    }
}

export default Tabs;
