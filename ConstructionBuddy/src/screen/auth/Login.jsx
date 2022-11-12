import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import AuthContext from "../../api/AuthContext";

const Login = () => {

    const navigation = useNavigation();
    const {loginUser} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (value, name) => {
        setCredentials({ ...credentials, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!credentials.username || !credentials.password) {
            alert("Please enter all required fields!");
            return;
        }
        //console.log(credentials);
        loginUser(credentials);
        navigation.navigate("Home");
        setCredentials({
            username: '',
            password: ''
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
                            name={'password'}
                            value={credentials.password}
                            placeholder="Password"
                            onChangeText={(text) => {
                                handleInputChange(text, 'password')
                            }}
                            secureTextEntry
                            style={styles.textInput}
                        />
                    </View>

                    {/* <Text>{credentials.username+""+credentials.password}</Text> */}

                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Forget")}}>
                            <Text style={{color:'#2bff00', textAlign:'right', fontSize:16, fontWeight:'bold'}} >Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={handleSubmit}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
                            <Text style={{color:'#2bff00', textAlign:'center', fontSize:16, fontWeight:'bold'}} >Need Account? Register Now</Text>
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

export default Login;