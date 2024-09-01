import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from "../../constants/Colors";
import {AI_PROMPT} from "../../constants/Options";
import {useRouter} from "expo-router";
import {auth, db} from "../../Configs/FirebaseConfig";
import {CreateTripContext} from "../../contex/CreateTripContext";

export default function GenerateTrip() {
    const {tripData, setTripData} = useContext(CreateTripContext);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const user = auth.currentUser;

    useEffect(() => {
         GenerateAITRip();
    }, []);
    const GenerateAITRip = async () => {
        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', tripData.locationInfo?.name)
            .replace('{totalDays}', tripData.totalNoOfDays)
            .replace('{totalNight}', tripData.totalNoOfDays - 1)
            .replace('{traveler}', tripData.traveler?.title)
            .replace('{budget}', tripData.budget)
            .replace('{totalDays}', tripData.totalNoOfDays)
            .replace('{totalNight}', tripData.totalNoOfDays - 1)
        ;
        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());

        const tripResp = JSON.parse(result.response.text());
        setLoading(false);
        const docId = (Date.now()).toString();
        const result_ = await setDoc(doc(db,"UserTrips",docId),{
            userEmail:user.email,
            tripPlan:tripResp,   //AI result
            tripData: JSON.stringify(tripData)  ,
            docId: docId// user selection data
        })
            // router.push('(tabs)/mytrip');

    }

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%'

        }}>
            <Text style={{
                fontSize: 35,
                fontFamily: 'outfit-bold',
                textAlign: 'center',
            }}>Please Wait...</Text>

            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-semiBold',
                textAlign: 'center',
                marginTop: 40
            }}>We are working to generate your dream trip.</Text>

            <Image source={require('./../../assets/images/plane.gif')}
                   style={{
                       width: '100%',
                       height: 200,
                       objectFit: 'contain'
                   }}/>
            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-semiBold',
                color: Colors.GRAY,
                textAlign: 'center'
            }}>Do not Go Back</Text>
        </View>
    )
}
