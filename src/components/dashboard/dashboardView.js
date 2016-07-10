import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';

import { connect } from 'react-redux';
import { fetchCharacters } from '../../actions/index';

import styles from './dashboardViewStyle';

class DashboardView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };
        this.countComic = 0;
    }

    componentDidMount() {
        this.props.fetchCharacters().then(() => {
            this.fetchData();
        });
    }

    fetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.characters),
            loaded: true
        });
    }

    onComicPressed(title, count) {
      // TODO: Add navigation to Details page passing the comics list
      // and the selected index
    }

    renderComic(comic) {
      this.countComic = this.countComic+1;
      let count = this.countComic-1;
      return (
        <TouchableHighlight onPress={() => this.onComicPressed(comic.title, count)} >
          <Image source={{uri: `${comic.thumbnail.path}.jpg`}}  style={styles.backgroundImage}>
            <View style={styles.rightContainer} >
              <Text style={styles.title}>{comic.name}</Text>
              <Text style={styles.available}>{comic.comics.available}</Text>
            </View>
          </Image>
        </TouchableHighlight>
      );
    }

    render () {
      if (!this.state.loaded) {
        return (
          <View style={styles.container}>
            <Text style={[styles.loading, {paddingTop: 35}]}> Cargando . . . </Text>
          </View>
        );
      }
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderComic.bind(this)}
          style={styles.listview}
          />
      );
    }
}

function mapStateToProps(state) {
    return { characters: state.charactersReducer.characters };
}

export default connect(mapStateToProps, { fetchCharacters })(DashboardView);
