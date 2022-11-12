import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, FlatList } from "react-native";

const headingTab = [
    {
        status: 'All'
    },
    {
        status: 'Approved'
    },
    {
        status: 'Pending'
    },
    {
        status: 'Declined'
    }
]

const data = [
    {
        name: 'Cement',
        quantity: 100,
        supplier: 'Greshan Bandara',
        date: '09-08-2022',
        status: 'Pending'
    },
    {
        name: 'White Paint',
        quantity: 200,
        supplier: 'Greshan Bandara',
        date: '09-08-2022',
        status: 'Approved'
    },
    {
        name: 'Earth Wire Role',
        quantity: 20,
        supplier: 'Greshan Bandara',
        date: '09-08-2022',
        status: 'Pending'
    },
    {
        name: 'Weather Sheild Paint',
        quantity: 5,
        supplier: 'Greshan Bandara',
        date: '09-08-2022',
        status: 'Declined'
    }
]

const OrderHistory = () => {

    const [status, setStatus] = useState('All');
    const [dataList, setDataList] = useState(data);

    const setStatusFilter = status => {
        if (status !== 'All') {
            setDataList([...data.filter(e => e.status === status)])
        } else {
            setDataList(data)
        }
        setStatus(status)
    };

    const renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={styles.itemBody}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    {/* <Text style={styles.itemStatus}>{item.status}</Text> */}
                    <Text style={styles.itemOthers}>Quantity: {item.quantity}</Text>
                    <Text style={styles.itemOthers}>Supplier: {item.supplier}</Text>
                    <Text style={styles.itemOthers}>Ordered Date: {item.date}</Text>
                </View>

                {/* <View style={styles.itemStatus}>
                    <Text>{item.status}</Text>
                </View> */}
            </View>
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.listTab}>
                    {
                        headingTab.map(e => (
                            <TouchableOpacity style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                                onPress={() => setStatusFilter(e.status)}
                            >
                                <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>
                                    {e.status}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>

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

export default OrderHistory;