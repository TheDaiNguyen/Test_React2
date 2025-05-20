import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function MayTinhItemItem({ item, onEdit, onDelete }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.hinh_anh_ph56563 }} style={styles.image} />
            <View style={styles.info}>
                <Text>{item.ten_may_ph56563}</Text>
                <Text>{item.mo_ta_ph56563}</Text>
                <Text>{item.ngay_bao_hanh_ph56563}</Text>
                <Text> i{item.cpu_ph56563}</Text>
                <Text>{item.ram_ph56563} GB</Text>
                <Text>{item.hdd_ph56563}</Text>
                <Button title="Sửa" onPress={onEdit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', margin: 10 },
    image: { width: 80, height: 80, marginRight: 10 },
    info: { flex: 1 },
    button: {
        backgroundColor: '#4CAF50',
        padding: 6,
        marginVertical: 4,
        borderRadius: 5,
        alignItems: 'center'
    },
    deleteButton: {
        backgroundColor: '#f44336'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});