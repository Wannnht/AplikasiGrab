import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, onPress } from 'react-native';

const FiturUtamaSub = (props) => {
  return (
    <TouchableOpacity style={{ width: '25%', alignItems: 'center' }}>
      <Image style={styles.imageFiturUtama} source={props.image} />
      <Text style={styles.textFiturUtama}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imageFiturUtama: {
    height: 55,
    width: 55,
    marginTop: 15,
  },
  textFiturUtama: {
    textAlign: 'center',
    marginTop: 4,
  },
})

export default FiturUtamaSub