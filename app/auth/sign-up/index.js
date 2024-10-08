import {View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRouter,} from "expo-router";
import {Colors} from "../../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import {auth} from "../../../Configs/FirebaseConfig";
import {createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp(){
    const navigation = useNavigation();
    const router = useRouter();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [fullName,setFullName] = useState();


    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const OnCreateAccount=()=>{
        if( !email && !password && !fullName){
             ToastAndroid.show("Please enter all details.",ToastAndroid.LONG)
            return;
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
                console.log(errorMessage,errorCode);
                // ..
            });
    }

    return(
        <View style={{
            padding:25,
            paddingTop:50,
            backgroundColor:Colors.WHITE,
            height:'100%',
            marginTop:2
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
                <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:30,
                marginLeft:25,
                marginTop:15
            }}>Create New Account</Text>

            {/*------------------User Full Name-------------------*/}
            <View style={{
                marginTop: 35
            }}>
                <Text style={{
                    fontFamily: 'outfit-regular',
                    fontSize:20
                }}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Full Name'
                    onChangeText={(value)=>setFullName(value)}
                />
            </View>
            {/*------------------ Email-------------------*/}
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'outfit-regular',
                    fontSize:20
                }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email'
                    onChangeText={(value)=>setEmail(value)}
                />
            </View>
            {/*------------------ Password-------------------*/}
            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'outfit-regular',
                    fontSize:20
                }}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter Password'
                    onChangeText={(value)=>setPassword(value)}
                />
            </View>
            {/*------------------Create Account Button-------------------*/}
            <TouchableOpacity
                onPress={OnCreateAccount}
                style={{padding:20,
                    backgroundColor:Colors.PRIMARY,
                    borderRadius:15,
                    marginTop:50,
                    borderWidth:1
                }}>
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontSize:20
                }}>Create Account</Text>
            </TouchableOpacity>
            {/*------------------Sing In-------------------*/}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-in')}
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
                }}>Sing In</Text>
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
