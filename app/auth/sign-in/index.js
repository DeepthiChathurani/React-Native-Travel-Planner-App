import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRouter} from "expo-router";
import {Colors} from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <View style={{
            padding: 25,
            marginTop:2,
            backgroundColor: Colors.WHITE,
            paddingTop: 80,
            height:'100%'
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
                <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                marginLeft:20,
                marginTop:20
            }}>Let's Sign You In</Text>

            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 28,
                color: Colors.GRAY,
                marginTop: 20,
                marginLeft:20
            }}>Welcome Back</Text>

            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 28,
                color: Colors.GRAY,
                marginTop: 20,
                marginLeft:20
            }}>You've been missed</Text>
            {/*------------------ Email-------------------*/}
            <View style={{
                marginTop: 50
            }}>
                <Text style={{
                    fontFamily: 'outfit-regular',
                    fontSize:20
                }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email'/>
            </View>
            {/*------------------ Password-------------------*/}
            <View style={{
                marginTop: 30
            }}>
                <Text style={{
                    fontFamily: 'outfit-regular',
                    fontSize:20
                }}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter Password'/>
            </View>
            {/*------------------Sing In Button-------------------*/}
            <View style={{
                padding:20,
                backgroundColor:Colors.Yellow,
                borderRadius:15,
                marginTop:50
            }}>
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontSize:20
                }}>Sing In</Text>
            </View>
            {/*------------------Create Account Button-------------------*/}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
                style={{padding:20,
                backgroundColor:Colors.WHITE,
                borderRadius:15,
                marginTop:50,
                borderWidth:1
            }}>
                <Text style={{
                    color:Colors.PRIMARY,
                    textAlign:'center',
                    fontSize:20
                }}>Create Account</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize:18,
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.dark,
        fontFamily: 'outfit-regular'
    }
})
