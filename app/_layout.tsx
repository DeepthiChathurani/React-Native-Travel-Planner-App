import {Stack} from "expo-router";
import {useFonts} from "expo-font";

export default function RootLayout() {

    useFonts({
        'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
        'outfit-regular': require('./../assets/fonts/Outfit-Regular.ttf'),
        'outfit-semiBold': require('./../assets/fonts/Outfit-SemiBold.ttf'),

    })

    return (
        <Stack screenOptions={{
            headerShown:false
        }}>
            {/*<Stack.Screen name="index" options={{*/}
            {/*    headerShown: false*/}
            {/*}}/>*/}
            <Stack.Screen name="(tabs)"/>
        </Stack>
    );
}
