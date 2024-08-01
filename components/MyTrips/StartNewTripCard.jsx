import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from "../../constants/Colors";

export default function StartNewTripCard() {
    return (
        <View style={{
            padding: 20,
            marginTop: 50,
            display: 'flex',
            alignItems: 'center',
            gap: 20
        }}>
            <Ionicons name="location-sharp" size={32} color="black"/>
            <Text style={{
                fontSize: 27,
                fontFamily: 'outfit-regular',
                marginTop: 15,
                color: Colors.PRIMARY,
            }}> No trips planned yet</Text>

            <Text style={{
                fontSize: 20,
                fontFamily: 'outfit-regular',
                textAlign: 'center',
                color: Colors.GRAY
            }}> Looks like its time to plan a new travel experience!
                Get started below.
            </Text>

            <TouchableOpacity style={{
                padding: 10,
                backgroundColor: Colors.ORANGE,
                borderRadius: 20,
                paddingHorizontal: 25,
                marginTop: 20
            }}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center',
                    fontFamily: 'outfit-semiBold',
                    fontSize: 22
                }}>Start a new trip</Text>
            </TouchableOpacity>
        </View>
    )

}
