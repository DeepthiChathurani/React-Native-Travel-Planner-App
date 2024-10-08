import React, {useState} from 'react';
import {Text, View} from "react-native";
import {Colors} from "../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import {auth, db} from "../../Configs/FirebaseConfig";

export default function mytTrip(){

    const [userTrips,setUserTrips] = useState([]);
    const user = auth.currentUser
    const GetMyTrips=()=>{
        const q = query(collection(db,"UserTrip"),where('userEmail','==',user?.email))
    }

    return(
        <View style={{
            padding:25,
            paddingTop:55,
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}>
           <View style={{
              display:'flex',
               flexDirection:'row',
               alignContent:'center',
               justifyContent:'space-between'
           }}>
               <Text style={{
                   fontFamily:'outfit-bold',
                   fontSize:30
               }}>My Trip</Text>
               <Ionicons name="add-circle" size={45} color="black" />
           </View>

            {userTrips?.length===0?
            <StartNewTripCard/>: null
            }
        </View>
    )
}
