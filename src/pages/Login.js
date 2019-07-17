import React, {Component} from 'react';
import { StyleSheet, Text,TextInput, View,StatusBar } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/form';

export default class Login extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>DONT HAVE AN ACCOUNT?</Text>
                    <Text style={styles.signupButton}> SignUp</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e91C1A',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextCont: {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 16,
      flexDirection:'row',
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16,
    },
    signupButton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',
    }
  });