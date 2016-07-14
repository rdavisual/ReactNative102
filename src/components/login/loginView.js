import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Alert,
    Image,
    StyleSheet
} from 'react-native';

import styles from './loginViewStyle';

class loginView extends Component {
    constructor(props) {
        super(props);
    }

  onLogin() {
    //   this.prueba();
    Alert.alert('Entrada','¿estas seguro?', [
      {
        text: 'Sí',
        onPress: this.accept.bind(this)
      }, {
        text: 'No',
        onPress: this.cancel.bind(this)
      } // TODO: Add another option to check how the alert modifies its view
    ]);
  }

  accept() {
    // TODO: replace current page into the Dashboard page using this.props.navigator
    // console.log('accept');
    this.props.navigator.replace({
        title: 'Dashboard',
        name: 'Dashboard',
        passProps: {}
    });
  }
  cancel() {
      console.log('cancel');
  }

  render () {
      return (
        <Image style={styles.container} source={{uri: 'https://mfiles.alphacoders.com/597/597688.jpg'}}>
          <View>
            <Text style={styles.title} >Boton para entrar:</Text>
            <TouchableHighlight style={styles.botton} onPress={() => this.onLogin()} >
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableHighlight>
          </View>
        </Image>
      );
  }
}

export default loginView;
