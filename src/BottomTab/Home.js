import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import OvoComponent from '../../assets/component/OvoComponent';
import FiturUtama from '../../assets/component/FiturUtama';
import PromoItem from '../../assets/component/PromoItem';
import 'react-native-gesture-handler';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.bannerImage} source={require('../../assets/images/awan.jpg')} />
        <StatusBar Style="auto" />
        <Text style={styles.greetingText}>Selamat Datang</Text>
        <View style={styles.wrapperOvo}>
          <View style={styles.textOvo}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#383838' }}>Ovo Balance</Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#383838' }}>Rp. 200.000.000</Text>
          </View>
          <View style={styles.garisOvo}></View>
          <OvoComponent />
        </View>
        <View style={{ marginHorizontal: 18 }}>
          <FiturUtama />
        </View>
        <View style={styles.divider}></View>
        <PromoItem />
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    bannerImage: {
      height: 150,
      width: "100%",
    },
    greetingText: {
      fontSize: 17,
      fontWeight: 'bold',
      position: 'absolute',
      alignSelf: 'center',
      top: 50,
      color: '#383838'
    },
    wrapperOvo: {
      marginHorizontal: 18,
      marginTop: -60,
      height: 150,
      backgroundColor: 'white',
      elevation: 4,
      borderRadius: 10
    },
    textOvo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      marginTop: 10,
    },
    garisOvo: {
      height: .8,
      backgroundColor: '#adadad',
      marginTop: 10,
    },
    divider: {
      width: '100%',
      height: 15,
      backgroundColor: '#ededed',
      marginVertical: 15,
    },
  });


export default Home