import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';



const { width } = Dimensions.get('window')
const FiturPayHiderSub = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.rekomendasiImage} source={props.gambar} />
            <View style={styles.text}>
                <Text style={styles.textTransaksi}>{props.text}</Text>
                <Text style={{ alignSelf: 'center', color: '#3399FF', fontWeight: 'bold', top: 5, }}>{props.text1}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 10,
        width: '100%',
        marginBottom: 18,
        marginTop: 50,
    },
    rekomendasiImage: {
        height: 75,
        width: 150,
        alignSelf: 'center'
    },
    text: {
        top: 50,
        alignSelf: 'center',
    },
})

export default FiturPayHiderSub