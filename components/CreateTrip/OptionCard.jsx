import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from "../../constants/Colors";


export default function OptionCard({option,selectedOption}) {
    return(
        <View style={[{
            padding:20,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            backgroundColor:Colors.LIGHT_GRAY,
            borderRadius:15
        },selectedOption?.id===option?.id&&{borderWidth:2}]}>
            <View style={{

            }}>
                <Text style={{
                    fontSize:18,
                    fontFamily:'outfit-regular'
                }}>{option.title}</Text>
                <Text style={{
                    fontSize:15,
                    fontFamily:'outfit-regular',
                    color:Colors.GRAY
                }}>{option.desc}</Text>
            </View>
            <Text style={{
                fontSize:30,
            }}>{option.icon}</Text>
        </View>
    )
}
