/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight
} from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>ReactNative102</Text>
            </View>
        );
    }
}

export default App;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(110,110,110,.05)',
    },
    title: {
        marginTop: 100,
        fontSize: 25,
    }
});
