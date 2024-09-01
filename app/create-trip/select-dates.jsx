import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid,} from 'react-native';
import { useNavigation, useRouter} from "expo-router";
import {Colors} from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import {CreateTripContext} from "../../contex/CreateTripContext";


export default function SelectDates() {

    const navigation = useNavigation();
    const [startDate,setStartDate] = useState();
    const [endDate,setEndDate] = useState();
    const {tripData,setTripData}=useContext(CreateTripContext);
    const router = useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);

    const onDateChange=(date,type)=>{
        console.log(date,type);
        if(type==='START_DATE'){
           setStartDate(moment(date));
        }else{
            setEndDate(moment(date));
        }
    }
    const OnDateSelectionContinue=()=>{
        if(!startDate&&!endDate){
            ToastAndroid.show('Please select Start and End Date',ToastAndroid.LONG);
            return ;
        }
        const totalNoOfDays = endDate.diff(startDate,'days');
        console.log(totalNoOfDays+1);
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1
        });
        router.push('/create-trip/select-budget');
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
             marginTop:20
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
