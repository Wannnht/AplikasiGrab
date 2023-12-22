import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window')
const PromoItemSub = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.promoImage} source={props.image} />
      <View style={styles.textPromo}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, }}>{props.text}</Text>
      </View>
      {
        props.diskon ? <View style={styles.textDiskon}><Text>{props.diskon}</Text></View> :

          <View></View>
      }
      <View style={{marginLeft:10,marginBottom:8, flexDirection:'row'}}>
        <Ionicons name="calendar" size={16} color="#575757" />
        <Text style={{marginLeft:8 ,fontSize:13, color:'#575757'}}>{props.masaBerlaku}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 8,
    width: width / 2 - 27,
    marginBottom: 18,
    marginRight: 18,
  },
  promoImage: {
    height: width / 2 - 27,
    width: width / 2 - 27,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textPromo: {
    marginLeft: 10,
    marginVertical: 10,
  },
  textDiskon: {
    position: 'absolute',
    top: 10,
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 4,
    left: 4,
  },
})

export default PromoItemSub