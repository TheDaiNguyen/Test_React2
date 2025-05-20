import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateMayTinhInAPI } from '../redux/actions';

const EditScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { mayTinh } = route.params; // Lấy từ params
    const [ten, setTen] = useState(mayTinh.ten_may_ph56563);
    // const [giaBan, setGiaBan] = useState(dienThoai.gia_ban_ph56563.toString());
    const [moTa, setMoTa] = useState(mayTinh.mo_ta_ph56563);
    const [ngayBaoHanh, setNgayBaoHanh] = useState(mayTinh.ngay_bao_hanh_ph56563);
    const [cpu, setCPU] = useState(mayTinh.cpu_ph56563);
    const [ram, setRAM] = useState(mayTinh.ram_ph56563);
    const [hdd, setHDD] = useState(mayTinh.hdd_ph56563);
    const [hinhAnh, setHinhAnh] = useState(mayTinh.hinh_anh_ph56563)  ;

    const handleEdit = () => {
        const updateMayTinh = {
            ...mayTinh,
            ten_may_ph56563: ten,
            // gia_ban_ph56563: Number(giaBan),
            mo_ta_ph56563: moTa,
            ngay_bao_hanh_ph56563: ngayBaoHanh,
            cpu_ph56563: cpu,
            ram_ph56563: ram,
            hdd_ph56563: Number(hdd),
            hinh_anh_ph56563: hinhAnh,
        };
        dispatch(updateMayTinhInAPI(updateMayTinh)); // Cập nhật
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Tên máy tính" value={ten} onChangeText={setTen} style={styles.input} />
            <TextInput placeholder="Mô tả" value={moTa} onChangeText={setMoTa} style={styles.input} />
            <TextInput placeholder="Ngày bảo hành" value={ngayBaoHanh} onChangeText={setNgayBaoHanh} style={styles.input} />
            <TextInput placeholder="CPU" value={cpu} onChangeText={setCPU} style={styles.input} />
            <TextInput placeholder="RAM" value={ram} onChangeText={setRAM} style={styles.input} />
            <TextInput placeholder="HDD" keyboardType='numeric' value={hdd} onChangeText={setHDD} style={styles.input} />
            <TextInput placeholder="Hình ảnh URL" value={hinhAnh} onChangeText={setHinhAnh} style={styles.input} />
            <Button title="Cập nhật" onPress={handleEdit} />
        </View>
    );
};

export default EditScreen;

const styles = StyleSheet.create({
    container: { padding: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8 },
});