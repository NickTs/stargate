import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <Text style={styles.welcome}>Hello Nick</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
