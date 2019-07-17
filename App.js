import React, {Component} from 'react';
import { StyleSheet, 
  //Text,TextInput, 
  View,StatusBar 
} from 'react-native';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Routes from './src/Routes'

export default class App extends Component {

  render() {
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor="#1c313a" 
      barStyle="light-content" />
      <Routes style={{flex:1}}></Routes>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e91C1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
