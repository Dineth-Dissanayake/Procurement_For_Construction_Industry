import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import AuthContext from "../api/AuthContext";


const PlaceOrder = () => {

    const navigation = useNavigation();
    const {addOrder} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        proName: '',
        proID: '',
        supName: '',
        qty: '',
        price: '',
        total: '',
        date: '',
        status: ''
    });

    const handleInputChange = (value, name) => {
        setCredentials({ ...credentials, [name]: value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if(
            !credentials.proName ||
            !credentials.proID ||
            !credentials.supName ||
            !credentials.qty ||
            !credentials.price ||
            !credentials.total ||
            !credentials.date
            ) {
                alert("Please enter all required fields!");
                return;
            }
        console.log(credentials);
        addOrder(credentials);
        navigation.navigate("Home");
        setCredentials({
            proName: '',
            proID: '',
            supName: '',
            qty: '',
            price: '',
            total: '',
            date: '',
            status: ''
        })
    };

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View>
                    <Text style={styles.myTitle}>ADD NEW ORDER</Text>
                </View>

                <View style={{padding:20,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'proName'}
                            onChangeText={(text) => {
                                handleInputChange(text, 'proName')
                            }}
                            style={styles.textInput} 
                            placeholder="Product Name" 
                            defaultValue={credentials.proName}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'proID'}
                            onChangeText={(text) => {
                                handleInputChange(text, 'proID')
                            }}
                            style={styles.textInput} 
                            placeholder="Product ID" 
                            defaultValue={credentials.proID}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'supName'}
                            onChangeText={(text) => {
                                handleInputChange(text, 'supName')
                            }}
                            style={styles.textInput} 
                            placeholder="Supplier Name"
                            defaultValue={credentials.supName}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'qty'}
                            onChangeText={(text) => {
                                handleInputChange(text, 'qty')
                            }}
                            style={styles.textInput} 
                            placeholder="Quantity"
                            defaultValue={credentials.qty}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'price'}
                            onChangeText={(text) => {
                                handleInputChange(text, 'price')
                            }}
                            style={styles.textInput} 
                            placeholder="Rate Price"
                            defaultValue={credentials.price}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            name={'total'}
                            onChangeText={(text) => {
                                handleInputChange(text, 'total')
                            }}
                            style={styles.textInput} 
                            placeholder="Total Price"
                            defaultValue={credentials.total}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            name={'date'}
                            onChangeText={(text) => {
                                handleInputChange(text, 'date')
                            }}
                            style={styles.textInput} 
                            placeholder="Date"
                            defaultValue={credentials.date}
                        />
                    </View>

                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={onSubmit}>
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