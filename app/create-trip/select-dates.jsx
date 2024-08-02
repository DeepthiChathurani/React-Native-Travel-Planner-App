import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid,} from 'react-native';
import {Link, useNavigation} from "expo-router";
import {Colors} from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";

export default function SelectDates() {

    const navigation = useNavigation();
    const [startDate,setStartDate] = useState();
    const [endDate,setEndDate] = useState();


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    const onDateChange=(date,type)=>{
        console.log(sate,type);
        if(type==='START_DATE'){
           setStartDate(moment(date));
        }else{
            setEndDate(moment(data));
        }
    }
    const OnDateSelectionContinue=()=>{
        if(!startDate&& !endDate){
            ToastAndroid.show('Please select Start and End Date',ToastAndroid.LONG);
            return ;
        }
        const totalNoOfDays=endDate.diff(startDate,'days');
        console.log(totalNoOfDays+1);
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1
        });
    }
 return(
     <View style={{
         padding:25,
         paddingTop:75,
         backgroundColor:Colors.WHITE,
         height:'100%'
     }}>
         <Text style={{
             fontFamily:'outfit-bold',
             fontSize:35,
             marginTop:20
         }}>Travel Dates</Text>

         <View style={{
             marginTop:30
         }}>
             <CalendarPicker
                 onDateChange={onDateChange}
                 allowRangeSelection={true}
                 miniDate={new Date()}
                 maxRangeDuration={5}
                 selectedRangeStyle={{
                     backgroundColor:Colors.Black
                 }}
                 selectedDayTextStyle={{
                     color:Colors.WHITE
                 }}
             />
         </View>

         <TouchableOpacity
             onPress={OnDateSelectionContinue}
             style={{
                 padding:15,
                 backgroundColor:Colors.Black,
                 borderRadius:15,
                 marginTop:40
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
