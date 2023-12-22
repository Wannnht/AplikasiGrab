import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const OvoComponent = () => {
  return (
    <View style={styles.wrapperPay}>
      <View>
        <Image style={styles.ovoFiturImage} source={require('../icon/pay.jpg')} />
        <Text style={{ alignSelf: 'center', marginTop: 5, }}>Pay</Text>
      </View>
      <View>
        <Image style={styles.ovoFiturImage} source={require('../icon/topup.jpg')} />
        <Text style={{ alignSelf: 'center', marginTop: 5, }}>Top Up</Text>
      </View>
      <View>
        <Image style={styles.ovoFiturImage} source={require('../icon/reward.jpg')} />
        <Text style={{ alignSelf: 'center', marginTop: 5, }}>Reward</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ovoFiturImage: {
    height: 45,
    width: 45,
    marginTop: 25,
    marginHorizontal: 18,
  },
})

export default OvoComponent