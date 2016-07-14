import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import styles from './heroesViewStyle';

class HeroesView extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <View>
                <Text style={{marginTop:50}}>un texto</Text>
            </View>
        );
    }
}

export default HeroesView;
