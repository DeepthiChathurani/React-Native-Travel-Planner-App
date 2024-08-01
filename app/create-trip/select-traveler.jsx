import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRouter} from "expo-router";
import {Colors} from "../../constants/Colors";
import {FlatList} from "react-native-reanimated/lib/typescript/Animated";
import {SelectTravelersList} from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";

export default function SelectTraveler(){

    const navigation = useNavigation();
    const [selectedTraveler,setSelectedTraveler] = useState();
    const {tripData,setTripData} = useContext(CreateTripContext);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);

    useEffect(()=>{
       setTripData({...tripData,
           traveler:selectedTraveler
        })
    },[selectedTraveler]);

    useEffect(()=>{
       console.log(tripData)
    }, [tripData]);

    return(
        <View style={{
            padding:25,
            paddingTop:75,
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>
            <Text style={{
                fontSize:35,
                fontFamily:'outfit-bold',
                marginTop:20
            }}> Who's Traveling</Text>

            <View style={{
                marginTop:20
            }}>
                <Text style={{
                    fontSize:25,
                    fontFamily:'outfit-bold',
                }}>Choose your travelers</Text>

                <FlatList
                    data={SelectTravelersList}
                    renderItem={({item, index})=>(
                        <TouchableOpacity
                            onPress={()=>setSelectedTraveler(item)}
                            style={{
                            marginVertical:10
                        }}>
                            <OptionCard option={item}
                            selectedTraveler={selectedTraveler}
                            />
                        </TouchableOpacity>
                        )}
                            />
            </View>
            <TouchableOpacity style={{
                padding:15,
                backgroundColor:Colors.Black,
                borderRadius:15,
                marginTop:20
            }}>
                <Text style={{
                    fontSize:20,
                    fontFamily:'outfit-semiBold',
                    textAlign: 'center',
                    color:Colors.WHITE,

                }}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
