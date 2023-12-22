import { View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/BottomTab/Home';
import Activity from './src/BottomTab/Activity';
import Account from './src/BottomTab/Account';
import Inbox from './src/BottomTab/Inbox';
import Payment from './src/BottomTab/Payment';
// import Food from './src/BottomTab/Food';




const MaterialBottom = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

function TabNavigator() {
  return (
    <MaterialBottom.Navigator
      tabBarColor='white'
      shifting={false}
      initialRouteName='Home'
      activeColor='#09AB54'
      inactiveColor='#676767'
      barStyle={{ backgroundColor: 'white', borderWidth: .3, borderColor: 'lightgrey' }}
    >
      <MaterialBottom.Screen name='Home' component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (

            <View style={{ marginTop: -4 }}>
              {
                color = "#09AB54" ?
                  <Image source={require('./assets/icon/nav-home-active.jpg')} style={{ height: 30, width: 30 }} />
                  :
                  <Image source={require('./assets/icon/nav-home.jpg')} style={{ height: 30, width: 30 }} />
              }
            </View>
          )
        }}
      />
      <MaterialBottom.Screen name='Activity' component={Activity}
        options={{
          tabBarIcon: ({ color }) => (

            <View style={{ marginTop: -4 }}>
              {
                color = "#09AB54" ?
                  <Image source={require('./assets/icon/nav-activity-active.jpg')} style={{ height: 30, width: 30 }} />
                  :
                  <Image source={require('./assets/icon/nav-activity.jpg')} style={{ height: 30, width: 30 }} />
              }
            </View>
          )
        }} />
      <MaterialBottom.Screen name='Payment' component={Payment}
        options={{
          tabBarIcon: ({ color }) => (

            <View style={{ marginTop: -4 }}>
              {
                color = "#09AB54" ?
                  <Image source={require('./assets/icon/nav-payment-active.jpg')} style={{ height: 30, width: 30 }} />
                  :
                  <Image source={require('./assets/icon/nav-payment.jpg')} style={{ height: 30, width: 30 }} />
              }
            </View>
          )
        }} />
      <MaterialBottom.Screen name='Inbox' component={Inbox}
        options={{
          // tabBarBadge: 1,
          tabBarIcon: ({ color }) => (

            <View style={{ marginTop: -4 }}>
              {
                color = "#09AB54" ?
                  <Image source={require('./assets/icon/nav-inbox-active.jpg')} style={{ height: 30, width: 30 }} />
                  :
                  <Image source={require('./assets/icon/nav-inbox.jpg')} style={{ height: 30, width: 30 }} />
              }

            </View>
          )
        }} />
      <MaterialBottom.Screen name='Account' component={Account}
        options={{
          tabBarIcon: ({ color }) => (

            <View style={{ marginTop: -4 }}>
              {
                color = "#09AB54" ?
                  <Image source={require('./assets/icon/nav-account-active.jpg')} style={{ height: 30, width: 30 }} />
                  :
                  <Image source={require('./assets/icon/nav-account.jpg')} style={{ height: 30, width: 30 }} />
              }
            </View>
          )
        }} />
    </MaterialBottom.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>

  );
};