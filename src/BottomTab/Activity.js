import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

const Activity = () => {
  return (
    <View style={styles.container}>
      <StatusBar Style="auto" />
      <View style={styles.textAktivitas}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#383838' }}>Aktivitas</Text>
        <TouchableOpacity style={styles.navRiwayat}>
          <Image source={require('../../assets/icon/nav-riwayat.jpg')} />
        </TouchableOpacity>
      </View>
      <View style={styles.bukuRiwayat}>
        <Image style={{ height: 85, width: 200, top: '100%', }} source={require('../../assets/icon/buku-riwayat.png')} />
      </View>
      <View style={styles.textBuku}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#383838', alignSelf: 'center' }}>Lagi nggak ada apa-apa, nih</Text>
        <Text style={{ fontSize: 14, color: '#575757', alignSelf: 'center', marginTop: 10, }}>Di sini kamu bisa lihat layanan yang kamu pakai</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textAktivitas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 65,
  },
  bukuRiwayat: {
    marginTop: 180,
    alignSelf: 'center',
  },
  textBuku: {
    alignSelf: 'center',
    marginTop: 110,
  },
});

export default Activity