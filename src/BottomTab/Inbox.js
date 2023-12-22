import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, } from 'react-native';


const Inbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Implement header elements here */}
        <Text style={styles.headerText}>Kotak Masuk</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notifButton}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#383838', textAlign: 'center' }}>Notifikasi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orang}>
        <Image style={{ height: 220, width: 220, }} source={require('../../assets/icon/manusia-inbox.png')} />
      </View>
      <View style={styles.textInbox}>
        <Text style={{ fontSize: 20, fontWeight: 'bold',textAlign: 'center', color: '#383838', alignSelf: 'center' }}>Temukan chat kamu dengan staf layanan pelanggan kami di sini!</Text>
        <View>
          <Text style={{ fontSize: 15, color: '#575757', alignSelf: 'center', marginTop: 10, width: '70%', textAlign:'center', }}>Kamu juga bisa mendapatkan bantuan dari mereka melalui
            <Text style={{ color: '#09AB54', fontWeight: 'bold', }}> Pusat Bantuan</Text> kami.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 60,
    alignSelf: 'flex-start',
    marginHorizontal: 30,

  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  button: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 10,
  },
  chatButton: {
    backgroundColor: '#006400',
    padding: 10,
    borderRadius: 50,
    width: '49%',
    height: 40,
  },
  notifButton: {
    backgroundColor: '#B0E0E6',
    padding: 10,
    borderRadius: 50,
    width: '49%',
    height: 40,
  },
  orang: {
    marginTop: 130,
    alignSelf: 'center',
  },
  textInbox: {
    marginRight: 10,
    alignSelf: 'center',
    width: '100%',
    marginHorizontal: '10',
  }
});


export default Inbox