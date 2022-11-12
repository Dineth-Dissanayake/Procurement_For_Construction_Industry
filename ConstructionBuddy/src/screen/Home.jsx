import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AuthContext from "../api/AuthContext";

 const Home = () => {

    const navigation = useNavigation();
    const { user, setUser } = useContext(AuthContext);

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/images/auth_bg.png')}
                        resizeMode={'cover'}
                        style={styles.defaultBg} 
                    />
                </View>

                <View style={styles.container}>
                    <Text style={styles.myTitle}>Welcome Back,</Text>
                    <Text style={styles.myTitle}>USER!</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:100}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{navigation.navigate("PlaceOrder")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >New Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{navigation.navigate("OrderHistory")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Order History</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',marginTop:50}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{navigation.navigate("Items")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Items</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{navigation.navigate("Supplier")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Suppliers</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={()=>{navigation.navigate("Login")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >Logout</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
 }


 const styles = StyleSheet.create({
    myTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        color:'#757575',
        marginLeft:10
    },
    formInput: {
        marginTop: 10,
        padding: 10
    },
    defaultButton1: {
        padding: 15,
        height:100,
        width:125,
        backgroundColor: '#4287f5',
        borderRadius: 10,
        marginLeft:50
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#f03a2e',
        borderRadius: 10,
        width:150,
        marginLeft:115,
        marginTop:120,
    },
    defaultBg: {
        width: '100%',
        height:80
    },
 });

 export default Home;