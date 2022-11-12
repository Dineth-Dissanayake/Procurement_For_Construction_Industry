import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import AuthContext from "../../api/AuthContext";

const Register = () => {

    const navigation = useNavigation();
    const {registerUser} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (value, name) => {
        setCredentials({ ...credentials, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!credentials.username || !credentials.email || !credentials.password || !credentials.confirmPassword) {
            alert("Please enter all required fields!");
            return;
        }

        if(credentials.password !== credentials.confirmPassword) {
            alert("Password do not match!");
            return;
        }
        //console.log(credentials);
        const userData = { ...credentials, confirmPassword: undefined };
        registerUser(userData);
        navigation.navigate("Login");
        setCredentials({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/images/auth_bg.png')}
                        resizeMode={'cover'}
                        style={styles.defaultBg} 
                    />
                </View>
                <View style={{padding:10,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Image source={require('../../assets/images/logo.png')}
                                resizeMode={'contain'}
                                style={{width:150,height:150,borderRadius:100}}
                            />
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'username'}
                            value={credentials.username}
                            onChangeText={(text) => {
                                handleInputChange(text, 'username')
                            }}
                            placeholder="Username"
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'email'}
                            value={credentials.email}
                            onChangeText={(text) => {
                                handleInputChange(text, 'email')
                            }}
                            placeholder="Email Address"
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'password'}
                            value={credentials.password}
                            onChangeText={(text) => {
                                handleInputChange(text, 'password')
                            }}
                            style={styles.textInput}
                            placeholder="Password" 
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'confirmPassword'}
                            value={credentials.confirmPassword}
                            onChangeText={(text) => {
                                handleInputChange(text, 'confirmPassword')
                            }}
                            style={styles.textInput} 
                            placeholder="Confirm Password" 
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={handleSubmit}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={{color:'#2bff00', textAlign:'center', fontSize:16, fontWeight:'bold'}} >Already have an Account? Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    defaultBg: {
        width: '100%',
        height:120
    },
    formInput: {
        marginTop: 10,
        padding: 10
    },
    textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        borderRadius: 10
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#4287f5',
        borderRadius: 10
    }
 });

export default Register;