import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

 const Home = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image source={require("../assets/images/hello.png")}
                        resizeMode='contain'
                        style={{width:'100%'}}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.myTitle}>Hellow My App</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
 }


 const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    myTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
 });


 export default Home;