import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from "@/constants/Colors";

export default function Login() {
    return (
        <View>
            <Image source={require('../assets/images/login.jpeg')}
                   style={{
                       width: '100%',
                       height: 450
                   }}
            />
            <View style={styles.container}>
                <Text style={{
                    fontSize: 32,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center',
                    marginTop: 20
                }}>AI Travel Planner</Text>

                <Text style={{
                    fontSize: 22,
                    fontFamily: 'outfit-medium',
                    textAlign: 'center',
                    color: Colors.GRAY,
                    marginTop: 30
                }}>
                    Discover your next adventure effortlessly.Personalized itineraries at your fingertips,
                    Travel smarter with  AI-driven insights.
                </Text>

                <View style={styles.button}>
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontSize: 18,
                        fontFamily: 'outfit-medium',
                    }}>Sign In With Google</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop:-10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: '50%',
        padding: 25
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '20%'
    }
})

