import React from 'react';
import { Text,View,StyleSheet } from 'react-native'

export default class MyGoldTab extends React.Component{
    render(){
        return(
            <View style = {style.PageStyle}>
                <Text style = {style.TextStle} > My Gold Stock with total prices</Text>
            </View>

        );
    }
}


var style = StyleSheet.create({
    PageStyle:{
        flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor : 'white'
    },
    TextStle:{
        fontSize : 20
    }
})
