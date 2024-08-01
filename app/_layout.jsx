import {Stack} from "expo-router";
import {useFonts} from "expo-font";
import {CreateTripContext} from "@/contex/CreateTripContext";
import React, {useState} from "react";

export default function RootLayout() {

    useFonts({
        'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
        'outfit-regular': require('./../assets/fonts/Outfit-Regular.ttf'),
        'outfit-semiBold': require('./../assets/fonts/Outfit-SemiBold.ttf'),

    })

    const [tripData, setTripData] = useState([]);
    return (
        <CreateTripContext.Provider value={{tripData, setTripData}}>
            <Stack screenOptions={{
                headerShown: false
            }}>
                {/*<Stack.Screen name="index" options={{*/}
                {/*    headerShown: false*/}
                {/*}}/>*/}
                <Stack.Screen name="(tabs)"/>
            </Stack>
        </CreateTripContext.Provider>

    );
}
