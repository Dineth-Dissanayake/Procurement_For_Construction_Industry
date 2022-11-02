import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const PlaceOrder = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View>
                    <Text style={styles.myTitle}>ADD NEW ORDER</Text>
                </View>

                <View style={{padding:20,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Product Name" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Product ID" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Supplier Name"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Quantity"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Rate Price" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Total Price" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Date"/>
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={()=>{navigation.navigate("Home")}}>
                            <Text style={{textAlign:'center', fontSize:16, color:'#fff', fontWeight:'bold'}} >SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    myTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#757575',
        marginLeft:10
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

export default PlaceOrder;