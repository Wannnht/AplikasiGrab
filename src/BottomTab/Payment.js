import { View, Text, StyleSheet, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'
import FiturPay from '../../assets/component/FiturPay';
import FiturPayHider from '../../assets/component/FiturPayHider';

const Payment = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar Style="auto" />
      <View style={styles.hider}>
        <Image style={styles.bannerImage} source={require('../../assets/images/awan.jpg')} />
        <View style={styles.greetingText}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Pembayaran</Text>
          <View>
            <Text style={{ fontSize: 14, width: '80%', top: 15, color: '#575757' }} >Pembayaran harian fleksibel yang sederhana</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapperOvo}>
        <View style={styles.textOvo}>
          <Text style={{ fontSize: 14, color: '#383838', marginHorizontal: 25,}}>Aktifkan</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#383838', marginHorizontal: 25, }}>OVO Cash</Text>
          <View style={styles.imageOvo}>
            <Image style={styles.image} source={require('../../assets/icon/pariasi1.png')} />
          </View>
        </View>
      </View>
      <View style={styles.tambahkanKartu}>
        <View style={styles.dompet}>
          <Image style={styles.dompetImage} source={require('../../assets/icon/dompet.png')} />
          <View style={styles.textKartu}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Tambahkan Kartu</Text>
            <Text style={{ fontSize: 13, color: 'white' }}>Pembayaran nontunai dengan kartu kredit atau debit</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <View style={styles.buttonIsiUlang}>
          <View style={styles.isiUlang}>
            <Image style={styles.scannerImage} source={require('../../assets/icon/wallet.png')} />
            <Text style={{ fontSize: 14, marginTop: 10, color: '#383838', alignSelf: 'center' }}>Isi Ulang</Text>
          </View>
        </View>
        <View style={styles.buttonScan}>
          <View style={styles.scanner}>
            <Image style={styles.scannerImage} source={require('../../assets/icon/scanner.png')} />
            <Text style={{ fontSize: 14, color: '#383838', marginTop: 10, }}>Scan untuk Membayar</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
      <FiturPay />
      <View style={styles.divider}></View>
      <View style={{ height: 300, }}>
        <FiturPayHider />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerImage: {
    height: 220,
    width: "100%",
  },
  greetingText: {
    position: 'absolute',
    marginHorizontal: 25,
    top: 60,
    color: '#383838'
  },
  wrapperOvo: {
    marginHorizontal: 25,
    marginTop: -20,
    height: 220,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 15,
  },
  textOvo: {
    marginTop: 10,
  },
  imageOvo: {
    height: 100,
    width: '70%',
    marginTop: 50,
    marginTop: 103,
    marginRight: 20,
  },
  image: {
    height: 70,
    width: '100%',
  },
  tambahkanKartu: {
    marginHorizontal: 25,
    marginTop: 20,
    height: 60,
    backgroundColor: '#09AB54',
    borderRadius: 10,
  },
  textKartu: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  dompet: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dompetImage: {
    width: 25,
    height: 25,
    marginTop: 15,
  },
  button: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 25,
    gap: 10,
  },
  buttonIsiUlang: {
    width: '30%',
    marginTop: 20,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
  },
  isiUlang: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonScan: {
    marginTop: 20,
    width: '50%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
  },
  scanner: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  scannerImage: {
    height: 20,
    width: 20,
    marginTop: 10,
    marginRight: 10,
  },
  divider: {
    marginHorizontal: 25,
    top: 15,
    height: 1,
    backgroundColor: '#ededed',
    marginVertical: 15,
  },
});

export default Payment