import React from 'react'
import { View ,StyleSheet, Text} from "react-native";

export default function Heder() {
  return (
    <View style={style.header}>
        <Text style={style.title}>My Todos</Text>
    </View>
  )
}

const style = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral',
        
        
    },
    title:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff'

    }


})
