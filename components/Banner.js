import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Banner = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.8TijEinY-ks-e16pXl6TzQHaEK&pid=Api&P=0&h=220' }}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
});

export default Banner;