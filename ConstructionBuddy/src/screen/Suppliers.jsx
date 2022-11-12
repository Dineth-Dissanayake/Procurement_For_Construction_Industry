import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions, FlatList } from "react-native";

const data = [
    {
        BusinessName: 'Dinna (Pvt) Ltd.',
        supplierID: 'S 123',
        supplierName: 'Dineth',
        NIC: '2000542374',
        TeleNo: 714512365,
        Address: 'No:15,colombo'
    },

    {
        BusinessName: 'Space Creations',
        supplierID: 'S 002',
        supplierName: 'Kasun',
        NIC: '7423147230',
        TeleNo: 251236456,
        Address: 'Kandy Road, Kadawatha'
    },
   
]

const Supplier = () => {

    const [dataList, setDataList] = useState(data);

    const renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={styles.itemBody}>
                    <Text style={styles.itemName}>{item.BusinessName}</Text>
                    <Text style={styles.itemOthers}>Supplier ID: {item.supplierID}</Text>
                    <Text style={styles.itemOthers}>Supplier Name: {item.supplierName}</Text>
                    <Text style={styles.itemOthers}>NIC: {item.NIC}</Text>
                    <Text style={styles.itemOthers}>Phone Number: {item.TeleNo}</Text>
                    <Text style={styles.itemOthers}>Address: {item.Address}</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>

                <FlatList 
                    data={dataList}
                    keyExtractor={(e, i) => i.toString()}
                    renderItem={renderItem}
                />

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    listTab: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'black',
        padding: 5,
        width: 95,
        justifyContent: 'center'
    },
    textTab: {
        fontSize: 16
    },
    btnTabActive: {
        backgroundColor: '#2c4af5'
    },
    textTabActive: {
        color: '#fff'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    itemBody: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#96f1ff',
        borderRadius: 20
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    itemOthers: {
        fontSize: 16,
        textAlign: 'center'
    },
    itemStatus: {
        color: 'red',
        paddingHorizontal: 10,
        textAlign: 'right'
    }
});

export default Supplier;