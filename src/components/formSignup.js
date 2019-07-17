import React, {Component} from 'react';
//import RadioForm, { RadioButton, RadioButtonInput,RadioButtonLabe} from 'react-native-simple-radio-button';
import { StyleSheet, 
    Text,
    View,
    TextInput, 
    TouchableOpacity,
    RadioButtons,
    CheckBox,
} from 'react-native';

var options=[
    {label: "Male", value:0},
    {label: "Female", value:1},
];

var radio_props = [
    {label: 'Male', value: 0 },
    {label: 'Female', value: 1 }
  ];

export default class Logo extends Component {
    
    
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.inputBox}
                    placeholder = "First Name"
                    placeholderTextColor ='#ffffff'
                 />
                 <TextInput 
                    style={styles.inputBox}
                    placeholder = "Last Name"
                    placeholderTextColor ='#ffffff'
                 />
                 <TextInput 
                    style={styles.inputBox}
                    placeholder = "Email"
                    placeholderTextColor ='#ffffff'
                 />
                 <TextInput 
                    style={styles.inputBox}
                    placeholder = "Password"
                    secureTextEntry={true}
                    placeholderTextColor ='#ffffff'
                 />
                 <TextInput
                    style={styles.inputBox}
                    placeholder = "Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor ='#ffffff'
                 />
                 <Text style={{fontSize: 16,
                                color: '#ffffff',
                                textAlign: 'left'}}>Gender
                </Text>
                {/*<RadioGroup>
                    <RadioButton value={'M'} >
                        <Text>Male</Text>
                    </RadioButton>
 
                    <RadioButton value={'F'}>
                        <Text>Female</Text>
                    </RadioButton>
                </RadioGroup>*/}
                {/*<RadioForm
                    radio_props={options}
                    initial={-1}
                    onPress={(value) => {}}
                />*/}
                 <TextInput 
                    style={styles.inputBox}
                    placeholder = "Phone Number"
                    secureTextEntry={true}
                    placeholderTextColor ='#ffffff'
                 />
                 <View style={{
                            paddingVertical: 12,
                            flexDirection:'row'}}>
                    <CheckBox checked={true} />
                    <Text style={{fontSize: 16,
                            color: '#ffffff',
                            textAlign: 'left'}}>I agree the Terms and conditions.
                    </Text>
                </View>
                 <TouchableOpacity style={styles.button}>
                     <Text style={styles.Textbutton}>{this.props.type}</Text>
                 </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        flexGrow: 1,
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        color: '#ffffff' ,
        marginVertical :5, 
    },
    Textbutton: {
        fontSize: 18,
        fontWeight: '500',
        color: '#E91c1a',
        textAlign: 'center',
    },
    button: {
        width: 300,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginVertical :10,
        paddingVertical: 10,
    }
  });