import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import PromoItemSub from "./PromoItemSub";


const PromoItem = () => {
    return (
        <View style={{ marginHorizontal: 18, width: '100%', flexWrap: 'wrap', flexDirection: 'row' }}>
            <PromoItemSub image={{
                uri: 'https://assets-pergikuliner.com/4o-dKncqKNS6QQbFDqM52WkrK0o=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/12013/picture-1537766225.jpeg'
            }}
                text='Nasi Padang'
                diskon='Diskon 50%'
                masaBerlaku='Until 31 Feb'
            />
            <PromoItemSub image={{
                uri: 'https://www.sasa.co.id/medias/page_medias/cara_bikin_sate_ayam_empuk.jpg'
            }}
                text='Sate Madura'
                masaBerlaku='Until 31 Feb'
            />
            <PromoItemSub image={{
                uri: 'https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg'
            }}
                text='Ayam Geprek'
                diskon='Diskon 50%'
                masaBerlaku='Until 31 Feb'
            />
            <PromoItemSub image={{
                uri: 'https://ik.imagekit.io/waters2021/sehataqua/uploads/20230807082627_original.webp?tr=f-auto'
            }}
                text='Nasi Tumpeng'
                diskon='Diskon 60%'
                masaBerlaku='Until 31 Feb'
            />
        </View>
    );
};
const styles = StyleSheet.create({
    // wrapperFiturUtama: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: 15,
    //     flexWrap: 'wrap',
    //     width: '100%'
    // },
})

export default PromoItem