import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FiturPaySub from "./FiturPaySub";
import FiturPayHider from "./FiturPayHider";


const FiturPay = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 30, top: 20, }}>
                Rekomendasi buat kamu</Text>
            <ScrollView horizontal={true} style={styles.scrollViewStyle}>
                <FiturPaySub image={require('../icon/1.png')} />
                <FiturPaySub image={require('../icon/2.png')} />
                <FiturPaySub image={require('../icon/3.png')} />
                <FiturPaySub image={require('../icon/4.png')} />
                <FiturPaySub image={require('../icon/5.png')} />
                <FiturPaySub image={require('../icon/6.png')} />
                <FiturPaySub image={require('../icon/7.png')} />
                <FiturPaySub image={require('../icon/8.png')} />
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#red',
},
    scrollViewStyle: {
        flexDirection: 'row',
        marginHorizontal: 30,
    },
})

export default FiturPay