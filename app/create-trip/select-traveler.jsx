import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Link, useNavigation} from "expo-router";
import {Colors} from "../../constants/Colors";
import {SelectTravelersList} from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import {CreateTripContext} from "../../contex/CreateTripContext";

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
       setTripData({
           ...tripData,
           traveler:selectedTraveler
        })
    },[selectedTraveler]);

    useEffect(()=>{
       console.log(tripData)
    }, [tripData]);

    return(
        <View style={{
            padding:15,
            paddingTop:75,
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>
            <Text style={{
                fontSize:32,
                fontFamily:'outfit-bold',
                marginLeft:45,
                marginTop:-22
            }}> Who's Traveling</Text>

            <View style={{
                marginTop:5
            }}>
                <Text style={{
                    fontSize:22,
                    fontFamily:'outfit-bold',
                }}>Choose your travelers</Text>

                <FlatList
                    data={SelectTravelersList}
                    renderItem={({item})=>(
                        <TouchableOpacity
                            onPress={()=>setSelectedTraveler(item)}
                            style={{
                            marginVertical:10
                        }}>
                            <OptionCard option={item}
                            selectedOption={selectedTraveler}
                            />
                        </TouchableOpacity>
                        )}
                            />
            </View>


            <TouchableOpacity
                style={{
                padding:5,
                backgroundColor:Colors.Black,
                borderRadius:15,
                marginTop:5
            }}>
                <Link href={'/create-trip/select-dates'}
                      style={{
                          width:'100%',
                          textAlign:'center',
                      }}>
                <Text style={{
                    fontSize:18,
                    fontFamily:'outfit-semiBold',
                    textAlign: 'center',
                    color:Colors.WHITE,

                }}>Continue</Text>
                </Link>
            </TouchableOpacity>

        </View>
    )
}
