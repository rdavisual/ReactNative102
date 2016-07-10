import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';

import Swiper from 'react-native-swiper';
import styles from './comicDetailViewStyle';


class ComicDetailView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      const { passProps } = this.props.route;
      return (
        <View key={passProps.comic.id} style={styles.container}>
          <Image source={{uri: `${passProps.comic.thumbnail.path}.jpg`}}
          style={styles.image} />
        </View>
      );
    }
}

export default ComicDetailView;
