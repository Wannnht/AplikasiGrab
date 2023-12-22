import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FiturPayHiderSub from "./FiturPayHiderSub";


const FiturPayHider = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 30, top: 20, }}>
                    Transaksi terkini</Text>
                <View style={styles.imageTransaksi}>
                    <FiturPayHiderSub gambar={require('../icon/buku-riwayat.png')}
                        text="There's no recent activity to show here."
                        text1="See past transactions"
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
})

export default FiturPayHider