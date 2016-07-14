import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight
} from 'react-native';
import styles from '../heroes/heroesViewStyle';
import Login from '../login/loginView';
import Tabs from '../tabs/tabs';
import ComicDetailView from '../comicDetail/comicDetailView';
import HeroesView from '../heroes/heroesView';

const NavigatorBarRouterMapper = {
    LeftButton: (route, navigator, index) => {
        if (index === 0) {
            return null;
        }
        return (
            <TouchableHighlight onPress={() => navigator.pop() }>
                <Text style={{marginTop: 10, marginLeft: 20, color: '#007AFF'}}>Back</Text>
            </TouchableHighlight>
        );
    },
    RightButton: (route, navigator, index) => {
        return null;
    },
    Title:  (route, navigator, index) => {
        if (route.name === 'Login' || route.name === 'Dashboard') {
            return null;
        }
        return (
            <Text style={{marginTop:10, color: '#007AFF'}}>{route.name}</Text>
        );
    },

};

class App extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
        case 'Login':
            return (
                <Login {...route.props} navigator={navigator} route={route} />
            );
        case 'HeroesView':
            return (
                <HeroesView {...route.props} navigator={navigator} route={route} />
            );
        case 'Dashboard':
            return (
                <Tabs {...route.props} navigator={navigator} route={route} />
            );
        case 'Details':
            return (
                <ComicDetailView {...route.props} navigator={navigator} route={route} />
            );
        }
    }
    render() {
        return (
          <Navigator
              style={{backgroundColor: '#fff'}}
              initialRoute={{name:'Login'}}
              renderScene={this.renderScene}
              configureScene={(route) => {
                  if (route.sceneConfig) {
                      return route.sceneConfig;
                  }
                  return Navigator.SceneConfigs.FloatFromRight;    // TODO: Change the animation type
              }}
              navigationBar={
                  <Navigator.NavigationBar routeMapper={NavigatorBarRouterMapper} />
              }
          />
        );
    }
}

export default App;
