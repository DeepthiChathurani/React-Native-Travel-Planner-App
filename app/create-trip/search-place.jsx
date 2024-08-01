import React, {useContext, useEffect} from 'react';
import { View} from "react-native";
import {Colors} from "../../constants/Colors";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useNavigation} from "expo-router";
import {CreateTripContext} from "@/contex/CreateTripContext";

export default function searchPlace(){

     const navigation = useNavigation();
     const {tripData,setTripData} = useContext(CreateTripContext);


     useEffect(()=>{
         navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
         })
    },[]);

     useEffect(()=>{
         console.log(tripData);
     }), [tripData]

    return(
        <View style={{
            padding:25,
            paddingTop:75,
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>


            <GooglePlacesAutocomplete
                placeholder='Search Place'
                fetchDetails={true}
                onFail={error => console.log(error)}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data.description);
                    // console.log(details?.geometry.location);
                    // console.log(details?.photoURL);
                    // console.log(details?.url);
                    setTripData({
                        locationInfo: {
                            name: data.description,
                            coordinates: details?.geometry.location,
                            photoRef: details?.photoURL,
                            url: details?.url,
                        }
                    });
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer:{
                        borderWidth:1,
                        borderRadius:5,
                        marginTop:25
                }
            }}
            />

        </View>
    )
}
