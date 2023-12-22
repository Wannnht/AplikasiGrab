import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';



const { width } = Dimensions.get('window')
const FiturPaySub = (props) => {
    return (
            <View style={styles.wrapper}>
                <Image style={styles.rekomendasiImage} source={props.image} />
            </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 10,
        width: width / 2 - 27,
        marginBottom: 18,
        marginTop: 50,
    },
    rekomendasiImage: {
        height: width / 2 - 27,
        width: width / 2 - 27,
        borderRadius: 10,
    },
})

export default FiturPaySub