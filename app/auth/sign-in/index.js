import {View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRouter} from "expo-router";
import {Colors} from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../Configs/FirebaseConfig";

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const onSignIn = () => {

        if (!email && !password) {
            ToastAndroid.show("Please Enter Email & Password", ToastAndroid.LONG)
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                router.replace('/mytrip');
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, error.Code);

                if (errorCode === 'auth/invalid-credential') {
                    ToastAndroid.show("Invalid credentials", ToastAndroid.LONG)
                }
                // ..
            });
    }

    return (
        <View style={{
            padding: 25,
            marginTop: 2,
            backgroundColor: Colors.WHITE,
            paddingTop: 80,
            height: '100%'
        }}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={30} color="black"/>
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                marginLeft: 20,
                marginTop: 20
            }}>Let's Sign You In</Text>

            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 28,
                color: Colors.GRAY,
                marginTop: 20,
                marginLeft: 20
            }}>Welcome Back</Text>

            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 28,
                color: Colors.GRAY,
                marginTop: 20,
                marginLeft: 20
            }}>You've been missed</Text>
            {/*------------------ Email-------------------*/}
            <View style={{
                marginTop: 50
            }}>
                <Text style={{
                    fontFamily: 'outfit-regular',
                    fontSize: 20
                }}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setEmail(value)}
                    placeholder='Enter Email'/>
            </View>
            {/*------------------ Password-------------------*/}
            <View style={{
                marginTop: 30
            }}>
                <Text style={{
                    fontFamily: 'outfit-regular',
                    fontSize: 20
                }}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(value) => setPassword(value)}
                    placeholder='Enter Password'/>
            </View>
            {/*------------------Sing In Button-------------------*/}
            <TouchableOpacity onPress={onSignIn}
                              style={{
                                  padding: 20,
                                  backgroundColor: Colors.Lime,
                                  borderRadius: 15,
                                  marginTop: 50
                              }}>
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: 'center',
                    fontSize: 20
                }}>Sing In</Text>
            </TouchableOpacity>
            {/*------------------Create Account Button-------------------*/}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    marginTop: 50,
                    borderWidth: 1
                }}>
                <Text style={{
                    color: Colors.PRIMARY,
                    textAlign: 'center',
                    fontSize: 20
                }}>Create Account</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.dark,
        fontFamily: 'outfit-regular'
    }
})
