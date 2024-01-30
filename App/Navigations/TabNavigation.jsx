import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreeen/ProfileScreen';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY
        }}

    >
        <Tab.Screen name='home' component={HomeScreen}
            options={{
                tabBarLabel:({color})=> (
                    <Text style={{color: color, fontSize:12, marginTop: -7}}>Home</Text>
                ),
                tabBarIcon:({color, size})=> (
                    <FontAwesome name="home" size={27} color={color} />
                )

            }}
        />
        <Tab.Screen name='booking' component={BookingScreen}
             options={{
                tabBarLabel:({color})=> (
                    <Text style={{color: color, fontSize:12, marginTop: -7}}>Booking</Text>
                ),
                tabBarIcon:({color, size})=> (
                    <FontAwesome name="bookmark" size={27} color={color} />
                )   

            }}
        />
        <Tab.Screen name='profile' component={ProfileScreen}
            options={{
                tabBarLabel:({color})=> (
                    <Text style={{color: color, fontSize:12, marginTop: -7}}>Profile</Text>
                ),
                tabBarIcon:({color, size})=> (
                    <FontAwesome name="user" size={24} color={color} />
                )   

            }}
        />
    </Tab.Navigator>
  )
}