import './setImmediate';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import RoomDetail from './RoomDetail';
import UserDetail from './UserDetail';
import BookingHistoryScreen from './BookingHistoryScreen';
import ContactUsScreen from './ContactUsScreen';
import FAQScreen from './FAQScreen';
import TermsScreen from './TermsScreen';
import ProfileScreen from './profile';
// import RoomList from './RoomList';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: { backgroundColor: '#000' }, headerTintColor: '#FFD700' }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RoomDetail" component={RoomDetail} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* <Stack.Screen name="RoomList" component={RoomList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
