import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const PlaceOrder = () => {

    const navigation = useNavigation();

    const [credentials, setCredentials] = useState({
        proName: "",
        proID:"",
        supName:"",
        qty:"",
        price:"",
        total:"",
        date:""
    })

    const onSubmit = async (e) => {
        e.preventDefault();

        const {proName, proID, supName, qty, price, total, date} = credentials;
        const data = {
            proName: proName,
            proID: proID,
            supName: supName,
            qty: qty,
            price: price,
            total: total, 
            date: date
        }
        // if(
        //     !this.state.categoryId ||
        //     !this.state.Category
        //     ) {
        //     alert("Please enter all required fields!");
        //     return;
        // }
        console.log(data);
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View>
                    <Text style={styles.myTitle}>ADD NEW ORDER</Text>
                </View>

                <View style={{padding:20,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Product Name" 
                            defaultValue={credentials.proName}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Product ID" 
                            defaultValue={credentials.proID}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Supplier Name"
                            defaultValue={credentials.supName}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Quantity"
                            defaultValue={credentials.qty}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Rate Price"
                            defaultValue={credentials.price}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Total Price"
                            defaultValue={credentials.total}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
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