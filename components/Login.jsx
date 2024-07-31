import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from "@/constants/Colors";
import {useRouter} from "expo-router";

export default function Login() {

    const router = useRouter();

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
                    fontFamily: 'outfit-regular',
                    textAlign: 'center',
                    color: Colors.GRAY,
                    marginTop: 20
                }}>
                    Discover your next adventure effortlessly. Personalized itineraries at your fingertips,
                    Travel smarter with AI-driven insights.
                </Text>

                <TouchableOpacity style={styles.button}
                                  onPress={() => router.push("auth/sign-in")}
                >
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontSize: 18,
                        fontFamily: 'outfit-medium',
                    }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: '50%',
        padding: 25
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '18%'
    }
})

