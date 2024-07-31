import {Text, View} from "react-native";
import React from 'react';
import {Tabs} from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from "../../constants/Colors";


export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.Black
        }}>
            <Tabs.Screen name="mytrip"
                         options={{
                             tabBarLabel: 'My Trip',
                             tabBarLabelStyle:{fontSize:15,fontFamily:'outfit-bold'},
                             tabBarIcon: ({color}) =>
                                 <Ionicons name="location-sharp" size={30} color={color}/>
                         }}
            />
            <Tabs.Screen name="discover"
                         options={{
                             tabBarLabel: 'Discover',
                             tabBarLabelStyle:{fontSize:15,fontFamily:'outfit-bold'},
                             tabBarIcon: ({color}) =>
                                 <Ionicons name="globe-sharp" size={30} color={color} />
                         }}
            />
            <Tabs.Screen name="profile"
                         options={{
                             tabBarLabel: 'Profile',
                             tabBarLabelStyle:{fontSize:15,fontFamily:'outfit-bold'},
                             tabBarIcon:({color})=>
                                 <Ionicons name="people-circle" size={30} color={color} />
                         }}
            />
        </Tabs>
    )
}
