import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMayTinhToAPI } from '../redux/actions';

const AddScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [tenMay, setTenMay] = useState('');
    const [moTa, setMoTa] = useState('');
    const [ngayBaoHanh, setNgayBaoHanh] = useState('');
    const [cpu, setCPU] = useState('');
    const [ram, setRAM] = useState('');
    const [hdd, setHDD] = useState('');
    const [hinhAnh, setHinhAnh] = useState('');

    const handleAdd = () => {
        const newMayTinh = {
            ten_may_ph56563: tenMay,
            mo_ta_ph56563: moTa,
            ngay_bao_hanh_ph56563: ngayBaoHanh,
            cpu_ph56563: Number(cpu),
            ram_ph56563: Number(ram),
            hdd_ph56563: Number(hdd),
            hinh_anh_ph56563: hinhAnh,
        };
        if(tenMay =='' && moTa == '' && ngayBaoHanh =='' && cpu == '' && ram == '' && hdd == ""){
            Alert.alert('Vui lòng nhập đủ thông tin')
        }else{
            dispatch(addMayTinhToAPI(newMayTinh));
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Tên máy tính" onChangeText={setTenMay} style={styles.input} />
            <TextInput placeholder="Mô tả" onChangeText={setMoTa} style={styles.input} />
            <TextInput placeholder="Ngày bảo hành" onChangeText={setNgayBaoHanh} style={styles.input} />
            <TextInput placeholder="CPU" keyboardType='numeric' onChangeText={setCPU} style={styles.input} />
            <TextInput placeholder="RAM" keyboardType='numeric' onChangeText={setRAM} style={styles.input} />
            <TextInput placeholder="HDD" keyboardType='numeric' onChangeText={setHDD} style={styles.input} />
            <TextInput placeholder="Hình ảnh URL" onChangeText={setHinhAnh} style={styles.input} />
            <Button title="Thêm" onPress={handleAdd} />
        </View>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8 },
});