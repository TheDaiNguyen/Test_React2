import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMayTinh } from '../redux/actions';
import Banner from '../components/Banner';
import MayTinhItemItem from '../components/MayTinhItem';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const listMayTinh = useSelector(state => state.listMayTinhInStore.listMayTinh);

    useEffect(() => {
        dispatch(fetchMayTinh());
    }, []);

    if (listMayTinh.length === 0) {
        return <ActivityIndicator size='large' color='green' />;
    }

    return (
        <FlatList
            data={listMayTinh}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <MayTinhItemItem
                    item={item}
                    onEdit={() => navigation.navigate('Edit', { mayTinh: item })}
                />
            )}
            ListHeaderComponent={
                <View style={styles.header}>
                    <Banner />
                    <Text style={styles.title}>Danh sách máy tính</Text>
                    <Button title="Thêm máy tính" onPress={() => navigation.navigate('Add')} />
                </View>
            }
            contentContainerStyle={styles.listContainer}
        />
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});