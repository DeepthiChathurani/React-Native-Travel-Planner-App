import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, ToastAndroid} from 'react-native';
import {useNavigation, useRouter} from "expo-router";
import {SelectBudgetOptions} from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import {Colors} from "../../constants/Colors";
import {CreateTripContext} from "../../contex/CreateTripContext";

export default function selectBudget(){
    const navigation = useNavigation();
    const [selectedOption,setSelectedOption] = useState();
    const {tripData,setTripData} = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
             headerTitle:''
        })
    },[]);
    useEffect(()=>{
        selectedOption && setTripData({
            ...tripData,
            budget:selectedOption?.title
        })
    },[selectedOption]);

    const onClickContinue = ()=>{
        if(!selectedOption){
            ToastAndroid.show('Select Your Budget.',ToastAndroid.LONG);

            return ;
        }
        router.push('/create-trip/review-trip');
    }

    return(
        <View style={{
            padding:25,
            paddingTop:75,
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>
            <Text style={{
                fontSize:30,
                fontFamily:'outfit-bold',
                marginTop:5,
                marginLeft:35
            }}> Budget</Text>

            <View style={{
              marginTop:10
            }}>
                <Text style={{
                    fontFamily:'outfit-bold',
                    fontSize:25,

                }}>Choose spending habits foe your trip.</Text>

                <FlatList
                data={SelectBudgetOptions}
                renderItem={({item, index})=>(
                    <TouchableOpacity
                        onPress={()=>setSelectedOption(item)}
                        style={{
                        marginVertical:10
                    }}>
                        <OptionCard option={item}
                        selectedOption={selectedOption}
                        />
                    </TouchableOpacity>
                )}
                />
            </View>
            <TouchableOpacity
                onPress={()=>onClickContinue()}
                style={{
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
