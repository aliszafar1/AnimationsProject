import React from "react";
import {View, Text} from "react-native";

export default class HomeScreen extends React.Component{

    render(){
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}>
                <Text style={{fontSize: 20, color:"#91edf3"}}>Home Component</Text>
            </View>
        )
    }
}