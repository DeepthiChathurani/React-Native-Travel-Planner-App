import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRouter} from "expo-router";
import {CreateTripContext} from "../../contex/CreateTripContext";
import {Colors} from "../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from "moment";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ReviewTrip() {

    const navigation = useNavigation();
    const {tripData} = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, []);

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text style={{
                fontSize: 25,
                fontFamily: 'outfit-bold',
                marginTop: 20
            }}>Review Your Trip</Text>

            <View style={{
                marginTop: 20,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                }}>Before generating your trip , Please review your selection.</Text>

                {/*--------Destination Info--------*/}
                <View style={{
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <Ionicons name="location-sharp" size={34} color="black"/>

                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit-semiBold',
                            color: Colors.GRAY,
                        }}>Destination</Text>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'outfit-regular',
                        }}>{tripData?.locationInfo?.name}</Text>
                </View>

                {/*-------Data Selected Info--------*/}
                <View style={{
                    marginTop: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <Ionicons name="calendar-sharp" size={34} color="blue" />

                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-semiBold',
                        color: Colors.GRAY,
                    }}>Travel Date</Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-regular',
                    }}>{moment(tripData?.startDate).format('DD MM')+"To"+
                        moment(tripData.endDate).format('DD MM')+"  "}
                        ({tripData.totalNoOfDays}days)
                    </Text>
                </View>

                {/*-------Traveler Info--------*/}
                <View style={{
                    marginTop: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <Ionicons name="car-sharp" size={24} color="yellow" />

                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-semiBold',
                        color: Colors.GRAY,
                    }}>Who is traveling</Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-regular',
                    }}>
                        {tripData?.traveler?.title}
                    </Text>
                </View>

                {/*-------Budget Info--------*/}
                <View style={{
                    marginTop: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <FontAwesome name="money" size={34} color="green" />

                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-semiBold',
                        color: Colors.GRAY,
                    }}>Budget</Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-regular',
                    }}>
                        {tripData?.budget}
                    </Text>
                </View>

            </View>
            <TouchableOpacity
                onPress={()=>router.replace('/create-trip/generate-trip')}
                style={{
                    padding:15,
                    backgroundColor:Colors.Black,
                    borderRadius:15,
                    marginTop:50
                }}>
                <Text style={{
                    fontSize:20,
                    fontFamily:'outfit-semiBold',
                    textAlign: 'center',
                    color:Colors.WHITE,

                }}>Build My Trip</Text>

            </TouchableOpacity>

        </View>
    )
}
