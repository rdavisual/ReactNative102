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
    }

    componentDidMount() {
        this.props.fetchCharacters();
    }

    render () {
        return null;
    }
}

function mapStateToProps(state) {
    return { characters: state.charactersReducer.characters };
}

export default connect(mapStateToProps, { fetchCharacters })(DashboardView);
