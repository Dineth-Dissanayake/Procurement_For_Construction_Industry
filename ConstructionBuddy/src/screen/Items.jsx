import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions, FlatList } from "react-native";

const data = [
    {
        name: 'Product 01',
        productPrice: 1000,
        count: 10,
        productDescription: 'Description 01',
        status: 'Available'
    },
    {
        name: 'Product 02',
        productPrice: 2000,
        count: 100,
        productDescription: 'Description 02',
        status: 'Available'
    },
    {
        name: 'Product 03',
        productPrice: 3000,
        count: 20,
        productDescription: 'Description 03',
        status: 'Available'
    },
    {
        name: 'Product 04',
        productPrice: 4000,
        count: 100,
        productDescription: 'Description 04',
        status: 'Available'
    }
]

const Items = () => {

    const [dataList, setDataList] = useState(data);

    const renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={styles.itemBody}>
                    <Text style={styles.itemStatus}>{item.status}</Text>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemOthers}>Product Price: {item.productPrice}</Text>
                    <Text style={styles.itemOthers}>Product Count: {item.count}</Text>
                    <Text style={styles.itemOthers}>Description: {item.productDescription}</Text>
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

export default Items;